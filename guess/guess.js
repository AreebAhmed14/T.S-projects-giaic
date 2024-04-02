#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue("\nHey buddy, welcome to Jiya's number guessing game........"));
console.log(chalk.yellow("Note: you only have 10 chances for guessing the number......"));
console.log(chalk.green("let started....\n"));
let random_number = Math.floor(Math.random() * 100 + 1);
let machine = random_number;
let chance = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];
for (let i = 0; i < chance.length; i++) {
    let input = await inquirer.prompt({
        name: "usernum",
        type: "number",
        message: chalk.cyan("guess number between 1-100..."),
    });
    let human = input.usernum;
    // if(human:number){}
    if (human == machine) {
        console.log(chalk.magenta("\ncongratulations this time you guessed right number..."));
        console.log(chalk.green("\ngame is over......\n"));
        break;
    }
    else if (human == "0709") {
        console.log(chalk.yellow("\nyou have been used cheat code in your " + chance[i] + " attempt: " + machine + "\n"));
    }
    else {
        if (human < machine) {
            console.log(chalk.blue("\nOops! guessed number is wrong......"));
            console.log(chalk.green("hint: number is lesser....."));
            console.log(chalk.red("you have been used your " + chance[i] + " attempt......\n"));
        }
        else if (human > machine) {
            console.log(chalk.blue("\nOops! guessed number is wrong......"));
            console.log(chalk.green("hint: number is higher....."));
            console.log(chalk.red("you have been used your " + chance[i] + " attempt.....\n"));
        }
        else {
            console.log(chalk.cyan("\ninput is not valid......"));
            console.log(chalk.red(`you have been loss your ${chance[i]} attempt by providing wrong input, please enter correct input. \n and if you have any query about this, read the instruction at the start of the game......\n`));
        }
    }
}
