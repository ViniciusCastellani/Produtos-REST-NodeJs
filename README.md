# Basic CRUD Project for Products with Node.js

This is a simple project built with **Node.js** to register and list products, sorting them by value (from lowest to highest). It uses **GET** and **POST** methods and includes a basic frontend to interact with the server.

---

## **Features**

- **Product Registration:** Sends product data to the server via POST.
  - Product fields:
    - Name
    - Description
    - Value
    - Available for sale (yes/no)
- **Product Listing:** Retrieves all registered products and displays them sorted by value, from lowest to highest.

---

## **Project Architecture**

### **Directory Structure**

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

### **File Details**

- **`server.js`**:
  The main file that configures the Express server, defines primary routes, and serves static files from the `public` folder.

- **`routes/produtos.js`**:
  Defines endpoints related to products:
  - **POST `/produtos`**: Adds a new product.
  - **GET `/produtos`**: Returns all registered products, sorted by value.

- **`public/html/index.html`**:
  The main page with a form for registering products.

- **`public/html/produtos.html`**:
  The page for listing registered products.

- **`public/javascript/produtos.js`**:
  Contains JavaScript functions for sending data to the server and fetching products.

- **`public/stylesheets/produtos.css`**:
  CSS styles for the HTML pages, including responsiveness and design.

---

## **Environment Setup**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ViniciusCastellani/Produtos-REST-NodeJs.git
   cd Produtos-REST-NodeJs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   node src/server.js
   ```

4. **Access the system in your browser:**
   - Product registration: [http://localhost:3000/html/index.html](http://localhost:3000/html/index.html)
   - Product listing: [http://localhost:3000/html/produtos.html](http://localhost:3000/html/produtos.html)

---

## **Endpoint Examples**

### **POST `/produtos`**
- **Description:** Adds a new product.
- **Request body:**
  ```json
  {
    "nome": "Product A",
    "descricao": "Description of Product A",
    "valor": 100.50,
    "disponivel": "Yes"
  }
  ```
- **Success response:**
  ```json
  {
    "message": "Product successfully registered!"
  }
  ```

### **GET `/produtos`**
- **Description:** Retrieves all registered products, sorted by value.
- **Example response:**
  ```json
  [
    {
      "nome": "Product B",
      "descricao": "Description of Product B",
      "valor": 50.0,
      "disponivel": "No"
    },
    {
      "nome": "Product A",
      "descricao": "Description of Product A",
      "valor": 100.5,
      "disponivel": "Yes"
    }
  ]
  ```

---

## **Frontend - Registration Form (`index.html`)**

The form allows registering products with the following fields:

- Name
- Description
- Value
- Available for sale (yes/no)

Example code:

```html
<form id="formularioProd">
  <label for="nome">Name:</label><br>
  <input type="text" id="nome" required><br><br>
  <label for="descricao">Description:</label><br>
  <textarea id="descricao" required></textarea><br><br>
  <label for="valor">Value:</label><br>
  <input type="number" id="valor" step="0.01" required><br><br>
  <p>Available for sale?</p>
  <select id="disponivelVenda">
    <option value="Sim">Yes</option>
    <option value="Nao">No</option>
  </select><br><br>
  <button id="botaoSubmit" type="button" onclick="enviarForm()">Submit product</button>
</form>
```

---

## **Final Considerations**

This project demonstrates how to create a basic CRUD application using Node.js and Express, following good practices in file organization and separation of responsibilities. It can be easily expanded to include more features.
