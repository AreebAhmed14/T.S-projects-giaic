#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let condition = true;
console.log(chalk.blueBright("\nHey, Welcome to Areeb's currency converter program....\n"));
while (condition) {
    let currency = {
        USD: 1,
        PKR: 280,
        INR: 84,
        EURO: 0.92,
        RIYAL: 3.75,
    };
    let user_ans = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            choices: ["USD", "PKR", "INR", "EURO", "RIYAL"],
            message: chalk.magentaBright("select your currency you want converted from...."),
        },
        {
            name: "to",
            type: "list",
            choices: ["USD", "PKR", "INR", "EURO", "RIYAL"],
            message: chalk.cyan("select your currency you want converted to....."),
        },
        {
            name: "amount",
            type: "number",
            message: chalk.green("Enter Amount..."),
        }
    ]);
    let from = currency[user_ans.from];
    let to = currency[user_ans.to];
    let amount = user_ans.amount;
    let base = amount / from;
    let converted = base * to;
    console.log(chalk.yellowBright("\nyour converted amount is: ") + chalk.red(Math.floor(converted)) + "\n");
    let conti = await inquirer.prompt({
        name: "further",
        type: "list",
        message: chalk.green("Are you want to still using this..."),
        choices: [chalk.cyan("yes"), chalk.redBright("No")]
    });
    if (conti.further === chalk.redBright("No")) {
        console.log(chalk.cyanBright("\nThanks for using Areeb's currency converter....\n"));
        condition = false;
    }
    else {
        condition = true;
    }
}
