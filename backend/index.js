const express = require('express');
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize');

const app = express();
app.use(cors());
app.use(express.json());

// Conexión a PostgreSQL
const sequelize = new Sequelize('HotelesOasis', 'postgres', '2599', {
  host: 'localhost',
  dialect: 'postgres'
});

// 🔁 Función para renombrar tablas si están con mayúscula
async function renombrarTablas() {
  try {
    await sequelize.query(`ALTER TABLE "Sedes" RENAME TO sedes`);
    await sequelize.query(`ALTER TABLE "Habitaciones" RENAME TO habitaciones`);
    await sequelize.query(`ALTER TABLE "Disponibilidad" RENAME TO disponibilidad`);
    await sequelize.query(`ALTER TABLE "Tarifas" RENAME TO tarifas`);
    console.log("✅ Tablas renombradas exitosamente");
  } catch (error) {
    console.warn("⚠️ Posiblemente las tablas ya estaban renombradas:", error.message);
  }
}

// MODELOS

const Sede = sequelize.define('Sede', {
  nombre: DataTypes.STRING,
  ciudad: DataTypes.STRING
}, { tableName: 'sedes', timestamps: false });

const Habitacion = sequelize.define('Habitacion', {
  sedeId: DataTypes.INTEGER,
  tipo: DataTypes.STRING,
  capacidadMaxima: DataTypes.INTEGER
}, { tableName: 'habitaciones', timestamps: false });

const Disponibilidad = sequelize.define('Disponibilidad', {
  habitacionId: DataTypes.INTEGER,
  fecha: DataTypes.DATEONLY,
  disponible: DataTypes.BOOLEAN
}, { tableName: 'disponibilidad', timestamps: false });

const Tarifa = sequelize.define('Tarifa', {
  sedeId: DataTypes.INTEGER,
  tipoHabitacion: DataTypes.STRING,
  temporada: DataTypes.STRING,
  precioPorPersona: DataTypes.DECIMAL
}, { tableName: 'tarifas', timestamps: false });

// RELACIONES
Habitacion.belongsTo(Sede, { foreignKey: 'sedeId' });
Sede.hasMany(Habitacion, { foreignKey: 'sedeId' });

Disponibilidad.belongsTo(Habitacion, { foreignKey: 'habitacionId' });
Habitacion.hasMany(Disponibilidad, { foreignKey: 'habitacionId' });

Tarifa.belongsTo(Sede, { foreignKey: 'sedeId' });
Sede.hasMany(Tarifa, { foreignKey: 'sedeId' });

// RUTAS

app.get('/', (req, res) => {
  res.send('✅ API de HotelesOasis funcionando');
});

// 📍 SEDES

app.get('/sedes', async (req, res) => {
  try {
    const sedes = await Sede.findAll();
    res.json(sedes);
  } catch (err) {
    res.status(500).json({ error: 'Error listando sedes' });
  }
});

app.post('/sedes', async (req, res) => {
  try {
    const data = req.body;
    const sedes = Array.isArray(data)
      ? await Sede.bulkCreate(data)
      : await Sede.create(data);
    res.json(sedes);
  } catch (err) {
    console.error("❌ Error al crear sede(s):", err);
    res.status(500).json({ error: err.message || 'Error creando sede(s)' });
  }
});

// 🛏️ HABITACIONES

app.get('/habitaciones', async (req, res) => {
  try {
    const habitaciones = await Habitacion.findAll({ include: Sede });
    res.json(habitaciones);
  } catch (err) {
    res.status(500).json({ error: 'Error listando habitaciones' });
  }
});

app.post('/habitaciones', async (req, res) => {
  try {
    const { sedeId, tipo, capacidadMaxima } = req.body;
    const habitacion = await Habitacion.create({ sedeId, tipo, capacidadMaxima });
    res.json(habitacion);
  } catch (err) {
    res.status(500).json({ error: 'Error creando habitación' });
  }
});

// 📅 DISPONIBILIDAD

app.get('/disponibilidad', async (req, res) => {
  try {
    const { sede, fecha } = req.query;
    const habitaciones = await Habitacion.findAll({
      include: [{ model: Sede, where: { nombre: sede } }]
    });

    const disponibles = [];

    for (let h of habitaciones) {
      const ocupada = await Disponibilidad.findOne({
        where: { habitacionId: h.id, fecha, disponible: false }
      });
      if (!ocupada) disponibles.push(h);
    }

    res.json(disponibles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error consultando disponibilidad' });
  }
});

app.post('/disponibilidad', async (req, res) => {
  try {
    const { habitacionId, fecha, disponible } = req.body;
    const registro = await Disponibilidad.create({ habitacionId, fecha, disponible });
    res.json(registro);
  } catch (err) {
    res.status(500).json({ error: 'Error creando disponibilidad' });
  }
});

// 💵 TARIFAS

app.get('/tarifas', async (req, res) => {
  try {
    const tarifas = await Tarifa.findAll({ include: Sede });
    res.json(tarifas);
  } catch (err) {
    res.status(500).json({ error: 'Error listando tarifas' });
  }
});

app.post('/tarifas', async (req, res) => {
  try {
    const { sedeId, tipoHabitacion, temporada, precioPorPersona } = req.body;
    const tarifa = await Tarifa.create({ sedeId, tipoHabitacion, temporada, precioPorPersona });
    res.json(tarifa);
  } catch (err) {
    res.status(500).json({ error: 'Error creando tarifa' });
  }
});

app.get('/tarifa/estimada', async (req, res) => {
  const { sedeId, tipoHabitacion, temporada, personas } = req.query;

  try {
    const tarifa = await Tarifa.findOne({
      where: {
        sedeId,
        tipoHabitacion,
        temporada
      }
    });

    if (!tarifa) return res.status(404).json({ error: 'Tarifa no encontrada' });

    const total = tarifa.precioPorPersona * parseInt(personas);
    res.json({ total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al calcular tarifa' });
  }
});

// ARRANQUE FINAL

const PORT = 3001;

renombrarTablas().then(() => {
  sequelize.sync().then(() => {
    console.log("📦 Tablas sincronizadas con la base de datos");
    app.listen(PORT, () => {
      console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
    });
  });
});
