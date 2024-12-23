// Имитация базы данных


// Элементы
const body = document.querySelector('.menagers_block');
const input = document.querySelector('.managers_input');
const button = document.querySelector('.menagers_button');
const userBlock = document.querySelector('.manager_managers'); // Блок managers_user
const deleteForm = document.createElement('div'); // Форма для подсчета и удаления
deleteForm.classList.add('delete_form');
deleteForm.style.display = 'none'; // Скрываем форму по умолчанию
body.appendChild(deleteForm); // Добавляем форму в тело документа

// Функция для отображения всех сотрудников внутри блока managers_user
function renderManagers() {
    // Очищаем содержимое блока
    userBlock.innerHTML = '';

    // Создаем элементы для каждого менеджера
    managerData.forEach((manager, index) => {
        const managerDiv = document.createElement('div');
        managerDiv.classList.add('manager_item'); // Класс для стилизации (если нужно)

        // Динамически наполняем содержимое
        managerDiv.innerHTML = `
            <button class="manager_delete" data-index="${index}">
                <img src="../images/${manager.selected ? 'squarewithcheck.svg' : 'square-check.svg'}" 
                     alt="" 
                     class="managers_check">
            </button>
            <p class="menagers_FIO"> ${manager.fullName}</p>
            <p class="managers_name"> ${manager.dialogName}</p>
            <p class="managers_letter"> ${manager.email}</p>
            <p class="managers_tel"> ${manager.phone}</p>
            <p class="managers_role"> ${manager.role}</p>
            <p class="managers_status"> ${manager.status}</p>
            <button class="manager_redactor">
                <img src="../images/color-picker.svg" alt="" class="redactor">
            </button>
        `;

        // Добавляем в блок managers_user
        userBlock.appendChild(managerDiv);
    });

    // Обновляем отображение формы удаления
    updateDeleteForm();
}

// Обработчик выбора менеджера для удаления
userBlock.addEventListener('click', (event) => {
    if (event.target.closest('.manager_delete')) {
        const index = event.target.closest('.manager_delete').dataset.index;
        managerData[index].selected = !managerData[index].selected; // Переключаем состояние выбора
        renderManagers(); // Перерисовываем блок
    }
});

// Обновляем форму удаления
function updateDeleteForm() {
    // Выбранные менеджеры
    const selectedManagers = managerData.filter(manager => manager.selected);
    if (selectedManagers.length > 0) {
        deleteForm.style.display = 'block';
        deleteForm.innerHTML = `
        <div class="delete_block"> 
        <svg class="manager_svg" width="17" height="12" viewBox="0 0 17 12" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 0.292893C17.0976 0.683417 17.0976 1.31658 16.7071 1.70711L6.70711 11.7071C6.31658 12.0976 5.68342 12.0976 5.29289 11.7071L0.292893 6.70711C-0.0976311 6.31658 -0.0976311 5.68342 0.292893 5.29289C0.683417 4.90237 1.31658 4.90237 1.70711 5.29289L6 9.58579L15.2929 0.292893C15.6834 -0.0976311 16.3166 -0.0976311 16.7071 0.292893Z" fill="white" />
</svg>
            <p class="manager_text-change">Выбрано: ${selectedManagers.length}</p>
            <button class="confirm_delete"><img src="../images/delete.svg" alt="Удалить"></button>
        </div>`;
    } else {
        deleteForm.style.display = 'none';
    }
}

// Обработчик удаления выбранных менеджеров
deleteForm.addEventListener('click', (event) => {
    if (event.target.classList.contains('confirm_delete')) {
        // Удаляем выбранных менеджеров
        for (let i = managerData.length - 1; i >= 0; i--) {
            if (managerData[i].selected) {
                managerData.splice(i, 1);
            }
        }
        renderManagers(); // Перерисовываем блок
    }
});

// Обработчик кнопки для поиска по email
button.addEventListener('click', () => {
    const email = input.value.trim();

    // Поиск сотрудника по почте
    const manager = managerData.find(item => item.email === email);

    if (manager) {
        // Очищаем содержимое блока перед отображением выбранного сотрудника
        userBlock.innerHTML = '';

        // Обновляем информацию в блоке
        const managerDiv = document.createElement('div');
        managerDiv.classList.add('manager_item');
        managerDiv.innerHTML = `
            <button class="manager_delete">
                <img src="../images/square-check.svg" alt="" class="managers_check">
            </button>
            <p class="menagers_FIO"> ${manager.fullName}</p>
            <p class="managers_name name_dop"> ${manager.dialogName}</p>
            <p class="managers_letter"> ${manager.email}</p>
            <p class="managers_tel"> ${manager.phone}</p>
            <p class="managers_role"> ${manager.role}</p>
            <p class="managers_status"> ${manager.status}</p>
        `;
        userBlock.appendChild(managerDiv);

        // Показываем блок
        userBlock.style.display = 'block';
    } else {
        // Если сотрудник не найден
        alert('Сотрудник с данной почтой не найден.');
        renderManagers(); // Возвращаем всех сотрудников
    }
});

// Вызываем функцию для рендеринга всех сотрудников при загрузке страницы
renderManagers();
document.getElementById('themeToggleFour').addEventListener('click', function() {
    const body = document.body;
    const logo = document.querySelector('.logo');
    const redactor = document.querySelectorAll('.redactor');
  
    // Переключение темной темы
    body.classList.toggle('dark-theme');
  
    // Изменение логотипа
    if (body.classList.contains('dark-theme')) {
        logo.src = "../images/dark_logo.svg";
        
    } else {
        logo.src = "../images/logo.svg";
       
    }
    redactor.forEach((item) => {
        if (body.classList.contains('dark-theme')) {
            item.src = "../images/color_picker-dark.svg";
        } else {
            item.src = "../images/color-picker.svg";
        }
    })
  
      
  
  });
