// URL
const url = "http://localhost:3000/users";

// Campos contendo os valores atuais
const nameValue = document.getElementById("name-value");
const ageValue = document.getElementById("age-value");
const bodyValue = document.getElementById("body-value");

// Pega os elementos e valores do usuário atual
export const atualizarUsuario = async (parenteElemento) => {
  const titleContent = parenteElemento.querySelector(".card-title").textContent;
  const ageContent =
    parenteElemento.querySelector(".card-subtitle").textContent;
  const bodyContent = parenteElemento.querySelector(".card-text").textContent;

  nameValue.value = titleContent.split(" ").slice(1).join(" ");
  ageValue.value = ageContent.split(" ").slice(1).join(" ");
  bodyValue.value = bodyContent;
};

export const enviaAtualizado = async (id) => {
  try {
    const resposta = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        // Formata os dados para JSON
        fullName: nameValue.value, //Insere os valores
        age: ageValue.value,
        body: bodyValue.value,
      }),
    });
    if (!resposta.ok) throw new Error(resposta.message);
    location.reload();
    return resposta;
  } catch (error) {
    console.log(error);
  }
};
