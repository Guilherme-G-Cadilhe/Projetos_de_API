import criarCard from "./src/render/criarCard.js"; // Função de Render
import enviarUsuario from "./src/apis/rotaPOST.js"; // Função POST
import deletarUsuario from "./src/apis/rotaDELETE.js"; // Função DELETE
import { atualizarUsuario } from "./src/apis/rotaPUT.js"; // Função PUT - Pegar Dados
import { enviaAtualizado } from "./src/apis/rotaPUT.js"; // Função PUT - Atualizar Usuario

// URL
const url = "http://localhost:3000/users";

// Pegar Formulário e Consts
const addPostForm = document.querySelector(".add-post-form");
const usersList = document.querySelector(".posts-list");
const btnSubmit = document.querySelector(".btn");

// ------------ Métodos API -------------

// Method: GET - Pega os Usuários ( Padrão inicio automatico)
async function getContent() {
  try {
    const resposta = await fetch(url); // Pega os Recursos ( usuarios )
    if (!resposta.ok) throw new Error(resposta.message);

    const data = await resposta.json(); // transforma em json a "res"
    console.log(data);
    criarCard(data); // Joga json dos dados no criador de cards
  } catch (error) {
    console.error(error);
  }
}
getContent();

// Method: DELETE and PUT - Deletar e Atualizar
usersList.addEventListener("click", (e) => {
  let delButtonIsPressed = e.target.id == "delete-user";
  let editButtonIsPressed = e.target.id == "edit-user";
  let id = e.target.parentElement.dataset.id; // Acessa o nome do id/dado
  //customizado salvo no data-"id"=Valor

  // --- Deletar Usuário ( Chamada ) ---
  if (delButtonIsPressed) {
    deletarUsuario(id);
  }

  // --- Atualizar Usuário ( Chamada ) ---
  if (editButtonIsPressed) {
    // Pega os valores atuais dentro dos elementos dos card
    const parent = e.target.parentElement;
    atualizarUsuario(parent);
    console.log(id);
  }

  // Method: PUT - Atualizar Usuário
  btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    enviaAtualizado(id);
  });
});

// Method: POST - Criar novo usuário
addPostForm.addEventListener("submit", () => {
  enviarUsuario();
});
