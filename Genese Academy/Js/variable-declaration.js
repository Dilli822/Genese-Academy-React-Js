
// Var works in global window
var thisIsVar = "This is var";

// where as let and const doesnot work in global window object
let thisIsLet = "This is let";

// Const are used to store or declare the constant value
const thisIsConst = "This is const";


console.log(window.thisIsVar);
console.log(window.thisIsLet)
console.log(thisIsLet)


// Functional and Block Scope

for(let i=1; i<10; i++){
    console.log(i)
}

// This will be printed as undefined as let
// is used for only local/block scope
console.log(i)



// loop for function scope 
for (var i = 1; i<10; i++){
    console.log(i)
}

// AS VAR is used for functional scope
console.log('VAR--->', i)
// VAR stores the data even outside the functional scope
// so we rarely use var 
// Scope in js
// Block Scope
{
    let x = 45;
    const y = 45;
}
console.log(x)
// we cannot access the x outside the block


// Global Scope
{
    var x = 50;
}
console.log(x)
// you can access the x outside the block with const 

// Local Scope
// variables declared inside the function are LOCAL 
// for eg: 
function myFunction() {
    let carName = "Volvo";
    // code here CAN use carName
    console.log(carName)
    // lets append it DOM
    document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
  }

console.log(a)


// Data Types in Javascript
var a = 16 + "DILLI";
console.log(a)

var a = 10 + 12 + "Dilli"+2+3
console.log(a)

var a = 10 +12 + "Dilli"+ parseInt(2+3)
console.log("using ParseInt-->", a)

var a = 10+12 + "Dilli" + (2+4)
console.log('using parenthiss--', a)

var a = "Dilli" + 12;
console.log(a)


// Js doesnot follow the data types striction
// JS adds two number 10 and 12 with STRING and
// Again afterwards it takes 2+2 as string
// js works in this way integer+string = integerstring
//  but if integer+integer+string+integer = integer+string+string 
var a = 10 + 12 + "Dilli"+ 2 + 2;
console.log(a)

// Boolean Data types
 let b = true;
 let c = '1';
//  == checks only value as 1 is true 
 console.log(b==c)
//  ==== checks strictly checks data types with values
 console.log(b===c)


// Operators in Js
// Airthmetic (+,/,*,-)
// logical operators != , ==, ===



// Objects creation in Js
// use keyword class to create a class
// with constructor method()
class ClassName {
    constructor() {
        // This is not object but template for js objects
    }
}


// this will create class named Bike with two initial properties
class Bike {
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
}

// with new Operator
// The new operator lets developers create an instance of a 
// user-defined object type or of one of the built-in object 
// types that has a constructor function.

const myBike = new Bike("Pulsar", "blue")
console.log(myBike)


// this keyword in js refers to the object it belongs
// its value depends upon where it is used

const person = {
    firstName: "dilli",
    middleName: "hang",
    lastName: "rai",
    fullName: function() {
        return this.firstName + " " + this.LastName
    }
}

console.log(person)

// this in Alone refers to Global Object
let f = this;
console.log(f)

// in function returns global object
function thisFunction() {
    return this;
}
thisFunction()

// Functional Based Class Creation in object
function laptop(brand, price){
    this.brand = brand;
    this.price = price;
}

// we created laptop functionclass as myLaptop
//  we can use the value of function with the help of myLaptop variable

let myLaptop = new laptop("macbook air ", "$1350")
console.log(myLaptop.brand)
console.log(myLaptop.price)


// Js Array
const fruits = ["Orange", "Banana", "Apple", "Mango"]
console.log(fruits)
console.log(typeof(fruits));
console.log(fruits.length)
// pop method remove the data of array from last elements
console.log(fruits.pop())
console.log(fruits)

// Add data in the array
fruits.push("Lechi")
console.log(fruits)

// finding the data with indexing
// can use pop or push
fruits[0] = 'Lechi'
console.log(fruits)

// deleting the data from array
// delete deletes the data from array but keeps deleted data reference
delete fruits[3]
console.log(fruits)
// (4) ['Lechi', 'Banana', 'Apple', empty]


// Splice method also add the data inside array but
//  it takes two parameters which will add and delete 
// for example var.splice(2, 0, "data", "datadeleted")
// here 2 is the indexing where to insert new data data
// and 0 means indexing where data gets deleted
// 2 and 1 means 1 indexing data will be deleted
fruits.splice(3, 0, "Mango", "Kiwi")
console.log(fruits)