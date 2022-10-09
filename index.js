const form = document.getElementById("add-todo")
const input = document.querySelector("input")
const ul = document.getElementById("todo-list");
const newButton = document.createElement("button");
const li = document.createElement("li");
var letters = /^[A-Za-z]+$/;

/* add submit for form*/
form.addEventListener('submit', addLi);
/*main function */
function addLi(e) {
    e.preventDefault();
    if(input.value.match(letters)) {
    /*define new variables, create elements*/
        ul.appendChild(li);
        li.appendChild(newButton);
        const item = input.value;
        newButton.textContent = item;
        input.value = ''
      /* create line-through for li element */
        li.onclick = function addStrike() {
            li.style.textDecoration = "line-through"
            }

        /*delete li element if clicked with underline */
        li.ondblclick = function deleteItem() {
            ul.removeChild(ul.firstElementChild)
        }
    } 

}

  