// URL
const url = "http://localhost:3000/users";

export default async function deletarUsuario(id) {
  try {
    const resposta = await fetch(`${url}/${id}`, {
      //Passa o id que vai ser deletado
      method: "DELETE", // Chama a rota de DELETe
      headers: { "Content-Type": "application/json" }, // Indica o conteudo
      // Não precisa de body pq n temos nada pra enviar
    });
    if (!resposta.ok) throw new Error(resposta.message);
    location.reload();
    return resposta;
  } catch (error) {
    console.error(error);
  }
}
