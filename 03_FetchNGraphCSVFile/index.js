async function charIt() {
  const data = await parseCSV();
  const ctx = document.getElementById('chart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.xs,
      datasets: [
        {
          label: 'Combined Land-Surface Air and Sea-Surface Water Temperature in C°',
          data: data.ys,
          fill: false,
          backgroundColor: ['rgba(255, 99, 132, 0.2)'],
          borderColor: ['rgba(153, 102, 255, 1)'],
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
  const xs = [];
  const ys = [];

  const response = await fetch('CSV/ZonAnn.Ts+dSST.csv');
  const data = await response.text();
  //Transforma a tabela csv em texto

  const table = data.split('\n').slice(1);
  //Retira a linha cabeçalho
  table.forEach((row) => {
    const col = row.split(',');
    const year = col[0];
    xs.push(year);
    const temp = col[1];
    ys.push(Number(temp) + 14);
  });
  return { xs, ys };
}
charIt();
