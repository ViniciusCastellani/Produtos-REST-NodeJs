const express = require("express");
const router = express.Router(); 

let produtos = [];

router.post("/", (req, res) => {
  const produto = req.body; 
  produtos.push(produto);
  res.send("Produto cadastrado com sucesso!");
});

router.get("/", (req, res) => {
  res.json(produtos); 
});

module.exports = router;