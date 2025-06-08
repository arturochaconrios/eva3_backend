const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');


/**
 * @swagger
 * tags:
 *  name: UsuarioRoutes
 *  description: Operaciones relacionadas con los usuarios
 */
 
 
/**
 * @swagger
 * /usuarioRoutes/:
 *  get:
 *    summary: Obtiene todos los usuarios
 *    tags: [UsuarioRoutes]
 *    responses:
 *     200:
 *      description: Lista de usuarios obtenida correctamente
 *     500:
 *      description: Error al obtener la lista de usuarios
 */




// GET todos los usuarios
router.get('/', (req, res, next) => {
    usuarioController.getAll(req, res);
});

/**
 * @swagger
 * /id:
 *   post:
 *     summary: Obtiene un usuario por ID
 *     tags: [UsuarioRoutes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: interger
 *                 description: ID del usuario a obtener
 *                 example: 1
 * 
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al obtener el usuario
 */

// GET usuario por ID
router.post('/:id', (req, res, next) => {
    usuarioController.getById(req, res, next)
});

/**
 * @swagger
 * /create:
 *   post:
 *     summary: Obtiene un usuario por ID
 *     tags: [UsuarioRoutes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: arturo
 *               email:
 *                 type: string                  
 *                 example: arturo.chacon.rios@estudiante.ipss.cl
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al obtener el usuario
 */
// POST crear usuario
router.post('/', (req, res, next) => usuarioController.create(req, res, next));


/**
 * @swagger
 * /update:
 *   put:
 *     summary: Obtiene un usuario por ID
 *     tags: [UsuarioRoutes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: arturo
 *               email:
 *                 type: string                  
 *                 example: arturo.chacon.rios@estudiante.ipss.cl
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al obtener el usuario
 */


// PUT actualizar usuario
router.put('/:id', (req, res, next) => usuarioController.update(req, res, next));

/**
 * @swagger
 * /remove:
 *   delete:
 *     summary: Obtiene un usuario por ID
 *     tags: [UsuarioRoutes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: arturo
 *               email:
 *                 type: string                  
 *                 example: arturo.chacon.rios@estudiante.ipss.cl
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Usuario obtenido correctamente
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error al obtener el usuario
 */


// DELETE eliminar usuario
router.delete('/remove', (req, res, next) => usuarioController.remove(req, res, next));

module.exports = router;