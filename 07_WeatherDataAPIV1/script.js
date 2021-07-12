/*
Sources:
Weather - https://openweathermap.org/
Geo Localization - https://opencagedata.com/
 */

let weather = {
  apiKey: 'YOUR API KEY HERE',
  fetchWeather: function (city) {
    //Pega o API
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => {
        //Testa se deu problema
        if (!response.ok) {
          alert('No weather found.');
          throw new Error('No weather found.');
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },

  //Mostra os dados no HTML
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    //Principal
    document.querySelector('.city').innerText = `Weather in ${name}`;
    document.querySelector('.icon').src = `https://api.openweathermap.org/img/w/${icon}.png`;
    document.querySelector('.description').innerText = description;
    document.querySelector('.temp').innerText = `${temp} °C`;
    document.querySelector('.humidity').innerText = `Humidity: ${humidity} %`;
    document.querySelector('.wind').innerText = `Wind speed: ${speed} km/h`;

    // Outros
    document.querySelector('.weather').classList.remove('loading');
    document.body.style.backgroundImage = `url('https://source.unsplash.com/1600x900/?${name}')`;
  },

  //Input de pesquisa das cidades
  search: function () {
    this.fetchWeather(document.querySelector('.search_bar').value);
  },
};

// Eventos para a pesquisa
document.querySelector('.search button').addEventListener('click', function () {
  weather.search();
});
document.querySelector('.search_bar').addEventListener('keyup', function (event) {
  if (event.keyCode === 13) {
    weather.search();
  }
});

// Achar localização inicial do cliente
let geocode = {
  reverseGeocode: function (latitude, longitude) {
    //API
    const apikey = 'YOUR API KEY HERE';
    const api_url = 'https://api.opencagedata.com/geocode/v1/json';

    //Pegando os dados
    const request_url = `${api_url}?key=${apikey}&q=${encodeURIComponent(
      `${latitude},${longitude}`
    )}`;

    //Abrindo Conexão com API
    const request = new XMLHttpRequest();
    request.open('GET', request_url, true);

    // Funções padrões de resposta da Doc do API
    request.onload = function () {
      // see full list of possible response codes:
      // https://opencagedata.com/api#codes

      if (request.status == 200) {
        // Successo!
        const data = JSON.parse(request.responseText);
        weather.fetchWeather(data.results[0].components.city);
        console.log(data.results[0].components.city);
      } else if (request.status <= 500) {
        // acessou o server, mas deu algum erro
        console.log('unable to geocode! Response code: ' + request.status);
        const data = JSON.parse(request.responseText);
        console.log('error msg: ' + data.status.message);
      } else {
        console.log('server error');
      }
    };

    request.onerror = function () {
      // Deu algum tipo de erro de conexão
      console.log('unable to connect to server');
    };

    request.send(); // faz o Request
  },

  getLocation: function () {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, console.error);
    } else {
      weather.fetchWeather('Brazil');
    }
    function success(data) {
      geocode.reverseGeocode(data.coords.latitude, data.coords.longitude);
    }
  },
};

geocode.getLocation();
