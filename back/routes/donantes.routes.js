const express = require('express');
const router = express.Router();
const { crearDonante, obtenerDonantes } = require('../controllers/donantes.controller');

router.get('/', obtenerDonantes);
router.post('/', crearDonante);

module.exports = router;
