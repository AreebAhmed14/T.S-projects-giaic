//-----------------simple for loop --------------------------

import { log } from "console"

for(let i=0; i<=10; i++){
    console.log("feeling lonly.");
}

//------------table by using simple for loop-------------

function table(num:number){
for(let i=1; i<=10; i++){
    let calculation=(`${num} * ${i} = ${num*i}`);
    console.log(calculation);
}
}
table(4);

//---------------------for in ---------------------------
//------------------only for objects----------------------

let about:any = {
    name:"areeb",
    cnic:42201973654123,
    adress:"karachi korangi",
    mobile:9237091801147,
}
for(let key in about){
    // console.log(key +" " + about["adress"])    
    console.log(key +" " + about[key])    
}

//------------------------while loop---------------------------

let a = 5;
while(a<=10){
    console.log("hello world");
    a++;
}

//------------------------do while loop----------------------------

let b = 7;
do{
    console.log("dunya");
    b=b+1
}while(b<=8);

// ------------------------The end-----------------------------