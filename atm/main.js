#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nwelcome to 'al_areeb' atm\n");
let myPin = 54923;
let myBalance = 25000;
let running = true;
let want = await inquirer.prompt({
    name: "pin",
    type: "number",
    message: "enter your pin code: "
});
if (want.pin == myPin) {
    console.log("\npin is correct.\n");
    while (running) {
        let select = await inquirer.prompt({
            name: "operation",
            type: "list",
            message: "what you want to do?",
            choices: ["cash with draw", "check balance", "Exit"]
        });
        if (select.operation == "cash with draw") {
            let digital = await inquirer.prompt({
                name: "manual",
                type: "list",
                message: "choose one of them",
                choices: ["fast banking", "manual banking"]
            });
            if (digital.manual == "fast banking") {
                let fast = await inquirer.prompt({
                    name: "areeb",
                    type: "list",
                    message: "select amount here:",
                    choices: ["1000", "2000", "5000", "10000"]
                });
                console.log(`\nyou with draw pkr: ${fast.areeb}\n`);
                myBalance -= fast.areeb;
            }
            else {
                let inter = await inquirer.prompt({
                    name: "cash",
                    type: "number",
                    message: "enter amount: "
                });
                if (inter.cash <= myBalance) {
                    myBalance -= inter.cash;
                    console.log(`\nyou with draw pkr: ${inter.cash}`);
                }
                else {
                    console.log("\ninsuficiat balance\n");
                }
            }
        }
        else if (select.operation == "Exit") {
            running = false;
        }
        else {
            console.log(`\nyour current balance is: ${myBalance}\n`);
        }
    }
}
else {
    console.log("pin is invalid");
}
