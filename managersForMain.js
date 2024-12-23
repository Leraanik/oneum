const body = document.querySelector('.menagers_list');

window.managerData.forEach(manager => {

    const managerItem = document.createElement('div');
    managerItem.classList.add('manager_items'); // Контейнер для менеджера
    
    // Создаем элемент для имени менеджера
    const managerFIO = document.createElement('div');
    managerFIO.textContent = `${manager.fullName}`;
    managerFIO.classList.add('manager_names');
    
    // Создаем кнопку для каждого менеджера
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete_button');
    deleteButton.innerHTML = '<img src="../images/delete.svg" alt="Удалить">'; // Используйте свой путь к иконке
    deleteButton.addEventListener('click', () => {
        // Логика для удаления менеджера
        managerItem.remove();
    });

    // Создаем разделитель
    const separator = document.createElement('hr'); // Разделитель
    
    // Добавляем элементы в контейнер
    managerItem.appendChild(managerFIO);
    managerItem.appendChild(deleteButton);
    body.appendChild(managerItem);
    body.appendChild(separator); // Добавляем разделитель после каждого менеджера
});
