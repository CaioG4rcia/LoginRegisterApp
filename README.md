# Sistema de Autenticação Completo

Este projeto implementa um sistema de autenticação seguro com frontend em React e backend em Node.js, usando MySQL para persistência de dados. Permite cadastro de novos usuários e login.

## Funcionalidades

* Cadastro de Usuários
* Login Seguro
* Backend RESTful API
* Persistência de Dados (MySQL)

## Tecnologias Utilizadas

### Frontend (React)

* React
* Fetch API
* React Router
* CSS Básico (Estilização padrão)

### Backend (Node.js)

* Node.js
* Express.js
* MySQL
* `mysql2` (ou ORM/Query Builder)
* `dotenv` (variáveis de ambiente)

## Guia de Início Rápido

Este projeto tem duas partes: **backend** e **frontend**. Ambas precisam ser configuradas e iniciadas.

### 1. Backend

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/CaioG4rcia/LoginRegisterApp.git](https://github.com/CaioG4rcia/LoginRegisterApp.git)
    cd LoginRegisterApp
    ```

2.  **Acesse a pasta do backend:**
    ```bash
    cd backend # ou o nome da pasta onde o backend está localizado
    ```

3.  **Instale as dependências:**
    ```bash
    npm install # ou yarn install
    ```

4.  **Configuração do Banco de Dados MySQL:**
    * Crie um banco de dados MySQL.
    * Crie um arquivo `.env` na raiz da pasta do backend com as seguintes variáveis de ambiente:
        ```
        DB_HOST=localhost
        DB_USER=seu_usuario_mysql
        DB_PASSWORD=sua_senha_mysql
        DB_NAME=seu_nome_do_banco_de_dados
        ```
    * Execute os scripts SQL para criar as tabelas necessárias. Exemplo de `schema.sql`:
        ```sql
        CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            username VARCHAR(255) NOT NULL UNIQUE,
            password VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        ```
        (Execute este script manualmente em seu cliente MySQL).

5.  **Inicie o servidor backend:**
    ```bash
    npm start # ou node server.js
    ```
    O servidor será iniciado em `http://localhost:5000`.

### 2. Frontend

1.  **Navegue até a pasta do frontend (em uma nova aba do terminal):**
    ```bash
    cd frontend # ou o nome da pasta onde o frontend está localizado
    ```

2.  **Instale as dependências:**
    ```bash
    npm install # ou yarn install
    ```

3.  **Inicie o aplicativo React:**
    ```bash
    npm start # ou yarn start
    ```
    O aplicativo será aberto no seu navegador em `http://localhost:3000`.

## Uso

1.  **Cadastro:** Acesse a rota de registro no frontend (ex: `/register`) para criar uma nova conta.
2.  **Login:** Após o cadastro, utilize suas credenciais na rota de login (ex: `/login`) para acessar o sistema.
