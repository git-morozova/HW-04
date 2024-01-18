document.querySelector('#consoleLog').addEventListener('click', () => {
    alert('Служит для вывода информации в консоль');
}) 

document.querySelector('#alert').addEventListener('click', () => {
    alert('Выводит модальное окно для отображения информации пользователям');
})

document.querySelector('#prompt').addEventListener('click', () => {
    alert('Выводит диалоговое окно с запросом на ввод текста');
  //  prompt('Диалоговое окно с запросом на ввод текста');
})