const express = require('express');
const { dbConnection } = require('./config/database');
require('dotenv').config();  // Asegúrate de que esto está presente y en la parte superior del archivo

const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());

// Conectar a la base de datos
dbConnection();

// Usar las rutas
app.use('/api', userRoutes);
app.use('/api', restaurantRoutes);
app.use('/api', transactionRoutes);
app.use('/api', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
