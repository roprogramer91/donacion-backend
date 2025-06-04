const db = require('../data/config');

// Obtener todos los donantes
const obtenerTodos = async () => {
  const result = await db.query('SELECT * FROM donantes ORDER BY fecha_registro DESC');
  return result.rows;
};

// Guardar un nuevo donante
const guardar = async (nuevo) => {
  const fecha = new Date().toISOString();

  const result = await db.query(
    `INSERT INTO donantes (nombre, apellido, dni, edad, peso, grupo_sanguineo, enfermedades, fecha_registro)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
     RETURNING *`,
    [
      nuevo.nombre,
      nuevo.apellido,
      nuevo.dni,
      nuevo.edad,
      nuevo.peso,
      nuevo.grupoSanguineo,
      nuevo.enfermedades || '',
      fecha
    ]
  );

  return result.rows[0]; // Devuelve el donante recién insertado
};

module.exports = {
  obtenerTodos,
  guardar
};
