#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
class player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
        console.log("");
        console.log(chalk.blue("Your Player name is ") + chalk.yellow(name));
    }
    decrease() {
        this.fuel -= 25;
    }
}
class opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
        console.log(chalk.blue("Your opponent is ") + chalk.red(name));
        console.log("");
    }
    decrease() {
        this.fuel -= 25;
    }
}
let ask = await inquirer.prompt({
    name: "name",
    type: "input",
    message: chalk.green("Enter your player name...")
});
let askopp = await inquirer.prompt({
    name: "name",
    type: "list",
    choices: ["Imran Khan", "Nawaz Sharif", "Bilawal Bhutto"],
    message: chalk.green("Select your opponent..."),
});
let pl1 = new player(ask.name);
let ol1 = new opponent(askopp.name);
if (askopp.name === "Imran Khan") {
    while (condition) {
        let start = await inquirer.prompt({
            name: "name",
            type: "list",
            choices: ["Attack", "Drink Portion", "Run for life"],
            message: chalk.yellow("what you want to do...?"),
        });
        if (start.name === "Attack") {
            let decide = Math.floor(Math.random() * 2);
            if (decide <= 0) {
                ol1.decrease();
            }
            else {
                pl1.decrease();
            }
            console.log("");
            console.log(chalk.green(`${pl1.name} fuel is ${pl1.fuel}`));
            console.log(chalk.green(`${ol1.name} fuel is ${ol1.fuel}`));
            console.log("");
            if (ol1.fuel === 0) {
                console.log(chalk.gray(`${pl1.name} is winner`));
                condition = false;
            }
            else if (pl1.fuel === 0) {
                console.log(chalk.gray(`${ol1.name} is winner`));
                console.log(chalk.red(`${pl1.name} is looser.`));
                condition = false;
            }
        }
        if (start.name === "Drink Portion") {
            pl1.fuel = 100;
            console.log("");
            console.log(chalk.green(`you drink health portion. your fuel is ${pl1.fuel}`));
            console.log("");
        }
        if (start.name === "Run for life") {
            console.log("");
            console.log(chalk.red("You lose better luck next time"));
            console.log("");
            condition = false;
        }
    }
}
if (askopp.name === "Nawaz Sharif") {
    while (condition) {
        let start = await inquirer.prompt({
            name: "name",
            type: "list",
            choices: ["Attack", "Drink Portion", "Run for life"],
            message: chalk.yellow("what you want to do...?"),
        });
        if (start.name === "Attack") {
            let decide = Math.floor(Math.random() * 2);
            if (decide <= 0) {
                ol1.decrease();
            }
            else {
                pl1.decrease();
            }
            console.log("");
            console.log(chalk.green(`${pl1.name} fuel is ${pl1.fuel}`));
            console.log(chalk.green(`${ol1.name} fuel is ${ol1.fuel}`));
            console.log("");
            if (ol1.fuel === 0) {
                console.log(chalk.gray(`${pl1.name} is winner`));
                condition = false;
            }
            else if (pl1.fuel === 0) {
                console.log(chalk.gray(`${ol1.name} is winner`));
                console.log(chalk.red(`${pl1.name} is looser.`));
                condition = false;
            }
        }
        if (start.name === "Drink Portion") {
            pl1.fuel = 100;
            console.log("");
            console.log(chalk.green(`you drink health portion. your fuel is ${pl1.fuel}`));
            console.log("");
        }
        if (start.name === "Run for life") {
            console.log("");
            console.log(chalk.red("You lose better luck next time"));
            console.log("");
            condition = false;
        }
    }
}
if (askopp.name === "Bilawal Bhutto") {
    while (condition) {
        let start = await inquirer.prompt({
            name: "name",
            type: "list",
            choices: ["Attack", "Drink Portion", "Run for life"],
            message: chalk.yellow("what you want to do...?"),
        });
        if (start.name === "Attack") {
            let decide = Math.floor(Math.random() * 2);
            if (decide <= 0) {
                ol1.decrease();
            }
            else {
                pl1.decrease();
            }
            console.log("");
            console.log(chalk.green(`${pl1.name} fuel is ${pl1.fuel}`));
            console.log(chalk.green(`${ol1.name} fuel is ${ol1.fuel}`));
            console.log("");
            if (ol1.fuel === 0) {
                console.log(chalk.gray(`${pl1.name} is winner`));
                condition = false;
            }
            else if (pl1.fuel === 0) {
                console.log(chalk.gray(`${ol1.name} is winner`));
                console.log(chalk.red(`${pl1.name} is looser.`));
                condition = false;
            }
        }
        if (start.name === "Drink Portion") {
            pl1.fuel = 100;
            console.log("");
            console.log(chalk.green(`you drink health portion. your fuel is ${pl1.fuel}`));
            console.log("");
        }
        if (start.name === "Run for life") {
            console.log("");
            console.log(chalk.red("You lose better luck next time"));
            console.log("");
            condition = false;
        }
    }
}
