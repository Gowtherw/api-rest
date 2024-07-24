Índice
Introducción
Tecnologías Implementadas
Instalación y Configuración
Uso
Estructura del Proyecto
Contribuciones
Licencia

Introducción
Este README está destinado a desarrolladores que desean clonar, configurar y contribuir a este proyecto de API REST. 
Aquí encontrarás información sobre las tecnologías usadas, cómo instalar y configurar el proyecto, y cómo contribuir al desarrollo.

Tecnologías Implementadas
Node.js: Entorno de ejecución para JavaScript.
Express: Framework para aplicaciones web.
MongoDB: Base de datos NoSQL.
Mongoose: ODM para MongoDB.
Docker: Contenerización de aplicaciones.
JWT (JSON Web Tokens): Autenticación.
bcryptjs: Hashing de contraseñas.
Express Validator: Validación de datos.
Google Maps API: Búsqueda de restaurantes cercanos.

Prerrequisitos
Node.js
Docker
Docker Compose

Instalación
1. Clona el repositorio:

bash
Copiar código
git clone git@github.com:Gowtherw/api-rest.git
cd api-rest

2. Instala las dependencias:

bash
Copiar código
npm install

3. Configurar las variables de entorno:
PORT=3000
DB_CNN=mongodb://mongo:27017/pruebaTecnica
JWT_SECRET=tu_secreto_de_jwt
GOOGLE_API_KEY=tu_api_key_de_google
 
