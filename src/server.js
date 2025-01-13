const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const produtosRoutes = require("../routes/produtos"); // Importando o router

const app = express();
const port = 3000;

// Middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, "..", "public")));

// Middleware para processar JSON no corpo das requisições
app.use(bodyParser.json());

// Montando o router no caminho '/produtos'
app.use("/produtos", produtosRoutes);

// Rota principal para a página inicial
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "html", "index.html"));
});

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});