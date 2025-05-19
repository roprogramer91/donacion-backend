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

  await Donante.guardar(nuevoDonante);
  res.status(201).json({ mensaje: 'Donante agregado exitosamente' });
};


const obtenerDonantes = async (req, res) => {
  const donantes = await Donante.obtenerTodos();
  res.json(donantes);
};

module.exports = {
  crearDonante,
  obtenerDonantes
};
