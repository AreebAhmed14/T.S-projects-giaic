import inquirer from "inquirer"
console.log("\nhey! welcome to friends seeker game....\n")
let condition = true;
while(condition){
let mob = await inquirer.prompt({
    name:"input",
    type:"input",
    message:"please enter your friend name......"
})
let friends = mob.input;
switch(friends){
    case("mursaleen"):
    console.log("\nMursaleen is your coaching friend.\n");
    break;

    case("huzaifa"):
    console.log("\nHuzaifa is your school and coaching friend.\n")
    break;

    case("adeel"):
    console.log("\nAdeel is your school and coaching friend.\n")
    break;

    case("anas"):
    console.log("\nAnas is your school and coaching friend.\n")
    break;

    case("raza"):
    console.log("\nraza is your coaching friend.\n")
    break;

    case("aman"):
    console.log("\nAman is your coaching friend.\n")
    break;
    default:
        console.log(mob.input+ " is not your current friend. i think you recently become a friend..\n")
}
let further = await inquirer.prompt({
    name:"used",
    type:"list",
    choices:["yes","no"],
    message:"Do you want to seek more friends....?"
})
if(further.used==="yes"){
    condition = true;
}
else{
    condition = false;
    console.log("\nThanks for using friend seeker program..... ")
}
}