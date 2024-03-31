#! /usr/bin/env node
console.log("Hey, welcome to jiya's calculator.....")
import inquirer from "inquirer";
let cal1 = await inquirer.prompt({
    name: "num1",
    type: "number",
    message: "enter your 1st number ",
});
let cal2 = await inquirer.prompt({
    name: "num2",
    type: "number",
    message: "enter your 2nd number ",
});
let cal3 = await inquirer.prompt({
    name: "num3",
    type: "list",
    choices: ["Addition", "Subtraction", "Division", "Multiplication", "Modulus", "Exponential"],
    message: "Select Operator.... ",
});
if (cal3.num3 === "Addition") {
    console.log(`According to jiya's calculation the addition of your numbers are: ${cal1.num1 + cal2.num2}`);
}
else if (cal3.num3 === "Subtraction") {
    console.log(`According to jiya's calculation the subtraction of your numbers are: ${cal1.num1 - cal2.num2}`);
}
else if (cal3.num3 === "Multiplication") {
    console.log(`According to jiya's calculation the multiplication of your numbers are: ${cal1.num1 * cal2.num2}`);
}
else if (cal3.num3 === "Division") {
    console.log(`According to jiya's calculation the division of your numbers are: ${cal1.num1 / cal2.num2}`);
}
else if (cal3.num3 === "Exponential") {
    console.log(`According to jiya's calculation the exponential of your numbers are: ${cal1.num1 ** cal2.num2}`);
}
else if (cal3.num3 === "Modulus") {
    console.log(`According to jiya's calculation the Modulus of your numbers are: ${cal1.num1 % cal2.num2}`);
}
else {
    console.log(`please enter correct Informations...`);
}