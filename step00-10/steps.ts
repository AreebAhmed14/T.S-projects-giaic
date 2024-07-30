
//step 00 -------------------------------------------------------------------------------------------------------

let message = "hello world";
console.log(message);
console.log(message.length);//11

//JSON

// json stand for "javascript object notation". json is text based data formate used to store and transver data.
// json is not not similar to js object because js obj can contain functions but json not and js obj only used in js
// but json can be used in any language. json data consist of key value pair with "" sep by : . json data is very easy 
// to parse and use.

//errors

// lett mess = "hello world"; // syntax error
// console.log(mess);

// lett mess = "hello world"; // type error
// console.loger(mess);

// let mess = "hello world"; //assignblity error
// mess = 17;

//step 01 ---------------------------------------------------------------------------------------------------------

//strongly type syntax

let userName:string|number = "Areeb";
 userName = 17;
userName = "Ali";
let age:number = 17;
let isget:boolean = true;

//type inference

let country = "Pakistan";
let provinces = 4;
let isStable = false;

//step 2 ----------------------------------------------------------------------------------------------------------

//const : where variable value cannot change and it is block scope.
const Myage:number = 17;
// Myage = 22; //error

//let : where variable value can be change and it also a block scope.
let Myname:string = "Areeb";
Myname = "Ali"; //no error

//var : where make variables with same name and it is global/function scope.
var score = 33;
var score = 77;
if(score===77){
    var win = true;
}
// console.log(win); // true

//step 3 ----------------------------------------------------------------------------------------------------------

import {a as num} from "./export.js" //normal
console.log(num);

import sum from "./export.js" //default
console.log(sum(2,3));

import {sub,mult} from "./export.js"
console.log(sub(8,3));
console.log(mult(5,4));

import * as all from "./export.js"
console.log(all.a);
console.log(all.mult(7,7));

// import inquirer from "inquirer";
// let pro = await inquirer.prompt({
//     type: "number",
//     name: "username",
//     message: "Enter your name"
// })

import chalk from "chalk"
console.log(chalk.green.bold("hey"))

//step 4 ----------------------------------------------------------------------------------------------------

//union type
let unionType: (string | number | boolean | null);
unionType = 17;
unionType = "Areeb";
unionType = true;
unionType = null;

//litral types
let litralType: ("Areeb"|"Ali" |"kashif"|"bilal")
litralType = "Areeb";
litralType = "Ali";
// litralType = "Hamza"; //error

//narrowing
function narrow(password:number|string){
    if(typeof password === "string"){
        return password.toLowerCase();
    } else {
        return password.toString();
    }
}

console.log(narrow("Areeb123"));

//step 5 ----------------------------------------------------------------------------------------------------

//normal object
let student = {
    name: "Areeb",
    age: 17,
    subjects: ["Math", "English", "Science"]
}
console.log(student.name);
console.log(student["age"]);
console.log(student.subjects[1]);

//type declaration or anonymous type
let student2:{
    name:string,
    age:number,
    subjects:string[]
} = {
    name: "Ali",
    age: 18,
    subjects: ["Math", "English", "Science"]
}
console.log(student.name);
console.log(student["age"]);
console.log(student.subjects[0]);

//type alias / interface
type Emp = {
    name: string,
    age: number,
    salary: number
}
let emp:Emp = {
    name: "Areeb",
    age: 17,
    salary: 60000
}
interface Player {
    name: string,
    age: number,
    score: number
}
let player:Player = {
    name: "Ali",
    age: 18,
    score: 800
}

//structural typing
let ball = {
    diameter:10,
    color: "red",
}
let baloon = {
    diameter: 10,
    color: "yellow"
}
let cap = {
    color: "green",
    diameter: 10,
    weight: 10
}
ball = baloon
baloon = ball
console.log(baloon = cap)
// cap = baloon //error (cap required weight property)

// nested object
type Auther = {
    firstName:string,
    lastName: string,
}
type Book = {
    title: string,
    author: Auther,
    year: number
}
let book:Book = {
    title: "dewaan e areeb",
    author: {
        firstName: "areeb",
        lastName: "ahmed"
    },
    year: 2024
}

//intersection

type Animal = {
    name: string,
    age: number
}
interface Bird  {
    fly: boolean
}
type AnimalBird = Animal & Bird

let animalBird: AnimalBird = {
    name: "egal",
    age: 7,
    fly: true
}

//variables type

//any
let anyVar: any;
anyVar = "hello";
anyVar = 10;
anyVar = true;
anyVar = null

//unknown
let un:unknown;
un = "hello";
un = 10;
un = true;
un = null;
let loin = un as number

//never
let no:never;
// no = "areeb" //error

//null 
let nul:null = null; //only null acceptable in null type

//step 6 --------------------------------------------------------------------------------------------------

//explict casting

let user:unknown = "areeb";
let convert = String(user) //user as string //<string>user
console.log(convert);

let number:unknown = "55"
let number2:unknown = "55xyz"
console.log(number as Number); //55
console.log(number as Number ); //NaN

//step 7 ----------------------------------------------------------------------------------------------------

//Enum

enum color {
    red,    //0
    green,  //1
    blue    //2
}
console.log(color.green); //1
console.log(color["blue"]); //2
console.log(color[0]);  //red

//const Enum

const enum Colors {
    red= 44,
    green= 14,
    blue=23
}
console.log(Colors.green); // 14
console.log(Colors["blue"]); // 23
// console.log(Colors[44]); //error because const enum not get value by index number.

//step 8 ---------------------------------------------------------------------------------------------------

//Array

//normal array
let arr1:string[] = ["Areeb","Ali","kashif","Bilal","Hamza"];
console.log(arr1[4]); // Hamza
console.log(arr1[3],arr1[2]); // Bilal , Kashif

// add index
let arr2:Array<number> = [17,23,34,45,56];
arr2.push(77); //add last
arr2.unshift(22); // add start

// remove index
let arr3:(string|number|boolean)[] = ["Areeb",17,true,"webii",2];
arr3.pop() //remove last
arr3.shift()  // remove start

//add and remove at middle of index
let arr4: string[] = ["shajeeah","aqsa","areeba","laiba","anabia","areesha"];
arr4.splice(4,1,"shanzay")
let check = arr4.slice(0,4)
console.log(check);

//change value through index number
let arr5:string[] = ["India","Pakistan","South Africa","Japan"];
arr5[3] = "China"
console.log(arr5[3]); // China

//Nested Array
let arr7:any = [1,7,8,6,[5,2,3],4,10]
console.log(arr7[4][1]); // 2

//step 10 -------------------------------------------------------------------------------------------------------

//tupples

let arr6:[string,number,number,boolean] = ["Areeb",17,16,true]

type Lenght = [string,number,boolean]

let arr8:Lenght[]= [
    ["areeb",17,true],
    ["ali",18,false],
    ["kashif",20,true]
]
console.log(arr8[2][1]) //20

//step 09 -------------------------------------------------------------------------------------------------------

//normal functions

//named function
function add(num1:number, num2:number): number{
    return num1 + num2;
}
console.log(add(2,3));

//anonymous function

let func = function(num1:number,num2:number):number{
    return num1-num2
}
console.log(func(7,5)) //2

// arrow function or lamda function

let arrow = (x:string,y:string) => {
    return x+ " " + y
}
console.log(arrow("areeb","ahmed")) //areeb ahmed

let easy=(a:number,b:number)=> a+b //return automatically
console.log(easy(4,5))

//type define in anonymous function

//syntax ()=>void 
let anonyType:(x:number,y:number)=>number = function(num1:number,num2:number):number{
    return num1**num2
}
console.log(anonyType(3,3))//9

//option parameter

function order(color:string,message?:string):string{
    if(message){
        return "your "+ color + " shirt is ready with " + message + " print..."
    }
    return "your "+ color + " shirt is ready..."
}
console.log(order("red","webii")) //your red shirt is ready with webii print...
console.log("black","Always alone Always happy") 

//default parameter

function defaultParam(color:string="white",message:string="hello"):string{
    return "your "+ color + " shirt is ready with " + message + " print..."
}
console.log(defaultParam("red")) //your red shirt is ready with Hello Print...
console.log(defaultParam("black","nice")) //your black shirt is ready with nice print...
console.log(defaultParam())//your white shirt is ready with helo print...

//rest parameters

function restParam(...nums:number[]):number{
    return nums.reduce((a,b)=>{
       return a+b
    })
}
console.log(restParam(1,2,3,4,5)) //15

function restString(firstName:string,...lastName:string[]){
    return firstName + " " + lastName.join(" ")
}
console.log(restString("Imran","Khan","Niazi")) //Imarn Khan Niazi

//overload 

function load(x:number,y:number):number
function load(x:string,y:string):string
function load(a:any,b:any):any{
    if(typeof a==="string" && typeof b==="string"){
        return a+" "+b
    }
    return a+b
}
console.log(load("areeb","ahmed"))
console.log(load(4,5))

//async

//callbacks
function callback(call:Function,give:string){
    call(give)
}
function inside(name:string){
    console.log("hey ", name);
}
callback(inside,"areeb") //hey areeb

//promise
let promisel = new Promise((resolve,reject)=>{
    console.log("data pending")
    setTimeout(()=>{
        console.log("promise resolved")
        resolve("areeb is intelligent guy")
    },2000)
}) 
.then((x)=>{
    console.log(x)
})
.catch((error)=>{
    console.log("some thing went ",error)
})
let promiseee = new Promise((resolve,reject)=>{
    console.log("data pending")
    setTimeout(()=>{
        console.log("promise resolved")
        resolve(44)
    },2000)
})
async function solve(){
    let data = await promiseee
    console.log(data)
}
solve()

async function direct(){
    let MyPromise = new Promise((resolve,reject)=>{
            let numm1 = 8
            let numm2 = 8
            let summ = numm1+numm2
        console.log("data pending")
        if(summ === 16){
            setTimeout(()=>{
                resolve("successfully done")
            },2000)
        }
        else{
            reject("failed")
        }
    })
    let solvee = await MyPromise
    console.log(solvee)
}
direct()

// -------------------------------------------- FINSH -------------------------------------------------------------//