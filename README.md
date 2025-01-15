
Este código implementa uma interface de gerenciamento de usuários que consome uma API criada anteriormente (o repositorio dela está aqui no meu perfil) para realizar operações de CRUD (Create, Read, Delete) de usuários.

## Estrutura do Componente `Home`

1. **Importações**:
   - Estilos CSS e hooks (`useEffect`, `useState`, `useRef`) do React.
   - Imagem de ícone para deletar usuários (`Delete.svg`).
   - Serviço de API configurado (`api`).

2. **Estados e Referências**:
   - `users`: Um estado que armazena a lista de usuários obtidos da API.
   - `inputName`, `inputAge`, `inputEmail`: Referências para acessar os valores dos campos do formulário sem necessidade de estados.

3. **Funções Principais**:
   - **`getUsers`**:
     - Faz uma requisição `GET` para o endpoint `/user` da API.
     - Atualiza o estado `users` com os dados retornados.
   - **`createUsers`**:
     - Lê os valores dos campos de entrada do formulário.
     - Converte a idade (`age`) para um número com `parseInt`.
     - Faz uma requisição `POST` para o endpoint `/user` para criar um novo usuário.
     - Limpa os campos do formulário após o envio e atualiza a lista de usuários.
   - **`deleteUsers`**:
     - Recebe o ID de um usuário como parâmetro.
     - Faz uma requisição `DELETE` para o endpoint `/user/:id` para deletar o usuário correspondente.
     - Atualiza a lista de usuários após a exclusão.

4. **Efeito Colateral**:
   - O hook `useEffect` é utilizado para carregar a lista de usuários da API quando o componente é montado.

5. **Renderização**:
   - **Formulário de Cadastro**:
     - Permite inserir nome, idade e e-mail para criar novos usuários.
   - **Lista de Usuários**:
     - Cada usuário é exibido com nome, idade e e-mail.
     - Inclui um botão com um ícone de deletar para remover o usuário da lista.

6. **Interatividade**:
   - O botão de cadastro chama a função `createUsers`.
   - O botão de deletar chama a função `deleteUsers` passando o ID do usuário correspondente.

---

## Fluxo Geral
1. Ao carregar a página, a lista de usuários é buscada da API e exibida na tela.
2. O usuário pode cadastrar novos usuários preenchendo o formulário e clicando no botão de cadastro.
3. Cada usuário listado possui um botão para deletar, que ao ser clicado remove o usuário tanto da interface quanto do backend.

---

## Exemplo de Uso
1. Preencher o formulário:
   - Nome: `João`
   - Idade: `25`
   - E-mail: `joao@example.com`
2. Clicar no botão "Cadastrar":
   - O usuário será enviado à API e listado na interface.
3. Deletar um usuário:
   - Clicar no botão com ícone de lixeira ao lado de um usuário específico remove-o da interface e do backend.

---




# User Management Interface

This code implements a user management interface that consumes an API created earlier (the repository is available in my profile) to perform CRUD operations (Create, Read, Delete) on users.

## Component Structure: `Home`

### Imports:
- **CSS Styles** and **React Hooks** (`useEffect`, `useState`, `useRef`).
- **Delete Icon Image** (`Delete.svg`).
- **Configured API Service** (`api`).

### States and References:
- **`users`**: A state that stores the list of users fetched from the API.
- **`inputName`, `inputAge`, `inputEmail`**: References to access form field values without using additional states.

### Main Functions:

#### `getUsers`:
- Makes a **GET** request to the `/user` endpoint of the API.
- Updates the `users` state with the returned data.

#### `createUsers`:
- Reads the values of the form fields.
- Converts the `age` field to a number using `parseInt`.
- Makes a **POST** request to the `/user` endpoint to create a new user.
- Clears the form fields after submission and refreshes the user list.

#### `deleteUsers`:
- Receives the ID of a user as a parameter.
- Makes a **DELETE** request to the `/user/:id` endpoint to delete the specified user.
- Refreshes the user list after deletion.

### Side Effects:
- The `useEffect` hook is used to fetch the list of users from the API when the component mounts.

### Rendering:

#### Registration Form:
- Allows users to input:
  - **Name**: The user's name.
  - **Age**: The user's age (numbers only).
  - **Email**: The user's email.
- A button triggers the **`createUsers`** function to add a new user.

#### User List:
- Each user is displayed with their:
  - **Name**
  - **Age**
  - **Email**
- Includes a delete button (with an icon) to remove the user.

### Interactivity:
- The **register button** calls the `createUsers` function.
- The **delete button** calls the `deleteUsers` function, passing the corresponding user's ID.

---

## General Workflow
1. **Page Load**:
   - The user list is fetched from the API and displayed on the screen.
2. **Registering Users**:
   - Users can fill out the form and click the register button to add a new user.
3. **Deleting Users**:
   - Clicking the delete button next to a user removes them from the interface and the backend.

---

## Example Usage:

### Register a User:
1. Fill out the form with:
   - **Name**: João
   - **Age**: 25
   - **Email**: joao@example.com
2. Click the **"Register"** button.
   - João will be sent to the API and listed in the interface.

### Delete a User:
1. Click the delete button (trash can icon) next to João's name.
   - João will be removed from both the interface and the backend.
