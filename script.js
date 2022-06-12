document.addEventListener("keyup", function(event) {
    let message = event.target.innerHTML; 
    let id = event.target.id;
    let spanId =  id + "-message";
    let targetSpan = document.getElementById(spanId);

    if(id == "confirm-password"){
        let password = document.getElementById("password");
        event.target.pattern = "([" + password.value + "]+)";  
    }

    function confirmBothPasswordsMatch(){
        let password = document.getElementById("password");
        let confirmPassword = document.getElementById("confirm-password");
            if(password.innerHTML !== confirmPassword.innerHTML){
                return false; 
            }
            return true;
        }
    
    
    function errorMessage(){
        if(id=="first-name" || message.innerHTML==""){
            targetSpan.innerHTML = "* Please submit a valid alphabetical first name";
        }
        if(id=="email"|| message.innerHTML==""){
            targetSpan.innerHTML = "* Please submit a valid email: youremail@website";
        }
        if(id=="password"|| message.innerHTML==""){
            targetSpan.innerHTML = "* Please submit a valid password between 8-16 characters";
        }
        if(id=="last-name"|| message.innerHTML==""){
            targetSpan.innerHTML = "* Please submit a valid alphabetical last name";
        }
        if(id=="phone-number"|| message.innerHTML==""){
            targetSpan.innerHTML = "* Submit a valid number 1234567890 no - or spaces";
        }
        if(id=="confirm-password"|| message.innerHTML==""|| confirmBothPasswordsMatch()==false){
            targetSpan.innerHTML = "* Passwords do not match";
        }
        
 }


    if(event.target.checkValidity()){
        targetSpan.innerHTML = "";
    }

    else {
        errorMessage();

    }


})