require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: process.env.DB_DIALECT || 'sqlite',
  storage: process.env.DB_NAME || 'hoteles_oasis.db',
  logging: false
});

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

module.exports = { sequelize, Sede, Habitacion, Disponibilidad, Tarifa };

