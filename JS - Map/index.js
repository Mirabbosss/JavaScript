// MAP

// let names = ["john", "william", "bill", "kyle"];

// let namesWithCap = names.map(item = item.toUpperCase())
// console.log(namesWithCap);

// let firstUpperCase = names.map(item => item.slice(0, 1).toUpperCase() + item.slice(1))
// console.log(firstUpperCase);

// let products = [
//     {
//         name: "TV",
//         price: 300
//     },
//     {
//         name: "iphone",
//         price: 1000
//     },
//     {
//         name: "laptop",
//         price: 5000
//     }
// ];

// [300, 1000, 5000]

// let prices = products.map(item => item.price);
// let totalPrice = prices.reduce((sum, item) =>  sum + item, 0 );
// console.log(prices, totalPrice);




// lesson

// let users = [
//     {
//         name: "John",
//         age: 30,
//         password: "12345678"
//     },
//     {
//         name: "Bill",
//         age: 25,
//         password: "87654321"
//     }
// ]

// let secretPassword = users.map(item => {
//     item.password = "********";
//     return item
// })

// console.log(secretPassword);





// console.log("hello".charAt(1));
// console.log("hello"[1]);
// console.log("hello".at(-1))
// console.log("hello".slice(-1))









// Map lessons

// let numbers = ["salom", "bye", "how"];
// let vowels = [..."aeiou"];

// let exp = numbers.map(n => {
//     let word = ""
//     for(let i = 0; i < n.length; i++){
//         if(vowels.includes(n[i])){
//             word += n[i].toUpperCase()
//         }
//         else{
//             word += n[i]
//         }
//     }
//     return word
// });

// console.log(exp)