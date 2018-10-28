const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");
//Iniciando a aplicação
const app = express();
app.use(express.json());
app.use(cors());
//Conexão com o banco de dados MongoDB
mongoose.connect(
    'mongodb://ip:27017/nodeapi',
    {useNewUrlParser:true}
);

//Registrando o Model na aplicação
requireDir('./src/models');
//Rotas
app.use("/api", require("./src/routes"));

//Ouvir a porta 3001 do navegador
app.listen(3001);