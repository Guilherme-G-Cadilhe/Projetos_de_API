import Joi from "joi"; // Biblioteca de validação de Dados

//---- Validação de Dados -----
const modeloValidacao = Joi.object({
  // Cria o Esquema de Validação
  firstName: Joi.string().min(3).max(15).required().label("Nome"), // Regra de validação pra o firstName
  lastName: Joi.string().min(4).max(12).required().label("Sobrenome"), // Regra de validação pra o lastName
  age: Joi.number().min(1).max(100).label("Idade"), // Regra de validação pra idade
});

export default function validarDados(dados) {
  const result = modeloValidacao.validate({
    //Passa as propriedades para serem validadas
    firstName: dados.firstName,
    lastName: dados.lastName,
    age: dados.age,
  });

  return result;
}
