'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Habitacion = sequelize.define('Habitacion', {
    sedeId: DataTypes.INTEGER,
    tipo: DataTypes.STRING,
    capacidadMaxima: DataTypes.INTEGER
  }, {
    tableName: 'habitaciones',
    timestamps: true
  });

  Habitacion.associate = models => {
    Habitacion.belongsTo(models.Sede, { foreignKey: 'sedeId' });
    Habitacion.hasMany(models.Disponibilidad, { foreignKey: 'habitacionId' });
  };

  return Habitacion;
};
