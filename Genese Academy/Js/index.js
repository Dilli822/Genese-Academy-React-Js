

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
        function (resolve, reject){
            // setinterval 5000 which 5s that time is pending state of promises
            setInterval( function () {
        if(isCall){
            resolve(' The promise is Success ')
        }
        else {
            reject(" The Promise is fail ") }

        }, 5000)
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

// above .then always receives success message
// whereas .catch will always receives failure or erro/ tries to catch the
// failure messages
// promise has executor function which either resolve or reject the task
