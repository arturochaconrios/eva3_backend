const db = require('../config/db');

const Postulacion = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM Postulacion');
        return rows;
    },
    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM Postulacion WHERE id = ?', [id]);
        return rows[0];
    },
    create: async (data) => {
        const { candidato_id, oferta_laboral_id, estado_postulacion, comentario } = data;
        const [result] = await db.query(
            'INSERT INTO Postulacion (candidato_id, oferta_laboral_id, estado_postulacion, comentario) VALUES (?, ?, ?, ?)',
            [candidato_id, oferta_laboral_id, estado_postulacion || 'Postulando', comentario || null]
        );
        return { id: result.insertId, ...data };
    },
    update: async (id, data) => {
        const { estado_postulacion, comentario } = data;
        await db.query(
            'UPDATE Postulacion SET estado_postulacion = ?, comentario = ? WHERE id = ?',
            [estado_postulacion, comentario, id]
        );
        return { id, ...data };
    },
    remove: async (id) => {
        await db.query('DELETE FROM Postulacion WHERE id = ?', [id]);
        return { message: 'Postulación eliminada' };
    }
};

module.exports = Postulacion;