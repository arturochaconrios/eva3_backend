const OfertaLaboral = require('../models/ofertaLaboral');

exports.getAll = async (req, res, next) => {
    try {
        const ofertas = await OfertaLaboral.getAll();
        res.json(ofertas);
    } catch (err) {
        next(err);
    }
};

exports.getById = async (req, res, next) => {
    try {
        const oferta = await OfertaLaboral.getById(req.params.id);
        if (!oferta) return res.status(404).json({ error: 'No encontrada' });
        res.json(oferta);
    } catch (err) {
        next(err);
    }
};

exports.create = async (req, res, next) => {
    try {
        const nueva = await OfertaLaboral.create(req.body);
        res.status(201).json(nueva);
    } catch (err) {
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        const actualizado = await OfertaLaboral.update(req.params.id, req.body);
        if (!actualizado) return res.status(404).json({ error: 'No encontrada' });
        res.json({ message: 'Oferta laboral actualizada' });
    } catch (err) {
        next(err);
    }
};

exports.remove = async (req, res, next) => {
    try {
        const eliminado = await OfertaLaboral.remove(req.params.id);
        if (!eliminado) return res.status(404).json({ error: 'No encontrada' });
        res.json({ message: 'Oferta laboral eliminada' });
    } catch (err) {
        next(err);
    }
};