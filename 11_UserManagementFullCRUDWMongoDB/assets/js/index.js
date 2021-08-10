$("#add_user").submit((e) => {
  alert("Usuário inserido com sucesso!");
});

$("#update_user").submit(async (e) => {
  e.preventDefault();

  // Transforma os dados dos values em um array para cada valor
  let unindexed_array = $("#update_user").serializeArray();
  let data = {};
  // Para cada array dos valores, pega o nome da chave e o valor dela
  $.map(unindexed_array, (posicaoArray, index) => {
    data[posicaoArray["name"]] = posicaoArray["value"];
  });

  const usuario = JSON.stringify(data);
  try {
    await fetch(`http://localhost:3000/api/users/${data.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: usuario,
    });
    alert("Usuário Atualizado com sucesso!");
  } catch (error) {
    console.log(error);
  }
});

if (window.location.pathname == "/") {
  const userList = document.querySelector(".user-list");

  userList.addEventListener("click", (e) => {
    let id = e.target.parentElement.dataset.id;
    console.log(id);
  });

  // $ondelete = $(".table tbody td a.delete");
  // $ondelete.click(async (e) => {
  //   let id = $(this).dataset.id;

  //   console.log(id);
  //   if (confirm("Tem certeza que quer deletar esse usuário?")) {
  //     try {
  //       await fetch(`http://localhost:3000/api/users/${id}`, {
  //         method: "DELETE",
  //         headers: { "Content-Type": "application/json" },
  //       });
  //       alert("Usuário Deletado com sucesso!");
  //       location.reload();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // });
}
