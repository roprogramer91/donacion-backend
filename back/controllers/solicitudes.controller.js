const Solicitud = require('../models/solicitudes.model');

const obtenerSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.obtenerTodas();
    res.json(solicitudes);
  } catch (error) {
    console.error('Error al obtener solicitudes:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const crearSolicitud = async (req, res) => {
  const nuevaSolicitud = req.body;

  // Validaciones 
  if (!nuevaSolicitud.dni || !nuevaSolicitud.paciente || !nuevaSolicitud.grupoSanguineo) {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  try {
    await Solicitud.guardar(nuevaSolicitud);
    res.status(201).json({ mensaje: 'Solicitud registrada exitosamente' });
  } catch (error) {
    console.error('Error al guardar solicitud:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = {
  obtenerSolicitudes,
  crearSolicitud,
};
