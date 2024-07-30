//-------------------------------------Functions-------------------------------------------

//-----------------------------------Normal function---------------------------------------
function message(){
    console.log("hi, Areeb here....");
}
message()

//-----------------------------------Arrow Function----------------------------------------
let mess = ()=>{
    console.log("introvert...")
}
mess()

//-------------------------------------Anonymous Function-----------------------------------
let messag = function(){
    console.log("student by day, code by night")
}
messag()

let add = (a:number,b:number) => a+b //return automatically
console.group(add)

//----------------------------Function with parameters and arguments------------------------
function sum(num1:number,num2:number){
    console.log(num1+num2)
}
sum(5,6)//11

let another = (color:string,messu:string) => {
    console.log(`your ${color} shirt is ready with ${"messu"} print`)
}
another("pink","monster")

//------------------------------------Return in function-----------------------------------
function subtract(a:number,b:number){
    let c = a-b;
    return c
}
let d = subtract(5,9)
console.log(d)//4

//---------------------------------Default parameters-------------------------------------
let def = (name:string,nationality="pakistani") => {
    console.log(`hello ${name} your nationality is ${nationality}`)
}
def("areeb")
def("hamza","indian")

//-----------------------------------optional parameters---------------------------------
let option = (name:string,mobile:number,gender?:string) => {
    console.log(`hey ${name} your mobile number is ${mobile} and your gender is ${gender}`)
}
option("ali",923478307815)
option("areeb",923709180147,"male")

//----------------------------------rest parameters---------------------------------------
function nolimite(name:string,...rest:any[]){
    console.log(`hello ${name} your details are ${rest}`)
}
nolimite("areeb",17,"introvert","passionate programmer")

//---------------------------------------The End-----------------------------------------