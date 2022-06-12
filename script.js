//variables to target specific components 
let bookContainer = document.getElementById("book-container");
let addBookButton = document.getElementById("add-book");
let submit = document.getElementById("add-book-to-library");
let popupForm = document.getElementById("popup-form");

//storage for all books in the library
let myLibrary = [];


//creates a new book
function Book(title, author, pages, read){
    this.Title = title;
    this.Author = author;
    this.Pages = pages;
    this.Read = read;
}


//make form visible when +Add book is clicked 
function makeFormVisible(){ 

    if(popupForm.style.visibility == "visible"){
        popupForm.style.visibility = "hidden";
        return;
    }
    let cancel = document.getElementById("cancel-add-book");
    cancel.addEventListener("click", ()=>{
        popupForm.style.visibility = "hidden";
        return;
    })
    
    popupForm.style.visibility = "visible";
    
    return;
    
}


 //complete function to add a book to the library 
function addBookToLibrary(){
    let titleValue = document.getElementById("title").value;
    let authorValue = document.getElementById("author").value;
    let pageValue = document.getElementById("pages").value;
    let readValue = document.getElementById("did-you-read-it").value;

    if(titleValue == "" || authorValue == "" || typeof Number(pageValue) == NaN || pageValue == ""){
        console.log("wrong input buddy")
        return;
    }

    //test comment 

    console.log("line 52 after if")
    let newObject = new Book(titleValue, authorValue, pageValue, readValue)

    myLibrary.push(newObject);
    console.log("line 56 after creating and pushing newObject")
    console.log("line 57 : MyLibrary", ...myLibrary)

    //for loop to check if book exists. 
        //if it exists, move on to the next index
        //else 
            //create the book and class/id it 
            //next go through each property of the user inputted book
                //if the property is read, turn it into a button 
                //else attach it as a paragraph 
    
    for(let i = 0; i<myLibrary.length; i++){
        console.log("in the for loop");
        if(document.getElementById(`book-${i}`)){
            console.log("it already exists");
            continue
        }

        else {
            let createBook = document.createElement("div");
            createBook.setAttribute("class", "created-book-container");
            createBook.setAttribute("id", `book-${i}`);
            
            for(let property in myLibrary[i]){
                if(property == "Read"){
                    let readButton = document.createElement("button");
                    readButton.innerHTML = myLibrary[i][property]=="Yes"? "Book Read!" : "Not Read";
                    readButton.setAttribute("class", "book-data read-button");
                    readButton.setAttribute("id", `read-button-${i}`)
                    createBook.appendChild(readButton)
                   
                }
    
                else {
                    let bookData = document.createElement("p")
                    bookData.innerHTML = myLibrary[i][property];
                    bookData.setAttribute("class", "book-data");
                    createBook.appendChild(bookData);
                }
                
            }
            
            
        
            //append the completed book to the book container 
            bookContainer.appendChild(createBook);
            

            //add an event listener to the read button on the book to flip between read and not read 
            document.getElementById(`read-button-${i}`).addEventListener("click", ()=>{
                let currentReadButton = document.getElementById(`read-button-${i}`);
                if(currentReadButton.innerHTML == "Book Read!"){
                    currentReadButton.innerHTML = "Not Read";
                }
                else{
                    currentReadButton.innerHTML = "Book Read!";
                }
            })


        }
       
    }


    /*while(titleValue == " " || authorValue == "" || Number.isInteger(pageValue)){
    
    }*/

    
   
    //reset the form data for the next book
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = ""

    //hide the form after book is added
    
    makeFormVisible();
    return;
}

    


addBookButton.addEventListener("click", makeFormVisible);
/*submit.addEventListener("click", ()=>{
    if()
    else{
        addBookToLibrary
    }
});*/
submit.addEventListener("click",addBookToLibrary)