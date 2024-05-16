let showBtn = document.querySelector('#show-btn');
let deleteBtn = document.querySelector('#delete-btn');
let addBtn = document.querySelector('#add-btn');
let result = document.querySelector('#result');

addBtn.addEventListener('click', () => {
    localStorage.setItem("todos", JSON.stringify(addTodo))
})

function NewTodo(nameWork, timeHour, timeMinute, timeSecund) {
    this.name = nameWork
    this.time = `${timeHour} : ${timeMinute} : ${timeSecund}`
}

const addNewTodo = function() {
    let nameWork = prompt('Vazifa nomini kiriting:');
    let timeHour = new Date().getHours
    let timeMinute = new Date().getMinutes
    let timeSecund = new Date().getSeconds

    let addTodo = new Todo(nameWork, timeHour, timeMinute, timeSecund)
    console.log(addTodo);
};


// showBtn.addEventListener('click', () => {
//     for(let i = 0; i < todo.length; i++) {
//         result.write(`<h2>${todo[i].id}. Vazifa nomi: ${todo[i].name} Vazifa vaqt: ${todo[i].time}</h2>`);
//     }
// })

// deleteBtn.addEventListener('click', () => {
//     let workID = prompt("O'chirmoqchi bo'lgan vazifa id sini kiriting:");

    
    
// })






