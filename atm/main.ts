#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
console.log(chalk.magentaBright("\nwelcome to 'al_areeb' atm\n"));
let myPin = 9564;
let myBalance = 25000;
let running: boolean = true
let want = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: chalk.blue("enter your pin code: ")
})

if (want.pin == myPin) {
    console.log(chalk.green("\npin is correct.\n"));
    while (running) {
        let select = await inquirer.prompt({
            name: "operation",
            type: "list",
            message: chalk.yellow("what you want to do?"),
            choices: [chalk.cyan("cash with draw"), chalk.magenta("check balance"),chalk.red("Exit")]
        })
        if (select.operation == chalk.cyan("cash with draw")) {
            let digital = await inquirer.prompt({
                name: "manual",
                type: "list",
                message: chalk.green("choose one of them"),
                choices: ["fast banking", "manual banking"]
            })
            if (digital.manual == "fast banking") {
                let fast = await inquirer.prompt({
                    name: "areeb",
                    type: "list",
                    message: chalk.magentaBright("select amount here:"),
                    choices: ["1000", "2000", "5000", "10000"]
                })
                console.log(chalk.blue(`\nyou with draw pkr: ${fast.areeb}\n`))
                myBalance -= fast.areeb;
            }
            else {
                let inter = await inquirer.prompt({
                    name: "cash",
                    type: "number",
                    message: chalk.magentaBright("enter amount: ")
                })
                if (inter.cash <= myBalance) {
                    myBalance -= inter.cash;
                    console.log(chalk.blue(`\nyou with draw pkr: ${inter.cash}`))
                }
                else {
                    console.log(chalk.redBright("\ninsuficiat balance\n"));
                }
            }

        }
        else if(select.operation == chalk.red("Exit")){
            console.log(chalk.cyan("Thanks for choosing Al_Areeb_Atm...."))
            running = false
        }
        else {
            console.log(chalk.greenBright(`\nyour current balance is: ${myBalance}\n`))
        }
    }
}
else {
    console.log(chalk.redBright("pin is invalid"));
}