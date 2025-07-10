const { sequelize, Sede, Habitacion, Disponibilidad, Tarifa } = require("./models");
const { app } = require("./index");

const PORT = 3001;

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a la base de datos establecida correctamente.");

    await sequelize.sync({ force: true }); // force: true recrea las tablas
    console.log("📦 Tablas sincronizadas con la base de datos");

    // Insertar datos de prueba
    await insertSampleData();

  } catch (error) {
    console.error("❌ Error al inicializar la base de datos:", error);
  }
};

const insertSampleData = async () => {
  try {
    // Crear sedes
    const sede1 = await Sede.create({ nombre: 'Barranquilla', ciudad: 'Barranquilla' });
    const sede2 = await Sede.create({ nombre: 'Cali', ciudad: 'Cali' });
    
    // Crear habitaciones
    const hab1 = await Habitacion.create({ sedeId: sede1.id, tipo: 'standard', capacidadMaxima: 2 });
    const hab2 = await Habitacion.create({ sedeId: sede1.id, tipo: 'premium', capacidadMaxima: 4 });
    const hab3 = await Habitacion.create({ sedeId: sede2.id, tipo: 'vip', capacidadMaxima: 6 });
    
    // Crear tarifas
    await Tarifa.create({ sedeId: sede1.id, tipoHabitacion: 'standard', temporada: 'alta', precioPorPersona: 50000 });
    await Tarifa.create({ sedeId: sede1.id, tipoHabitacion: 'premium', temporada: 'alta', precioPorPersona: 80000 });
    await Tarifa.create({ sedeId: sede2.id, tipoHabitacion: 'vip', temporada: 'alta', precioPorPersona: 120000 });
    
    console.log("✅ Datos de prueba insertados correctamente");
  } catch (error) {
    console.error("❌ Error al insertar datos de prueba:", error);
  }
};

initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor backend corriendo en http://localhost:${PORT}`);
  });
});


