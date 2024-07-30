export let a = 8;

export default function sum(num1:number,num2:number):number{
    return num1 + num2;
}
function subtract(num1:number, num2:number):number{
    return num1 - num2;
}

function multiply(num1:number, num2:number):number{
    return num1 * num2;
}
export{
    subtract as sub,
    multiply as mult,
}
