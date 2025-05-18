const express = require('express');
const router = express.Router();
const { crearSolicitud, obtenerSolicitudes } = require('../controllers/solicitudes.controller');

router.get('/', obtenerSolicitudes);
router.post('/', crearSolicitud);

module.exports = router;
