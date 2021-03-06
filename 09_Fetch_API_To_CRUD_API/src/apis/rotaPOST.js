// --- Campos contendo os valores atuais
const nameValue = document.getElementById("name-value");
const ageValue = document.getElementById("age-value");
const bodyValue = document.getElementById("body-value");

// URL
const url = "http://localhost:3000/users";

export default async function enviarUsuario() {
  try {
    const result = await fetch(url, {
      // Envia requisição
      method: "POST", // Define o método da requisiçao para envio de dados ( POST )
      headers: { "Content-Type": "application/json" }, // Define qual vai ser o tipo de dado
      body: JSON.stringify({
        // Formata os dados para JSON
        fullName: nameValue.value, //Insere os valores
        age: ageValue.value,
        body: bodyValue.value,
      }),
    });
    if (!result.ok) throw new Error(result.message);
    //const data = await result.json();
    location.reload();
    return result; // Retorna o JSON
  } catch (error) {
    console.error(error);
    console.log(`Por favor preencha os campos corretamente`);
  }
}
