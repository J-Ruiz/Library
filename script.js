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


 
function addBookToLibrary(){
    let titleValue = document.getElementById("title").value;
    let authorValue = document.getElementById("author").value;
    let pageValue = document.getElementById("pages").value;
    let readValue = document.getElementById("did-you-read-it").value;
    let newObject = {  
        Title: titleValue,
        Author: authorValue,
        Pages: pageValue + " " + "Pages",
        Read: readValue

    }
    myLibrary.push(newObject);
    console.log(...myLibrary);
 
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
            
    
            bookContainer.appendChild(createBook);
            

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

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = ""

    
    makeFormVisible();
    return;
}

    


addBookButton.addEventListener("click", makeFormVisible);
submit.addEventListener("click", addBookToLibrary);
//addBookButton.addEventListener("click",console.log("fuck you"))