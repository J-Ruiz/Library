
let bookContainer = document.getElementById("book-container");
let addBookButton = document.getElementById("add-book");
let submit = document.getElementById("add-book-to-library");
let popupForm = document.getElementById("popup-form");
let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
       return `${this.title} by ${this.author}, ${this.pages}, ${this.read}.`;
    }
}


//make form visible when +Add book is clicked 
function makeFormVisible(){
    let cancel = document.getElementById("cancel-add-book");
    cancel.addEventListener("click", ()=>{
        popupForm.style.visibility = "hidden";
        return;
    })
    popupForm.style.visibility = "visible";

}

//on click of the add book to library button inside of the HTML form, trigger the addBookToLibrary function
    // ^^ eventListenener(onsubmit){ function addBookToLibrary(){}}



function addBookToLibrary(){
    //target the inputs of the addBookButton
    //put the inputs of the addBookButton into an object/
    //push that object into the myLibrary variable
    myLibrary.push({  //may need to target the value attribute or the input html instead of the id...check later
        Title: document.getElementById("title").innerHTML,
        Author: document.getElementById("author").innerHTML,
        Pages: document.getElementById("pages").innerHTML
        //read : document.getElementById("did-you-read-it").value
    });

    
    //Create a for loop to loop through each index of the myLibrary
    for(let i = 0; i<myLibrary.length; i++){
        //create a div for each index of the myLibrary variable to represent each book (will need to remove or check if book exists already!)
        //attach to dom under the "book-container" id
        if(!document.getElementById(`book-${i}`)){
            continue;
        }

        else{
            let createBook = document.createElement("div")
            createBook.setAttribute("class", "created-book")
            //set class to created book which adds the stylings below 
                //flex box 
                //create gap for flexbox reat
            for(let property in myLibrary[i]){
              let bookData = document.createElement("p");
              
            }
            //Column items for flex box 
                //title
                //author
                //pages
                //read
        }
       
        
    }
        
        
}


addBookButton.addEventListener("click", makeFormVisible);
submit.addEventListener("submit", addBookToLibrary)