// DOM elementlarini tanlab olish
const form = document.getElementById('student-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const ageInput = document.getElementById('age');
const studentListDiv = document.getElementById('student-list');

// Forma yuborilganda hodisani tinglash
form.onsubmit = function(event) {
    event.preventDefault(); // Default yuborilishni to'xtatish

    // Input maydonlaridagi qiymatlarni olish
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;

    // Yangi o'quvchi obyektini yaratish
    const newStudent = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    // LocalStorage ga saqlangan o'quvchilar ro'yxatini olish
    let students = JSON.parse(localStorage.getItem('students')) || [];

    // Yangi o'quvchini ro'yxatga qo'shish
    students.push(newStudent);

    // LocalStorage ga yangilangan ro'yxatni saqlash
    localStorage.setItem('students', JSON.stringify(students));

    // Ro'yxatni yangilash funksiyasini chaqirish
    updateStudentList();

    // Forma maydonlarini tozalash
    form.reset();
};

// Ro'yxatni yangilash funksiyasi
function updateStudentList() {
    // LocalStorage dan saqlangan o'quvchilar ro'yxatini olish
    const students = JSON.parse(localStorage.getItem('students')) || [];

    // Ro'yxat divini tozalash
    studentListDiv.innerHTML = '';

    // Har bir o'quvchi uchun HTML element yaratish va divga qo'shish
    students.forEach((student, index) => {
        const studentElement = document.createElement('div');
        studentElement.innerText = `Ism: ${student.firstName}, Familiya: ${student.lastName}, Yosh: ${student.age}`;

        // O'chirish tugmasi qo'shish
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'O\'chirish';
        deleteButton.onclick = function() {
            // O'quvchini LocalStorage dan o'chirish
            students.splice(index, 1);
            localStorage.setItem('students', JSON.stringify(students));

            // Ro'yxatni yangilash funksiyasini chaqirish
            updateStudentList();
        };

        // O'quvchi elementiga o'chirish tugmasini qo'shish
        studentElement.appendChild(deleteButton);
        studentListDiv.appendChild(studentElement);
    });
}

// Sahifa yuklanganda hodisani tinglash
window.onload = function() {
    updateStudentList();
};
