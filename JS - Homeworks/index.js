let showBtn = document.querySelector('#show-btn');
let deleteBtn = document.querySelector('#delete-btn');
let addBtn = document.querySelector('#add-btn');
let sortBtn = document.querySelector('#sort-btn');
let result = document.querySelector('#result');

const ALL_TODOS = JSON.parse(localStorage.getItem("todos")) || [];

function NewTodo(nameWork, hours, minutes, seconds, time){
    this.id = ALL_TODOS.length + 1;
    this.name = nameWork
    this.hours = hours
    this.minutes = minutes
    this.seconds = seconds
    this.time = time
}

const addNewTodo = function() {
    let nameWork = prompt('Vazifa nomini kiriting:');
    let timeHour = new Date().getHours()
    let timeMinute = new Date().getMinutes()
    let timeSecund = new Date().getSeconds()
    let time = new Date().getTime()

    let addTodo = new NewTodo(nameWork, timeHour, timeMinute, timeSecund, time)
    ALL_TODOS.push(addTodo)
    localStorage.setItem("todos", JSON.stringify(ALL_TODOS))
};

const showTodos = function(){
    result.innerHTML = ""
    
    ALL_TODOS.forEach(todo => {
        result.innerHTML += `<div><span>${todo.id}</span>. <span>${todo.name}</span> <span>${todo.hours} : ${todo.minutes} : ${todo.seconds}</span></div>`
    })
}

const deleteTodo = function() {
    let workID = prompt("O'chirmoqchi bo'lgan vazifa id sini kiriting:");

    if(workID){
        let indexDeletedTodo = ALL_TODOS.findIndex(element => element.id === workID);
        ALL_TODOS.splice(indexDeletedTodo, 1);
        localStorage.setItem("todos", JSON.stringify(ALL_TODOS));
    }
}

let sorted = false;

const sortTodos = function() {
    if(sorted === false){
        sorted = true;
        ALL_TODOS.sort((a,b) => {
            if(a.time > b.time) {
                return -1;
            } else {
                return 1;
            }
        });
    } else {
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

    showTodos()
}

addBtn.addEventListener('click', addNewTodo)
showBtn.addEventListener("click", showTodos);
deleteBtn.addEventListener("click", deleteTodo);
sortBtn.addEventListener("click", sortTodos);