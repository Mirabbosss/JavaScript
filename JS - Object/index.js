// Object

// let person = {
//     id: "77777",
//     name: "Mirabbos",
//     surname: "Mirtursunov",
//     age: 22,
//     gender: "male",
//     isMarried: true,
//     hobbies: ["playing", "coding", "music listening musing"],
//     skills: ["HTML", "CSS", "JS", "TAILWIND CSS", "SASS", "BOOTSTRAP"],
//     profession: "SOFTWARE ENGINEER",
//     address: {
//         country: "Uzbekistan",
//         region: "Tashkent",
//         district: "Yangibozor",
//         street: "Nurobod",
//         home_number: 13
//     },
//     contact: {
//         tel_number: "+998997983614",
//         email: "mirtursunovmirabbos@gmail.com",
//         github: "https://github.com/Mirabbosss"
//     },
//     passport: function() {
//         console.log(`Full name: ${person.name} + ${person.surname}`)
//     }
// }

// console.log(person)
// person.passport()



// Object methods

// 1-masala.

// Masalan: [6, 25, 91, 23, 72, 9, 18, 6]
// n = 23
// Natija: true

// let arr = [6, 25, 91, 23, 72, 9, 18, 6]
// let result = arr.includes(23)

// console.log(result)



// 2-masala. 

// Masalan: [6, 25, 91, 23, 72, 9, 18, 6]
// n = 23
// Natija: 0

// n = 3
// Natija: 23

// let arr = [6, 25, 91, 23, 72, 9, 18, 6]
// let num = +prompt("Index raqamini kiriting:")
// let finded = 0;

// function find(N) {
//     for (let i=0; i<arr.length-1; i++) {
//         if (N === i) {
//             finded = arr[i]
//         } else if (N > i || N < i) {
//             finded = 0
//         }
//     }

//     return finded
// }

// console.log(find(num))



// 3-masala. Arrayning oxiriga item qo'shish

// let arr = [6, 25, 91, 23, 72, 9, 18, 6]
// let num = +prompt("Qo'shmoqchi bo'lgan soningizni qo'shing:")

// function add(N) {
//     arr[arr.length] = N
//     return arr
// }

// console.log(add(num))
