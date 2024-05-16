// Array From
// let res1 = Array.from("Salom", (item => item.toUpperCase()));
// console.log(res1);


// Array isArray
// let res2 = [1, 2, 3, 4]
// console.log(Array.isArray(res2));


// // Array OF
// let res3 = Array.of(4, 3, "Salom");
// console.log(res3);


// Array CopyWithin
// let array = ["apple", "orange", "kiwi", "banana", "peach"]
// let res4 = array.copyWithin(3, 1, 3)
// console.log(res4);


// Arrat with
// let array = ["apple", "orange", "kiwi", "banana", "peach"]
// let res5 = array.with(1, "pinniple");
// console.log(res6);



// Lesson

// let arr = ["apple", "kiwi", "banana", "peach", "melon"] => ["ap_pl_e", "ki_wi", "ba_na_na", "pe_ac_h", "me_lo_n"];

// let arr = ["apple", "kiwi", "banana", "peach", "melon"];

// let res = arr.map(item => item.split("").join("_"));
// console.log(res);

// let k = [];

// for(let i = 0; i < arr.length; i++) {
//     let word = ""
//     for(let j = 0; j < arr[i].length; j++) {
//         if(j % 2 == 0 & j !=0) {
//             word += "_" + arr[i][j]
//         } else {
//             word += arr[i][j]
//         }
//     }

//     k.push(word)
// }

// console.log(k);





// Lesson
// let arr = [2, 4, 8];

// let newArr = arr.map(item => {
//     let sum = 0;
//     for (let i = 1; i <= item; i++) {
//         sum += i;
//     }   

//     return sum;
// })

// console.log(newArr);