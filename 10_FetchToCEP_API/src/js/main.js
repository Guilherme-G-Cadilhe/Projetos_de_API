import { buscaCEP } from "./API_CEP.js";

// Principal CEP
const cep = document.querySelector("#cep");

// Ao clicar fora
cep.addEventListener("blur", async (e) => {
  let search = cep.value.replace("-", ""); // Retira o - e junta a string
  const data = await buscaCEP(search); // Fetch do CEP
  console.log(data);
  showData(data);
});

// Mostrar Resultado
const showData = (resultadoCEP) => {
  for (const campo in resultadoCEP) {
    if (document.querySelector(`#${campo}`)) {
      document.querySelector(`#${campo}`).value = resultadoCEP[campo];
    }
  }
};
