// Filter method


// let arr = [3, 4, 10, 7, 14, 19];

// Filter usuli

// let dec = arr.filter(item => item >= 10);

// console.log(dec);

// ForEach usuli

// let dec1 = [];

// arr.forEach(item => {
//     if (item >= 10) {
//         dec1.push(item)
//     }
// })

// console.log(dec1);

// For

// let dec3 = []

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 10) {
//         dec3.push(arr[i])
//     }
// }

// console.log(dec3);






// Find method

// let users = [
//     {
//         name: "John",
//         age: 30,
//         country: "UZB",
//         cars: ["BMW", "Mercedes"]
//     },
//     {
//         name: "Bob1",
//         age: 40,
//         country: "USA",
//         cars: ["BMW", "tesla", "volvo"]
//     },
//     {
//         name: "Jane",
//         age: 25,
//         country: "UZB",
//         cars: ["lambo", "rr", "ferrari", "bugatti"]
//     },
//     {
//         name: "Bob2",
//         age: 40,
//         country: "USA",
//         cars: ["tata", "toyota", "porsche", "ford", "honda"]
//     },
// ];

// let boyvachcha = users.find(i => i.cars.length > 3)
// console.log(boyvachcha);






// FindIndex method

// let users = [
//     {
//       name: "William",
//       age: 30,
//       country: "UZB",
//       cars: ["BMW", "Mercedes"]
//     },
//     {
//       name: "Bob",
//       age: 40,
//       country: "USA",
//       cars: ["BMW", "tesla", "volvo"]
//     },
//     {
//       name: "Jane",
//       age: 25,
//       country: "UZB",
//       cars: ["lambo", "rr",  "ferrari", "bugatti"]
//     },
//     {
//       name: "Nick",
//       age: 41,
//       country: "USA",
//       cars: ["tata", "toyota", "porsche", "ford", "honda"]
//     },
//   ];

//   let finder = users.findIndex(i => i.name.includes("o"));
//   console.log(finder);



// Lesson 

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const filterNums = nums.filter(item => item % 2 == 0);
// console.log(filterNums);



// Lesson 

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const filterNums = nums.filter(item => item % 5 == 0 && item % 2 == 0);
// console.log(filterNums);



// Lesson 

// const users = ['Jack', 'John', 'Mark', 'Alex', 'Ann'];

// let finder = users.filter(item => item.startsWith("a".toUpperCase()));
// console.log(finder);



// Lesson 

// const students = [
//     {
//        _id: 1,
//        name: "Jack",
//        age: 25,
//        department: "IT",
//        salary: 12000,
//     },
//     {
//        _id: 2,
//        name: "Jane",
//        age: 19,
//        department: "Software Engineering",
//        salary: 1000,
//     },
//     {
//        _id: 3,
//        name: "Bob",
//        age: 21,
//        department: "Frontend",
//        salary: 15000,
//     },
//     {
//        _id: 4,
//        name: "Sindor",
//        age: 19,
//        department: "Frontend",
//        salary: 1000,
//     },
//     {
//        _id: 5,
//        name: "Farhodbek",
//        age: 19,
//        department: "Software Engineering",
//        salary: 1000,
//     },
//  ];

//  let filtered = students.filter(item => item.age < 20)
//  console.log(filtered);

// let filtered = students.filter(item => item.salary > 1000)
// console.log(filtered);

// let filtered = students.filter(item => item.salary > 1000 && item.department.toLowerCase() == "frontend")
// console.log(filtered);



// students.forEach((item, index) => {
//     console.log(`${index+1}. ${item.name} - ${item.department}. - ${item.salary}`);
// });

// for (let item of students) {
//     console.log(`${item._id} ${item.name} - ${item.department}. - ${item.sa}`);
// }

// for (let i = 0; i < students.length; i++) {
//     console.log(`${students[i]._id}. ${students[i].name} - ${students[i].department}. - ${students[i].salary}`);
// }





// Reduce. Lesson with Reduce

// let sum = students.reduce((sum, item) => sum + item.salary, 0)
// console.log(sum);





// Sort method

// const nums = [2, 4, 1, 3, 6, 7, 8, 10, 9, 11, 5, 12];

// let sorted = nums.sort((a, b) => a - b);
// console.log(sorted);,k