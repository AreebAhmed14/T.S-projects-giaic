//Mohammad Areeb Farooq....

//-----------------------------------------------------------------------------------------

//simple object.....
let student = {
    name:"areeb",
    age: 17,
    gender: "male",
    subject: "science",
}
console.log(student);//complete object
console.log(student.name);//areeb

//--------------------------------------------------------------------------------------------

//object type define... and optional case....
let students:{
    name: string,
    age: number,
    gender: string,
    subject: string,
    area?: string,
} = {
    name:"areeb",
    age: 17,
    gender: "male",
    subject: "science",
}
//if we define any type in object and not use that on our 
//obj. it will give error. if we want to do this we can use 
//optional case by put "?" at the end of those type name.

//------------------------------------------------------------------------------------------------

//Alias type in obj.......
type Emp = {
    name: string,
    depart: string,
    phone:number,
} 
//now we can use this type in our ever obj. in this way our code look like clean and readable.
let industry:Emp = {
    name: "areeb",
    depart:"IT",
    phone:923709180147,
}

//---------------------------------------------------------------------------------------------

//get whole keys, property of object....
let industry2 = {
    name: "areeb",
    depart:"IT",
    phone:923709180147,
    area: "abc area",
    age2: 24
}
console.log(Object.keys(industry2))
console.log(Object.values(industry2))
console.log(Object.entries(industry2))

//------------------------------------------------------------------------------------------

//nested objects....
type Std = {
    name: string,
    depart: string,
    phone:number,
    other:{
        cnic:number,
        dob:number,
        address:string,
    }
}
let stud:Std = {
    name:"areeb",
    depart:"engineering",
    phone:923709180147,
    other:{
        cnic:422015547962,  
        dob:952007,
        address:"abc area"
    }
}
console.log(stud.other.address)//abc area

//-----------------------------------------------------------------------------------------------------------

//function in objects....
type Func = {
    name:string,
    greet:()=>void,
}
let hard:Func = {
    name:"areeb",
    greet:function(){
        return("hello world");
    }
}
let turn = hard.greet()
console.log(turn)

//----------------------------------------------------------------------------------------------------------

//lenght and add unlimited properties..........
type Paper={
    subject:string,
    marks:number,
    [index:string|number]:string|number; //error not found if add property in obj those not define in type.....
}

let exam:Paper = {
    subject:"maths",
    marks:75,
    duration: "3 hours",
}
console.log(Object.keys(exam).length); // 3 

//----------------------------------------------------------------------------------------------------------

//for practice 
type Practice = {
    name:string,
    age:number,
    passion:string,
    work:string,
    dob:number,
    message:()=>void,
    friends:{
        schoolFriend:string,
        coachingFriend:string,
        alwaysAsFriend:string,
    }
}

let prac:Practice = {
    name:"areeb",
    age:17,
    passion:"none",
    work:"study",
    dob:952007,
    message:function(){
        console.log("be strong");
    },
    friends:{
        schoolFriend:"adeel",
        coachingFriend:"mursaleen",
        alwaysAsFriend:"huzaifa"
    }
}
console.log(prac.age)//17
console.log(prac.friends.coachingFriend)//mursaleen
console.log(prac.message())//be strong
console.log(Object.keys(prac))
console.log(Object.keys(prac.friends))
console.log(Object.keys(prac).length)// 7
console.log(Object.keys(prac.friends).length)// 3
console.log(Object.entries(prac))
console.log(Object.entries(prac.friends))
console.log(Object.entries(prac.friends).length)//3

//----------------------------------------------------------------------------------------------------------------

//-----------------------------------------------THE END----------------------------------------------------------