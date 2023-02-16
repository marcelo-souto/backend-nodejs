const express = require('express');
const mustache = require('mustache-express')
const path = require('path')
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes.js');
const categoryRoutes = require('./routes/categoryRoutes.js');
const mainRoutes = require('./routes/mainRoutes.js');

dotenv.config();

const server = express();
const port = process.env.PORT;

server.use(express.json());

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, 'views'))
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(mainRoutes);
server.use('/products', productRoutes);
server.use('/categories', categoryRoutes);

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
