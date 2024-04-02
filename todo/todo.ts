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
    message: "would you like to check your list.....",
})
if (questions.three === "yes") {
    console.log("you are added these todos");
    for (let i = 0; i < todo.length; i++) {
        console.log(todo[i]);
    }
}
else {
    console.log("thank you for using this....");
}

let questionss = await inquirer.prompt({
    name: "four",
    type: "list",
    choices: ["edit list", "exit"],
    message: "what you want in last.....",
})
if(questionss.four==="edit list"){
    let questionsss = await inquirer.prompt({
        name: "five",
        type: "list",
        choices: ["todo[]"],
        message: "would you like to check your list.....",
    })
}