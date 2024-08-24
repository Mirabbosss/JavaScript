const addRoomBtn = document.querySelector("#add-room-btn");
const cancelFormBtn = document.querySelector("#cancel-form-btn");
const addRoomForm = document.querySelector("#add-room-form");
const roomNumberInput = document.querySelector("#room-number");
const roomPriceInput = document.querySelector("#room-price");
const roomCapacityInput = document.querySelector("#room-capacity");
const roomTypeInput = document.querySelector("#room-type");
const roomFloorInput = document.querySelector("#room-floor");
const rangeIndicator = document.querySelector("#range-indicator");
const roomTable = document.querySelector("#room-table > tbody");

let allRooms = JSON.parse(localStorage.getItem("rooms")) || [];

const renderData = (data) => {
    // roomTable.innerHTML = "" => 1
    // while
    while(roomTable.firstChild){
        roomTable.removeChild(roomTable.firstChild)
    }

    if(data.length > 0){
        data.forEach(room => {
            const tableRow = document.createElement("tr");
            tableRow.innerHTML = `
                <td>${room.roomNo}</td>
                <td>${room.roomType}</td>
                <td>${room.roomFloor} floor</td>
                <td>${room.roomState}</td>
                <td>${room.roomCap + `${room.roomCap > 1 ? " people" : " person"}`}</td>
                <td>Per person: <strong>$${room.pricePerPerson}</strong> <br><br> Total for ${room.roomCap + `${room.roomCap > 1 ? " people" : " person"}`}: <strong> $${room.roomCap * room.pricePerPerson}</strong></td>
                <td>${room.bookedFromDate ? room.bookedFromDate : "Not booked yet"}</td>
                <td data-room-id="${room.id}">
                    <button class="edit-room-btn"><i class="bi bi-pencil-fill"></i></button>
                    <button class="delete-room-btn"><i class="bi bi-trash3-fill"></i></button>
                </td>
            `
            roomTable.appendChild(tableRow)
        })
    }
    else{
        roomTable.innerHTML = "<td colspan='8'>No rooms found!</td>"
    }
}

renderData(allRooms)

const generateToast = (toastType, message) => {
   return Toastify({
        text: message,
        className: "info",
        style: {
          background: toastType === "error" ? "red" : toastType === "warning" ? "gold" :  "green",
        }
    })
}

const saveToLocalStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value))
}

// This function can generate random ID
const generateId = () => {
    return String(Math.floor(Math.random() * 10000)).padStart(6, "0")
}

// This function can create new room object
function Room(roomNo, roomType, roomFloor, roomCap, roomPrice){
    this.id = generateId()
    this.roomNo = roomNo
    this.roomType = roomType
    this.roomFloor = roomFloor
    this.roomState = "empty"
    this.pricePerPerson = roomPrice
    this.bookedFromDate = null
    this.roomCap = roomCap
}



const createNewForm = (event) => {
    event.preventDefault();
   
    let isRoomExist = allRooms.find(room => room.roomNo == Number(roomNumberInput.value));
    if(Number(roomNumberInput.value) > 0 && !isRoomExist){
        let room = new Room(roomNumberInput.value, roomTypeInput.value, roomFloorInput.value, roomCapacityInput.value, roomPriceInput.value);
        allRooms.push(room)
        saveToLocalStorage("rooms", allRooms);
        addRoomForm.reset();
        generateToast("success", "New room has been successfully created!").showToast()
        renderData(allRooms)
    }
    else{
        generateToast("error", "Room number is incorrect or this room has already been created!").showToast()
    }

}



const getRoomCapacity = () => {
    rangeIndicator.innerHTML = roomCapacityInput.value
}

const showNewRoomForm = () => {
    addRoomForm.classList.add("show")

    roomNumberInput.value = allRooms.length + 1
}

const  cancelAddNewForm = () => {
    addRoomForm.classList.remove("show")
}

const addEventToElement = (e) => {
    if(e.target.classList.contains("delete-room-btn")){
        let isUserAgreed = confirm("Are you really going to delete this room?");

        if(isUserAgreed){
            let id = e.target.parentElement.getAttribute("data-room-id")
            let indexOfDeletedRoom = allRooms.findIndex(room => room.id == id);
            allRooms.splice(indexOfDeletedRoom, 1);
            saveToLocalStorage("rooms", allRooms);
            renderData(allRooms);
            generateToast("success", "Room has successfully been deleted!").showToast()
        }
        else{
            generateToast("warning", "Room has not been deleted!").showToast()
        }
    }
    else if(e.target.classList.contains("edit-room-btn")){
        let id = e.target.parentElement.getAttribute("data-room-id")
        let editedRoom = allRooms.find(room => room.id === id);
        if(id){
            addRoomForm.classList.add("show");
            roomNumberInput.value = editedRoom.roomNo;
            roomPriceInput.value = editedRoom.pricePerPerson;
            roomCapacityInput.value = editedRoom.roomCap
            rangeIndicator.innerHTML = editedRoom.roomCap
            Array.from(roomTypeInput.children).forEach(option => {
                option.removeAttribute("selected")
                if(option.value === editedRoom.roomType){
                    option.setAttribute("selected", true)
                }
            })

            Array.from(roomFloorInput.children).forEach(option => {
                option.removeAttribute("selected")
                if(option.value === editedRoom.roomFloor){
                    option.setAttribute("selected", true)
                }
            })
            addRoomForm.querySelector("button[type='submit']").innerHTML = "Save room"
        }
    }
}

addRoomBtn.addEventListener("click", showNewRoomForm);
cancelFormBtn.addEventListener("click", cancelAddNewForm);
addRoomForm.addEventListener("submit", createNewForm);
roomCapacityInput.addEventListener("input", getRoomCapacity);
roomTable.addEventListener("click", addEventToElement)

roomNumberInput.addEventListener("input", () => {
    roomNumberInput.value = roomNumberInput.value.replace(/-/g, "").replace(/0/g, "1")
})