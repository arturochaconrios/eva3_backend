const db = require('../config/db');

const Postulacion = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM postulacion');
        return rows;
    },
    create: async (postulacion) => {
        const [result] = await db.query(
            'INSERT INTO postulacion (candidato_id, oferta_laboral_id, estado_postulacion, fecha_postulacion, fecha_actualizacion) VALUES (?, ?, ?, ?, ?)',
            [postulacion.candidato_id, postulacion.oferta_laboral_id, postulacion.estado_postulacion, postulacion.fecha_postulacion, postulacion.fecha_actualizacion]
        );
        return { id: result.insertId, ...postulacion };
    },
    update: async (postulacion) => {
        const [rows] = await db.query(
            'UPDATE postulacion SET estado_postulacion = ?, fecha_actualizacion = ? WHERE candidato_id = ? AND oferta_laboral_id = ?',
            [postulacion.nuevo_estado_postulacion, postulacion.nueva_fecha_actualizada, postulacion.candidato_id, postulacion.oferta_laboral_id]
        );
        return rows.affectedRows > 0;
    },
    remove: async (postulacion) => {
        const [rows] = await db.query(
            'DELETE FROM postulacion WHERE candidato_id = ? AND oferta_laboral_id = ?',
            [postulacion.candidato_id, postulacion.oferta_laboral_id]
        );
        return rows.affectedRows > 0;
    }
};

module.exports = Postulacion;