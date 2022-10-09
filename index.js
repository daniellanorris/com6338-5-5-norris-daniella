const form = document.getElementById('add-todo')
const input = document.querySelector('input')
const ul = document.getElementById('todo-list');

function createButtons() {
    const item = input.value;
    const li = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = item;
    return li;
    
}

form.addEventListener('click', 'submit', (event) => {
    event.preventDefault();
    const li = createButtons();
    ul.appendChild(li);
    li.appendChild(button);




})