'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Tarifa = sequelize.define('Tarifa', {
    sedeId: DataTypes.INTEGER,
    tipoHabitacion: DataTypes.STRING,
    temporada: DataTypes.STRING,
    precioPorPersona: DataTypes.DECIMAL
  }, {
    tableName: 'tarifas',
    timestamps: true
  });

  Tarifa.associate = models => {
    Tarifa.belongsTo(models.Sede, { foreignKey: 'sedeId' });
  };

  return Tarifa;
};
