
console.clear()
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
// this method add and remove the elements with 1st and 2nd parameter
//  it takes two parameters which will add and delete 
// for example var.splice(2, 0, "data", "datadeleted")
// here 2 is the indexing where to insert new data data
// and 0 means indexing where data gets deleted
// 2 and 1 means 1 indexing data will be deleted
fruits.splice(3, 0, "Mango", "grapes")
console.log(fruits)

// Javascript Array Concat

const places = ['itahari', 'dharan', 'jhapa']
const laptops = ['Dell', 'macbook', 'acer']
const tech = ['js','python', 'wordpress']

const addArray = places.concat(laptops, tech)
console.log(addArray)

const arr1 = ['first', 'array', 'number1']
const arr2 = ['second', 'array', 'number2']
const arr3 = ['third', 'arrays', 'number3']

const concat = arr1.concat(arr2, arr3)
console.log(concat)

const concat2 = arr2.concat(arr1, arr3)
console.log(concat2)

const concat3 = arr3.concat(arr3, arr2)
console.log(concat3)

// Javascript ARRAY SLICE

const mountains = ['fishtail','makalu', 'sagarmatha', 'amb dalam', 'kanchanjanga']
console.log(mountains)

// We can take the elements from array and create a new array with slice method
// .slice(1, and 3) less than or equal to 3
// it also takes two parameter where 1st arguments tells where to start and 2nd one tells where to end
const newMountain = mountains.slice(1, 3)
console.log("This will start to remove elements from 1 indexing and remove the data indexing number3 from array-->", newMountain)

const newMountain2 = mountains.slice(1, 4)
console.log(newMountain2)


// Sort method sorts the elements alphabetically 
console.log(newMountain2.sort())

// reversing an array 
console.log(newMountain2.reverse())

const xyz = [100,12,506,6545]
console.log(xyz)
console.log(xyz.sort())

const xyz2 = [56,487,89,0.5,-1]
console.log(xyz2)
console.log(xyz2.reverse())

// if else conditional statements

let myName = "dilli";
if (myName = "dilli"){
    console.log("My name is Dilli Hang Rai")
}
else{
    console.log("THis is not my name")
}

// Loops in js
console.log("Loops in js")

// For Loop
console.log("For loop")

// value declare , put conditions and add value in a single line
// condition satisfies looop ends 
for(i=0; i<15; i++){
    console.log(i)
}

// While Loop
console.log("While Loop")
// implement the value
// put conditions 
// add the value and loop ends here
let y = 0;
while(y < 6){
    console.log(y)
    y++;
}

// Do while loop
console.log("Do while loop --> In this loop condition is checked last one")
console.log()

let z = 0;
// once statement is executed as condition is checked at last
do{
    console.log(z);
    z++;
}

// condition is checked at last
while (z < 4);


// For each loop 
//  it is used in big objects data
//  Here p will take as key of fname
// person's fname , person's lname, person's age
// let persons = {fname: "dilli", lname:"Hang", age: 22}
let persons = {fname: "dilli", lname:"Hang",
              age: 22, address: "Itahari"}
let p;
for (p in persons) {
    console.log(p)
    console.log(persons[p])
}

// it's different from other loop as it will have current element's index number
// with current's value and array object to which the current element belongs
// In for each loop we can add 
// we need callback function(or anonymous function)
// this will take parameter which will print every single data from arrays
let mobiles = ['sony', 'iphone', 'samsung'];
mobiles.forEach((mobileList, index) => {
    console.log(mobileList)
    console.log('Index: ' + index +  ' Value: ' + mobileList)
})


