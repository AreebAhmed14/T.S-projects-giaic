#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
let todo = [];
console.log(chalk.blueBright("\nWelcome to Areeb's ToDo list...."));
console.log(chalk.red("This program only for 18+ guy.....\n"));
let age = await inquirer.prompt({
    name: "falt",
    type: "number",
    message: chalk.cyan("Enter your age....")
});
if (age.falt >= 18) {
    console.log(chalk.greenBright("\nyou can use this.....\n"));
    while (condition) {
        let options = await inquirer.prompt({
            name: "for",
            type: "list",
            choices: ["Add item", "check list", "delet item", "exit"],
            message: chalk.magentaBright("what you want to do....."),
        });
        let user = options.for;
        if (user === "Add item") {
            let add = await inquirer.prompt({
                name: "one",
                message: chalk.yellowBright("What you want to add....."),
            });
            todo.push(add.one);
            console.log(chalk.blue("successfully added.....\n"));
        }
        else if (user === "check list") {
            if (todo == "") {
                console.log(chalk.red("\nYour list is empty!\n"));
            }
            else {
                console.log(chalk.green("you added these items....."));
                for (let i = 0; i < todo.length; i++) {
                    console.log(todo[i]);
                }
                console.log(chalk.cyan("wow! you make such a nice list...\n"));
            }
        }
        else if (user === "delet item") {
            if (todo == "") {
                console.log(chalk.red("\nYour list is empty!\n"));
            }
            else {
                let delet = await inquirer.prompt({
                    name: "select",
                    type: "list",
                    choices: todo,
                    message: chalk.blue("select item you want to delet....."),
                });
                for (let i = 0; i < todo.length; i++) {
                    if (delet.select === todo[i]) {
                        todo.splice(i, 1);
                        console.log(chalk.redBright("delet successfully.....\n"));
                    }
                }
            }
        }
        else {
            console.log(chalk.greenBright("\nThanks for using Areeb's ToDo list......"));
            condition = false;
        }
    }
}
else {
    console.log(chalk.red("\nsorry! you can't use this...."));
}
