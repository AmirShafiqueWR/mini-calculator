#! /usr/bin/env node
// SHABANG
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter First Number", type: "number", name: "firstNumber" },
    { message: "Enter Second Number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"]
    },
]);
var result = 0;
switch (answer.operator) {
    case "Addition":
        result = answer.firstNumber + answer.secondNumber;
        break;
    case "Subtraction":
        result = answer.firstNumber - answer.secondNumber;
        break;
    case "Multiplication":
        result = answer.firstNumber * answer.secondNumber;
        break;
    case "Division":
        result = answer.firstNumber / answer.secondNumber;
        break;
}
console.log(result);
