

// // textarea where user can write the notes
// // user can save the notes by adding

// // this is key for localstorage
// let MY_NOTE = '_my_note';

// // now let's make array for saving the multiple notes

// let my_notes =  [];

// // we need to show the previous typed data with 
// // .onload will load the js script
// // after loading the html by browser
// window.onload = function(){
//     // we call the previous saved notes
//     onGetSavedNotes();
// };

// function onAddNote(){
//     // we have to extract the elements from DOM
//     // we get single elementfrom element Id
//     let myNote = document.getElementById("note").value;
//     // printing the whole textarea element here
//     // .value will give value of elements 

//     // user can see and we can pass the note saved date value
//     // we wanted to keep complicated data so we use json format
//     //  so we {} curly braces to keep json format data
//     let note ={};
//     note.value = myNote;
//     note.date = new Date();
//     note.id = new Date.getTime();


//     // console.log(myNote)

//     // After capturing the element's value now
//     // we have to store it somewhere but where?
//     // okay we have two kinds of storage inside the browser
//     // local and session storage we can store in there

//     // Session storage will clear it's storage after closing browser
//     // but in local storage it needs to be cleared manually or programtically

//     // pushing the value inside the myNote
//     // my_notes.push(myNote);
//     // lets push the note
//     my_notes.push(note)
//     console.log(my_notes)

//     // it will show [object object] as large data comes in array and array doesnot understand it
//     // so we have to make it simpler and make it string using stringify
//     // we use JSON.strignfy method in case of large and complex data 
//     // which will be not be understood by browser so we make them strings from json data type
//     // array is understood but inside it data is not understood by browser so we make whole array as string format
//     // so browser can understand it return as object
//     console.log(JSON.stringify(my_notes))

//     // in localstorage data are stored key value pairs 
//     // localStorage.setItem(MY_NOTE, note)
//     // localStorage.setItem(MY_NOTE, my_notes);
//     localStorage.setItem(MY_NOTE, JSON.stringify(my_notes));

//     // then we can check the save valued pair in localstorage
//     // suppose I wrote the hello world we are here in textarea and saved it with btn
//     // then it will be saved as keyvalue pair inside the localstorage
//     // which will be saved as _my_note  hello world we are here

//     // call the onGetSavedNotes() .. see the console
//     // onGetSavedNotes();
// }

// // okay our localstorage has done saving the elements value
// // now let's make the function to capture the localstorage data MY_NOTE = _my_note

// function onGetSavedNotes(){

//     // let's capture the localstorage key in variable
//     let notes = localStorage.getItem(MY_NOTE);
//     // inserting the captured value inside the #myNotes div
//     // document.getElementById('myNotes').innerText = notes;
//     console.log(notes);
//     console.log(typeof(notes));



//     let my_notes_html = '';
//     // we parse the Json and use loop to extract data from json format
//     // we cannot loop the strings so we parse back to array
//     JSON.parse(notes).forEach((val) => {
//         ' my_notes_html = my_notes_html +    <div>'
//        ' <p> Added Notes </p> '
//         ' <p> 2021-12-28 </p> '
//     ' </div> '
//         console.log(val)
        
//     });

//     document.getElementById('myNotes').innerHTML = my_notes_html;
//     console.log(my_notes_html)
// };

// // localstorage is url depended like for abc url it is different and for ghc url it is different

// // innerText means only writing text whereas innerHTML means writing the whole html tags 


// // how to extract the data of console.log(notes)
// // --> use map, or for loop

// let MY_NOTE = '_my_note';
// // fetching the pre data so that user can see the previously saved data
// // ternary operator as in a form of if else statment here
// let my_notes = localStorage.getItem(MY_NOTE)?
//     JSON.parse(
//         localStorage.getItem(MY_NOTE)): [] ;
// // english months
// let eng_month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

// window.onload=function () {
//   onGetSavedNotes();
// };


// function onAddNote() {
//     let myNote = document.getElementById('note').value;
//     let note = {};
//     note.value = myNote;
//     note.date = new Date();
//     note.id = new Date().getTime();

//     my_notes.push(note);
//     localStorage.setItem(MY_NOTE,JSON.stringify(my_notes));
// }

// function onGetSavedNotes() {
//     let notes = localStorage.getItem(MY_NOTE);
//     let my_notes_html='';
//     JSON.parse(notes).forEach(function (val, index) {
//         if (val){
//         my_notes_html = my_notes_html +
//         // + '<div> ' + 
//         // '<p> ' +  val.date + '</p> ' +
//         // '<p> ' +  val.value + '</p>' +
//         // + '</div>'; / 
//         // $ will tel the browser the to extract any variable it's like quotation in Js
//         `<div class="del"> <p> ${getUserReadableDate(val.date)} </p>
//         <p> ${val.value} </p>
//         <p class="delete" onclick="deleteNote(` + index + `)""> Delete </p>
//         </div>`
//      } }); 
//     document.getElementById('myNotes').innerHTML = my_notes_html;
// }


// // get User Readable Date
// function getUserReadableDate(date){
//     let readableDate = new Date(date);
//     // date format 02 Jan 2021 5:06PM
//     return readableDate.getDate() + ' '
//     + eng_month [readableDate.getMonth()] + ' / ' +
//     readableDate.getFullYear() + '  ' + ' Time is ' + readableDate.getHours() + ':'
//     + readableDate.getMinutes();
    
// }


// function deleteNote(index){
//     console.log(index)
//     delete my_notes[index];
//     localStorage.setItem(MY_NOTE, JSON.stringify(my_notes));
//     onGetSavedNotes();
// }



// ---- Written By Ashish Gautam React js Teacher------
// let MY_NOTE='_my_note';
// let eng_month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
// let my_notes=localStorage.getItem(MY_NOTE)?
//     JSON.parse(localStorage.getItem(MY_NOTE)):[];

// window.onload=function () {
//   onGetSavedNotes(my_notes);
// };
// function onAddNote() {
//     let myNote = document.getElementById('note').value;
//     let note={};
//     note.value=myNote;
//     note.date=new Date();
//     note.id=new Date().getTime();
//     my_notes.push(note);
//     localStorage.setItem(MY_NOTE,JSON.stringify(my_notes));
//     document.getElementById('note').value='';
//     onGetSavedNotes(my_notes);
// }

// function onGetSavedNotes(notes) {
//     let my_notes_html='';
//     notes.forEach(function (val,index) {
//         if(val) {
//             my_notes_html = my_notes_html +
//                 `<div>
//                  <p>${getUserReadableDate(val.date)}</p>
//                 <p>${val.value}</p>
//                 <div class="delete" onclick="deleteNote(` + index + `)">Delete</div>
//                 </div>`
//         }
//     });
//     document.getElementById('myNotes').innerHTML=my_notes_html;
// }

// function getUserReadableDate(date) {
//     let readableDate=new Date(date);
//    // 11 NOv 2019 2:30
//     return readableDate.getDate()+' '+eng_month[readableDate.getMonth()]
//     +' '+readableDate.getFullYear()+' '+readableDate.getHours()+':'
//     +readableDate.getMinutes();

// }
// function deleteNote(index) {
//     delete my_notes[index];
//     localStorage.setItem(MY_NOTE,JSON.stringify(my_notes));
//     onGetSavedNotes(my_notes);
// }

// // Search features with filter method
// function onSearchItem() {
//     let search_key=document.getElementById('searchText').value;
//     let newArray=my_notes.filter(
//         note=>note.value.toLowerCase().indexOf(search_key)!=-1);
//         onGetSavedNotes(newArray);
//     console.log(my_notes);
//     }

// console.log("Testing okay")

let MY_NOTE='_my_note';
let eng_month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
let my_notes=localStorage.getItem(MY_NOTE)?
    JSON.parse(
    localStorage.getItem(MY_NOTE)):[];
window.onload=function () {
  onGetSavedNotes(my_notes);
};
function onAddNote() {
    let myNote=
        document.
        getElementById('note').value;
    let note={};
    note.value=myNote;
    note.date=new Date();
    note.id=new Date().getTime();
    my_notes.push(note);
    localStorage.setItem(MY_NOTE,
        JSON.stringify(my_notes));
    document.
    getElementById('note').value='';
    onGetSavedNotes(my_notes);
}

function onGetSavedNotes(notes) {
    let my_notes_html='';
    notes.forEach(function (val,index) {
        if(val) {
            my_notes_html = my_notes_html +
                `<div>
                 <p>${getUserReadableDate(val.date)}</p>
                <p>${val.value}</p>
                <div class="delete" onclick="deleteNote(` + index + `)">Delete</div>
                </div>`
        }
    });
    document.getElementById('myNotes')
        .innerHTML=my_notes_html;


}

function getUserReadableDate(date) {
    let readableDate=new Date(date);
   // 11 NOv 2019 2:30
    return readableDate.getDate()+' '+eng_month[readableDate.getMonth()]
    +' '+readableDate.getFullYear()+' '+readableDate.getHours()+':'
    +readableDate.getMinutes();

}
function deleteNote(index) {
    delete my_notes[index];
    localStorage.setItem(MY_NOTE,JSON.stringify(my_notes));
    onGetSavedNotes(my_notes);

}

function onSearchItem() {
let search_key=document.getElementById('searchText').value;
let newArray=my_notes.filter(
    note=>note.value.toLowerCase().indexOf(search_key)!=-1);
    onGetSavedNotes(newArray);
console.log(my_notes);
}
function clearSearch() {
    onGetSavedNotes(my_notes);
}
