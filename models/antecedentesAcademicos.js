const db = require('../config/db');

const AntecedentesAcademicos = {
    getAll: async () => {
        try {
            const [rows] = await db.query('SELECT * FROM antecedenteacademico');
            if (!rows || rows.length === 0) {
                return { message: 'No se encontraron antecedentes academicos' };
            }
            return rows;
        } catch (err) {
            console.error('Error al obtener los antecedentes academicos:', err);
            throw err;
        }
    },

    create: async (data) => {
        try {
            const [result] = await db.query(
                'INSERT INTO antecedenteacademico (candidato_id, institucion, titulo_obtenido, anio_ingreso, anio_egreso) VALUES (?, ?, ?, ?, ?)',
                [data.candidato_id, data.institucion, data.titulo_obtenido, data.anio_ingreso, data.anio_egreso]
            );
            if (result.affectedRows > 0) {
                return { message: 'Antecedente academico creado exitosamente' };
            }
            return result;
        } catch (err) {
            console.error('Error al crear el Antecedente academico:', err);
            throw err;
        }
    },

    update: async (candidato_id, data) => {
        try {
            const [result] = await db.query(
                'UPDATE antecedenteacademico SET institucion = ?, titulo_obtenido = ?, anio_ingreso = ?, anio_egreso = ? WHERE candidato_id = ?',
                [data.institucion, data.titulo_obtenido, data.anio_ingreso, data.anio_egreso, candidato_id]
            );
            if (result.affectedRows > 0) {
                return { message: 'Antecedente academico actualizado exitosamente' };
            }
            return result;
        } catch (err) {
            console.error('Error al actualizar el Antecedente academico:', err);
            throw err;
        }
    },

    remove: async (candidato_id) => {
        try {
            const [result] = await db.query(
                'DELETE FROM antecedenteacademico WHERE candidato_id = ?',
                [candidato_id]
            );
            if (result.affectedRows > 0) {
                return { message: 'Antecedente academico eliminado exitosamente' };
            }
            return result;
        } catch (err) {
            console.error('Error al eliminar el Antecedente academico:', err);
            throw err;
        }
    }
};

module.exports = AntecedentesAcademicos;