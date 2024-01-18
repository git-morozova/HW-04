// стрелочная функция с this не работает, поэтому пишем "function"
document.querySelector('#change-link').addEventListener('click', function() {  
    event.preventDefault();
    this.textContent = prompt('Введите новый текст для ссылки');
})