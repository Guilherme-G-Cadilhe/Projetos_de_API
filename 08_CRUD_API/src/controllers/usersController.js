import { v4 as uuidv4 } from "uuid"; //Id único criptografado

let users = []; // Array para armazenar usuários

//------- Principal -----------
const usersController = {
  getUsers(req, res) {
    res.send(users);
  },
  createUser(req, res) {
    const user = req.body; // Dados do Usuário

    //--- Forma em extenso de adicionar usuários ----
    // const userId = uuidv4(); //Id do usuário
    // const userWithId = { ...user, id: userId }; // Usuário Completo
    // users.push(userWithId); // Adiciona o usuário

    //---- Forma Resumida de adicionar usuários-----
    users.push({ ...user, id: uuidv4() });

    res.send(`Úsuario com o nome: [${user.firstName}] enviado com sucesso!`);
  },
  getSingleUser(req, res) {
    const { id } = req.params; //Tira o 'users/:id'(número) dos paramêtros da página para ser o id

    const foundUser = users.find((user) => user.id === id); // Procura nos usuários o q tenha o ID

    res.send(foundUser);
  },
  deleteUser(req, res) {
    const { id } = req.params; //Tira o 'users/:id'(número) dos paramêtros da página para ser o id

    users = users.filter((user) => user.id !== id);

    res.send(`Usuário de id ${id} foi DELETADO com sucesso!`);
  },
  updateUser(req, res) {
    const { id } = req.params; //Pega o id pelo paramêtro da URL
    const { firstName, lastName, age } = req.body; //Pega os dados enviados do site
    const userToUpdate = users.find((user) => user.id === id); //Pega o usuario pelo id

    if (firstName) userToUpdate.firstName = firstName;
    // Muda para a propriedade Atualizada recebida pelo req.body
    if (lastName) userToUpdate.lastName = lastName;
    if (age) userToUpdate.age = age;

    res.send(`Usuário de id ${id} foi ALTERADO com sucesso!`);
  },
};
export { usersController };
