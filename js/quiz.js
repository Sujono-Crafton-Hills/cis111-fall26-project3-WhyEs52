let answer = document.getElementById("quiz-select");
let checkButton = document.getElementById("check-button");
let quizResult = document.getElementById("quiz-result");

function checkAnswer() {
    if (answer.value === "Savannas") {
        quizResult.textContent = "Correct";
    } else if (answer.value === "") {
        quizResult.textContent = "Please select an answer";
    } else {
        quizResult.textContent = "Wrong";
    }
}

checkButton.addEventListener("click", checkAnswer);