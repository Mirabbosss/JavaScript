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