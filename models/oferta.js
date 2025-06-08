const db = require('../config/db');
const express = require('express');





const Ofertas = {
    getAll: async () => {
        try {
            const [rows] = await db.query("SELECT * FROM OfertaLaboral");
            console.log("OfertaLaboral obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron las OfertaLaboral." };
            }
            return rows;
        } catch (err) {
            console.error("Error al obtener las OfertaLaboral: ", err);
            throw err;
        }
    },
    getById: async (OfertaLaboral) => {
        try {
            const [rows] = await db.query("SELECT * FROM OfertaLaboral WHERE id = ?", [OfertaLaboral.id]);
            console.log("OfertaLaboral obtenidos");
            if (rows.length === 0) {
                return { message: "No se encontraron las OfertaLaborales." };
            }
            return rows;
        } catch (err) {
            console.error("Error al obtener los usuarios: ", err);
            throw err;
        }
    },
    create: async (OfertaLaboral) => {
        try {
            const [rows] = await db.query(
                "INSERT INTO OfertaLaboral (titulo, descripcion, ubicacion, salario, tipo_contrato, fecha_publicacion, fecha_cierre, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [
                    OfertaLaboral.titulo,
                    OfertaLaboral.descripcion,
                    OfertaLaboral.ubicacion,
                    OfertaLaboral.salario,
                    OfertaLaboral.tipo_contrato,
                    OfertaLaboral.fecha_publicacion,
                    OfertaLaboral.fecha_cierre,
                    OfertaLaboral.estado
                ]
            );
            console.log("OfertaLaboral creado");
            if (rows.affectedRows > 0) {
                return { message: "OfertaLaboral creado exitosamente." };
            }
            return rows;
        } catch (err) {
            if (err.code === 'ER_DUP_ENTRY' && err.sqlMessage.includes('estado')) {
                return { error: "El estado ya está registrado." };
            }
            console.error("Error al crear el Oferta Laboral: ", err);
            throw err;
        }
    },
    update: async (OfertaLaboral) => {
        try {
            const [rows] = await db.query(
                "UPDATE OfertaLaboral SET titulo = ?, descripcion = ?, ubicacion = ?, salario = ?, tipo_contrato = ?, fecha_publicacion = ?, fecha_cierre = ?, estado = ? WHERE id = ?",
                [
                    OfertaLaboral.titulo,
                    OfertaLaboral.descripcion,
                    OfertaLaboral.ubicacion,
                    OfertaLaboral.salario,
                    OfertaLaboral.tipo_contrato,
                    OfertaLaboral.fecha_publicacion,
                    OfertaLaboral.fecha_cierre,
                    OfertaLaboral.estado,
                    OfertaLaboral.id
                ]
            );
            console.log("Oferta Laboral actualizado");
            if (rows.affectedRows > 0) {
                return { message: "Oferta Laboral actualizado exitosamente." };
            }
            return rows;
        } catch (err) {
            console.error("Error al actualizar la Oferta Laboral: ", err);
            throw err;
        }
    },
    remove: async (OfertaLaboral) => {
        try {
            const [rows] = await db.query(
                "DELETE FROM OfertaLaboral WHERE id = ?",
                [OfertaLaboral.id]
            );
            console.log("Oferta Laboral eliminado");
            if (rows.affectedRows > 0) {
                return { message: "Oferta Laboral eliminada exitosamente." };
            } else if (rows.affectedRows === 0) {
                return { message: "No se encontró la Oferta Laboral." };
            }
            return rows;
        } catch (err) {
            console.error("Error al eliminar la Oferta Laboral: ", err);
            throw err;
        }
    },
    desactiveUser: async (OfertaLaboral) => {
        try {
            // Actualiza el estado de la oferta laboral por su id
            const [update] = await db.query(
                "UPDATE OfertaLaboral SET estado = ? WHERE id = ?",
                [OfertaLaboral.estado, OfertaLaboral.id]
            );
            if (update.affectedRows > 0) {
                return { message: `Oferta Laboral con id ${OfertaLaboral.id} actualizada exitosamente.` };
            } else {
                return { message: "No se encontró la Oferta Laboral para actualizar." };
            }
        } catch (err) {
            console.error("Error al actualizar la oferta: ", err);
            throw err;
        }
    },
};
module.exports = Ofertas;

