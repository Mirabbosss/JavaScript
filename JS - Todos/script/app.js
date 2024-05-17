const addBtn = document.querySelector("#add-btn");
const showBtn = document.querySelector("#show-btn");
const deleteBtn = document.querySelector("#delete-btn");
const sortBtn = document.querySelector("#sort-btn");
const result = document.querySelector("#result");

// CREATE TODO OBJECT
function NewTodo(ntn, h, m, s, t){
    this.id = (Math.floor(Math.random() * 100000)+ 1).toString().padStart(6, "0")
    this.name = ntn
    this.hours = h.toString().padStart(2, "0")
    this.minutes = m.toString().padStart(2, "0")
    this.seconds = s.toString().padStart(2, "0")
    this.time = t
}

const ALL_TODOS = JSON.parse(localStorage.getItem("todos")) || [];

// ADD TODO FUNCTION
const addNewTodo = function(){
    // TODO NOMI
    let newTodoName = prompt("Enter new todoname: ");
    if(newTodoName && newTodoName.trim() !== ""){
            // DATE => TIME
            let date = new Date()
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let time = date.getTime();
            
            // TODO OBJECT CREATE
            let newTodoResult = new NewTodo(newTodoName, hours, minutes, seconds, time);

            ALL_TODOS.push(newTodoResult);
            localStorage.setItem("todos", JSON.stringify(ALL_TODOS));
    }
    else{
            alert("Please enter todo name!")
    }
}


const showTodos = function(){
    result.innerHTML = ""
    ALL_TODOS.forEach(todo => {
        result.innerHTML += `
            <div class="todo-item">
                <span>${todo.id}</span>
                <h2>${todo.name}</h2>
                <span>${todo.hours} : ${todo.minutes} : ${todo.seconds}</span>
            </div>
        `
    })
}


const deleteTodo = function(){
    let deleteId = prompt("Enter todo id: ");

    if(deleteId){
        let indexOfDeletedElement = ALL_TODOS.findIndex(element => element.id === deleteId);
        ALL_TODOS.splice(indexOfDeletedElement, 1);
        localStorage.setItem("todos", JSON.stringify(ALL_TODOS));
    }
}

let sorted = false;

const sortTodo = function(){

    if(sorted === false){
        sorted = true;
        ALL_TODOS.sort((a, b) => {
            if(a.time > b.time){
                return -1
            }
            else{
                return 1
            }
        })
    }
    else{
        sorted = false;
        ALL_TODOS.sort((a, b) => {
            if(a.time > b.time){
                return 1
            }
            else{
                return -1
            }
        })
    }
    
    showTodos();
}
// ADD TODO EVENT
addBtn.addEventListener("click", addNewTodo);
showBtn.addEventListener("click", showTodos);
deleteBtn.addEventListener("click", deleteTodo);
sortBtn.addEventListener("click", sortTodo);