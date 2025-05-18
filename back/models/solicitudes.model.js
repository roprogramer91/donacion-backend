const fs = require('fs').promises;
const path = require('path');

const archivo = path.join(__dirname, '../data/solicitudes.json');

const obtenerTodas = async () => {
  const data = await fs.readFile(archivo, 'utf8');
  return JSON.parse(data);
};

const guardar = async (nueva) => {
  const solicitudes = await obtenerTodas();

  const nuevaSolicitud = {
    id: solicitudes.length + 1,
   nombre: nueva.nombre,
    apellido: nueva.apellido,
    dni: nueva.dni,
    edad: parseInt(nueva.edad),
    paciente: nueva.paciente,
    grupoSanguineo: nueva.grupoSanguineo,
    hospital: nueva.hospital,
    direccion: nueva.direccion,
    nivelUrgencia: nueva.nivelUrgencia,
    motivo: nueva.motivo,
    fechaSolicitud: new Date().toISOString()
  };

  solicitudes.push(nuevaSolicitud);
  await fs.writeFile(archivo, JSON.stringify(solicitudes, null, 2));
};

module.exports = {
  obtenerTodas,
  guardar
};
