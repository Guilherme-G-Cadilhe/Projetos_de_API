import criarCard from "./src/render/criarCard.js"; // Função de Render
import enviarUsuario from "./src/apis/rotaPOST.js"; // Função POST
import deletarUsuario from "./src/apis/rotaDELETE.js"; // Função DELETE

// URL
const url = "http://localhost:3000/users";

// Pegar Formulário
const addPostForm = document.querySelector(".add-post-form");
const usersList = document.querySelector(".posts-list");

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

  // Deletar
  if (delButtonIsPressed) {
    deletarUsuario(id);
  }
});

// Method: POST - Criar novo usuário
addPostForm.addEventListener("submit", (e) => {
  enviarUsuario();
});
