// back/app.js
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const donantesRoutes = require('./routes/donantes.routes');
const solicitudesRoutes = require('./routes/solicitudes.routes');
const pool = require('./data/config');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());

// Rutas
app.get('/back', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

//TEST DE CONEXIÓN A LA BASE DE DATOS
// Este endpoint es solo para verificar la conexión a la base de datos
app.use('/api/test-db', require('./data/probarconexion'));


//routes
app.use('/api/donantes', donantesRoutes);
app.use('/api/solicitudes', solicitudesRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});

module.exports = app;