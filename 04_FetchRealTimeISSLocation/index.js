//Criando o mapa
// Criando um zoom inicial mais alto
const mymap = L.map('issMap').setView([0, 0], 6);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';

//Pegando o "chão" do mapa e atribuindo a contribuição
const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// Icone customizado para o mapa
const issIcon = L.icon({
  iconUrl: 'satellite.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16],
});
let marker = L.marker([0, 0], { icon: issIcon }).addTo(mymap);

const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let firstTime = true;

async function getISS() {
  // Pega os dados da API do ISS
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;

  // Sempre colcoa a visualização na latitude, longitude e zoom atual.
  mymap.setView([latitude, longitude], mymap.getZoom());
  marker.setLatLng([latitude, longitude]);

  document.getElementById('lat').textContent = latitude.toFixed(2);
  document.getElementById('lon').textContent = longitude.toFixed(2);
}

getISS();
setInterval(getISS, 1000);
