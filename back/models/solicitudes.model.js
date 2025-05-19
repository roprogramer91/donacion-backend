const db = require('../data/config');

// Obtener todas las solicitudes
const obtenerTodas = async () => {
  const [rows] = await db.query('SELECT * FROM solicitudes ORDER BY fecha_Solicitud DESC');
  return rows;
};

// Guardar una nueva solicitud
const guardar = async (nueva) => {
  const fecha = new Date().toISOString().slice(0, 19).replace('T', ' '); // formato DATETIME

  const [result] = await db.query(
    `INSERT INTO solicitudes 
     (nombre, apellido, dni, edad, paciente, grupoSanguineo, hospital, direccion, nivelUrgencia, motivo, fechaSolicitud)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      nueva.nombre,
      nueva.apellido,
      nueva.dni,
      parseInt(nueva.edad),
      nueva.paciente,
      nueva.grupoSanguineo,
      nueva.hospital,
      nueva.direccion,
      nueva.nivelUrgencia,
      nueva.motivo,
      fecha
    ]
  );

  return result;
};

module.exports = {
  obtenerTodas,
  guardar
};
