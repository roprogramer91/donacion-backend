const db = require('../data/config');

// Obtener todas las solicitudes
const obtenerTodas = async () => {
  const result = await db.query('SELECT * FROM solicitudes ORDER BY fecha_solicitud DESC');
  return result.rows;
};

// Guardar una nueva solicitud
const guardar = async (nueva) => {
  const fecha = new Date().toISOString(); // Formato compatible con TIMESTAMP en PostgreSQL

  const result = await db.query(
    `INSERT INTO solicitudes 
     (nombre, apellido, dni, edad, paciente, grupo_sanguineo, hospital, direccion, nivel_urgencia, motivo, fecha_solicitud)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
     RETURNING *`,
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

  return result.rows[0]; // Devuelve la solicitud recién insertada
};

module.exports = {
  obtenerTodas,
  guardar
};
