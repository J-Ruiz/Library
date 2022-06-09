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
        console.log("hit the submit button")
        popupForm.style.visibility = "hidden";
        return;
    }
    let cancel = document.getElementById("cancel-add-book");
    cancel.addEventListener("click", ()=>{
        console.log("test");
        popupForm.style.visibility = "hidden";
        return;
    })
    
    popupForm.style.visibility = "visible";
    
    return;
    
}

//on click of the add book to library button inside of the HTML form, trigger the addBookToLibrary function
    // ^^ eventListenener(onsubmit){ function addBookToLibrary(){}}

 
function addBookToLibrary(){
    //target the inputs of the addBookButton
    //put the inputs of the addBookButton into an object/
    //push that object into the myLibrary variable
    let titleValue = document.getElementById("title").value;
    let authorValue = document.getElementById("author").value;
    let pageValue = document.getElementById("pages").value;
    let newObject = {  //may need to target the value attribute or the input html instead of the id...check later
        Title: titleValue,
        Author: authorValue,
        Pages: pageValue
        //read : document.getElementById("did-you-read-it").value
    }
    myLibrary.push(newObject);

    // look at code below to begin the for loop process
    /*for(let i = 0; i<myLibrary.length; i++){
        let createBook = document.createElement("div")
        createBook.setAttribute("class", "created-book")
        createBook.setAttribute("id", `${i}`)
        
        
    }*/
 

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = ""

    makeFormVisible();
    return;
}

    //Create a for loop to loop through each index of the myLibrary
    /*for(let i = 0; i<myLibrary.length; i++){
        //create a div for each index of the myLibrary variable to represent each book (will need to remove or check if book exists already!)
        //attach to dom under the "book-container" id
        if(document.getElementById(`book-${i}`)){

            continue;
            
        }
        
        else{
            let createBook = document.createElement("div")
            createBook.setAttribute("class", "created-book")
            createBook.setAttribute("id", `book-${i}`)
            //set class to created book which adds the stylings below 
                //flex box 
                //create gap for flexbox reat
            for(let property in myLibrary[i]){
              let bookData = document.createElement("p");
              bookData.innerHTML = myLibrary[i][property]
              createBook.appendChild(bookData)
            }

            bookContainer.appendChild(createBook);
            //Column items for flex box 
                //title
                //author
                //pages
                //read
               
        //}
  
       
    
};     */



addBookButton.addEventListener("click", makeFormVisible);
submit.addEventListener("click", addBookToLibrary);
//addBookButton.addEventListener("click",console.log("fuck you"))