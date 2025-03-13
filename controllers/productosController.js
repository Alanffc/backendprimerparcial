// Importar el modelo Producto
const Producto = require('../models/Producto');

// Controlador para crear un nuevo producto (POST /productos)
const crearProducto = async (req, res) => {
  try {
    // 1. Crear un nuevo producto con los datos del body
    const nuevoProducto = new Producto({
      nombre: req.body.nombre,
      precio: req.body.precio,
      categoria: req.body.categoria
    });

    // 2. Guardar el producto en la base de datos
    const productoGuardado = await nuevoProducto.save();

    // 3. Responder con el producto creado (código 201: Created)
    res.status(201).json(productoGuardado);

  } catch (error) {
    // 4. Manejar errores (ej: datos faltantes o inválidos)
    res.status(400).json({ 
      error: 'Error al crear el producto',
      detalles: error.message 
    });
  }
};

// Controlador para obtener todos los productos (GET /productos)
const obtenerProductos = async (req, res) => {
  try {
    // 1. Buscar todos los productos en la base de datos
    const productos = await Producto.find();

    // 2. Responder con la lista de productos
    res.json(productos);

  } catch (error) {
    // 3. Manejar errores de servidor (código 500)
    res.status(500).json({ 
      error: 'Error al obtener los productos',
      detalles: error.message 
    });
  }
};

// Controlador para actualizar un producto (PUT /productos/:id)
const actualizarProducto = async (req, res) => {
  try {
    // 1. Buscar y actualizar el producto por ID
    const productoActualizado = await Producto.findByIdAndUpdate(
      req.params.id,    // ID del producto
      req.body,         // Nuevos datos
      { new: true }     // Devuelve el documento actualizado
    );

    // 2. Verificar si se encontró el producto
    if (!productoActualizado) {
      return res.status(404).json({ 
        error: 'Producto no encontrado' 
      });
    }

    // 3. Responder con el producto actualizado
    res.json(productoActualizado);

  } catch (error) {
    // 4. Manejar errores (ej: ID inválido)
    res.status(400).json({ 
      error: 'Error al actualizar el producto',
      detalles: error.message 
    });
  }
};

// Controlador para eliminar un producto (DELETE /productos/:id)
const eliminarProducto = async (req, res) => {
  try {
    // 1. Buscar y eliminar el producto por ID
    const productoEliminado = await Producto.findByIdAndDelete(req.params.id);

    // 2. Verificar si se encontró el producto
    if (!productoEliminado) {
      return res.status(404).json({ 
        error: 'Producto no encontrado' 
      });
    }

    // 3. Confirmar la eliminación
    res.json({ 
      mensaje: 'Producto eliminado exitosamente',
      producto: productoEliminado 
    });

  } catch (error) {
    // 4. Manejar errores (ej: ID inválido)
    res.status(500).json({ 
      error: 'Error al eliminar el producto',
      detalles: error.message 
    });
  }
};

// Exportar todos los controladores
module.exports = {
  crearProducto,
  obtenerProductos,
  actualizarProducto,
  eliminarProducto
};