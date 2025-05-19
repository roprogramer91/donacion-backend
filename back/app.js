// back/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const donantesRoutes = require('./routes/donantes.routes');
const solicitudesRoutes = require('./routes/solicitudes.routes');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Rutas
app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

//TEST DE CONEXIÓN A LA BASE DE DATOS
// Este endpoint es solo para verificar la conexión a la base de datos
app.get('/api/test-db', async (req, res) => {
  try {
    const [rows] = await require('./data/config').query('SELECT 1 + 1 AS resultado');
    res.json({ mensaje: 'Conexión exitosa ✅', resultado: rows[0].resultado });
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error);
    res.status(500).json({ error: 'No se pudo conectar a la base de datos' });
  }
});


//routes
app.use('/api/donantes', donantesRoutes);
app.use('/api/solicitudes', solicitudesRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;