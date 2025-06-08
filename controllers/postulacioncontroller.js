const Postulacion = require('../models/postulacion');

const listarPostulaciones = async (req, res, next) => {
    try {
        const postulaciones = await Postulacion.getAll();
        res.json(postulaciones);
    } catch (err) {
        next(err);
    }
};

const obtenerPostulacion = async (req, res, next) => {
    try {
        const post = await Postulacion.getById(req.params.id);
        if (!post) return res.status(404).json({ error: 'No encontrada' });
        res.json(post);
    } catch (err) {
        next(err);
    }
};

const crearPostulacion = async (req, res, next) => {
    try {
        const nueva = await Postulacion.create(req.body);
        res.status(201).json(nueva);
    } catch (err) {
        next(err);
    }
};

const actualizarPostulacion = async (req, res, next) => {
    try {
        const actualizada = await Postulacion.update(req.params.id, req.body);
        res.json(actualizada);
    } catch (err) {
        next(err);
    }
};

const eliminarPostulacion = async (req, res, next) => {
    try {
        const resultado = await Postulacion.remove(req.params.id);
        res.json(resultado);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    listarPostulaciones,
    obtenerPostulacion,
    crearPostulacion,
    actualizarPostulacion,
    eliminarPostulacion
};