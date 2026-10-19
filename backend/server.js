const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Endpoint 1: estado del API
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'El API está funcionando correctamente',
  });
});

// Endpoint 2: información del equipo
app.get('/api/info', (req, res) => {
  res.json({
    status: 'ok',
    message: 'El API está funcionando',
    integrantes: [
      { nombre: 'Daniel Alexander Espinal Echegoyen', edad: 21, carrera: 'Ingeniería en Sistemas', materiasAprobadas: 87},
      { nombre: 'Adriana Paola Mejia Mendez', edad: 22, carrera: 'Ingeniería en Sistemas', materiasAprobadas: 67 },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`API escuchando en http://localhost:${PORT}`);
});