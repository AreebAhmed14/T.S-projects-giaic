#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nhey buddy! welcome to areeb's todo list.\n");
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
});
if (questions.three === "yes") {
    console.log("you are added these todos");
    for (let i = 0; i < todo.length; i++) {
        console.log(todo[i]);
    }
}
else {
    console.log("as your wish....");
}
let edit = await inquirer.prompt({
    name: "delet",
    type: "list",
    choices: ["delet item", "exit"],
    message: "what you want....."
});
if (edit.delet === "delet item") {
    let select = await inquirer.prompt({
        name: "todele",
        type: "list",
        choices: todo,
        message: "select item you want to delet....."
    });
    for (let i = 0; i < todo.length; i++) {
        if (select.todele == todo[i]) {
            todo.splice(i, 1);
            console.log("successfully Deleted");
        }
    }
}
else {
    console.log("Thanks for using Areeb's todo list......");
}
console.log(todo);
