// let number = +prompt("n ni kiriting:")

// function allNumber(number) {
//     let array=[]

//     for (let i=0; i<=number; i++) {
//         array[i]=i
//     }

//     console.log(array)
// }

// allNumber(number)



// Masala. Array elementlaridan eng kichigini topish

// let arr = [2, 6, 8, 3, 9, 10, 20]

// function findMinElement(arr) {
//     let min = arr[0]

//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i]<min) {
//             min = arr[i]
//         }
//     }
//     return min;
// }

// let result = findMinElement(arr)
// console.log(result)



// Masala. Array elementlarining o'rtacha qiymatini topish

// let arr = [2, 6, 8, 3, 9, 10, 20]

// function findAverageElement(arr) {
//     let sum = 0;
//     let average;

//     for (let i=0; i<7; i++) {
//         sum+=arr[i]
//     }

//     average=sum/arr.length;

//     return average
// }


// let result = findAverageElement(arr)
// console.log(result)



// Masala. Array elementlaridan eng kattasini topish

// let arr = [2, 6, 8, 3, 9, 10, 20]

// function findMaxElement(arr) {
//     let max = arr[0]

//     for (let i = 0; i <= arr.length; i++) {
//         if (arr[i]>max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }

// let result = findMaxElement(arr)
// console.log(result)





// Array1. n ta elementdan tashkil topgan arr nomli massiv berilgan, massivdagi numberlarni yig’indisini toping.
// Input: [10,”salom”,21,4,1,12,true]
// Output: 48

// let arr = [10,"salom",21,4,1,12,true];
// let sum = 0;

// for (let i=0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//         sum += arr[i]
//     }
// }

// console.log(sum);



// Array2. n ta elementdan tashkil topgan arr nomli massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.
// Input: arr = [1,23,42,14,21,22], R = 16
// Output: 14

// let arr = [1, 23, 42, 14, 21, 22];
// let R = 16;
// let engKichikFarq = Math.abs(arr[0] - R);
// let engYaqinSon = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     let farq = Math.abs(arr[i] - R);
//     if (farq < engKichikFarq) {
//         engKichikFarq = farq;
//         engYaqinSon = arr[i];
//     }
// }

// console.log(engYaqinSon);



// Array3. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massivni juft indeksli elementlari sonini toping
// Input: [10,”salom”,21,4,1,12,true]
// Output: 4

// let arr = [10, "salom", 21, 4, 1, 12, true];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 != 1) {
//         sum++
//     }
// }

// console.log(sum);



// Array4. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indekslarini chiqaruvchi programma tuzilsin
// Input: [10,21,4,1,12,21]
// Output: 1,5

// let arr = [10,21,4,1,12,21]; 
// let indexes = [];

// for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//         if (arr[i] === arr[j]) {
//             indexes.push(i, j);
//         }
//     }
// }

// console.log(indexes);



// Array5. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massivni toq elementlari sonini toping
// Input: [1,23,42,14,21,22]
// Output: 3

// let arr = [1,23,42,14,21,22];
// let sum = 0;

// for (let i = 1; i < arr.length; i++) {
//     if (i % 2 == 1) {
//         sum++
//     }
// }

// console.log(sum);



// Array6. n ta butun sonlardan iborat arr nomli massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin
// Input: arr=[10,2,34,5,13,63,16], k = 3
// Output: [30,6,102,15,39,189,48]

// let arr = [10, 2, 34, 5, 13, 63, 16];
// let k = 3;

// for (let i=0; i<arr.length; i++) {
//     arr[i] = arr[i]*k
// }

// console.log(arr);


// Array10. n ta elementdan iborat arr nomli massiv berilgan. Massivning eng kichik va eng katta elementlari topilsin va o'rni almashtirilsin.
// Input: [7, 4, 9, 2, 3, 1, 5]
// Output: (Max: 9, Min: 1) [7, 4, 1, 2, 3, 9, 5]

// let arr = [7, 4, 9, 2, 3, 1, 5];
// let engKichikIndex = arr.indexOf(Math.min(...arr));
// let engKattaIndex = arr.indexOf(Math.max(...arr));
// [arr[engKichikIndex], arr[engKattaIndex]] = [arr[engKattaIndex], arr[engKichikIndex]];

// console.log(arr);