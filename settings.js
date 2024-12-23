document.addEventListener("DOMContentLoaded", function() { 
    const buttons = document.querySelectorAll(".settings_btn");
    const titleMain = document.querySelector(".settings_title-main"); 
    const infoBlock = document.querySelector(".settings_info"); 


    if (!buttons || !titleMain || !infoBlock) {
        console.error("Не удалось найти необходимые элементы на странице.");
        return;
    }

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            buttons.forEach(btn => btn.classList.remove("active"));
            

            button.classList.add("active");

            const newTitle = button.getAttribute("data-title"); 
            const newContent = button.getAttribute("data-content"); 

            
            titleMain.textContent = newTitle;

            
            switch (newContent) {
                case "profile":
                    infoBlock.innerHTML = `
                                            <ul>
                        <li class="settings_registration">
                            <p class="settings_registration-title">Ф.И.O</p>
                            <input  class="settings_registration-input input_FIO" type="text" placeholder="Ф.И.O">
                        </li>

                        <li class="settings_registration">
                            <p class="settings_registration-title">Email</p>
                            <input  class="settings_registration-input input_email" type="text" placeholder="Email">
                        </li>

                        <li class="settings_registration">
                            <p class="settings_registration-title">Телефон</p>
                            <input  class="settings_registration-input input_tel" type="text" placeholder="Телефон">
                        </li>

                        <li class="settings_registration">
                            <p class="settings_registration-title">Название компании</p>
                            <input  class="settings_registration-input input_name" type="text" placeholder="Название компании">
                        </li>

                        <li class="settings_registration">
                            <p class="settings_registration-title">Ссылка на сайт</p>
                            <input  class="settings_registration-input input_link" type="text" placeholder="Ссылка на сайт">
                        </li>
                    </ul>
                    
                    <div class="settings_block-btn">
                        <button class="btn_cancel">Отменить</button>
                        <button class="btn_save">Сохранить</button>
                    </div>
                    `;
                    break;
                case "auto_messages":
                    infoBlock.innerHTML = `
                        <p>Настройте триггерные сообщения, которые будут автоматически отправляться пользователям на основе их действий:</p>
                        <ul>
                            <li>Приветственное сообщение</li>
                            <li>Ответ на вопрос</li>
                            <li>Напоминание о заказе</li>
                        </ul>
                    `;
                    break;
                case "tariff":
                    infoBlock.innerHTML = `
                        <p>Управляйте своим тарифом, выбрав нужный план и опции:</p>
                        <ul>
                            <li>Базовый тариф</li>
                            <li>Премиум тариф</li>
                            <li>Тариф для больших компаний</li>
                        </ul>
                    `;
                    break;
                case "widget":
                    infoBlock.innerHTML = `
                        <ul>
                            <li class="setting_plan settings_one">
                                <p class="settings_text">1. Добавьте контейнер div с id oneum-chat в корень body</p>
                            </li>
                            <li class="setting_plan settings_two">
                                <p class="settings_text">2. Скопируйте в head страницы html код ниже</p>
                            </li>
                            <li class="setting_plan settings_three">
                                <button class="settings_copy" onclick="copyText()">
                                    <img src="../images/files.svg" alt="Скопировать" class="imger_copy">
                                </button>
                                <p class="settings_text" id="textToCopy">
&lt;script&gt; const oneumCSS = document.createElement('link'); oneumCSS.rel = "stylesheet"; oneumCSS.href = "https://chat.oneum.io/eChat.css"; document.head.insertBefore( oneumCSS, document.head.childNodes[ document.head.childNodes.length - 1 ].nextSibling ); function loadOneumScript(url, callback) { const script = document.createElement("script"); script.type = "text/javascript";

if (script.readyState) { script.onreadystatechange = function () {if (script.readyState === "loaded" || script.readyState === "complete") { script.onreadystatechange = null; callback(); } }; } else { script.onload = function () { callback(); }; }

script.src = url; document.getElementsByTagName("head")[0].appendChild(script); }

loadOneumScript("https://chat.oneum.io/eChat.js", function () { const chat = new window.eChat({ key: '64510698a87ac286a577d408', });

chat.initialize(); }); &lt;/script&gt;
                                </p>
                            </li>
                        </ul>
                    `;
                    break;
                case "chat_appearance":
                    infoBlock.innerHTML = `
                        <p>Настройте внешний вид виджета чата:</p>
                        <ul>
                            <li>Цвет фона</li>
                            <li>Цвет шрифта</li>
                            <li>Размер кнопки</li>
                        </ul>
                    `;
                    break;
                case "feedback":
                    infoBlock.innerHTML = `
                        <ul>
                            <li class="feedback_list">
                                <p class="feedback_title">Email</p>
                                <input type="text" placeholder="Email" class="feedback_email">
                            </li>

                            <li class="feedback_list">
                                <p class="feedback_title">Телефон</p>
                                <input type="text" placeholder="Телефон" class="feedback_tel">
                            </li>

                            <li class="feedback_sp">
                                <p class="feedback_title-input">Напишите нам ваш вопрос/ просьбу/ предложение</p>
                                <input type="text" placeholder="Введите текст обращения" class="feedback_input">
                            </li>
                        </ul>

                    <button class="feedback_btn">Отправить</button>
                    `;
                    break;
                default:
                    infoBlock.innerHTML = "<p>Выберите настройку для отображения информации.</p>";
            }
        });
    });
});
document.getElementById('themeToggleTwo').addEventListener('click', function() {
    const body = document.body;
    const logo = document.querySelector('.logo');
  
    // Переключение темной темы
    body.classList.toggle('dark-theme');
  
    // Изменение логотипа
    if (body.classList.contains('dark-theme')) {
        logo.src = "../images/dark_logo.svg";// Логотип для темной темы
    } else {
        logo.src = "../images/logo.svg";// Логотип для светлой темы
    }
  
      
  
  });
