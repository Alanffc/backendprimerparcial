require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose'); // Importar mongoose
const connectDB = require('./config/db');
const { contarOperaciones, obtenerContador } = require('./middlewares/contador');
const usuarioRoutes = require('./routes/usuarios');
const productoRoutes = require('./routes/productos');

const app = express();

// Middlewares
app.use(express.json());
app.use(contarOperaciones); // Aplica a todas las rutas

// Conexión a MongoDB
connectDB();

// Rutas
app.use('/usuarios', usuarioRoutes);
app.use('/productos', productoRoutes);

// Endpoint para contadores
app.get('/contadores', async (req, res) => {
  try {
    const usuarios = await mongoose.model('Usuario').countDocuments();
    const productos = await mongoose.model('Producto').countDocuments();
    res.json({ usuarios, productos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Endpoint para operaciones
app.get('/operaciones', (req, res) => {
  res.json({ totalOperaciones: obtenerContador() });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});