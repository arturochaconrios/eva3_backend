const express = require('express');
const router = express.Router();
const controller = require('../controllers/antecedentesLaboralesController');

/**
 * @swagger
 * tags:
 *   name: AntecedentesLaborales
 *   description: API para gestionar antecedentes laborales
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtiene todos los antecedentes laborales
 *     tags: [AntecedentesLaborales]
 *     responses:
 *       200:
 *         description: Lista de antecedentes laborales obtenida correctamente
 *       500:
 *         description: Error al obtener la lista de antecedentes laborales
 */
router.get('/', (req, res, next) => controller.getAll(req, res, next));

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Crea un nuevo antecedente laboral
 *     tags: [AntecedentesLaborales]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               campo1:
 *                 type: string
 *                 example: "Ejemplo de campo1"
 *               campo2:
 *                 type: string
 *                 example: "Ejemplo de campo2"
 *     responses:
 *       201:
 *         description: Antecedente laboral creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error al crear el antecedente laboral
 */
router.post('/', (req, res, next) => controller.create(req, res, next));

/**
 * @swagger
 * /id:
 *   get:
 *     summary: Obtiene un antecedente laboral por ID
 *     tags: [AntecedentesLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del antecedente laboral a obtener
 *     responses:
 *       200:
 *         description: Antecedente laboral obtenido correctamente
 *       404:
 *         description: Antecedente laboral no encontrado
 *       500:
 *         description: Error al obtener el antecedente laboral
 */
router.get('/:id', (req, res, next) => controller.getById(req, res, next));

/**
 * @swagger
 * /update/id:
 *   put:
 *     summary: Actualiza un antecedente laboral
 *     tags: [AntecedentesLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del antecedente laboral a actualizar
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               campo1:
 *                 type: string
 *               campo2:
 *                 type: string
 *     responses:
 *       200:
 *         description: Antecedente laboral actualizado correctamente
 *       404:
 *         description: Antecedente laboral no encontrado
 *       500:
 *         description: Error al actualizar el antecedente laboral
 */
router.put('/:id', (req, res, next) => controller.update(req, res, next));

/**
 * @swagger
 * /renove/id:
 *   delete:
 *     summary: Elimina un antecedente laboral
 *     tags: [AntecedentesLaborales]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del antecedente laboral a eliminar
 *     responses:
 *       200:
 *         description: Antecedente laboral eliminado correctamente
 *       404:
 *         description: Antecedente laboral no encontrado
 *       500:
 *         description: Error al eliminar el antecedente laboral
 */
router.delete('/:id', (req, res, next) => controller.remove(req, res, next));

module.exports = router;