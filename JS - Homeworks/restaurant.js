let menuBtn = document.querySelector('#menu-btn');
let addeatBtn = document.querySelector('#addeat-btn');
let deleteBtn = document.querySelector('#delete-btn');
let srchBtn = document.querySelector('#srch-btn');
let filterBtn = document.querySelector('#filter-btn');
let result = document.querySelector('#result');

const ALL_EATS = JSON.parse(localStorage.getItem("eats")) || [];

// Create new eat
function NewEat(name, price) {
    this.id = ALL_EATS.length + 1;
    this.name = name;
    this.price = price
}

// Menu eats
let menuEats = function () {
    let menu = "";
    ALL_EATS.forEach(element => {
        menu += `
        <div>
        <h3>${element.id}. Nomi: ${element.name} <br>ㅤNarxi: ${element.price} sum</h3>
        </div>
        `
    });
    result.innerHTML = menu;
}

// Add Eat
let addEat = function () {
    let name = prompt("New eat name:");
    let price = +prompt("New eat price:");
    if (name && price) {
        let newEat = new NewEat(name, price);
        ALL_EATS.push(newEat);
        localStorage.setItem("eats", JSON.stringify(ALL_EATS));
    } else {
        alert("Please enter eat name and price!")
    }
}

// Delete Eat
let deleteEat = function () {
    let deleteId = +prompt("Delete eat id:");
    if (deleteId) {
        let indexOfDeletedElement = ALL_EATS.findIndex(element => element.id === deleteId);
        ALL_EATS.splice(indexOfDeletedElement, 1);
        localStorage.setItem("eats", JSON.stringify(ALL_EATS));
    } else {
        alert("Please enter eat id!")
    }
}

// Search Eat
let searchEat = function () {
    let searchName = prompt("Search eat name:").toLowerCase();
    result.innerHTML = "";
    if (searchName) {
        let searchResult = ALL_EATS.filter(element => element.name.toLowerCase().includes(searchName));
        if (searchResult.length) {
            searchResult.forEach(eat => {
                result.innerHTML += `<div><h3>${eat.id}. Nomi: ${eat.name} <br>ㅤNarxi: ${eat.price} sum</h3></div>`;
            })
        } else {
            alert("Not found!")
        }
    } else {
        alert("Please enter eat name!")
    }
}

// Filter
let filterPrices = function() {
    let minPrice = +prompt("Minimum price:");
    let maxPrice = +prompt("Maximum price:");
    result.innerHTML = "";
    if (minPrice && maxPrice) {
        let resultPrices = ALL_EATS.filter(item => item.price >= minPrice && item.price <= maxPrice)
        if (resultPrices.length) {
            resultPrices.forEach(item => {
                result.innerHTML += `<div><h3>${item.id}. Nomi: ${item.name} <br>ㅤNarxi: ${item.price} sum</h3></div>`;
            })
        } else {
            alert("Not found!")
        }
    } else {
        alert("Please enter min and max price!")
    }
} 

menuBtn.addEventListener("click", menuEats);
addeatBtn.addEventListener("click", addEat);
deleteBtn.addEventListener("click", deleteEat);
srchBtn.addEventListener("click", searchEat);
filterBtn.addEventListener("click", filterPrices);