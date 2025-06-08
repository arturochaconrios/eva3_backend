const AntecedentesLaborales = require('../models/antecedentesLaborales').default;

exports.getAll = async (req, res, next) => {
    try {
        const data = await AntecedentesLaborales.getAll();
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.getById = async (req, res, next) => {
    try {
        const data = await AntecedentesLaborales.getById(req.params.id);
        if (!data) return res.status(404).json({ error: 'No encontrado' });
        res.json(data);
    } catch (err) {
        next(err);
    }
};

exports.create = async (req, res, next) => {
    try {
        const nuevo = await AntecedentesLaborales.create(req.body);
        res.status(201).json(nuevo);
    } catch (err) {
        next(err);
    }
};

exports.update = async (req, res, next) => {
    try {
        const actualizado = await AntecedentesLaborales.update(req.params.id, req.body);
        res.json(actualizado);
    } catch (err) {
        next(err);
    }
};

exports.remove = async (req, res, next) => {
    try {
        const resultado = await AntecedentesLaborales.remove(req.params.id);
        res.json(resultado);
    } catch (err) {
        next(err);
    }
};