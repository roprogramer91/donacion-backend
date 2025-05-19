const Donante = require('../models/donantes.model');
const { validarDNI, validarEdad, validarGrupo } = require('../validations/donanteValidations');

const crearDonante = async (req, res) => {
  const nuevoDonante = req.body;

  if (!validarDNI(nuevoDonante.dni)) {
    return res.status(400).json({ error: 'DNI inválido.' });
  }

  if (!validarEdad(nuevoDonante.edad)) {
    return res.status(400).json({ error: 'Edad inválida.' });
  }

  if (!validarGrupo(nuevoDonante.grupoSanguineo)) {
    return res.status(400).json({ error: 'Grupo sanguíneo inválido.' });
  }

  try {
    await Donante.guardar(nuevoDonante);
    res.status(201).json({ mensaje: 'Donante agregado exitosamente' });
  } catch (error) {
    // Capturar error de duplicado de DNI
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Ya existe un donante con ese DNI.' });
    }

    console.error('Error al guardar donante:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

const obtenerDonantes = async (req, res) => {
  try {
    const donantes = await Donante.obtenerTodos();
    res.json(donantes);
  } catch (error) {
    console.error('Error al obtener donantes:', error);
    res.status(500).json({ error: 'Error al obtener donantes' });
  }
};

module.exports = {
  crearDonante,
  obtenerDonantes
};
