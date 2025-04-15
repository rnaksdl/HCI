document.addEventListener('DOMContentLoaded', () => {
  // Pie Chart
  const pieCtx = document.getElementById('pieChart').getContext('2d');
  new Chart(pieCtx, {
    type: 'doughnut',
    data: {
      labels: ['The Killer Burger Meal', 'Killer Chicken Fried Rice', 'Killer Hot Dog', 'Red Delicious Apple', 'Others'],
      datasets: [{
        data: [30, 25, 20, 15, 10],
        backgroundColor: [
          '#FF5733', // Bright orange-red
          '#33A1FD', // Bright blue
          '#FFC300', // Bright yellow
          '#4CAF50', // Bright green
          '#9C27B0'  // Purple
        ]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: 'white',
            padding: 10,
            usePointStyle: true
          }
        }
      }
    }
  });

  // Line Chart
  const lineCtx = document.getElementById('lineChart').getContext('2d');
  new Chart(lineCtx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [{
        label: 'Monthly Profit',
        data: [400, 600, 800, 700, 1000, 1200, 900, 950, 800, 750, 900, 1100],
        borderColor: 'white',
        tension: 0.4,
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
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
          display: true,
          position: 'bottom',
          grid: {
            display: false
          },
          border: {
            display: true,
            color: 'white'
          },
          ticks: {
            display: true,
            color: 'white',
            font: {
              size: 11
            }
          }
        }
      },
      layout: {
        padding: {
          bottom: 0
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
        label: 'Foot Traffic',
        data: [40, 50, 60, 70, 80, 100, 65],
        backgroundColor: 'white'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
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
