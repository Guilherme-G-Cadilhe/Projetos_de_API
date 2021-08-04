import criarCard from "./src/render/criarCard.js"; // Função de Render
import enviarUsuario from "./src/apis/rotaPOST.js"; // Função POST

// Pegar Formulário
const addPostForm = document.querySelector(".add-post-form");

// Method: GET - Pega os Usuários ( Padrão inicio automatico)
async function getContent() {
  try {
    const resposta = await fetch("http://localhost:3000/users"); // Pega os Recursos ( usuarios )
    if (!resposta.ok) throw new Error(resposta.message);

    const data = await resposta.json(); // transforma em json a "res"
    console.log(data);
    criarCard(data); // Joga json dos dados no criador de cards
  } catch (error) {
    console.error(error);
  }
}
getContent();

// Method: POST - Criar novo usuário
addPostForm.addEventListener("submit", (e) => {
  e.preventDefault();
  enviarUsuario();
});
