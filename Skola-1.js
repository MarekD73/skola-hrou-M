const prompt = require('prompt-sync')();

// Function to generate random math examples
// Otazky z Matematiky pro 1.ročnik

function generateMathExamples(count) {
    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    };

    const operators = Object.keys(operations);
    const examples = [];

    for (let i = 0; i < count; i++) {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operator = operators[Math.floor(Math.random() * operators.length)];
        const result = operations[operator](num1, num2);
        examples.push({ question: `${num1} ${operator} ${num2} =`, answer: result });
    }

    return examples;
}

function printMathExamples(mathProblem) {
    console.log(mathProblem.question);
}

function getUsersAnswer() {
    return parseInt(prompt('Napis spravny vysledek? '), 10);
}

function vyhodnotOdpoved(mathProblem) {
    let userAnswer = getUsersAnswer();
    if (userAnswer === mathProblem.answer) {
        console.log("SPRAVNY vysledek");
        return true;
    } else {
        console.log("ŠPATNY vysledek");
        return false;
    }
}

function startTest() {
    let result = [];
    let examples = generateMathExamples(10);
    examples.forEach((example) => {
        printMathExamples(example);
        let isCorrect = vyhodnotOdpoved(example);
        result.push(isCorrect);
    });

    console.log("Results:", result);
}

startTest();

