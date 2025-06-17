'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Disponibilidad = sequelize.define('Disponibilidad', {
    habitacionId: DataTypes.INTEGER,
    fecha: DataTypes.DATEONLY,
    disponible: DataTypes.BOOLEAN
  }, {
    tableName: 'disponibilidad',
    timestamps: true
  });

  Disponibilidad.associate = models => {
    Disponibilidad.belongsTo(models.Habitacion, { foreignKey: 'habitacionId' });
  };

  return Disponibilidad;
};
