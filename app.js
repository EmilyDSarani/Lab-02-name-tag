const headerEl = document.getElementById('name');

const buttonEl = document.getElementById('change-button');


buttonEl.addEventListener('click', () => {
    const inputEl = document.getElementById('word-input');

    console.log(inputEl.value);

    headerEl.textContent = inputEl.value;
    headerEl.style.color = 'blue';
    headerEl.style.fontFamily = 'Fantasy';
});