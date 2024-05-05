var ctx = document.getElementById('bubbleChart').getContext('2d');
    var myChart = new Chart(ctx, {
  type: 'bubble',
  data: {
    datasets: [{
      label: 'Причины обращений за психологической помощью',
      data: [
	    {x: '', y: 0, r: 0},
        {x: 'Проблема в любовных отношениях', y: 25, r: 45},
        {x: 'Депрессивные и тревожные состояния', y: 20, r: 35},
        {x: 'Отношения детей и подростков с родителями', y: 10.5, r: 18.5},
        {x: 'Связанные с суицидом', y: 8, r: 16},
        {x: 'Зависимость', y: 5, r: 13},
        {x: 'Отношения на работе', y: 2, r: 10},
        {x: 'Отношения ребенка со сверстниками', y: 15, r: 24},
        {x: 'Жестокое обращение в ребенком в семье', y: 16, r: 29}
      ],
      backgroundColor: 'rgba(200, 16, 46, 0.9)',
      hoverBackgroundColor: 'rgba(153, 102, 255, 0.8)',
    }]
  },
  options: {
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || '';
          label += ': (' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].x + ', ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].y + '%)';
          return label;
        }
      }
    },
    scales: {
      x: {
        type: 'category', // Используем тип 'category' для категориальной оси X
        position: 'bottom',
        title: {
          display: true,
          text: 'Причины'
        }
      },
      y: {
        min: 0,
        max: 30,
        ticks: {
          stepSize: 5
        },
        title: {
          display: true,
          text: 'Процент обращений'
        }
      }
    }
  }
});