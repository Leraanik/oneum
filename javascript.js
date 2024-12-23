
const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
  type: 'bar', // Тип графика (столбчатый)
  data: {
    labels: ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00'], // Временные метки
    datasets: [{
      label: 'Запросы в чаты',
      data: [100, 200, 300, 150, 250, 400, 600, 700, 500, 300], // Данные для отображения
      backgroundColor:  '#00df86', // Цвет столбцов
      borderRadius: 5, // Скругление углов столбцов
    }]
  },
  options: {
    responsive: true, // Адаптивность
    maintainAspectRatio: false, // Отключение фиксированного соотношения
    plugins: {
      legend: {
        display: false, // Убираем легенду
      }
    },
    scales: {
      x: {
        grid: {
          display: false, // Убираем сетку по оси X
        },
        ticks: {
          font: {
            size: 14, // Размер шрифта
          }
        }
      },
      y: {
        beginAtZero: true, // Начало шкалы с нуля
        ticks: {
          stepSize: 50, // Шаг шкалы
          font: {
            size: 14, // Размер шрифта
          }
        }
      }
    }
  }
});


document.querySelector('.integration_list').addEventListener('click', function (event) {
  const button = event.target.closest('button'); 

  if (button) {
      const img = button.querySelector('img');
      if (img.src.includes('positive.svg')) {
          img.src = 'images/negative.svg';
      } else if (img.src.includes('negative.svg')) {
          img.src = 'images/positive.svg';
      }
  }
});

function copyText() {
  const textElement = document.getElementById('textToCopy');
  
  const textarea = document.createElement('textarea');
  textarea.value = textElement.innerText || textElement.textContent; 
  document.body.appendChild(textarea); 
  textarea.select(); 
  document.execCommand('copy'); 
  document.body.removeChild(textarea); 
  
  
  alert('Текст скопирован!');
}




document.getElementById('menuToggle').addEventListener('click', function () {
  const dropdownMenu = document.getElementById('dropdownMenu');
  dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Закрываем выпадающее меню при клике вне его области
window.addEventListener('click', function (event) {
  const dropdownMenu = document.getElementById('dropdownMenu');
  const menuToggle = document.getElementById('menuToggle');

  if (!menuToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
      dropdownMenu.style.display = 'none';
  }
});

document.getElementById('themeToggle').addEventListener('click', function() {
  const body = document.body;
  const logo = document.querySelector('.logo');

  // Переключение темной темы
  body.classList.toggle('dark-theme');

  // Изменение логотипа
  if (body.classList.contains('dark-theme')) {
      logo.src = "../images/dark_logo.svg";
  } else {
      logo.src = "../images/logo.svg";
  }
  const arrows = document.querySelectorAll('.analitics_arrow, .dialog_arrow, .menagers_arrow, .integration_arrow, .tarif_arrow');
    
    arrows.forEach(function(arrow) {
        if (body.classList.contains('dark-theme')) {
            arrow.src = '../images/dark_arrow.svg';  
        } else {
            arrow.src = '../images/arrow.svg';  
        }
    });
});
      








