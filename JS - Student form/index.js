const form = document.getElementById('student-form');
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const ageInput = document.getElementById('age');
const studentListDiv = document.getElementById('student-list');

form.onsubmit = function(event) {
    event.preventDefault(); 

    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;
    const age = ageInput.value;

    const newStudent = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];

    students.push(newStudent);

    localStorage.setItem('students', JSON.stringify(students));

    updateStudentList();
    form.reset();
};

function updateStudentList() {
    const students = JSON.parse(localStorage.getItem('students')) || [];

    studentListDiv.innerHTML = '';
    students.forEach((student, index) => {
        const studentElement = document.createElement('div');
        studentElement.innerText = `Ism: ${student.firstName}\nFamiliya: ${student.lastName}\nYosh: ${student.age}`;

        const deleteButton = document.createElement('button');
        deleteButton.innerText = "O'chirish";
        deleteButton.onclick = function() {
            students.splice(index, 1);
            localStorage.setItem('students', JSON.stringify(students));
            updateStudentList();
        };
        studentElement.appendChild(deleteButton);
        studentListDiv.appendChild(studentElement);
    });
}

window.onload = function() {
    updateStudentList();
};

// Assalom alaykum, bu yerda o'tilmagan kodlar ham ishlatilgan, internetdan olingan, lekin vazifasini tushunib olganman. Tushunganiz uchun oldindan rahmat