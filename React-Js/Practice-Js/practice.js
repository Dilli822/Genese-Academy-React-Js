
console.clear()
console.log("Hello world")


// loops in js 
console.log("For loop executed the loop within a single statement")
console.log("first variable is declared then condition is applied and at last value is added")
console.log("for (i=0; i<5; i++) in this way")
for (i = 0; i < 5; i++){
    console.log(i)
}

console.log("For each loop are used in big data and objects cases")
console.log("It iterate on every elements of array and gives output. For example ")
console.log("It also returns the index with value ")
console.log("with callback function it takes two paramter of value and index")
let persons = ['black', 'white', 'fair']
let p;
for (p in persons){
    console.log(p)
    console.log(persons[p])
}

let lists = ["apple", "money", "clothes"]
console.log(lists)

lists.forEach((index, value)=>{
    console.log(index, value)
})

console.log("WHILE loop is same as other loop but value is applied at last")


let w = 0;
while (w < 3){
    w++;
    console.log(w);
}

let d = 5;
do {
    console.log(d);
    d++
}
while( d < 1)
console.log("do while will execute the do statement once eventhough the condition is unsatisfied and we declare the condition at last")



console.log("switch statements in js checks the cases compare and execute only the statements which is true it will only gets executed once")

console.log('syntax is swtich() case; block of code; break; ')
names = "dilli"

switch(names){
    case '1':
        console.log(true)
    break;

    case 'hang':
        console.log(false)
    break;

    case 'dilli':
        console.log("dilli");
    break;

    default:
        console.log("no name")
}


console.log("slice method in js will create new array by selecting the parameter from starting to ending")

let fruits = ["apple", "citrus", "mango", "pineapple"]
console.log("This is fruits---> ", fruits)
newFruits = fruits.slice(0, 2);
console.log(newFruits)

console.log("splice will add and delete the elements of array simultaineously by taking two parameter ")

newFruits.splice(0, 2, "Grapes", "Mango")
console.log(newFruits)

console.log("reversing array")
console.log(newFruits.reverse())

console.log("sorting array")
let alphabets = ['d', 'z', 'g', 'a', 'r']
console.log(alphabets.sort())

console.log("push method add elements in arrays from last")
console.log(alphabets.push("x"))
console.log(alphabets)

console.log("pop method remove the elements in arrays from last")
console.log(alphabets.pop())
console.log(alphabets)


console.log("adding arrays")
console.log(newFruits.concat( persons +  alphabets ))


console.log("local and global scope")

{
    let x = 5;
    console.log("inside local scope -->", x)
}
console.log("outside the local scope or global scope-->", x)


var g = 10;
{
    let h = 45;
    console.log("inside the local scrop-->", g)
    const c = h;
    console.log(c)
}
console.log("outside", g)
console.log("const in outside scope-->", c)