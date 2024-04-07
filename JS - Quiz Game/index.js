const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["A) Paris", "B) London", "C) Berlin", "D) Rome"],
        answer: `a`,
    },
    {
        question: "What is 2 + 2 = ?",
        options: ["A) 3", "B) 4", "C) 5", "D) 6"],
        answer: `b`,
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["A) William Shakespeare", "B) Charles Dickens", "C) Jane Austen", "D) Mark Twain"],
        answer: `a`,
    },
];

let currentQuestionIndex = 0;
let correctAnswer = 0;

function quizGame() {
    let start = confirm("Welcome to our QuizGame!\nDo you want to start the game?")

    if (!start) {
        alert("Bye! Take care!")
        return;
    } else {
        while (currentQuestionIndex < quizQuestions.length) {
            let answer = prompt(`${quizQuestions[currentQuestionIndex].question}\n${quizQuestions[currentQuestionIndex].options.join("\n")}`)

            if (answer.toUpperCase() === 'A' || answer.toUpperCase() === 'B' || answer.toUpperCase() === 'C' || answer.toUpperCase() === 'D') {
                if (!answer) {
                    alert("Please provide an answer.")
                } else {
                    if (answer.toLowerCase() === quizQuestions[currentQuestionIndex].answer) {
                        console.log("Correct!")
                        correctAnswer++
                    } else {
                        console.log("Incorrect!")
                    }
                    currentQuestionIndex++
                }
            } else {
                alert("Invalid answer. Please choose from the provided variants");
            }
        }
    }

    console.log(`Quiz completed! Your score: ${correctAnswer} out of ${quizQuestions.length} (${parseInt(correctAnswer * 100 / quizQuestions.length)} %)`);
    alert("This game was made by a student of Islam Abdulakhatov! Islam-Developer N1 🔥");
}

// ADMIN PANEL

const userEmail = prompt("Email:");  // email: admin@gmail.com
const userPassword = prompt("Password:"); // password: admin

function adminPanel() {
    if (!userEmail) {
        alert("Please do not leave blank");
    } else {
        if (userEmail === "admin@gmail.com" && userPassword === "admin") {
            console.log("Welcome to admin panel!");
            alert("Welcome to admin panel!");
            let editStart = confirm("Add a new question?")

            if (!editStart) {
                let editStart = confirm("Do we remove any questions?")

                if (!editStart) {
                    let ask = confirm("Enter the game if you don't want to change anything?");
                    if (!ask) {
                        console.log("This game was made by a student of Islam Abdulakhatov! Islam-Developer N1 🔥")
                        alert("This game was made by a student of Islam Abdulakhatov! Islam-Developer N1 🔥")
                    } else {
                        quizGame()
                    }

                    quizGame()
                } else {
                    let nthquestion = +prompt("Which question do you want to delete?(1, 2, 3, ...)");
                    nthquestion--

                    quizQuestions.splice(nthquestion, 1);
                    console.log(`${nthquestion + 1}-question successfully deleted!`);
                    alert(`${nthquestion + 1}-question successfully deleted!`);

                    for (let i = 0; i < quizQuestions.length; i++) {
                        console.log(`Question-${i + 1}: ${quizQuestions[i].question}`);
                    }

                    let ask = confirm("Would you like to see the change in-game?");
                    if (!ask) {
                        console.log("This game was made by a student of Islam Abdulakhatov! Islam-Developer N1 🔥")
                        alert("This game was made by a student of Islam Abdulakhatov! Islam-Developer N1 🔥")
                    } else {
                        quizGame()
                    }
                }
            } else {
                let newQuestion = prompt("Enter a new question:");
                console.log("Question successfully added!");
                let variantA = prompt("Enter the answer to option A");
                console.log("Variant A successfully added!");
                let variantB = prompt("Enter the answer to option B");
                console.log("Variant B successfully added!");
                let variantC = prompt("Enter the answer to option C");
                console.log("Variant C successfully added!");
                let variantD = prompt("Enter the answer to option D");
                console.log("Variant D successfully added!");
                let trueAnswer = prompt("Enter a true answer (a, b, c, d):");
                console.log("True answer successfully added!");
                let newObject = {
                    question: `${newQuestion}`,
                    options: [`A) ${variantA}`, `B) ${variantB}`, `C) ${variantC}`, `D) ${variantD}`,],
                    answer: `${trueAnswer}`,
                };

                quizQuestions.push(newObject);
                console.log("Your question has been successfully added to the list!");

                for (let i = 0; i < quizQuestions.length; i++) {
                    console.log(`Question-${i + 1}: ${quizQuestions[i].question}`);
                }
                
                let ask = confirm("Would you like to see the change in-game?");
                    if (!ask) {
                        console.log("This game was made by a student of Islam Abdulakhatov! Islam-Developer N1 🔥")
                        alert("This game was made by a student of Islam Abdulakhatov! Islam-Developer N1 🔥")
                    } else {
                        quizGame()
                    }
            }

        } else {
            console.log("Email or password invalid");
            alert("Email or password invalid");
        }
    }
}

adminPanel()