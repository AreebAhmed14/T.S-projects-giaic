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

//Alias type in obj...and unlimited properties add.....
type Emp = {
    name: string,
    depart: string,
    phone:number,
    [index:string|number]:string|number;//error not found if add proper in obj those not define in type.....
} 
//now we can use this type in our ever obj. in this way our code look like clean and readable.
let industry:Emp = {
    name: "areeb",
    depart:"IT",
    phone:923709180147,
    area: "abc area",
    age2: 24
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

//----------------------------------------------------------------------------------------------------