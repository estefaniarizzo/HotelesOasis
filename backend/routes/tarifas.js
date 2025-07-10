
const express = require("express");
const router = express.Router();
const { Tarifa, Sede } = require("../models");

// 💵 TARIFAS

router.get("/", async (req, res) => {
  try {
    const tarifas = await Tarifa.findAll({ include: Sede });
    res.json(tarifas);
  } catch (err) {
    res.status(500).json({ error: `Error listando tarifas: ${err.message}` });
  }
});

router.post("/", async (req, res) => {
  try {
    const { sedeId, tipoHabitacion, temporada, precioPorPersona } = req.body;
    const tarifa = await Tarifa.create({ sedeId, tipoHabitacion, temporada, precioPorPersona });
    res.json(tarifa);
  } catch (err) {
    res.status(500).json({ error: `Error creando tarifa: ${err.message}` });
  }
});

router.get("/estimada", async (req, res) => {
  const { sedeId, tipoHabitacion, temporada, personas } = req.query;

  try {
    const tarifa = await Tarifa.findOne({
      where: {
        sedeId,
        tipoHabitacion,
        temporada
      }
    });

    if (!tarifa) return res.status(404).json({ error: "Tarifa no encontrada" });

    const total = tarifa.precioPorPersona * parseInt(personas);
    res.json({ total });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Error al calcular tarifa: ${error.message}` });
  }
});

module.exports = router;

// Rutas para la gestión de tarifas.
// GET /tarifas: Obtiene todas las tarifas, incluyendo la sede a la que pertenecen.
// POST /tarifas: Crea una nueva tarifa.
// GET /tarifa/estimada: Calcula la tarifa estimada para una sede, tipo de habitación, temporada y número de personas..


