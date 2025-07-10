const express = require('express');
const cors = require('cors');

const sedesRouter = require('./routes/sedes');
const habitacionesRouter = require('./routes/habitaciones');
const disponibilidadRouter = require('./routes/disponibilidad');
const tarifasRouter = require('./routes/tarifas');

const app = express();
app.use(cors());
app.use(express.json());

app.use("/sedes", sedesRouter);
app.use("/habitaciones", habitacionesRouter);
app.use("/disponibilidad", disponibilidadRouter);
app.use("/tarifas", tarifasRouter);

// RUTAS

app.get('/', (req, res) => {
  res.send('✅ API de HotelesOasis funcionando');
});

module.exports = { app };

