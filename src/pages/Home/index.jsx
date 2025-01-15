import "./style.css";
import { useEffect, useState, useRef } from "react";
import Delete from "../../assets/Delete.svg";
import api from "../../services/api";

function Home() {
  const [users, setUsers] = useState([]);

  // Referências para os campos de entrada
  const inputName = useRef();
  const inputAge = useRef();
  const inputEmail = useRef();

  // Função para buscar usuários da API
  async function getUsers() {
    const usersFromApi = await api.get("/user");
    setUsers(usersFromApi.data);
  }

  // Função para criar um novo usuário
  async function createUsers() {
    const age = parseInt(inputAge.current.value, 10); // Converte idade para número
    if (isNaN(age)) {
      alert("Por favor, insira uma idade válida.");
      return;
    }

    await api.post("/user", {
      name: inputName.current.value,
      age, // Usa o valor numérico
      email: inputEmail.current.value,
    });

    // Limpa os campos após envio
    inputName.current.value = "";
    inputAge.current.value = "";
    inputEmail.current.value = "";
    getUsers(); // Atualiza a lista de usuários após criar
  }

  // Função para deletar um usuário
  async function deleteUsers(id) {
    try {
      console.log(`Tentando deletar usuário com ID: ${id}`);
      await api.delete(`/user/${id}`);
      console.log(`Usuário com ID: ${id} deletado com sucesso`);
      getUsers(); // Atualiza a lista de usuários após deletar
    } catch (error) {
      console.error("Erro ao deletar usuário:", error);
      alert("Erro ao deletar usuário. Tente novamente.");
    }
  }

  // Busca os usuários ao carregar o componente
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Name" name="name" type="text" ref={inputName} />
        <input placeholder="Age" name="age" type="number" ref={inputAge} />
        <input placeholder="Email" name="email" type="email" ref={inputEmail} />
        <button type="button" onClick={createUsers}>
          Cadastrar
        </button>
      </form>
      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button onClick={() => deleteUsers(user.id)}>
            <img src={Delete} alt="Deletar" />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
