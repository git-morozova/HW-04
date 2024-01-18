const inputField = document.querySelector('input');
const textOutputBottom = document.querySelector('#duplicateField');

inputField.addEventListener('input', () => {
    textOutputBottom.textContent = inputField.value;
})

document.querySelector('button').addEventListener('click', () => {
    console.log(inputField.value);
    textOutputBottom.textContent = '';
    inputField.value = '';   
    event.preventDefault();
})