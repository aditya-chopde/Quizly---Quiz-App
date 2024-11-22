console.log("Welcome to the quiz App !")

const questions_2 = [
    {
        question: "What is the SI unit of force?",
        answers: [
            { text: "Newton", correct: true },
            { text: "Joule", correct: false },
            { text: "Watt", correct: false },
            { text: "Volt", correct: false },
        ]
    },
    {
        question: "What is the acceleration due to gravity on the surface of Earth (approximately)?",
        answers: [
            { text: "9.8 m/s^2", correct: true },
            { text: "6.7 m/s^2", correct: false },
            { text: "12.5 m/s^2", correct: false },
            { text: "5.2 m/s^2", correct: false },
        ]
    },
    {
        question: "What is the SI unit of electric charge?",
        answers: [
            { text: "Coulomb", correct: true },
            { text: "Ampere", correct: false },
            { text: "Volt", correct: false },
            { text: "Ohm", correct: false },
        ]
    },
    {
        question: "According to Newton's first law of motion, an object at rest tends to stay at rest unless acted upon by what?",
        answers: [
            { text: "Friction", correct: false },
            { text: "Gravity", correct: false },
            { text: "Force", correct: true },
            { text: "Acceleration", correct: false },
        ]
    },
    {
        question: "What is the formula for calculating kinetic energy?",
        answers: [
            { text: "KE = mv^2", correct: false },
            { text: "KE = 0.5mv^2", correct: true },
            { text: "KE = mgh", correct: false },
            { text: "KE = Fd", correct: false },
        ]
    },
    {
        question: "Which type of energy is associated with the motion of atoms and molecules?",
        answers: [
            { text: "Kinetic energy", correct: false },
            { text: "Potential energy", correct: false },
            { text: "Thermal energy", correct: true },
            { text: "Electrical energy", correct: false },
        ]
    },
    {
        question: "What is the SI unit of power?",
        answers: [
            { text: "Watt", correct: true },
            { text: "Joule", correct: false },
            { text: "Newton", correct: false },
            { text: "Ampere", correct: false },
        ]
    },
    {
        question: "What is the law that states that the total electric charge of an isolated system remains constant over time?",
        answers: [
            { text: "Coulomb's Law", correct: false },
            { text: "Ohm's Law", correct: false },
            { text: "Gauss's Law", correct: false },
            { text: "Conservation of Charge", correct: true },
        ]
    },
    {
        question: "What is the SI unit of frequency?",
        answers: [
            { text: "Hertz", correct: true },
            { text: "Coulomb", correct: false },
            { text: "Pascal", correct: false },
            { text: "Tesla", correct: false },
        ]
    },
    {
        question: "Which of the following is a measure of the disorder or randomness in a system?",
        answers: [
            { text: "Entropy", correct: true },
            { text: "Enthalpy", correct: false },
            { text: "Entanglement", correct: false },
            { text: "Elasticity", correct: false },
        ]
    }
];

const questions_3 = [
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Au", correct: true },
            { text: "Ag", correct: false },
            { text: "Pt", correct: false },
            { text: "Fe", correct: false },
        ]
    },
    {
        question: "Which element is the most abundant in the Earth's atmosphere?",
        answers: [
            { text: "Nitrogen", correct: false },
            { text: "Oxygen", correct: true },
            { text: "Carbon", correct: false },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "What is the chemical formula for water?",
        answers: [
            { text: "H2O2", correct: false },
            { text: "CO2", correct: false },
            { text: "H2O", correct: true },
            { text: "NH3", correct: false },
        ]
    },
    {
        question: "Dalton's name is associated with which of the following terms ?",
        answers: [
            { text: "Electron", correct: false },
            { text: "Protron", correct: false },
            { text: "Atom", correct: true },
            { text: "Neutron", correct: false },
        ]
    },
    {
        question: "Which gas gives soft drinks their fizz?",
        answers: [
            { text: "Nitrogen", correct: false },
            { text: "Oxygen", correct: false },
            { text: "Carbon dioxide", correct: true },
            { text: "Hydrogen", correct: false },
        ]
    },
    {
        question: "What is the chemical symbol for iron?",
        answers: [
            { text: "Ir", correct: false },
            { text: "Fe", correct: true },
            { text: "Au", correct: false },
            { text: "Pb", correct: false },
        ]
    },
    {
        question: "Which acid is found in lemons?",
        answers: [
            { text: "Hydrochloric acid", correct: false },
            { text: "Acetic acid", correct: false },
            { text: "Citric acid", correct: true },
            { text: "Sulfuric acid", correct: false },
        ]
    },
    {
        question: "What is the process of converting a solid directly into a gas called?",
        answers: [
            { text: "Sublimation", correct: true },
            { text: "Evaporation", correct: false },
            { text: "Condensation", correct: false },
            { text: "Fusion", correct: false },
        ]
    },
    {
        question: "Which gas is responsible for the ozone layer depletion?",
        answers: [
            { text: "Carbon dioxide", correct: false },
            { text: "Methane", correct: false },
            { text: "Chlorofluorocarbons (CFCs)", correct: true },
            { text: "Nitrous oxide", correct: false },
        ]
    },
    {
        question: "What is the name of the process by which plants make their food?",
        answers: [
            { text: "Photosynthesis", correct: true },
            { text: "Respiration", correct: false },
            { text: "Fermentation", correct: false },
            { text: "Combustion", correct: false },
        ]
    }
];

const questions_4 = [
    {
        question: "What is the unit of electrical resistance?",
        answers: [
            { text: "Ohm", correct: true },
            { text: "Volt", correct: false },
            { text: "Ampere", correct: false },
            { text: "Coulomb", correct: false },
        ]
    },
    {
        question: "Which component stores electrical energy in a circuit?",
        answers: [
            { text: "Capacitor", correct: true },
            { text: "Resistor", correct: false },
            { text: "Inductor", correct: false },
            { text: "None of the Above", correct: false },
        ]
    },
    {
        question: "What does LED stand for?",
        answers: [
            { text: "Light Emitting Diode", correct: true },
            { text: "Light Enhancing Device", correct: false },
            { text: "Light Emitting Device", correct: false },
            { text: "Light Emerging Diode", correct: false },
        ]
    },
    {
        question: "What does DC stand for in electricity?",
        answers: [
            { text: "Direct Current", correct: true },
            { text: "Digital Curren", correct: false },
            { text: "Dual Current", correct: false },
            { text: "Domestic Current", correct: false },
        ]
    },
    {
        question: "What is the basic unit of capacitance?",
        answers: [
            { text: "Farad", correct: true },
            { text: "Henry", correct: false },
            { text: "Coulomb", correct: false },
            { text: "Tesla", correct: false },
        ]
    },
    {
        question: "Which component is used to amplify or switch electronic signals?",
        answers: [
            { text: "Transistor", correct: true },
            { text: "Diode", correct: false },
            { text: "Capacitor", correct: false },
            { text: "Inductor", correct: false },
        ]
    },
    {
        question: "What is the SI unit of electric current?",
        answers: [
            { text: "Ampere", correct: true },
            { text: "Watt", correct: false },
            { text: "Joule", correct: false },
            { text: "Ohm", correct: false },
        ]
    },
    {
        question: "What is the process of converting AC to DC called?",
        answers: [
            { text: "Rectification", correct: true },
            { text: "Amplification", correct: false },
            { text: "Oscillation", correct: false },
            { text: "Conduction", correct: false },
        ]
    },
    {
        question: "Which type of circuit allows current to flow along multiple paths?",
        answers: [
            { text: "Parallel", correct: true },
            { text: "Series", correct: false },
            { text: "Open", correct: false },
            { text: "None of the Above", correct: false },
        ]
    },
    {
        question: "What is the term for the opposition to the flow of electric current?",
        answers: [
            { text: "Resistance", correct: true },
            { text: "Conductance", correct: false },
            { text: "Impedance", correct: false },
            { text: "Radiation", correct: false },
        ]
    }
];

const questions = [
    {
        question: "What does 'printf' function do in C?",
        answers: [
            { text: "Reads input from the user", correct: false },
            { text: "Prints output to the screen", correct: true },
            { text: "Calculates mathematical expressions", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "How do you declare a variable in C?",
        answers: [
            { text: " Using the 'variable' keyword", correct: false },
            { text: "By directly assigning a value to it", correct: false },
            { text: "By specifying its type followed by its name", correct: true },
            { text: "By using quotation marks around its name", correct: false },
        ]
    },
    {
        question: "Which symbol is used for comments in C programming?",
        answers: [
            { text: "//", correct: true },
            { text: "--", correct: false },
            { text: "##", correct: false },
            { text: "/* */", correct: false },
        ]
    },
    {
        question: "Which of the following is NOT a valid C data type?",
        answers: [
            { text: "integer", correct: true },
            { text: "float", correct: false },
            { text: "char", correct: false },
            { text: "double", correct: false },
        ]
    },
    {
        question: "What is the purpose of the 'return' statement in C?",
        answers: [
            { text: "To exit the loop", correct: false },
            { text: "To terminate the program", correct: false },
            { text: "To return a value from a function", correct: true },
            { text: "To skip a statement", correct: false },
        ]
    },
    {
        question: "What does the 'scanf' function do in C?",
        answers: [
            { text: "Prints formatted text to the console", correct: false },
            { text: "Reads input from the keyboard", correct: true },
            { text: "Allocates memory for variables", correct: false },
            { text: "None of the above", correct: false },
        ]
    },
    {
        question: "How do you end a C statement?",
        answers: [
            { text: "Using a semicolon (;)", correct: true },
            { text: "Using a colon (:)", correct: false },
            { text: "Using a period (.)", correct: false },
            { text: "Using a comma (,)", correct: false },
        ]
    },
    {
        question: "Which of the following loop structures is used to execute a block of code repeatedly as long as the condition remains true?",
        answers: [
            { text: "for loop", correct: false },
            { text: "while loop", correct: true },
            { text: "do-while loop", correct: false },
            { text: "if-else loop", correct: false },
        ]
    },
    {
        question: "Which of the following is not a valid variable name in C?",
        answers: [
            { text: "my_var", correct: false },
            { text: "123var", correct: true },
            { text: "var_123", correct: false },
            { text: "_var", correct: false },
        ]
    },
    {
        question: "Which operator in C is used to access the value stored in a pointer variable?",
        answers: [
            { text: "*", correct: true },
            { text: "&", correct: false },
            { text: "->", correct: false },
            { text: "::", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const h1 = document.getElementById('h1')
const h2 = document.getElementById('h2')
const h3 = document.getElementById('h3')
const h4 = document.getElementById('h4')
const h5 = document.getElementById('h5')
const h6 = document.getElementById('h6')
const h7 = document.getElementById('h7')
const again = document.getElementById("again")
const radio = document.getElementsByName("quiz_question")
const timer = document.getElementById("timer1")
let interval;

function playAgain(){
    h1.classList.toggle("hidden")
    h2.classList.toggle("hidden")
    h3.classList.toggle("hidden")
    h4.classList.toggle("hidden")
    h5.classList.toggle("hidden")
    h6.classList.toggle("hidden")
    startQuiz()
}

function choice() {
    h1.classList.toggle("hidden")
    h2.classList.toggle("hidden")
    h3.classList.toggle("hidden")
    h4.classList.toggle("hidden")
    h5.classList.toggle("hidden")
    h6.classList.toggle("hidden")
    var count = 59;
    interval = setInterval(function () {
        timer.innerHTML = count;
        count--;
        if (count === -1) {
            clearInterval(interval);
            alert("You're out of time!");
            timer.innerHTML = "00";
            showscore();
        } else if (count < 10 && count >= 0) {
            timer.innerHTML = "0" + count;
        }
    }, 1000);
    showQuestion();
}

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion;
    let questionNo;
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            if (radio[i].value == 2) {
                currentQuestion = questions_2[currentQuestionIndex]
                questionNo = currentQuestionIndex + 1
                questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
            }
            else if (radio[i].value == 3) {
                currentQuestion = questions_3[currentQuestionIndex]
                questionNo = currentQuestionIndex + 1
                questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
            }
            else if (radio[i].value == 4) {
                currentQuestion = questions_4[currentQuestionIndex]
                questionNo = currentQuestionIndex + 1
                questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
            }
            else {
                currentQuestion = questions[currentQuestionIndex]
                questionNo = currentQuestionIndex + 1
                questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
            }
        }
    }

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })

    again.style.display="none";
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct")
        }
        button.disabled = "true";
    })
    nextButton.style.display = "block";
}

function showscore() {
    resetState();
    if (score > 5) {
        questionElement.innerHTML = `Congrats ! 🎉 <br> You Scored ${score} out of ${questions.length}!`;
    } else {
        questionElement.innerHTML = `You can do better ! 👍 <br> You Scored ${score} out of ${questions.length}!`;
    }
    // nextButton.innerHTML="Play Again";
    again.style.display="block"
    timer.innerHTML="00"
    clearInterval(interval)
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showscore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})

startQuiz();