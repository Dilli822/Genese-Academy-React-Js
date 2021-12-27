

// textarea where user can write the notes
// user can save the notes by adding

// this is key for localstorage
let MY_NOTE = '_my_note';
function onAddNote(){
    // we have to extract the elements from DOM
    // we get single elementfrom element Id
    let myNote = document.getElementById("note").value;
    // printing the whole textarea element here
    // .value will give value of elements 


    // console.log(myNote)

    // After capturing the element's value now
    // we have to store it somewhere but where?
    // okay we have two kinds of storage inside the browser
    // local and session storage we can store in there

    // Session storage will clear it's storage after closing browser
    // but in local storage it needs to be cleared manually or programtically

    // in localstorage data are stored key value pairs 
    localStorage.setItem(MY_NOTE, myNote);

    // then we can check the save valued pair in localstorage
    // suppose I wrote the hello world we are here in textarea and saved it with btn
    // then it will be saved as keyvalue pair inside the localstorage
    // which will be saved as _my_note  hello world we are here

    // call the onGetSavedNotes() .. see the console
    onGetSavedNotes();
}

// okay our localstorage has done saving the elements value
// now let's make the function to capture the localstorage data MY_NOTE = _my_note

function onGetSavedNotes(){
    // let's capture the localstorage key in variable
    let notes = localStorage.getItem(MY_NOTE);
    console.log(notes)

}