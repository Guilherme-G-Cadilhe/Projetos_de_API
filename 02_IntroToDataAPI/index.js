async function catchRainbow() {
  for (let foto = 1; foto <= 3; foto++) {
    //Array pra pegar varias fotos locais
    const response = await fetch(`rainbow${foto}.jpg`);
    //A resposta é = o resultado da função fetch
    const blob = await response.blob();
    //Transforma resposta em um blob
    document.getElementById(`rainbow${foto}`).src = URL.createObjectURL(blob);
    //Transforma um blob em Objeto URL
  }
  console.log(response); //Mostra o meta-data
  console.log(blob); //Mostra o meta-data
}
catchRainbow()
  .then((response) => console.log('Sucesso!'))
  //Caso funcione, escreve "Sucesso!"
  .catch((error) => {
    console.log('Ocorreu um Erro');
    console.error(error);
    //Caso de erro, envia o erro e um aviso
  });

async function getPoetry() {
  const response = await fetch('texto.txt');
  console.log(response);
  const text = await response.text();
  document.getElementById('poesia').innerHTML = text;
}
getPoetry();
