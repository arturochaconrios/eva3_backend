const express = require('express');
const router = express.Router();

//Importar las rutas de los diferentes modulos
const usuarioRoutes           = require('./usuarioRoutes');
const ofertaRoutes     = require('./ofertaRoutes');
const postulacionRoutes = require('./postulacionRoutes');
// const antecedentesLaborales = require('./antecentesLaborales');

//Asocias las rutas importadas a sus respectivos endpoints
router.use('/usuarioRoutes', usuarioRoutes);
router.use('/ofertaRoutes', ofertaRoutes);
router.use('/postulacionRoutes', postulacionRoutes);

//Middleware para captrurar rutas no manejadas em este archivo
router.use((req,res) => {
    console.error("Ruta no orquestada en index.js"+req.method+" "+req.url);
    res.status(404).json({error: "Ruta no encontrada"});
})
//Exportar el router para usarlo en otros modulos
module.exports = router;