const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cors = require('cors');

// SWAGGER
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

// Cargar variables de entorno
dotenv.config({ path: './config/.env' });

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Middleware para registrar las solicitudes entrantes
app.use((req, res, next) => {
    console.log(`Solicitud entrante: ${req.method} ${req.url}`);
    next();
});

// Swagger UI endpoint
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Tus rutas API (todas las rutas deben estar orquestadas aquí)
app.use('/api', require('./routes/index'));

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    console.error(`Ruta no encontrada: ${req.method} ${req.url}`);
    res.status(404).send('Ruta no encontrada');
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    console.error(err.message);
    res.status(500).json({ error: 'Error del servidor' });
});

// Puerto
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});