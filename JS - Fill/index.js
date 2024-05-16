// fill

// let rating = 5;
// let result = Array(rating).fill("😊");


// 1) Massivni boshlang'ich qiymatlar bilan to'ldirish:

// let arr = new Array(5);
// arr.fill(0); // arr = [0, 0, 0, 0, 0]

// 2) Massivni ma'lum bir indexdan boshlab to'ldirish:

// let arr = [1, 2, 3, 4, 5];
// let result = arr.fill("*", 2);
// console.log(arr);  // arr = [1, 2, *, *, *];

// 3) Massivni ma'lum bir indexdan boshlab ma'lum bir indexgacha to'ldirish:

// let arr = [1, 2, 3, 4, 5];
// let result = arr.fill(0, 1, 3); 
// console.log(arr); // arr = [1, 0, 0, 4, 5]


// 4) Massivni to'la sonlar bilan to'ldirish:

// let arr = new Array(5);
// let result = arr.fill(5); 
// console.log(arr); // arr = [5, 5, 5, 5, 5]


// 5) Massivni satrlar bilan to'ldirish:

// let arr = new Array(3);
// let result = arr.fill("JavaScript"); 
// console.log(arr); // arr = ["JavaScript", "JavaScript", "JavaScript"]