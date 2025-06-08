const express = require('express');
const router = express.Router();
const controller = require('../controllers/postulacioncontroller');



/**
 * @swagger
 * /api/postulacionRoutes:
 *   get:
 *    summary: Obtiene todas las postulaciones
 *    tags: [Postulacion Routes]
 *    responses:
 *     200:
 *      description: Lista de postulaciones obtenida correctamente
 *     500:
 *      description: Error al obtener la lista de postulaciones
 */
router.get('/', controller.listarPostulaciones);


router.get('/:id', controller.obtenerPostulacion);
router.post('/', controller.crearPostulacion);
router.put('/:id', controller.actualizarPostulacion);
router.delete('/:id', controller.eliminarPostulacion);

module.exports = router;