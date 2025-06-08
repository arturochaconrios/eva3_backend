const express = require('express');
const router = express.Router();
const controller = require('../controllers/postulacioncontroller');

/**
 * @swagger
 * /postulacionRoutes:
 *   get:
 *     summary: Lista todas las postulaciones
 *     responses:
 *       200:
 *         description: Lista de postulaciones
 */
router.get('/', controller.listarPostulaciones);

/**
 * @swagger
 * /postulacionRoutes/{id}:
 *   get:
 *     summary: Obtiene una postulación por ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Postulación encontrada
 *       404:
 *         description: No encontrada
 */
router.get('/:id', controller.obtenerPostulacion);
router.post('/', controller.crearPostulacion);
router.put('/:id', controller.actualizarPostulacion);
router.delete('/:id', controller.eliminarPostulacion);

module.exports = router;