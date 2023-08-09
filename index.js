const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3002; // Puedes cambiar el puerto si es necesario

app.use(bodyParser.json());

app.post('/productos', (req, res) => {
  try {
    const productosData = fs.readFileSync('productos.json', 'utf8');
    const productos = JSON.parse(productosData);

    res.json(productos);
  } catch (error) {
    console.error('Error al leer el archivo:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});

