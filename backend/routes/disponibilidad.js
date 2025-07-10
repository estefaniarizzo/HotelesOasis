
const express = require("express");
const router = express.Router();
const { Disponibilidad, Habitacion, Sede } = require("../models");

// 📅 DISPONIBILIDAD

router.get("/", async (req, res) => {
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
    res.status(500).json({ error: `Error consultando disponibilidad: ${err.message}` });
  }
});

router.post("/", async (req, res) => {
  try {
    const { habitacionId, fecha, disponible } = req.body;
    const registro = await Disponibilidad.create({ habitacionId, fecha, disponible });
    res.json(registro);
  } catch (err) {
    res.status(500).json({ error: `Error creando disponibilidad: ${err.message}` });
  }
});

module.exports = router;

// Rutas para la gestión de disponibilidad.
// GET /disponibilidad: Consulta la disponibilidad de habitaciones para una sede y fecha específicas.
// POST /disponibilidad: Registra la disponibilidad de una habitación para una fecha..


