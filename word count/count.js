import inquirer from "inquirer";
let condition = true;
console.log("hey buddy you are using very simple\n program in this you can determine the quantity\n of words , you write in your sentence....\n");
while (condition) {
    let uinput = await inquirer.prompt({
        name: "word",
        type: "input",
        message: "Enter your sentence here..."
    });
    let word_count = uinput.word.trim().split(" ").length;
    console.log(`your sentense contain ${word_count} words.`);
    console.log("");
    let uagain = await inquirer.prompt({
        name: "yesorno",
        type: "list",
        choices: ["Yes", "No"],
        message: "Do you want to still using this?"
    });
    if (uagain.yesorno === "No") {
        condition = false;
        console.log("\nThanks for using this.....\n");
    }
    else {
        condition = true;
    }
}
