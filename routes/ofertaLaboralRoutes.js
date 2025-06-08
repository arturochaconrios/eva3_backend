const express = require('express');
const router = express.Router();
const ofertaLaboralController = require('../controllers/ofertaLaboralController');

/**
 * @swagger
 * tags:
 *   name: OfertaLaboral
 *   description: API para gestionar ofertas laborales
 */

/**
 * @swagger
 * /api/ofertaLaboral:
 *   get:
 *     summary: Obtiene todas las ofertas laborales
 *     tags: [OfertaLaboral]
 *     responses:
 *       200:
 *         description: Lista de ofertas laborales obtenida correctamente
 *       500:
 *         description: Error al obtener la lista de ofertas laborales
 */
router.get('/', (req, res, next) => ofertaLaboralController.getAll(req, res, next));

/**
 * @swagger
 * /api/ofertaLaboral:
 *   post:
 *     summary: Crea una nueva oferta laboral
 *     tags: [OfertaLaboral]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *                 example: "Desarrollador"
 *               descripcion:
 *                 type: string
 *                 example: "Desarrollador backend Node.js"
 *               salario:
 *                 type: number
 *                 example: 1200000
 *     responses:
 *       201:
 *         description: Oferta laboral creada correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error al crear la oferta laboral
 */
router.post('/', (req, res, next) => ofertaLaboralController.create(req, res, next));

/**
 * @swagger
 * /api/ofertaLaboral/{id}:
 *   put:
 *     summary: Actualiza una oferta laboral
 *     tags: [OfertaLaboral]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID de la oferta laboral a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descripcion:
 *                 type: string
 *               salario:
 *                 type: number
 *     responses:
 *       200:
 *         description: Oferta laboral actualizada correctamente
 *       404:
 *         description: Oferta laboral no encontrada
 *       500:
 *         description: Error al actualizar la oferta laboral
 */
router.put('/:id', (req, res, next) => ofertaLaboralController.update(req, res, next));

/**
 * @swagger
 * /api/ofertaLaboral/{id}:
 *   delete:
 *     summary: Elimina una oferta laboral
 *     tags: [OfertaLaboral]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID de la oferta laboral a eliminar
 *     responses:
 *       200:
 *         description: Oferta laboral eliminada correctamente
 *       404:
 *         description: Oferta laboral no encontrada
 *       500:
 *         description: Error al eliminar la oferta laboral
 */
router.delete('/:id', (req, res, next) => ofertaLaboralController.remove(req, res, next));

module.exports = router;