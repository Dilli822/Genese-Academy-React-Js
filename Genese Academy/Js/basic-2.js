

// Javascript Events
// ---> onclick Event --> it gets trigger when we add it on some div/element ---> used for giving warning or validation
// ---> onsubmit --> occurs when we submit the form for form validation
// ---> onmouseover --> occurs when hovering or putting the mouse over the element


// Map in js
// The main feature of map is it allow any types of data to store as key value  pair
// arrays can be replaced with map which may work efficiently in some cases

let map = new Map();
map.set('1', 'String one');
map.set(1, 'number one');
map.set(true, 'bool true');
// pripority wise
map.set('1', 'Dilli Hang Rai');


console.log(map.get(1))
console.log(map.get('1'))
console.log(map.get(true))
// returns undefined so we can actually if there is present of such key value pair
console.log(map.get('age'))

// objects doesnot allow to use all types of data whereas map can 0

console.log(map)

// map methods and properties
// map always keep original key value pairs
// .has(); .delete();

// has return true and false showing data is present or not
console.log(map.has(1))
map.delete(1)
// it should return false as it was already deleted
console.log(map.has('After applying delete method-->', 1))

console.log(map.size)

console.log("Let's delete the map with clear method")
map.clear()
console.log(map.size)

// multi line map as map returns itself
map.set('1', 'String one').set(1, 'number one').set(true, 'bool true');


// looping/iteration in map

// let fruitsMarketSet = new Map();
// fruitsMarketSet.set('Grapes', '500');
// fruitsMarketSet.set( 'Apples', '200');
// fruitsMarketSet.set('Citrus', '350');
// console.log(fruitsMarketSet)

// or alternative way of setting the map and printing it*
let fruitsMarket = new Map(
    [
        ['Mango', '500'],
        ['Oranges', '200'],
        ['Banana', '350'],
    ]
);
console.log(fruitsMarket)


// looping with for of 
// only printint the keys or value
console.log("----printing the only keys with for of loop --- ")
for(let fruits of fruitsMarket.keys()){
    console.log(fruits)
}

console.log("----printing the only value with for of loop --- ")
for(let fruitsPrice of fruitsMarket.values()){
    console.log(fruitsPrice)
}

console.log("----printing the key+value with for of loop --- ")
for(let fruits of fruitsMarket){
    console.log(fruits)
}

console.log("----printing the key+value with foreach loop --- ")
fruitsMarket.forEach(
    function(key,value){
        console.log('price is ---> ' + key+' : ' +value)
    }
)


// sets in javascript
// must have unique values of any data types i.e major difference between sets and map
let set = new Set();
let dilli = {name:'Dilli'};
let shyam = {name:'shayam'};
let ramesh = {name:"ramesh"};

set.add(dilli);
set.add(shyam);

// set.add(1)
// set.add(1)
// set.add(2)
// set.add(3)

/*

set.add(1)
set.add(1)
set.add(2)
set.add(3)
*/
// without adding to set the data will not be saved
// the main function of sets is to store the unique value
// it will not take multi data objects array

console.log(set);

// methods and properties in sets
set.delete(dilli)
console.log(set)

console.log(set.has(shyam))
console.log(set.has(dilli))

// iteration in js
for(let usr of set){
    console.log(usr.name)
}

set.add(ramesh)

// foreach loop in sets 
set.forEach(function(value){
    console.log(value)
})