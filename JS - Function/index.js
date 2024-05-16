// 1-masala. Oy raqimini kiritganda qaysi fasl ekanligini aniqlovchi funksiya yozing.

// let raqami = +prompt("Oy tartib raqamini kiriting:")

// function aniqlovchi(raqami) {

// switch (raqami) {
//     case 1: console.log("1-oy bu Yanvar, Yanvar qish faslining ikkinchi oyi hisoblanadi"); break;
//     case 2: console.log("2-oy bu Fevral, Fevral qish faslining uchinchi oyi hisoblanadi"); break;
//     case 3: console.log("3-oy bu Mart, Mart bahor faslining birinchi oyi hisoblanadi"); break;
//     case 4: console.log("4-oy bu Aprel, Aprel bahor faslining ikkinchi oyi hisoblanadi"); break;
//     case 5: console.log("5-oy bu May, May bahor faslining uchinchi oyi hisoblanadi"); break;
//     case 6: console.log("6-oy bu Iyun, Iyun yoz faslining birinchi oyi hisoblanadi"); break;
//     case 7: console.log("7-oy bu Iyul, Iyul yoz faslining ikkinchi oyi hisoblanadi"); break;
//     case 8: console.log("8-oy bu Avgust, Avgust yoz faslining uchinchi oyi hisoblanadi"); break;
//     case 9: console.log("9-oy bu Sentyabr, Sentyabr kuz faslining birinchi oyi hisoblanadi"); break;
//     case 10: console.log("10-oy bu Oktyabr, Oktyabr kuz faslining ikkinchi oyi hisoblanadi"); break;
//     case 11: console.log("11-oy bu Noyabr, Noyabr kuz faslining uchinchi oyi hisoblanadi"); break;
//     case 12: console.log("12-oy bu Dekabr, Dekabr qish faslining birinchi oyi hisoblanadi"); break;
//     default: console.log("Bunday oy yo'q");
//   }

// }

// aniqlovchi(raqami)



// 2-masala. Yoshingizni aniqlovchi funksiya kiriting.

// let yil = +prompt("Tug'ilgan yilingizni kiriting:")

// function yoshAniqla(year) {

//     let yosh = 2024 - year;
//     console.log(`Sizning yoshingiz ${yosh} da`)

// }

// yoshAniqla(yil)



// 3-masala. N gacha bo'lgan juft sonlar yig'indisini N gacha bo'lgan toq sonlar yig'indisiga nisbatini toping.

// let son = +prompt("Istalgan son kiriting:")

// function calculator(N) {
//     let juftyigindi = 0
//     let toqyigindi = 0
//     let nisbat;

//     if (N > 0) {

//         for (let i = 1; i <= N; i++) {

//             if (i % 2 === 0) {
//                 juftyigindi += i
//             } else (
//                 toqyigindi += i
//             )
//         }

//         nisbat = juftyigindi / toqyigindi
//         console.log(`Juft sonlar yig'indisining toq sonlar yig'indisiga nisbati ${nisbat} ga teng`)

//     } else {
//         alert("Musbat son kiriting!")
//     }
// }

// calculator(son)



// 4-masala. Telefon raqam kodiga qarab qaysi "Operator" ekanini aniqlovchi dastur yozing.

// cod = +prompt("Operator kodini kiriting:")

// function operatorAniqla(code) {
//     if (code === 33) {
//         console.log("Ushbu kod operatori Humans");
//     } else if (code === 90 || code === 91) {
//         console.log("Ushbu kod operatori Beeline");
//     } else if (code === 50 || code === 93 || code === 94) {
//         console.log("Ushbu kod operatori Ucell");
//     } else if (code === 95 || code === 99) {
//         console.log("Ushbu kod operatori UzMobile");
//     } else if (code === 97 || code === 88) {
//         console.log("Ushbu kod operatori MobiUz");
//     } else if (code === 98) {
//         console.log("Ushbu kod operatori Perfectum Mobile");
//     } else if (code === 78) {
//         console.log("Ushbu kod operatori Sharq Telecom");
//     }
// }

// operatorAniqla(cod)



// Function constructors
// 5-masala. "Oson1" nomi function constructor e'lon qiling. Bu klassda "a" integer o'zgaruvchi bor. outputA() - bu function constructordagi "a" ni qiymatini print qilsin.

// function Oson1(a) {
//     this.a = a;
//     this.outputA = function () {
//         console.log(this.a)
//     };
// }

// let oson1 = new Oson1(10);
// oson1.outputA();



// 6-masala. "Oson2" nomli function constructor e'lon qiling. Bu function constructorda "a" va "b" integer o'zgaruvchilari bor. summa() - bu funksiya function constructordagi "a" va "b" yig'indisini toping.

// function Oson2(a, b) {
//     this.a = a;
//     this.b = b;
//     this.summa = function() {
//         return a + b
//     }
// }

// let oson2 = new Oson2(5, 6)
// console.log(oson2.summa());



// 7-masala. 

// let firstName = prompt("Ismingizni kiriting:");
// let lastName = prompt("Familiyangizni kiriting:");
// let age = +prompt("Yoshingizni kiriting:")

// function UserData(firstName, lastName, age) {
//     this.Ism = firstName;
//     this.Familiya = lastName;
//     this.Yosh = age;

//     return `Ism: ${this.Ism}\nFamiliya: ${this.Familiya}\nYosh: ${this.Yosh}`;
// }

// let result = new UserData(firstName, lastName, age)
// console.log(result);



// 8-masala.

// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");
// let c = prompt("c ni kiriting:");

// function FindMax(a, b, c) {
//     let bigNumber;
//     if (a > b && a > c) {
//         bigNumber = a;
//     } else if (b > c && b > a) {
//         bigNumber = b;
//     } else {
//         bigNumber = c;
//     }

//     this.max = function() {
//         console.log(bigNumber);
//     };
// }

// let result = new FindMax(a, b, c);
// result.max();



// 9-masala.

// let word = ("So'z kiriting:");
// let letter = ("Harf kiriting:");

// function FindCountLetter(word, letter) {
//     this.word = word;
//     this.letter = letter;
//     this.findCountLetters = function () {
//         let count = 0;

//         // for(let item of this.word) {
//         //     if(item === this.letter) {
//         //         count++
//         //     }
//         // }

//         this.word.forEach(item => {
//             if (item === this.letter) {
//                 count++
//             }
//         })
//     }
// }

// let result = new FindCountLetter(word, letter);



// 10-masala.

// function ListSum(list) {
//     this.list = list;
//     this.count = 0;

//     this.sum = function() {
//         // for (let item of this.list) {
//         //     this.count += item;
//         // }

//         this.count = this.list.reduce((sum, value) => sum + value, 0)
//     };
// }

// let listSums = new ListSum([1, 2, 3, 4, 5, 6, 7]);
// listSums.sum();
// console.log(listSums.count);


// Callback

let a = 5;
let b = 4;

function sumNumbers(x, y) {
    console.log("Kichik funksiya");
    return x + y;
}

function findPeremeter(fn, a, b) {
    console.log("Katta fynksiya");
    return fn(a, b) * 2;
}

let result = findPeremeter(sumNumbers, a, b);
console.log(result);