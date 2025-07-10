
const express = require("express");
const router = express.Router();
const { Habitacion, Sede } = require("../models");

// 🛏️ HABITACIONES

router.get("/", async (req, res) => {
  try {
    const habitaciones = await Habitacion.findAll({ include: Sede });
    res.json(habitaciones);
  } catch (err) {
    res.status(500).json({ error: `Error listando habitaciones: ${err.message}` });
  }
});

router.post("/", async (req, res) => {
  try {
    const { sedeId, tipo, capacidadMaxima } = req.body;
    if (!sedeId || !tipo || !capacidadMaxima) {
      return res.status(400).json({ error: "Faltan campos requeridos para crear habitación: sedeId, tipo, capacidadMaxima." });
    }
    const habitacion = await Habitacion.create({ sedeId, tipo, capacidadMaxima });
    res.json(habitacion);
  } catch (err) {
    res.status(500).json({ error: `Error creando habitación: ${err.message}` });
  }
});

module.exports = router;

// Rutas para la gestión de habitaciones.
// GET /habitaciones: Obtiene todas las habitaciones, incluyendo la sede a la que pertenecen.
// POST /habitaciones: Crea una nueva habitación..


