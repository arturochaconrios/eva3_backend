const express = require('express');
const router = express.Router();
const antecedentesAcademicosController = require('../controllers/antecedentesAcademicosController');


// rutas para la API de antecedentes académicos
/**
 * @swagger
 * tags:
 *   name: AntecedentesAcademicos
 *   description: API para gestionar antecedentes académicos
 */

/**
 * @swagger
 * /:
 *   get:
 *     summary: Obtiene todos los antecedentes académicos
 *     tags: [AntecedentesAcademicos]
 *     responses:
 *       200:
 *         description: Lista de antecedentes académicos obtenida correctamente
 *       500:
 *         description: Error al obtener la lista de antecedentes académicos
 */
router.get('/', (req, res, next) => antecedentesAcademicosController.getAll(req, res, next));

/**
 * @swagger
 * /create:
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
 *               campo1:
 *                 type: string
 *                 example: "Ejemplo de campo1"
 *               campo2:
 *                 type: string
 *                 example: "Ejemplo de campo2"
 *     responses:
 *       201:
 *         description: Antecedente académico creado correctamente
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error al crear el antecedente académico
 */
router.post('/', (req, res, next) => antecedentesAcademicosController.create(req, res, next));

/**
 * @swagger
 * /id:
 *   get:
 *     summary: Obtiene un antecedente académico por ID
 *     tags: [AntecedentesAcademicos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           example: 1
 *         description: ID del antecedente académico a obtener
 *     responses:
 *       200:
 *         description: Antecedente académico obtenido correctamente
 *       404:
 *         description: Antecedente académico no encontrado
 *       500:
 *         description: Error al obtener el antecedente académico
 */
router.get('/:id', (req, res, next) => antecedentesAcademicosController.getById(req, res, next));

/**
 * @swagger
 * /update/id:
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
 *         description: ID del antecedente académico a actualizar
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
 *         description: Antecedente académico actualizado correctamente
 *       404:
 *         description: Antecedente académico no encontrado
 *       500:
 *         description: Error al actualizar el antecedente académico
 */
router.put('/:id', (req, res, next) => antecedentesAcademicosController.update(req, res, next));

/**
 * @swagger
 * /renove/id:
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
 *         description: ID del antecedente académico a eliminar
 *     responses:
 *       200:
 *         description: Antecedente académico eliminado correctamente
 *       404:
 *         description: Antecedente académico no encontrado
 *       500:
 *         description: Error al eliminar el antecedente académico
 */
router.delete('/:id', (req, res, next) => antecedentesAcademicosController.remove(req, res, next));
 
module.exports = router;