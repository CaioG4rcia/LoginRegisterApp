# Sistema de Autenticação

Este é um sistema de autenticação com cadastro e login de usuários. O projeto é dividido em frontend (React) e backend (Node.js com MySQL).

## Como Rodar o Projeto

Siga estes passos para colocar o projeto em funcionamento no seu computador:

1.  **Baixe a pasta do projeto:**
    Vá para a página do repositório no GitHub e baixe o projeto como um arquivo ZIP.
    Descompacte o arquivo ZIP em uma pasta no seu computador.

2.  **Configure o Banco de Dados MySQL:**
    * Certifique-se de ter um servidor MySQL rodando localmente (você pode usar ferramentas como WAMP Server, XAMPP, MAMP, ou MySQL Workbench).
    * Abra seu cliente MySQL (ex: MySQL Workbench, linha de comando, phpMyAdmin).
    * **O esquema do banco de dados para criar as tabelas está no arquivo `CriadorDeConta/database/schema.sql`**. Copie o conteúdo desse arquivo e cole/execute no seu cliente MySQL para criar o banco de dados e as tabelas necessárias.

3.  **Abra o terminal na pasta principal do projeto:**
    Navegue até a pasta `LoginRegisterApp/CriadorDeConta/`.
    Você pode fazer isso abrindo o terminal e usando o comando `cd` (exemplo, adaptando ao seu caminho):
    ```bash
    cd "C:\Caminho\Para\Onde\Voce\Baixou\LoginRegisterApp\CriadorDeConta"
    ```
    Ou, se estiver usando o VS Code, abra a pasta `CriadorDeConta` diretamente e use o terminal integrado.

4.  **Instale as dependências (somente na primeira vez):**
    Com o terminal aberto na pasta `CriadorDeConta`, execute o comando:
    ```bash
    npm install
    ```
    Isso instalará tudo que o projeto precisa para rodar.

5.  **Inicie o Projeto:**
    Ainda no mesmo terminal, execute:
    ```bash
    npm run dev
    ```
    Este comando vai iniciar tanto o servidor backend quanto o aplicativo frontend.
    O aplicativo React será aberto automaticamente no seu navegador em `http://localhost:3000`.

## Uso

* **Cadastro:** No navegador, você pode usar a rota de cadastro (ex: `/register`) para criar uma nova conta.
* **Login:** Depois de se cadastrar, use a rota de login (ex: `/login`) para acessar o sistema com suas credenciais.

---
