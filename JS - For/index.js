// For1. k va n butun sonlari berilgan (n > 0). k sonini n marta chiqaruvchi programma tuzilsin.

// let k = +prompt("Istalgan sonni kiriting:")
// let n = +prompt("Necha marta takrorlansin?")

// if (isNaN(k) || isNaN(n) || k === null || n === null) {
//     console.error("Noto'g'ri kiritish! Raqamlarni kiriting va 'OK' tugmasini bosing.");
// } else {
//     for (let i = 1; i <= n; i++) {
//         console.log(k);
//     }
// }   


// For2. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b ni ham) chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin. (a va b ham chiqarilsin).

// let a = +prompt("a sonini kiriting:")
// let b = +prompt("b sonini kiriting (a < b):")
// let soni = 0;

// for (let i = a; i <= b; i++) {
//     console.log(i);
//     soni++;
// }

// if (i = b) {
//     console.log(`Chiqarilgan sonlarning jami soni: ${soni}`)
// }



// For3. a va b butun sonlari berilgan (a < b). a va b sonlari orasidagi barcha butun sonlarni (a va b dan tashqari) kamayish tartibida chiqaruvchi va chiqarilgan sonlar sonini chiqaruvchi programma tuzilsin.

// let a = +prompt("a sonini kiriting:")
// let b = +prompt("b sonini kiriting (a < b):")
// let soni = 0;

// for (let i = b-1; i > a; i=i-1) {
//     console.log(i);
//     soni++;
// }

// if (i = b) {
//     console.log(`Orasidagi sonlarning jami soni: ${soni}`)
// }



// For4. Bir kg konfetming narxi berilgan (haqiqiy son). 1, 2, ..., 10 kg konfet narxini chiqaruvchu programma tuzilsin.

// let narx = 10000;
// console.log("Konfet narxlari:")

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} kg konfet narxi = ${i * 10000} so'm`)
// }



// Konfet generator

// let kg = +prompt("Necha kg konfet kerak? (1 kg = 15000 so'm)")

// console.log(`Sizdan: ${kg*15000} so'm bo'ladi`);



// For5. Bir kg konfetming narxi berilgan (haqiqiy son). 0.1, 0.2, ..., 1 kg konfet narxini chiqaruvchu programma tuzilsin.

// let narx = 10000;
// console.log("Konfet narxlari:")

// for (let i = 1; i <= 10; i++) {
//     console.log(`${i/10} kg konfet narxi = ${i/10 * 10000} so'm`)
// }



// For6. Bir kg konfetming narxi berilgan (haqiqiy son). 1.2, 1.4, ..., 2 kg konfet narxini chiqaruvchu programma tuzilsin.

// let narx = 10000;
// console.log("Konfet narxlari:")

// for (let i = 12; i <= 20; i=i+2) {
//     console.log(`${i/10} kg konfet narxi = ${i/10 * 10000} so'm`)
// }



// For7. a va b butun sonlari berilgan (a < b). a dan b gacha (a va b ham) bo'lgan barcha butun sonlar yi'gindisini chiqaruvchi programma tuzilsin.

// let a = +prompt("a sonini kiriting:")
// let b = +prompt("b sonini kiriting (a<b):")
// let c=0;

// for (let i = a; i <=b; i++) {
//     c=c+i
// }

// console.log(`Sonlarning yig'indisi: ${c}`)



// For8. a va b butun sonlari berilgan (a < b). a dan b gacha (a va b ham) bo'lgan barcha butun sonlar ko'paytmasini chiqaruvchi programma tuzilsin.

// let a = +prompt("a sonini kiriting:")
// let b = +prompt("b sonini kiriting (a<b):")
// let c=1;

// for (let i = a; i <=b; i++) {
//     c=c*i
// }

// console.log(`Sonlarning ko'paytmasi: ${c}`)



// For9. a va b butun sonlari berilgan (a < b). a dan b gacha bo'lgan barcha butun sonlar kvadratlarning yig'indisini chiqaruvchi programma tuzilsin.

// let a = +prompt("a sonini kiriting:")
// let b = +prompt("b sonini kiriting (a<b):")
// let c=0;

// for (let i = a; i <=b; i++) {
//     c=c+i*i
// }

// console.log(`Sonlarning kvadratlari yig'indisi: ${c}`)



// For10. n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin. S=1+1/2+1/3+...+1/n

// let n = +prompt("Son kiriting:")
// let natija = 0;

// for (let i = 1; i <= n; i++) {
//     natija = natija + 1/i;
// }

// console.log(`Kiritgan soningizni s=1+1/2+1/3+...+1/n formulaga qo'ysak ${natija} natijaga ega bo'lamiz`)