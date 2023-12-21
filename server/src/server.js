const express = require("express");
const cors = require("cors");
const app = require("./app")
// Middleware para habilitar o CORS
app.use(cors());

// Outras configurações e rotas do seu aplicativo

const port = process.env.PORT || 5000;

app.listen(port, () =>
);


const app = require("./app")

// const port = process.env.PORT || 3000

// app.listen(port, () =>
//   console.log(`Server listening on port ${port}`)
// )