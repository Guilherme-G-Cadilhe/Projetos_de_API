export default function criarCard(users) {
  let output = "";

  for (let user of users) {
    output += `
    <div class="card mt-4 col-md-6 bg-light">
      <div class="card-body">
        <h5 class="card-title">Nome: ${user.fullName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Idade: ${user.age}</h6>
        <p class="card-text">${user.body}</p>
        <a href="#" class="card-link">Editar</a>
        <a href="#" class="card-link">Deletar</a>
      </div>
    </div>`;
  }

  document.querySelector(".posts-list").innerHTML = output;
}
