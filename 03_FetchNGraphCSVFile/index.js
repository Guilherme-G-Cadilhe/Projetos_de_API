async function charIt() {
  const data = await parseCSV();
  const ctx = document.getElementById('chart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.years,
      datasets: [
        {
          label: 'Global Temperature in °C°',
          data: data.temps,
          fill: false,
          backgroundColor: ['rgba(255, 99, 132, 1)'],
          borderColor: ['rgba(153, 102, 255, 1)'],
          borderWidth: 1,
        },
        {
          label: 'Northen Hemisphere Temperature in °C°',
          data: data.northern,
          fill: false,
          backgroundColor: ['rgba(99, 132, 255, 1)'],
          borderColor: ['rgba(99, 132, 255, 1)'],
          borderWidth: 1,
        },
        {
          label: 'Souther Hemisphere in °C°',
          data: data.southern,
          fill: false,
          backgroundColor: ['rgba(99, 255, 132, 1)'],
          borderColor: ['rgba(99, 255, 132, 1)'],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          ticks: {
            callback: function (value, index, values) {
              return value + '°';
            },
          },
        },
      },
    },
  });
}

async function parseCSV() {
  const years = [];
  const temps = [];
  const northern = [];
  const southern = [];

  const response = await fetch('CSV/ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  //Transforma a tabela csv em texto

  const table = data.split('\n').slice(1);
  //Retira a linha cabeçalho
  table.forEach((row) => {
    const col = row.split(',');
    const year = col[0];
    years.push(year);
    const temp = col[1];
    temps.push(Number(temp) + 14);
    const north = col[2];
    northern.push(Number(north) + 14);
    const south = col[3];
    southern.push(Number(south) + 14);
  });
  return { years, temps, northern, southern };
}
charIt();
