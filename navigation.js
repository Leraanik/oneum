function setActive(button) {
    const buttons = document.querySelectorAll('.navigation_btn');
    buttons.forEach(btn => btn.classList.remove('navigation_btn-active'));
    button.classList.add('navigation_btn-active');
  }
  
  function navigate(button) {
    const url = button.dataset.url;
    setActive(button);
    window.location.href = url ; 
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    const currentURL = window.location.pathname.split('/').pop().split('.')[0]; 
    const activeButton = document.querySelector(`.navigation_btn[data-url="${currentURL}"]`);
    if (activeButton) {
        setActive(activeButton);
    }
  
    document.querySelectorAll('.navigation_btn').forEach(button => {
        button.addEventListener('click', () => navigate(button));
    });
  });
  document.getElementById('themeToggleTree').addEventListener('click', function() {
    const body = document.body;
    const logo = document.querySelector('.logo');
    const removal = document.querySelector('.removall');
    const integration = document.querySelector('.integration_imger');
    const one = document.querySelector('.one');
    const two = document.querySelector('.two');
    const three = document.querySelector('.three');
    const four = document.querySelector('.four');
    const five = document.querySelector('.five');
    
  
    // Переключение темной темы
    body.classList.toggle('dark-theme');
  
    // Изменение логотипа
    if (body.classList.contains('dark-theme')) {
        logo.src = "../images/dark_logo.svg";
        removal.src = "../images/dark_musor.svg";
        integration.src = "../images/toggle-right-dark.svg";
        one.src = "../images/one_dark.svg";
        two.src = "../images/two_dark.svg";
        three.src = "../images/three_dark.svg";
        four.src = "../images/four_dark.svg";
        five.src = "../images/five_dark.svg";

    } else {
        logo.src = "../images/logo.svg";
        removal.src = "../images/removal.svg";
        integration.src = "../images/toggle-right.svg";
        one.src = "../images/one.svg";
        two.src = "../images/two.svg";
        three.src = "../images/three.svg";
        four.src = "../images/four.svg";
        five.src = "../images/five.svg";
    }
  
      
  
  });