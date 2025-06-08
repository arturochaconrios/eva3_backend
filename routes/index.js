const express = require('express');
const router = express.Router();

//Importar las rutas de los diferentes modulos
const usuarioRoutes = require('./usuarioRoutes');
const ofertaLaboralRoutes = require('./ofertaLaboralRoutes');
const antecedentesLaboralesRoutes = require('./antecedentesLaborales');
const antecedentesAcademicosRoutes = require('./antecedentesAcademicos');
const postulacionRoutes = require('./postulacion');

//Asocias las rutas importadas a sus respectivos endpoints
router.use('/usuarioRoutes', usuarioRoutes);
router.use('/ofertaLaboral', ofertaLaboralRoutes);
router.use('/antecedentesLaborales', antecedentesLaboralesRoutes);
router.use('/antecedentesAcademicos', antecedentesAcademicosRoutes);
router.use('/postulaciones', postulacionRoutes);

//Middleware para captrurar rutas no manejadas em este archivo
router.use((req, res) => {
    console.error("Ruta no orquestada en index.js " + req.method + " " + req.url);
    res.status(404).json({ error: "Ruta no encontrada" });
});

//Exportar el router para usarlo en otros modulos
module.exports = router;