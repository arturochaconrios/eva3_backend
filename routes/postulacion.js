const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacionController');

/**
 * @swagger
 * tags:
 *   name: Postulacion
 *   description: API para gestionar postulaciones
 */

/**
 * @swagger
 * /api/postulacion:
 *   get:
 *     summary: Obtiene todas las postulaciones
 *     tags: [Postulacion]
 *     responses:
 *       200:
 *         description: Lista de postulaciones obtenida correctamente
 *       500:
 *         description: Error al obtener la lista de postulaciones
 */
router.get('/', (req, res, next) => postulacionController.getAll(req, res, next));

/**
 * @swagger
 * /api/postulacion:
 *   post:
 *     summary: Crea una nueva postulacion
 *     tags: [Postulacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               candidato_id:
 *                 type: integer
 *                 example: 1
 *               oferta_laboral_id:
 *                 type: integer
 *                 example: 2
 *               estado_postulacion:
 *                 type: string
 *                 example: "pendiente"
 *               fecha_postulacion:
 *                 type: string
 *                 format: date
 *                 example: "2025-06-08"
 *               fecha_actualizacion:
 *                 type: string
 *                 format: date
 *                 example: "2025-06-08"
 *     responses:
 *       201:
 *         description: Postulacion creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error al crear la postulacion
 */
router.post('/', (req, res, next) => postulacionController.create(req, res, next));

/**
 * @swagger
 * /api/postulacion:
 *   put:
 *     summary: Actualiza una postulacion
 *     tags: [Postulacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               candidato_id:
 *                 type: integer
 *                 example: 1
 *               oferta_laboral_id:
 *                 type: integer
 *                 example: 2
 *               nuevo_estado_postulacion:
 *                 type: string
 *                 example: "aceptada"
 *               nueva_fecha_actualizada:
 *                 type: string
 *                 format: date
 *                 example: "2025-06-09"
 *     responses:
 *       200:
 *         description: Postulacion actualizada correctamente
 *       404:
 *         description: Postulacion no encontrada
 *       500:
 *         description: Error al actualizar la postulacion
 */
router.put('/', (req, res, next) => postulacionController.update(req, res, next));

/**
 * @swagger
 * /api/postulacion:
 *   delete:
 *     summary: Elimina una postulacion
 *     tags: [Postulacion]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               candidato_id:
 *                 type: integer
 *                 example: 1
 *               oferta_laboral_id:
 *                 type: integer
 *                 example: 2
 *     responses:
 *       200:
 *         description: Postulacion eliminada correctamente
 *       404:
 *         description: Postulacion no encontrada
 *       500:
 *         description: Error al eliminar la postulacion
 */
router.delete('/', (req, res, next) => postulacionController.remove(req, res, next));

module.exports = router;