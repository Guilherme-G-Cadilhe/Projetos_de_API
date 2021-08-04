import Joi from "joi"; // Biblioteca de validação de Dados

//---- Validação de Dados -----
const modeloValidacao = Joi.object({
  // Cria o Esquema de Validação
  fullName: Joi.string()
    .regex(/^[A-Za-z][A-Za-z\'\-]+$/i) // Validação
    .min(2)
    .max(30)
    .required()
    .label("Nome Completo"), // Regra de validação pra o fullName
  age: Joi.number().min(1).max(100).required().label("Idade"), // Regra de validação pra idade
  body: Joi.string().min(1).max(100).required().label("Descrição"), // Regra de validação pra o body( Descrição )
});

export default function validarDados(dados) {
  const result = modeloValidacao.validate({
    //Passa as propriedades para serem validadas
    fullName: dados.fullName,
    age: dados.age,
    body: dados.body,
  });

  return result;
}

// (/^[A-Za-z][A-Za-z\'\-]+([\ A-Za-z][A-Za-z\'\-]+)*/)
