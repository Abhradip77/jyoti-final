document.getElementById("promiseBtn").addEventListener("click", function() {
    document.getElementById("page1").classList.add("hidden");
    document.getElementById("page2").classList.remove("hidden");
    document.getElementById("bgMusic").play();
    startQuiz();
});

const questions = [
    { question: "When did we go official?", options: ["19 sep(c)", "18 sep", "15 sep", "16 sep"], answer: "19 sep(c)" },
    { question: "Our fav spot?", options: ["si nonnas", "dailys", "high garden", "pop tates(c)"], answer: "pop tates(c)" },
    { question: "My birth sign?", options: ["capricon", "sagittarius", "scorpio(c)", "cancer"], answer: "scorpio(c)" },
    { question: "My favourite team?", options: ["united", "real madrid(c)", "atletico madrid", "atletic club"], answer: "real madrid(c)" },
    { question: "My fav top of yours?", options: ["black kissi one", "pink one", "yellow flower top", "white and pink kurta top(c)"], answer: "white and pink kurta top(c)" }
];

let currentQuestionIndex = 0;

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < questions.length) {
        const questionObj = questions[currentQuestionIndex];
        document.getElementById("questionText").innerText = questionObj.question;
        let optionsHTML = "";
        questionObj.options.forEach(option => {
            optionsHTML += `<button class='optionBtn'>${option}</button>`;
        });
        document.getElementById("options").innerHTML = optionsHTML;

        document.querySelectorAll(".optionBtn").forEach(button => {
            button.addEventListener("click", function() {
                if (this.innerText === questionObj.answer) {
                    currentQuestionIndex++;
                    showQuestion();
                }
            });
        });
    } else {
        document.getElementById("page2").classList.add("hidden");
        document.getElementById("page3").classList.remove("hidden");
    }
}

document.getElementById("noBtn").addEventListener("click", function() {
    let yesBtn = document.getElementById("yesBtn");
    let currentSize = parseFloat(window.getComputedStyle(yesBtn).getPropertyValue("font-size"));
    yesBtn.style.fontSize = (currentSize + 5) + "px";
});

document.getElementById("yesBtn").addEventListener("click", function() {
    document.body.classList.add("rainbow");
});
