export default function criarCard(users) {
  let output = "";

  for (let user of users) {
    output += `
    <div class="card mt-4 col-md-6 bg-light">
      <div class="card-body" data-id=${user.id}>
        <h5 class="card-title">Nome: ${user.fullName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Idade: ${user.age}</h6>
        <p class="card-text">${user.body}</p>
        <a href="#" class="card-link" id="edit-user">Editar</a>
        <a href="#" class="card-link" id="delete-user">Deletar</a>
      </div>
    </div>`;
  }
  // data-"nomeProID"="" é uma tag customizada para salvar ids customizados dinamicamente
  document.querySelector(".posts-list").innerHTML = output;
}
