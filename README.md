eva3_backend - Backend API REST
Este proyecto corresponde a la evaluación de la unidad 3 para el ramo de Desarrollo Backend. Se desarrolla una API RESTful enfocada en el perfil de Reclutador, permitiendo gestionar la entidad oferta_laboral. en esta oportunidad de agrega Swagger

Tecnologías utilizadas
Node.js
Express.js
MySQL
dotenv
Thunder Client (para pruebas)
Visual Studio Code
Estructura
eva3_backend/ ├── config/ │ ├── .env │ ├── db.js │ └── database.sql ├── controllers/ │ └── ofertaController.js └── postulacioncontroller.js └── usuariocontroller.js├── routes/ │ └── ofertaRoutes.js └── postulacionRoutes.js └── usuarioRoutes.js├── app.js ├── package-lock.json ├── package.json ├── swagger.js└── README.md

Instalación
Crear reoositorio y archivos
Ejecutar en la terminal:
npm install

Configurar la base de datos:
Importar el archivo config/database.sql en phpMyAdmin
crear tabla cliente_feliz
Configurar las variables de entorno en config/.env:
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=cliente_feliz
DB_PORT=3306
PORT=3000

5. Iniciar el servidor:

node app.js


## Endpoints creados

| Método | Ruta                         | Descripción                           |
|--------|------------------------------|---------------------------------------|
| POST   | /api/ofertas                 | Crear una oferta laboral              |
| GET    | /api/ofertas                 | Listar todas las ofertas              |
| PUT    | /api/ofertas/:id             | Editar una oferta                     |
| PATCH  | /api/ofertas/estado/:id      | Cambiar estado (activa/inactiva)      |
| PATCH  | /api/ofertas/remove/:id      | Simular eliminación (desactivar)    
                           |
|--------|------------------------------|---------------------------------------|
| POST   | /api/postulacion             | Crear una postulacion                 |
| GET    | /api/postulacion             | Listar  todas postulaciones           |
| PUT    | /api/postulacion/:id         | Editar una postulacion                |
| PATCH  | /api/postulacion/estado/:id  | Cambiar estado (activa/inactiva)      |
| PATCH  | /api/postulacion/remove/:id  | Simular eliminación (desactivar)      |

## Pruebas realizadas con:

- Se usó **Thunder Client** para probar cada endpoint
- Se incluye archivo `.json` con la colección

## 

Desarrollado por: Arturo Chacón Rios 
Instituto Profesional IPSS – 2° Año  
Ramo: Desarrollo Backend
