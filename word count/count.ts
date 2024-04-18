#! /usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
let condition = true;
console.log(chalk.magentaBright("\nhey buddy you are using word count program in this \nyou can determine the quantity of word in your sentence......\n"))
while(condition){
let uinput = await inquirer.prompt({
    name:"word",
    type:"input",
    message:chalk.cyan("Enter your sentence here...")
})
let word_count = uinput.word.trim().split(" ").length
console.log(chalk.green(`\nyour sentense contain ${chalk.redBright(word_count)} words.`))
console.log("")
let uagain = await inquirer.prompt({
    name:"yesorno",
    type:"list",
    choices:["Yes","No"],
    message:chalk.cyan("Do you want to still using this?")
})
if(uagain.yesorno==="No"){
    condition = false;
    console.log(chalk.yellowBright("\nThanks for using this.....\n"))
}
else{
    condition = true;
}
}