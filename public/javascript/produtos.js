function enviarForm(){
    event.preventDefault();

    produtoJSON = criarProdutoJSON();

    if(produtoJSON === undefined){
      return;
    }

    console.log('Dados em JSON:');
    console.log(produtoJSON);

    fetch("/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: produtoJSON,
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          alert("Produto enviado com sucesso!");
          window.location.href = "../html/produtos.html";
        } else {
          throw new Error("Erro na requisição");
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
        alert("Erro ao enviar produto: " + error.message);
      });
}


function criarProdutoJSON(){
        const nome = document.getElementById("nome").value;
        const descricao = document.getElementById("descricao").value;
        const valor = parseFloat(document.getElementById("valor").value);
        const disponivelVenda =
          document.getElementById("disponivelVenda").value;

        if (nome === "" || descricao === "" || valor === "" || disponivelVenda === "") {
          alert("Preencha todos os campos");
          return;
        }

        else if (isNaN(valor)) {
          alert("O valor deve ser um número");
          return;
        }

        const produto = {
          nome: nome,
          descricao: descricao,
          valor: valor,
          disponivelVenda: disponivelVenda,
        };

        return JSON.stringify(produto);
}


function carregarProdutos(){  
  fetch("/produtos", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    console.log(response);
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Erro na requisição");
    }
  })
  .then((produtos) => {
    console.log(produtos);
    adicionarProdutosTabela(produtos);
  })
}


function adicionarProdutosTabela(listaProdutos){
  let produtosOrdenados = [...listaProdutos].sort((a, b) => {
    return a.valor - b.valor;
  });

  let tabela = "<table>";

    tabela += "<thead>";
    tabela += "<tr>";
    tabela += "<th>nome</th>";
    tabela += "<th>valor</th>";
    tabela += "</tr>";
    tabela += "</thead>";
  

    produtosOrdenados.forEach(produto => {
        tabela += "<tr>";
        tabela += `<td>${produto.nome}</td>`;
        tabela += `<td>${produto.valor}</td>`;
        tabela += "</tr>";
    });

    tabela += "</table>";

    document.getElementById("divProdutos").innerHTML = tabela;    
}


function voltarCadProd(){
  window.location.href = "../html/index.html";
}