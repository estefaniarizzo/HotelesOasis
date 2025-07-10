const express = require("express");
const router = express.Router();
const { Sede } = require("../models");

// 📍 SEDES

router.get("/", async (req, res) => {
  try {
    const sedes = await Sede.findAll();
    res.json(sedes);
  } catch (err) {
    res.status(500).json({ error: `Error listando sedes: ${err.message}` });
  }
});

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return res.status(400).json({ error: "Datos de sede inválidos o vacíos." });
    }
    const sedes = Array.isArray(data)
      ? await Sede.bulkCreate(data)
      : await Sede.create(data);
    res.json(sedes);
  } catch (err) {
    console.error("❌ Error al crear sede(s):", err);
    res.status(500).json({ error: `Error creando sede(s): ${err.message}` });
  }
});

module.exports = router;

// Rutas para la gestión de sedes.
// GET /sedes: Obtiene todas las sedes.
// POST /sedes: Crea una o varias sedes.es.


