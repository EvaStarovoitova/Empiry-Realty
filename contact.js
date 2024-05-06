document.getElementById('showFormBtn').addEventListener('click', function() {
    var form = document.getElementById('registrationForm');
    if (form.classList.contains('hidden')) {
        form.classList.remove('hidden');
    } else {
        form.classList.add('hidden');
    }
});

document.getElementById('registrationFormSubmit').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Скрываем форму после отправки
    var form = document.getElementById('registrationForm');
    form.classList.add('hidden');

    // Показываем модальное окно с сообщением "Заявка отправлена"
    var modal = document.getElementById('myModal');
    var modalMessage = document.getElementById('modalMessage');
    modalMessage.textContent = 'Заявка отправлена';
    modal.style.display = 'block';
});

// Обработчик события для закрытия модального окна при нажатии на крестик
document.getElementsByClassName('close')[0].addEventListener('click', function() {
    var modal = document.getElementById('myModal');
    modal.style.display = 'none';
});

// Закрыть модальное окно, если пользователь кликнул вне окна
window.addEventListener('click', function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", function() {
    // Получаем XML-документ
    var xmlData = document.querySelector(".xml-data").innerHTML;

    // Создаем XML-парсер
    var parser = new DOMParser();

    // Парсим XML-документ
    var xmlDoc = parser.parseFromString(xmlData, "text/xml");

    // Выводим XML-данные в консоль для демонстрации
    console.log(xmlDoc);
});