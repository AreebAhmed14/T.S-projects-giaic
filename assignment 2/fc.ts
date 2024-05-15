import inquirer from "inquirer";
let conditon = true;
while(conditon){
let machine = Math.floor(Math.random()*50);

let input = await inquirer.prompt({
    name:"guess",
    type:"number",
    message:"Guess number between 1 to 50......"
})
if(input.guess===machine){
    console.log("\nYou guess right number....\n")
}
else if(input.guess<machine){
    console.log("\nyour guessed number is lesser than machine number.....\n")
}
else{
    console.log("\nyour guessed number is greater than machine number....\n")
}
let more = await inquirer.prompt({
    name:"guess",
    type:"list",
    choices:["yes","no"],
    message:"do you want to guess more....?"
})
if(more.guess==="yes"){
    conditon = true;
}
else{
    conditon = false;
    console.log("\nThanks for using this...\n")
}
}