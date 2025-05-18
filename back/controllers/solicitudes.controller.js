const Solicitud = require('../models/solicitudes.model');

const obtenerSolicitudes = async (req, res) => {
  const solicitudes = await Solicitud.obtenerTodas();
  res.json(solicitudes);
};

const crearSolicitud = async (req, res) => {
  const nuevaSolicitud = req.body;
  await Solicitud.guardar(nuevaSolicitud);
  res.status(201).json({ mensaje: 'Solicitud registrada exitosamente' });
};

module.exports = {
  obtenerSolicitudes,
  crearSolicitud,
};
