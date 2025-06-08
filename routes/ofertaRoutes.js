const express = require('express');
const router = express.Router();
const ofertaController = require('../controllers/ofertacontroller');



/**
 * @swagger
 * /api/ofertaRoutes:
 *   get:
 *    summary: Obtiene todas las ofertas
 *    tags: [Oferta Routes]
 *    responses:
 *     200:
 *      description: Lista de ofertas obtenida correctamente
 *     500:
 *      description: Error al obtener la lista de ofertas
 */





// POST: Crear oferta
router.post('/', ofertaController.crearOferta);

// GET: Listar todas las ofertas
router.get('/', ofertaController.listarOfertas);

// PUT: Editar una oferta existente
router.put('/:id', ofertaController.editarOferta);

// PATCH: Cambiar estado de oferta (activa/inactiva)
router.patch('/estado/:id', ofertaController.actualizarEstado);

// PATCH (simulando DELETE): Marcar como eliminada
router.patch('/remove/:id', ofertaController.marcarComoEliminada);

module.exports = router;