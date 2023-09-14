const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola server de express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo Endpoint');
})

app.get('/productos', (req, res) => {
  res.json({
    nombre: "Producto #1",
    precio: 10000
  });
})

app.listen(port, () => {
  console.log('Escuchando al puerto ' + port + '...');
})

console.log('My app');
