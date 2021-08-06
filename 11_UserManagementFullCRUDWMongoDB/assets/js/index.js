$("#add_user").submit((e) => {
  alert("Usuário inserido com sucesso!");
});

$("#update_user").submit((e) => {
  e.preventDefault();

  let unindexed_array = $("#update_user").serializeArray();
  console.log(unindexed_array);
});
