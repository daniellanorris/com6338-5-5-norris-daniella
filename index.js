const form = document.getElementById("add-todo")
const input = document.querySelector("input")
const ul = document.getElementById("todo-list");
var letters = /^[A-Za-z]+$/;

/* add submit for form*/
form.addEventListener('submit', addLi);
/*main function */
function addLi(e) {
    e.preventDefault();
    const li = document.createElement("li");
    const newButton = document.createElement("button");
    if(input.value.match(letters)) {
    /*define new variables, create elements*/
        ul.appendChild(li);
        li.appendChild(newButton);
        const item = input.value;
        newButton.textContent = item;
        input.value = '';
        let count = 0;
        const todo = document.querySelector('li button')
    
      /* create line-through for li element */
        li.onclick = function allClicks(){
            function addStrike() {
                todo.style.textDecoration = "line-through";
                }
            function deleteItem() {
                ul.removeChild(li);
                li.removeChild(newButton)
                count = 0;
                }
            if(count == 0) {
                addStrike();
                count++;
            } else {
                deleteItem();
            }
        }
       

      
    }
} 




  