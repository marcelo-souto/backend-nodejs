const express = require('express')
const dotenv = require('dotenv')
const productRoutes = require('./routes/productRoutes.js')
const categoryRoutes = require('./routes/categoryRoutes.js')
dotenv.config()

const server = express()
const port = process.env.PORT;

server.use(express.json())
server.use('/products', productRoutes)
server.use('/categories', categoryRoutes)

server.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});