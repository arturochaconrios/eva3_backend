const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// GET todos los usuarios
router.get('/', (req, res, next) => usuarioController.getAll(req, res, next));

// GET usuario por ID
router.get('/:id', (req, res, next) => usuarioController.getById(req, res, next));

// POST crear usuario
router.post('/', (req, res, next) => usuarioController.create(req, res, next));

// PUT actualizar usuario
router.put('/:id', (req, res, next) => usuarioController.update(req, res, next));

// DELETE eliminar usuario
router.delete('/:id', (req, res, next) => usuarioController.deleteUsuario(req, res, next));

module.exports = router;