// All Questions
const questions = [
    {
        question: "HTML stands for?",
        options: [
            "Hyper Text Markup Language",
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language",
            "Hyper Tool Markup Language"
        ],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: "Cascading Style Sheets"
    },

    {
        question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
        options: [
            "src",
            "alt",
            "title",
            "longdesc"
        ],
        correct: "alt"
    },

    {
        question: "Which CSS property controls the text size?",
        options: [
            "font-style",
            "text-size",
            "font-size",
            "text-style"
        ],
        correct: "font-size"
    },
    {
        question: "How do you call a function named 'myFunction' in JavaScript?",
        options: [
            "call myFunction()",
            "call function myFunction()",
            "myFunction()",
            "Call.myFunction()"
        ],
        correct: "myFunction()"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: [
            "script tag",
            "js tag",
            "javascript tag",
            "scripting tag"
        ],
        correct: "script tag"
    },
    {
        question: "How does a WHILE loop start?",
        options: [
            "while (i <= 10; i++)",
            "while (i <= 10)",
            "while i = 1 to 10",
            "while (i++ <= 10)"
        ],
        correct: "while (i <= 10)"
    },

    {
        question: "Which event occurs when the user clicks on an HTML element?",
        options: [
            "onmouseclick",
            "onchange",
            "onclick",
            "onmouseover"
        ],
        correct: "onclick"
    },
    {
        question: "What is the correct CSS property to change the font color?",
        options: [
            "backgroundColor",
            "fontColor",
            "color",
            "textColor"
        ],
        correct: "color"
    },

    {
        question: "Which company developed JavaScript?",
        options: [
            "Netscape",
            "Bell Labs",
            "Sun Microsystems",
            "IBM"
        ],
        correct: "Netscape"
    },
    {
        question: "What is the most used programming language in 2021?",
        options: [
            "Java",
            "C",
            "Python",
            "JavaScript"
        ],
        correct: "JavaScript"
    },

    {
        question: "Which of the following is a JavaScript framework?",
        options: [
            "Python",
            "React",
            "Django",
            "Flask"
        ],
        correct: "React"
    },
    {
        question: "What is the correct way to write a JavaScript array?",
        options: [
            "var colors = (1:'red', 2:'green', 3:'blue')",
            "var colors = ['red', 'green', 'blue']",
            "var colors = 'red', 'green', 'blue'",
            "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')"
        ],
        correct: "var colors = ['red', 'green', 'blue']"
    },

    
];

let currentQuestionIndex = 0;
let score = 0;

document.addEventListener("DOMContentLoaded", () => {
    displayQuestion();

    document.getElementById("next-button").addEventListener("click", () => {
        const selectedOption = document.querySelector('input[name="option"]:checked');
        if (selectedOption) {
            const answer = selectedOption.value;
            if (answer === questions[currentQuestionIndex].correct) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                displayQuestion();
            } else {
                showResults();
            }
        } else {
            alert("Please select an option!");
        }
    });
});

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1}`;
    document.getElementById("total-questions").textContent = `Total Questions: ${questions.length}`;
    document.getElementById("question").textContent = question.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";
    question.options.forEach(option => {
        const optionElement = document.createElement("div");
        optionElement.className = "option";
        optionElement.innerHTML = `
            <label>
                <input type="radio" name="option" value="${option}">
                ${option}
            </label>
        `;
        optionsContainer.appendChild(optionElement);
    });
}

function showResults() {
    document.getElementById("quiz-container").innerHTML = `
        <h2>Quiz Completed</h2>
        <p>Your score: ${score} out of ${questions.length}</p>
    `;
}
