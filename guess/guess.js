#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\nHey buddy, welcome to Areeb's number guessing game........");
console.log("Note: you only have 10 chances for guessing the number......");
console.log("let started....\n");
let random_number = Math.floor(Math.random() * 100 + 1);
let machine = random_number;
let chance = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'];
for (let i = 0; i < chance.length; i++) {
    let input = await inquirer.prompt({
        name: "usernum",
        type: "number",
        message: "guess number between 1-100...",
    });
    let human = input.usernum;
    // if(human:number){}
    if (human == machine) {
        console.log("\ncongratulations this time you guessed right number...");
        console.log("\ngame is over......\n");
        break;
    }
    else if (human == 9527) {
        console.log("\nyou have been used cheat code in your " + chance[i] + " attempt: " + machine + "\n");
    }
    else {
        if (human < machine) {
            console.log("\nOops! guessed number is wrong......");
            console.log("hint: number is lesser.....");
            console.log("you have been used your " + chance[i] + " attempt......\n");
        }
        else if (human > machine) {
            console.log("\nOops! guessed number is wrong......");
            console.log("hint: number is higher.....");
            console.log("you have been used your " + chance[i] + " attempt.....\n");
        }
        else {
            console.log("\ninput is not valid......");
            console.log(`you have been loss your ${chance[i]} attempt by providing wrong input, please enter correct input. \n and if you have any query about this, read the instruction at the start of the game......\n`);
        }
    }
}
