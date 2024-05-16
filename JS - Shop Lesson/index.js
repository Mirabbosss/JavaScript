// #1

let shop = JSON.parse(localStorage.getItem("shop"))
   ? JSON.parse(localStorage.getItem("shop"))
   : [
      {
         _id: "1",
         name: "Pen",
         color: ["blue", "red", "black"],
         price: 2000
      },
      {
         _id: "2",
         name: "Pencil",
         color: ["blue", "red", "black"],
         price: 3000,
      },
      {
         _id: "3",
         name: "paper",
         color: ["blue", "red", "black"],
         price: 4000
      },
      {
         _id: "4",
         name: "notebook",
         color: ["blue", "red", "black"],
         price: 5000,
      },
      {
         _id: "5",
         name: "book",
         color: ["blue", "red", "black"],
         price: 6000
      },
   ];

localStorage.setItem("shop", JSON.stringify(shop));

function setLocalStorage() {
   localStorage.setItem("shop", JSON.stringify(shop));
}

function displayProducts(db = shop) {
   console.log("Mahsulotlar ro'yhati");
   db.forEach((item, index) => {
      document.write(`<h2>${item._id}. Name: ${item.name} Color: ${item.color} Price: $${item.price}</h2>`);
   });
}

function addProduct() {
   let addProductName = prompt(`Yangi mahsulot nomini kiriting:`);
   let addProductColor = prompt(`Yangi mahsulot rangini kiriting:`);
   let addProductPrice = +prompt(`Yangi mahsulot narxini kiriting:`)

   const newProduct = {
      _id: shop.length + 1,
      name: addProductName,
      color: [addProductColor],
      price: addProductPrice,
   };

   shop = [...shop, newProduct];
   setLocalStorage();
   displayProducts();
}

function updateProduct() {
   const productID = +prompt(`Mahsulotni ID sini kiriting(1,2,3...):`);

   shop = shop.map((product) =>
      product._id === productID
         ? {
            ...product,
            name: prompt(`Mahsulotni yangi nomini kiriting:`, product.name),
            color: prompt(`Mahsulotni yangi nomini kiriting:`, product.color),
            price: +prompt('Yangi narxni kiriting:', product.price)
         }
         : product
   );

   setLocalStorage();
   displayProducts();
}

function removeProduct() {
   const productID = +prompt(`Mahsulotni ID sini kiriting(1,2,3...):`);

   shop = shop.filter((product) => product._id !== productID);

   setLocalStorage();
   displayProducts();
}

function searchProduct() {
   let option = prompt("Siz nima bo'yicha search qilmoqchisiz (ID/name): ").toLowerCase();

   while (!['name', 'id'].includes(option)) {
      alert("Siz faqat name va id ni kiritishingiz mumkin!");
      option = prompt("Siz nima bo'yicha search qilmoqchisiz (ID/name): ").toLowerCase();
   }

   let name;
   let id;
   let result;
   if (option === 'name') {
      name = prompt(`${option} ni kiriting`);
      name.toLowerCase();
      result = shop.filter((item) => item.name.toLowerCase().includes(name));
   } else if (option === 'id') {
      id = +prompt(`${option} ni kiriting`);
      result = shop.filter((item) => item._id.includes(id));
   }

   if (result.length === 0) {
      alert("Mahsulot topilmadi!");
      return;
   }

   displayProducts(result);
}

function totalPrice() {
   const result = shop.reduce((sum, item) => sum + item.price, 0);

   document.write(`Total price: $${result}`);
}

// addProduct();
// updateProduct();
// removeProduct();
// searchProduct();
// totalPrice();
// displayProducts();

// DRY -> Don't Repeat Yourself



let question = prompt(`1 - Mahsulotlar ro'yhati\n2 - Mahsulotni izlash\n3 - Mahsulot qo'shish\n4 - Mahsulotni tahrirlash\n5 - Mahsulotni o'chirish\n6 - Mahsulotni umumiy narxi\n\n0 - Dasturdan chiqish`)

switch(question) {
    case '1': displayProducts(); break;
    case '2': searchProduct(); break;
    case '3': addProduct(); break;
    case '4': updateProduct(); break;
    case '5': removeProduct(); break;
    case '6': totalPrice(); break;
    case '0': document.write(`Dasturdan chiqildi.`); break;
    default: alert('Invalid operator')
}