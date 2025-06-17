'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Sede = sequelize.define('Sede', {
    nombre: DataTypes.STRING,
    ciudad: DataTypes.STRING
  }, {
    tableName: 'Sedes',
    timestamps: true
  });

  Sede.associate = models => {
    Sede.hasMany(models.Habitacion, { foreignKey: 'sedeId' });
    Sede.hasMany(models.Tarifa, { foreignKey: 'sedeId' });
  };

  return Sede;
};
