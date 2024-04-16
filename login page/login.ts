import inquirer from "inquirer"
let condition = true;
let tinfo:any = [];

console.log("\nHey! you are making an account........\n")

let uname = await inquirer.prompt({
    name:"one",
    message:"Enter your name: ",
})
tinfo.push(uname.one);

let birth = await inquirer.prompt({
    name:"day",
    message:"Enter your date of birth: ",
})
tinfo.push(birth.day)

let mail = await inquirer.prompt({
    name:"g",
    message:"Enter your gmail address: ",
})
tinfo.push(mail.g);

while(condition){
let password = await inquirer.prompt({
    name:"pass",
    message:"Enter strong password: ",
})
let repassword = await inquirer.prompt({
    name:"repass",
    message:"Re-Enter password: ",
})
if(repassword.repass===password.pass){
    condition = false;    
tinfo.push(repassword.repass)

}
else{
    console.log("Password not match");
    condition = true;
}
}

let phone = await inquirer.prompt({
    name:"tell",
    type:"number",
    message:"Enter your phone number: ",
})
tinfo.push(phone.tell);
console.log("")

let options:any = {
    name:tinfo[0],
    Date_of_birth:tinfo[1],
    g_mail:tinfo[2],
    Password:tinfo[3],
    phone:tinfo[4],
}

let option_list:string[] = Object.keys(options)

let change = await inquirer.prompt({
    name:"ch",
    type:"list",
    choices:option_list,
    message:"what you want to change...."
})

let new_change = await inquirer.prompt({
    name:"nc",
    message:"new name...."
})

for(let i=0; i<tinfo.lenght; i++){
    if(change.ch===tinfo[i]){
        tinfo[i]=new_change.nc
    }
}

console.log(tinfo)