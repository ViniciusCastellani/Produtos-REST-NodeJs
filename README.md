# Projeto Básico de CRUD de Produtos com Node.js

Este é um projeto simples desenvolvido em **Node.js** para cadastrar e listar produtos com ordenação pelo valor (do menor para o maior). Ele utiliza os métodos **GET** e **POST**, e inclui um frontend básico para interação com o servidor.

---

## **Funcionalidades**

- **Cadastro de Produtos:** Envia dados do produto ao servidor via POST.
  - Campos do produto:
    - Nome
    - Descrição
    - Valor
    - Disponível para venda (sim/não)
- **Listagem de Produtos:** Obtém todos os produtos cadastrados e os exibe ordenados pelo valor, do menor para o maior.

---

## **Arquitetura do Projeto**

### **Estrutura de Diretórios**

```
project
├── public
│   ├── html
│   │   ├── index.html
│   │   └── produtos.html
│   ├── javascript
│   │   └── produtos.js
│   ├── stylesheets
│   │   ├── produtos.css
│   │   └── style.css
└── src
    ├── routes
    │   └── produtos.js
    └── server.js
```

### **Detalhes dos Arquivos**

- **`server.js`**:
  Arquivo principal que configura o servidor Express, define rotas principais e serve arquivos estáticos da pasta `public`.

- **`routes/produtos.js`**:
  Define os endpoints relacionados aos produtos:
  - **POST `/produtos`**: Adiciona um novo produto.
  - **GET `/produtos`**: Retorna todos os produtos cadastrados, ordenados pelo valor.

- **`public/html/index.html`**:
  Página inicial com o formulário para cadastrar produtos.

- **`public/html/produtos.html`**:
  Página para listar os produtos cadastrados.

- **`public/javascript/produtos.js`**:
  Contém as funções JavaScript para enviar dados ao servidor e buscar produtos.

- **`public/stylesheets/produtos.css`**:
  Estilos CSS para as páginas HTML, incluindo responsividade e design.

---

## **Configuração do Ambiente**

1. **Clone o repositório:**
   ```bash
   git clone <URL-DO-REPOSITORIO>
   cd project
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   node src/server.js
   ```

4. **Acesse o sistema no navegador:**
   - Cadastro de produtos: [http://localhost:3000/html/index.html](http://localhost:3000/html/index.html)
   - Listagem de produtos: [http://localhost:3000/html/produtos.html](http://localhost:3000/html/produtos.html)

---

## **Exemplos de Endpoints**

### **POST `/produtos`**
- **Descrição:** Adiciona um novo produto.
- **Corpo da requisição:**
  ```json
  {
    "nome": "Produto A",
    "descricao": "Descricao do produto A",
    "valor": 100.50,
    "disponivel": "Sim"
  }
  ```
- **Resposta de sucesso:**
  ```json
  {
    "mensagem": "Produto cadastrado com sucesso!"
  }
  ```

### **GET `/produtos`**
- **Descrição:** Retorna todos os produtos cadastrados, ordenados pelo valor.
- **Exemplo de resposta:**
  ```json
  [
    {
      "nome": "Produto B",
      "descricao": "Descricao do produto B",
      "valor": 50.0,
      "disponivel": "Nao"
    },
    {
      "nome": "Produto A",
      "descricao": "Descricao do produto A",
      "valor": 100.5,
      "disponivel": "Sim"
    }
  ]
  ```

---

## **Frontend - Formulário de Cadastro (`index.html`)**

O formulário permite cadastrar produtos com os seguintes campos:

- Nome
- Descrição
- Valor
- Disponível para venda (sim/não)

Exemplo de código:

```html
<form id="formularioProd">
  <label for="nome">Nome:</label><br>
  <input type="text" id="nome" required><br><br>
  <label for="descricao">Descrição:</label><br>
  <textarea id="descricao" required></textarea><br><br>
  <label for="valor">Valor:</label><br>
  <input type="number" id="valor" step="0.01" required><br><br>
  <p>Disponível para venda?</p>
  <select id="disponivelVenda">
    <option value="Sim">Sim</option>
    <option value="Nao">Nao</option>
  </select><br><br>
  <button id="botaoSubmit" type="button" onclick="enviarForm()">Enviar produto</button>
</form>
```

---

## **Considerações Finais**

Este projeto demonstra como criar uma aplicação básica de CRUD com Node.js e Express, usando boas práticas na organização de arquivos e separação de responsabilidades. Pode ser facilmente expandido para incluir mais funcionalidades.

