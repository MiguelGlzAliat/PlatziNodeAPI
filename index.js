const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hola server de express');
})

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy un nuevo Endpoint');
})

app.get('/productos', (req, res) => {
  const { page } = req.query;
  const limit = page || 100;
  const productos = [];
  for (let index = 0; index < limit; index++) {
    productos.push({
      nombre: faker.commerce.productName(),
      precio: parseInt(faker.commerce.price(), 10),
      imagen: faker.image.imageUrl()
    });
  }
  res.json(productos);
})

app.get('/productos/:id', (req, res) => {
  const { id } = req.params;
  res.json([id, {
    nombre: "producto #2",
    precio: 300
  }]);
})

app.get('/categorias/:id_cat/productos/:id_prod', (req, res) => {
  const { id_cat, id_prod } = req.params;
  res.json({
    id_cat,
    id_prod
  })
})

app.get('/usuarios', (req, res) => {
  const { limit, offset } = req.query;
  (limit && offset)?res.json({limit, offset}):res.send("Ay caramba, no hay nada");
})

app.listen(port, () => {
  console.log('Escuchando al puerto ' + port + '...');
})

console.log('My app');
