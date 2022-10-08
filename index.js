var form = document.querySelector('todo')
var input = document.querySelector('input')
form.addEventListener('submit')
form.onsubmit = function(e) {
    e.preventDefault();

    const itemInput = document.getElementById('add-todo');
    console.log(itemInput.value);

    const listTodo = document.getElementById('ul#todo-list');
    console.log(listTodo.value);
    
    const li = document.createElement('li');
    const buttonList = document.createElement('button')
    buttonList.textContent = itemInput.value

    var ul = document.querySelector('ul')
    ul.appendChild(li)
    li.appendChild(button)
}



