const db = require('../config/db');

const OfertaLaboral = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM ofertalaboral');
            return rows;
        } catch (err) {
            console.error('Error al obtener las ofertas laborales:', err);
            throw err;
        }
    },

    getById: async (id) => {
        try {
            const [rows] = await db.query('SELECT * FROM ofertalaboral WHERE id = ?', [id]);
            return rows[0] || null;
        } catch (err) {
            console.error('Error al obtener la oferta laboral:', err);
            throw err;
        }
    },

    create: async (oferta) => {
        try {
            const [result] = await db.query(
                'INSERT INTO ofertalaboral (titulo, descripcion, ubicacion, salario, tipo_contrato, fecha_publicacion, fecha_cierre, estado, reclutador_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [oferta.titulo, oferta.descripcion, oferta.ubicacion, oferta.salario, oferta.tipo_contrato, oferta.fecha_publicacion, oferta.fecha_cierre, oferta.estado, oferta.reclutador_id]
            );
            return { id: result.insertId, ...oferta };
        } catch (err) {
            console.error('Error al crear la oferta laboral:', err);
            throw err;
        }
    },

    update: async (id, oferta) => {
        try {
            const [result] = await db.query(
                'UPDATE ofertalaboral SET titulo = ?, descripcion = ?, ubicacion = ?, salario = ?, tipo_contrato = ?, fecha_publicacion = ?, fecha_cierre = ?, estado = ?, reclutador_id = ? WHERE id = ?',
                [oferta.titulo, oferta.descripcion, oferta.ubicacion, oferta.salario, oferta.tipo_contrato, oferta.fecha_publicacion, oferta.fecha_cierre, oferta.estado, oferta.reclutador_id, id]
            );
            return result.affectedRows > 0;
        } catch (err) {
            console.error('Error al actualizar la oferta laboral:', err);
            throw err;
        }
    },

    remove: async (id) => {
        try {
            const [result] = await db.query('DELETE FROM ofertalaboral WHERE id = ?', [id]);
            return result.affectedRows > 0;
        } catch (err) {
            console.error('Error al eliminar la oferta laboral:', err);
            throw err;
        }
    }
};

module.exports = OfertaLaboral;

