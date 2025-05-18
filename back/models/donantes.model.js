const fs = require('fs').promises;
const path = require('path');

const archivo = path.join(__dirname, '../data/donantes.json');

const obtenerTodos = async () => {
  const data = await fs.readFile(archivo, 'utf8');
  return JSON.parse(data);
};

const guardar = async (nuevo) => {
  const donantes = await obtenerTodos();

  const nuevoDonante = {
    id: donantes.length + 1,
    nombre: nuevo.nombre,
    apellido: nuevo.apellido,
    dni: nuevo.dni,
    edad: nuevo.edad,
    peso: nuevo.peso,
    grupoSanguineo: nuevo.grupoSanguineo,
    enfermedades: nuevo.enfermedades,
    fechaRegistro: new Date().toISOString()
  };

  donantes.push(nuevoDonante);
  await fs.writeFile(archivo, JSON.stringify(donantes, null, 2));
};

module.exports = {
  obtenerTodos,
  guardar
};
