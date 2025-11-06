console.log("Это JavaScript файл!");

function showMessage() {
    alert("Привет от JavaScript!");
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    showMessage();
});
