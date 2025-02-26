document.addEventListener('DOMContentLoaded', () => {
  // Pie Chart
  const pieCtx = document.getElementById('pieChart').getContext('2d');
  new Chart(pieCtx, {
      type: 'doughnut',
      data: {
          labels: ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Others'],
          datasets: [{
              data: [30, 25, 20, 15, 10],
              backgroundColor: [
                  '#8B7355',
                  '#CDC8B1',
                  '#EEE8CD',
                  '#CDC0B0',
                  '#8B7765'
              ]
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              }
          }
      }
  });

  // Line Chart
  const lineCtx = document.getElementById('lineChart').getContext('2d');
  new Chart(lineCtx, {
      type: 'line',
      data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
              data: [400, 600, 800, 700, 1000, 1200, 900],
              borderColor: 'white',
              tension: 0.4,
              pointRadius: 0
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  grid: {
                      color: 'rgba(255,255,255,0.1)'
                  },
                  ticks: {
                      color: 'white'
                  }
              },
              x: {
                  grid: {
                      display: false
                  },
                  ticks: {
                      color: 'white'
                  }
              }
          }
      }
  });

  // Bar Chart
  const barCtx = document.getElementById('barChart').getContext('2d');
  new Chart(barCtx, {
      type: 'bar',
      data: {
          labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          datasets: [{
              data: [40, 50, 60, 70, 80, 100, 65],
              backgroundColor: 'white'
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  display: false
              }
          },
          scales: {
              y: {
                  beginAtZero: true,
                  grid: {
                      color: 'rgba(255,255,255,0.1)'
                  },
                  ticks: {
                      color: 'white'
                  }
              },
              x: {
                  grid: {
                      display: false
                  },
                  ticks: {
                      color: 'white'
                  }
              }
          }
      }
  });
});