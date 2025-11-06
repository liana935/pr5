console.log("Это JavaScript файл!");

function showMessage() {
    alert("Привет от JavaScript!");
}

// Вызов функции при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    showMessage();
});
// Исправление ошибки логина
function validateLogin(username, password) {
    if (username.length > 0 && password.length >= 6) {
        return true;
    }
    return false;
}
