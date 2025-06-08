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

### Ofertas Laborales

| Método | Ruta                              | Descripción                           |
|--------|-----------------------------------|---------------------------------------|
| POST   | /api/ofertaLaboral                | Crear una oferta laboral              |
| GET    | /api/ofertaLaboral                | Listar todas las ofertas              |
| GET    | /api/ofertaLaboral/:id            | Obtener una oferta por ID             |
| PUT    | /api/ofertaLaboral/:id            | Editar una oferta                     |
| DELETE | /api/ofertaLaboral/:id            | Eliminar una oferta                   |

### Usuarios

| Método | Ruta                              | Descripción                           |
|--------|-----------------------------------|---------------------------------------|
| POST   | /api/usuarioRoutes                | Crear un usuario                      |
| GET    | /api/usuarioRoutes                | Listar todos los usuarios             |
| GET    | /api/usuarioRoutes/:id            | Obtener un usuario por ID             |
| PUT    | /api/usuarioRoutes/:id            | Editar un usuario                     |
| DELETE | /api/usuarioRoutes/:id            | Eliminar un usuario                   |

### Postulaciones

| Método | Ruta                              | Descripción                           |
|--------|-----------------------------------|---------------------------------------|
| POST   | /api/postulacion                  | Crear una postulación                 |
| GET    | /api/postulacion                  | Listar todas las postulaciones        |
| PUT    | /api/postulacion                  | Editar una postulación                |
| DELETE | /api/postulacion                  | Eliminar una postulación              |

### Antecedentes Laborales

| Método | Ruta                              | Descripción                           |
|--------|-----------------------------------|---------------------------------------|
| POST   | /api/antecedentesLaborales        | Crear un antecedente laboral          |
| GET    | /api/antecedentesLaborales        | Listar todos los antecedentes         |
| GET    | /api/antecedentesLaborales/:id    | Obtener un antecedente por ID         |
| PUT    | /api/antecedentesLaborales/:id    | Editar un antecedente                 |
| DELETE | /api/antecedentesLaborales/:id    | Eliminar un antecedente               |

### Antecedentes Académicos

| Método | Ruta                              | Descripción                           |
|--------|-----------------------------------|---------------------------------------|
| POST   | /api/antecedentesAcademicos       | Crear un antecedente académico        |
| GET    | /api/antecedentesAcademicos       | Listar todos los antecedentes         |
| GET    | /api/antecedentesAcademicos/:id   | Obtener un antecedente por ID         |
| PUT    | /api/antecedentesAcademicos/:id   | Editar un antecedente                 |
| DELETE | /api/antecedentesAcademicos/:id   | Eliminar un antecedente               |

## Documentación Swagger

- Accede a la documentación interactiva en:  
  [http://localhost:3001/api-docs](http://localhost:3001/api-docs)

## Pruebas realizadas con

- **Thunder Client** para probar cada endpoint.
- Se incluye archivo `.json` con la colección de pruebas.

---

**Desarrollado por:**  
Arturo Chacón Rios  
Instituto Profesional IPSS – 2° Año  
Ramo: Desarrollo Backend
