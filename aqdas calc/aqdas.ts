#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let condition = true;
console.log(chalk.blue("\nHey, welcome to Aqdas calculator.....\n"));

while(condition){
let cal1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: chalk.green("Enter your 1st number.... "),
});
let cal2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: chalk.green("Enter your 2nd number.... "),
});
let cal3 = await inquirer.prompt({
    name: "num3",
    type: "list",
    choices: ["Addition", "Subtraction", "Division", "Multiplication", "Modulus", "Exponential"],
    message: chalk.blue("Select Operator.... "),
});
if (cal3.num3 === "Addition") {
    console.log(chalk.magenta("According to Aqdas calculator the Addition of your numbers are: ") + chalk.red(cal1.num1 + cal2.num2));
}
else if (cal3.num3 === "Subtraction") {
    console.log(chalk.magenta("According to Aqdas calculator the Subtraction of your numbers are: ") + chalk.red(cal1.num1 - cal2.num2));
}
else if (cal3.num3 === "Multiplication") {
    console.log(chalk.magenta("According to Aqdas calculator the Multiplication of your numbers are: ") + chalk.red(cal1.num1 * cal2.num2));
}
else if (cal3.num3 === "Division") {
    console.log(chalk.magenta("According to Aqdas calculator the Division of your numbers are: ") + chalk.red(cal1.num1 / cal2.num2));
}
else if (cal3.num3 === "Exponential") {
    console.log(chalk.magenta("According to Aqdas calculator the Exponential of your numbers are: ") + chalk.red(cal1.num1 ** cal2.num2));
}
else if (cal3.num3 === "Modulus") {
    console.log(chalk.magenta("According to Aqdas calculator the Modulus of your numbers are: ") + chalk.red(cal1.num1 % cal2.num2));
}
else {
    console.log(`please enter correct Informations...`);
}
let conti = await inquirer.prompt({
    name: "nu",
    type:"list",
    choices:[chalk.yellow("still using"),chalk.red("exit")],
    message:chalk.cyan("\nwhat you want....")
})
if(conti.nu===chalk.red("exit")){
    console.log(chalk.magentaBright("Thanks for using Aqdas calculatior...."))
    condition=false;
}
else{
    condition=true;
}
}