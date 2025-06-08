const express = require('express');
const router = express.Router();
const controller = require('../controllers/antecedentesAcademicosController');

/**
 * @swagger
 * tags:
 *   name: AntecedentesAcademicos
 *   description: API para gestionar antecedentes académicos
 */

/**
 * @swagger
 * /api/antecedentesAcademicos:
 *   get:
 *     summary: Obtiene todos los antecedentes académicos
 *     tags: [AntecedentesAcademicos]
 *     responses:
 *       200:
 *         description: Lista de antecedentes académicos obtenida correctamente
 *       500:
 *         description: Error al obtener la lista de antecedentes académicos
 */
router.get('/', controller.getAll);

/**
 * @swagger
 * /api/antecedentesAcademicos:
 *   post:
 *     summary: Crea un nuevo antecedente académico
 *     tags: [AntecedentesAcademicos]
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
 *               institucion:
 *                 type: string
 *                 example: "Universidad X"
 *               titulo_obtenido:
 *                 type: string
 *                 example: "Ingeniero"
 *               anio_ingreso:
 *                 type: integer
 *                 example: 2020
 *               anio_egreso:
 *                 type: integer
 *                 example: 2024
 *     responses:
 *       201:
 *         description: Antecedente académico creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error al crear el antecedente académico
 */
router.post('/', controller.create);

/**
 * @swagger
 * /api/antecedentesAcademicos/{id}:
 *   put:
 *     summary: Actualiza un antecedente académico
 *     tags: [AntecedentesAcademicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del candidato
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               institucion:
 *                 type: string
 *               titulo_obtenido:
 *                 type: string
 *               anio_ingreso:
 *                 type: integer
 *               anio_egreso:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Antecedente académico actualizado correctamente
 *       404:
 *         description: Antecedente académico no encontrado
 *       500:
 *         description: Error al actualizar el antecedente académico
 */
router.put('/:id', (req, res, next) => controller.update(req.params.id, req.body).then(result => res.json(result)).catch(next));

/**
 * @swagger
 * /api/antecedentesAcademicos/{id}:
 *   delete:
 *     summary: Elimina un antecedente académico
 *     tags: [AntecedentesAcademicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del candidato
 *     responses:
 *       200:
 *         description: Antecedente académico eliminado correctamente
 *       404:
 *         description: Antecedente académico no encontrado
 *       500:
 *         description: Error al eliminar el antecedente académico
 */
router.delete('/:id', (req, res, next) => controller.remove(req.params.id).then(result => res.json(result)).catch(next));

module.exports = router;