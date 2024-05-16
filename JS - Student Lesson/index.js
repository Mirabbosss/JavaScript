// 1. DB
// 2. Rendering DB -> ma'lumotlarni ekranga chiqarib beradi. +
// 3. Adding new student -> yangi kelgan o'quvchini kursga qo'shish +
// 4. Updating student -> student malumotlarini yangilash +
// 5. Removing student -> o'quvchi ma'lumotlar bazasidan chiqarish +
// 6. Updating WiFi login info
// 7. Total income -> displayIncome

// #1
// let db = [
//     {
//         _id: 1,
//         name: "Jack Smith",
//         age: 20,
//         major: "Frontend",
//         faculty: "BootCamp Frontend",
//         groupName: "N10",
//         payment: 100,
//         duration: 8,
//         dailyHours: 4,
//         gender: "male",
//         studentAddress: {
//             city: "Qashqadaryo",
//             street: "Shahriyev",
//             district: "Qarshi",
//         },
//         studentPhone: {
//             countryCode: "994",
//             number: "555555555",
//         },
//         address: {
//             city: "Tashkent",
//             district: "Chilonzor",
//         },
//         wifiInfo: {
//             username: "Jack",
//             password: "123",
//         },
//     },
//     {
//         _id: 2,
//         name: "Alex Smith",
//         age: 30,
//         major: "Frontend",
//         faculty: "BootCamp Frontend",
//         groupName: "N15",
//         payment: 100,
//         duration: 8,
//         dailyHours: 4,
//         gender: "male",
//         studentAddress: {
//             city: "Qashqadaryo",
//             street: "Shahriyev",
//             district: "Qarshi",
//         },
//         studentPhone: {
//             countryCode: "994",
//             number: "555555555",
//         },
//         address: {
//             city: "Tashkent",
//             district: "Chilonzor",
//         },

//         wifiInfo: {
//             username: "alex",
//             password: "1234",
//         },
//     },
//     {
//         _id: 3,
//         name: "Mark Smith",
//         age: 30,
//         major: "Frontend",
//         faculty: "BootCamp Frontend",
//         groupName: "N15",
//         payment: 100,
//         duration: 8,
//         dailyHours: 4,
//         gender: "male",
//         studentAddress: {
//             city: "Qashqadaryo",
//             street: "Shahriyev",
//             district: "Qarshi",
//         },
//         studentPhone: {
//             countryCode: "994",
//             number: "555555555",
//         },
//         address: {
//             city: "Tashkent",
//             district: "Chilonzor",
//         },
//         wifiInfo: {
//             username: "mark",
//             password: "123",
//         },
//     },
// ];

// #2
// function displayDB(students = db) {
//     if (!students.length) {
//         console.log("Birorta ham ma'lumot topilmadi!");
//         return;
//     }

//     students.forEach((student, index) => {
//         console.log(
//             `${index + 1}. ${student.name} - ${student.faculty} - ${student.groupName} -$${student.payment} - ${student.wifiInfo.username} - ${student.wifiInfo.password}`
//         );
//     })
// }

// #3
// function addingStudent() {
//     const newStudent = {
//         _id: db.length + 1,
//         name: "Sindor O'lmasov",
//         age: 19,
//         major: "Frontend",
//         faculty: "BootCamp Frontend",
//         groupName: "N10",
//         payment: 100,
//         duration: 8,
//         dailyHours: 4,
//         gender: "male",
//         studentAddress: {
//             city: "Qashqadaryo",
//             street: "Shahriyev",
//             district: "Qarshi",
//         },
//         studentPhone: {
//             countryCode: "+99899",
//             number: "5555555",
//         },
//         address: {
//             city: "Tashkent",
//             district: "Chilonzor",
//         },
//         wifiInfo: {
//             username: "Sindor",
//             password: "123",
//         },
//     }

//     db = [...db, newStudent]
//     displayDB()
// }

// #4
// function updateStudentInfo() {
//     const studentID = 2;

//     db = db.map(student => 
//         student._id === studentID ? 
//         {
//             ...student,
//             faculty: "BootCamp Backend",
//         }
//     : student
//     )
//     displayDB()
// }

// #5
// function removeStudentInfo() {
//     const studentID = 1;
//     db = db.filter(student => student._id !== studentID)
//     displayDB()
// }

// #6
// function changingStudentWifiInfo() {
//     const studentID = 4;
//     db = db.map(student => 
//         student._id === studentID? 
//         {
//            ...student,
//             wifiInfo: {
//                 username: "Jack",
//                 password: "123",
//             }
//         }
//     : student
//     )
//     displayDB()
// }

// #7

// function displayIncomeInfo() {
//     const total = db.reduce((sum, student) => sum + student.payment, 0)
//     console.log(`Total Income: ${total}.`);
// }








// 13.05.2024 Lesson

const db = [
    {
        _id: 1,
        name: "Jack",
        age: 25,
        email: "jack@example.com",
        password: "123",
    },
    {
        _id: 2,
        name: "Jane",
        age: 22,
        email: "jane@example.com",
        password: "456",
    },
    {
        _id: 3,
        name: "Bob",
        age: 30,
        email: "bob@example.com",
        password: "789",
    }
]

// function User() {

//     this.db = db;
//     this.displayUsers = function () {
//         this.db.forEach((user, index) => {
//             console.log(`${index + 1}. ${user.name} - ${user.age} - ${user.email}`)
//         })
//     };

//     this.displayUserLoginInfo = function () {
//         this.db.forEach(user => console.log(`${user.name} - ${user.email} - ${user.password}`))
//     };

//     this.addUser = function () {
//         const newUser = {
//             _id: this.db.length + 1,
//             name: "Sindor",
//             age: 19,
//             email: "sindor@example.com",
//             password: "123",
//         }
//         this.db = [...this.db, newUser]
//         this.displayUsers()
//     };

//     this.updateUser = function () {
//         const userID = 2;
//         this.db = this.db.map(user => user._id === userID?
//             {
//                 ...user,
//                 name: "Kane",
//                 age: 30,
//                 email: "kane@example.com",
//             } : user
//         ) 
//         this.displayUsers()
//     };

//     this.removeUser = function () {
//         const userID = 3;
//         this.db = this.db.filter(user => user._id !== userID)
//         this.displayUsers()
//     };
// }

function User() {
    this.db = db;
    this.displayUser = function () {
        this.db.forEach((user, index) => console.log(`${index + 1}. ${user.name} - ${user.age} - ${user.email}`))
    }
}

let user = new User();
user.displayUser()