# backend-nodejs

Projeto de criação de uma API que possibilite um CRUD.                 
Através deste <a href="https://storeapi-f1cq.onrender.com/">link</a> você pode ter acesso as rotas.

## Como utilizar?

Para rodar o projeto é necessário baixar as dependencias. Voce pode baixar rodando o seguinte código:

```
npm install express mustache-express nodemon sequelize sqlite3
```

Após isso, rode o código para iniciar o servidor:

```
npm run start
```

## Modelos

Para criação e manipulação do banco de dados utilizamos o ORM Sequelize e desenvolvemos os seguintes modelos:

### Product

campo | tipo
------ | -------
id |INTEGER
name | STRING
description | TEXT
price | DECIMAL
categoryId | INTEGER (PK)


### Category

campo | tipo
------ | -------
id |INTEGER
name | STRING

## Rotas
Para acessar e manipular as informações, utilize as seguintes rotas:

### Products


Método    | Rota           | Ação
--------- | ------          | ----------
GET       | /products | pegar todos produtos
GET       | /products/:id | pegar um produto pelo seu id
POST      | /products | criar um novo produto
PUT       | /products | atualizar um produto
DELETE    | /products/:id | deletar um produto pelo seu id


### Categories


Método    | Rota           | Ação
--------- | ------          | ----------
GET       | /categories | pegar todas as categorias
GET       | /categories/:id | pegar uma categoria pelo seu id
POST      | /categories | criar uma nova categoria
PUT       | /categories | atualizar uma categoria
DELETE    | /categories/:id | deletar uma categoria pelo seu id
