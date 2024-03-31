#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nhey buddy! welcome to areeb's todo list.");
console.log("in which you can make an array according to your mind set.\n");
let todo = [];
let condition = true;
while (condition) {
    let ques = await inquirer.prompt({
        name: "one",
        type: "input",
        message: "what you want to add..."
    });
    todo.push(ques.one);
    console.log(todo);
    let question = await inquirer.prompt({
        name: "two",
        type: "list",
        choices: ["yes", "no"],
        message: "do you want to add more...",
    });
    if (question.two === "no") {
        condition = false;
    }
    else {
        condition = true;
    }
}
let questions = await inquirer.prompt({
    name: "three",
    type: "list",
    choices: ["yes", "no"],
    message: "do you want to see your array in lining manner?...",
});
if (questions.three === "yes") {
    for (let i = 0; i < todo.length; i++) {
        console.log(todo[i]);
    }
}
else {
    console.log("thank you for using this....");
}
