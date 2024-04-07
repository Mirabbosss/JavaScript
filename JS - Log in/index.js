const userEamil = prompt("Emailingizni kiriting: ");
const userPassword = prompt("Parolingizni kiriting: ");
const userAge = +prompt("Yoshingizni kiriting: ");

if (userEamil === "mirtursunovmirabbos@gmail.com" && userPassword === "Mirabbos2005") {
    console.log("Xush kelibsiz!");

    if (userAge > 18) {
        console.log("you are adult");
    } else {
        console.log("you are young")
    }
} else {
    console.log("Email or password invalid");
}