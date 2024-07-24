# Usar la imagen oficial de Node.js
FROM node:16

# Crear y establecer el directorio de trabajo de la aplicación
WORKDIR /usr/src/app

# Copiar los archivos package.json y package-lock.json
COPY package*.json ./

# Instalar las dependencias de la aplicación
RUN npm install

# Copiar el resto de los archivos de la aplicación
COPY . .

# Exponer el puerto en el que la aplicación correrá
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["node", "src/index.js"]
