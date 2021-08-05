// Principal
export const buscaCEP = async (cep) => {
  try {
    const cepBuscado = await fetch(
      `https://viacep.com.br/ws/${cep}/json`,
      options
    );
    if (!cepBuscado.ok) throw new Error(cepBuscado.message);

    const resultado = await cepBuscado.json();
    return resultado;
  } catch (error) {
    console.error(error.message);
  }
};

const options = {
  method: "GET",
  headers: { "Content-Type": "application/json" },
  mode: "cors",
  cache: "default",
};
