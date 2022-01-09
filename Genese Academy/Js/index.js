

let btn = document.getElementById('btn');
btn.addEventListener( 'click', () => {
    // alert("You clicked Alert Button which triggers event listener")
    // calling the promise function from event listener
    callPromise();
})


// Promises
/* A promise is an object that may produce a single value some time in the
future: either a resolved value, or a reason that it's not resolved 
(e.g: network error occurred). A promise may be in one of the 3 possible
states: fulfilled, rejected, or pending .Promise users can attach
callbacks to handle the fulfilled value or the reason for rejection.


** Callbacks are those functions which performs certain task after 
completion of certain previously done tasks.


A promise is an object which can be returned sychronously from an
asychronous function.

It will be in one of 3 possible states:
--> Fulfilled: onFulfilled() will be called (e.g.., resolve() was called)
--> Rejected: onRejected() will be called (eg.., reject() was called)
---> Pending: not yet fulfilled or rejected

--------------------------------------------
Synchronous JavaScript: As the name suggests synchronous means to be in
a sequence, i.e. every statement of the code gets executed one by one.
So, basically a statement has to wait for the earlier statement to get
executed.

--------------------------------------------
Asynchronous JavaScript: Asynchronous code allows 
the program to be executed immediately where the synchronous
code will block further execution of the remaining code until 
it finishes the current one. This may not look like a big problem
but when you see it in a bigger picture you realize that it may 
lead to delaying the User Interface.


// Note : Javascript is synchronous .
while calling the api we make js asychronous as required.
*/


// How do we make promise in js?
// where to use
// while we are fetching the data from remote api
// while two tasks are interacting with eachother


// play with false and true boolean value
// to make the promise success and fail
// let isCall = false;
let isCall = true;
function promiseExample() {
    return new Promise (
    // promise return resolve or reject either task completed or rejected
        function (resolve, reject){
            // setinterval 5000 which 5s that time is pending state of promises
            setInterval( function () {
        if(isCall){
            resolve(' The promise is Success ')
        }
        else {
            reject(" The Promise is fail ") }

        }, 2000)
    }) 
}

// function calling the promise
function callPromise () {
    promiseExample().then ( function (value) {
        console.log(value)
    }).catch(function(error){
        console.log(error)
    })
}

//  .then directs what to do after certain task same as callback function
// above .then always receives success message
// whereas .catch will always receives failure or erro/ tries to catch the
// failure messages
// promise has executor function which either resolve or reject the task

// executer can execute or cancel the lines of code or functions
// but handler only handles the codes like handling error 


// ===== FILTER IN JS =============
/*
--> Filter method() creates a new array from existing the array
---> this is widely used for searching or filtering the array and putting it in into a new array
---> searching the value inside the arrays

--> filter working functions is same as for each loop which pick and return every single value
--> Syntax
    array.filter(function(currentValue, index, arr), thisValue)
*/


function filter(){
    let words = ['spray', 'limit', 'elite', 'warriors', '1234567', "morethan6letters"];
    // this one checked the words arrays and display the satisfied condition
    let result = words.filter( word => word.length > 6);
    console.log(result);
}

console.log("testing js");

function filterEx2() {
    let array = [
        { id: 13 },
        { id: 14 },
        { id: 15 },
        { id: 3 },
        { id: 0 },
        { id: 1 },
        { id: 24 },
        { id: 37 },
        { id: 38 },
        { id: 7 },
        { id: 8 },
    ]

    console.log(" this is total array -->", array)

    let newARRAY = array.filter(filterByNumber)
    console.log(" 'this is new filtered array -->' ", newARRAY)
}

function filterByNumber(item) {

    // condition that gives even id only
    if(item.id%2==0){
    // condition that gives id more than 5
    // if(item.id>5){
        return true
    }
}
