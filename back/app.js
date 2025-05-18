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

// Rutas (se agregan después)
app.get('/', (req, res) => {
  res.send('Servidor funcionando 🚀');
});

//routes
app.use('/api/donantes', donantesRoutes);
app.use('/api/solicitudes', solicitudesRoutes);

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
