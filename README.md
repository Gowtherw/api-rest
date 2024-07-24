# Índice
1. [Introducción](#introducción)
2. [Tecnologías Implementadas](#tecnologías-implementadas)
3. [Prerrequisitos](#prerrequisitos)
4. [Instalación y Configuración](#instalación-y-configuración)
5. [Estructura del Proyecto](#estructura-del-proyecto)

## Introducción
Este README está destinado a desarrolladores que desean clonar, configurar y contribuir a este proyecto de API REST. Aquí encontrarás información sobre las tecnologías usadas, cómo instalar y configurar el proyecto, y cómo contribuir al desarrollo.

## Tecnologías Implementadas
1. **Node.js**: Entorno de ejecución para JavaScript.
2. **Express**: Framework para aplicaciones web.
3. **MongoDB**: Base de datos NoSQL.
4. **Mongoose**: ODM para MongoDB.
5. **Docker**: Contenerización de aplicaciones.
6. **JWT (JSON Web Tokens)**: Autenticación.
7. **bcryptjs**: Hashing de contraseñas.
8. **Express Validator**: Validación de datos.
9. **Google Maps API**: Búsqueda de restaurantes cercanos.

## Prerrequisitos
1. **Node.js**
2. **Docker**
3. **Docker Compose**

## Instalación y Configuración

### Clona el repositorio:
```bash
git clone git@github.com:Gowtherw/api-rest.git
cd api-rest
```

### Instala las dependencias:
```bash
npm install
```

### Crear el archivo .env y configurar las variables de entorno:
```bash
PORT=3000
DB_CNN=mongodb://mongo:27017/api-rest
JWT_SECRET=T3stN0d3jS13*
GOOGLE_API_KEY=AIzaSyBNSdXr282nzMlw3qvZJiqeDgrBSOwpw4c
```
### Levantar los servicios con Docker Compose:
```bash
docker-compose up --build
```
### Estructura del Proyecto:
```
api-rest/
├── src/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── restaurantController.js
│   │   ├── transactionController.js
│   │   └── userController.js
│   ├── middlewares/
│   │   ├── auth.js
│   │   └── validateFields.js
│   ├── models/
│   │   ├── BlacklistedToken.js
│   │   ├── Transaction.js
│   │   └── User.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── restaurantRoutes.js
│   │   ├── transactionRoutes.js
│   │   └── userRoutes.js
│   ├── config/
│   │   └── db.js
│   └── index.js
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md

```
