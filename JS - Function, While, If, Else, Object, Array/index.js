let questions = [
    "Ismingiz nima?",
    "Yoshingiz nechida?",
    "Qaysi kursda o'qimoqchisiz? (Frontend / Backend)",
    "Qaysi payt bo'sh bo'lasiz? (Kunduz / tun)"
];

let answers = [];
let currentQuestionsIndex = 0;

function askQuestion() {
    while (currentQuestionsIndex < questions.length) {
        let answer = prompt(questions[currentQuestionsIndex]);

        if (!answer) {
            continue
        } else {
            answers.push(answer);
            currentQuestionsIndex++;
        }
    }
}

function displayAnswers() {
    console.log("Bu yerda javoblaringiz ro'yhati");
    for (let i = 0; i < answers.length; i++) {
        console.log(`${i + 1}. ${questions[i]}: ${answers[i]}`);
        console.log("===============================================");
    }
}

askQuestion();
displayAnswers();