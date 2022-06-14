
//variables to target specific components 
let bookContainer = document.getElementById("book-container");
let addBookButton = document.getElementById("add-book");
let submit = document.getElementById("add-book-to-library");
let popupForm = document.getElementById("popup-form");
let copyMaker = 0;

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

    console.log("in here")

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
        return;
    }

    let newObject = new Book(titleValue, authorValue, pageValue, readValue)


    
    console.log("here is the new book", newObject)
    //need to change this to a different place 
  
    //ISSUE : Pushing the book immediately before the for loop...what if its a duplicate copy and not wanted...it gets store and continued and held 
            //within my Library. this is a problem!

     myLibrary.push(newObject);


    for(let i = 0; i<myLibrary.length; i++){
        console.log("current length of my Library",myLibrary.length)
        console.log("in the for loop: This is my current library ", myLibrary)
        console.log("this is the current index", i);
         

        if(document.getElementById(`${myLibrary[i].Title}`)){
            if(titleValue==myLibrary[i].Title){
                console.log("YES IVE SUCCESSFULLY TARGETED WHAT I NEED!")
                titleValue= titleValue + `${copyMaker}`;
                copyMaker++;
                createABookDiv();
                continue;
            }

            continue;

        }

        else {
            console.log("in the else statement, time to create a book")
            createABookDiv();   
            
        }

        function createABookDiv(){
            
            console.log("made it in create a book div")
            let createBook = document.createElement("div");
            createBook.setAttribute("class", "created-book-container");
            createBook.setAttribute("id", `${titleValue}`);
            bookContainer.appendChild(createBook);

            let currentBook = document.getElementById(`${titleValue}`);

            console.log("this is the current book appended before properties added", currentBook)

            for(let property in myLibrary[i]){
                function addRemoveBookButton(){
                    let removeBookButton = document.createElement("button");
                    removeBookButton.innerHTML = "Remove Book"
                    removeBookButton.setAttribute("class", "book-data")
                    removeBookButton.setAttribute("id", `remove-${titleValue}`)
                    removeBookButton.setAttribute("style", "background-color:red")
                    createBook.appendChild(removeBookButton)
                    let targetRemoveBookButton = document.getElementById(`remove-${titleValue}`)
                    targetRemoveBookButton.addEventListener("click", ()=>{
                        document.getElementById(`${titleValue}`).remove();
                        for(let j = 0; j<myLibrary.length; j++){
                            if(myLibrary[j].Title == titleValue){
                                myLibrary.splice(j,1);
                            }
                        }
                    })
                }
        
                function addReadButton(){
                    let readButton = document.createElement("button");
                    readButton.innerHTML = myLibrary[i][property]=="Yes"? "Book Read!" : "Not Read";
                    readButton.setAttribute("class", "book-data read-button");
                    readButton.setAttribute("id", `read-button-${titleValue}`)
                    createBook.appendChild(readButton)

                    let targetReadButton = document.getElementById(`read-button-${titleValue}`);
                    targetReadButton.addEventListener("click", ()=>{
            
                            if(targetReadButton.innerHTML == "Book Read!"){
                                targetReadButton.innerHTML = "Not Read";
                                targetReadButton.setAttribute("style", "backround-color: orange")
                                currentBook.Read="No";
            
                            }
                            else{
                                targetReadButton.innerHTML = "Book Read!";
                                targetReadButton.setAttribute("style", "backround-color: green")
                                currentBook.Read="Yes"
                            }
                        })
                };

                function addBookData(){
                    let bookData = document.createElement("p")
                    bookData.innerHTML = myLibrary[i][property];
                    bookData.setAttribute("class", "book-data");
                    createBook.appendChild(bookData);
                };

            if(property == "Read"){
                addReadButton();
                addRemoveBookButton();
                
            }

            else {
                addBookData();
            }
        }

        

        
        

    }
    
    }

    
   
    //reset the form data for the next book
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = ""

    //hide the form after book is added
    
    makeFormVisible();
    return;
}



addBookButton.addEventListener("click", makeFormVisible);
submit.addEventListener("click",addBookToLibrary);
