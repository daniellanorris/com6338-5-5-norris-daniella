const form = document.getElementById("add-todo")
const input = document.querySelector("input")
const ul = document.getElementById("todo-list");
const li = document.createElement("li");
const newButton = document.createElement("button");

/* add submit for form*/
form.addEventListener('submit', addLi);
/*main function */
function addLi(e) {
    e.preventDefault();
    if(input.value) {
    /*define new variables, create elements*/
        const item = input.value;
        ul.appendChild(li);
        li.appendChild(newButton);
        newButton.textContent = item;
        input.value = ''
    } 
    
};

/* create text-through for li element */
li.onclick = function addStrike() {
    li.style.textDecoration = "line-through"
}

/*delete li element if clicked with underline */
li.ondblclick = function deleteItem() {
    ul.removeChild(ul.firstElementChild)
}
