// signup function//
    var createdAcc = document.getElementById("signupBtn")
    console.log(createdAcc);    
    createdAcc.addEventListener("click", function(){

        var firstName = document.getElementById("fName").value
        var lasttName = document.getElementById("lName").value
        var email1 = document.getElementById("email1").value
        var password1 = document.getElementById("password1").value
        // var password2 = document.getElementById("password2").value   
       
        console.log(firstName,lasttName,email1,password1);
        localStorage.setItem("firstname",firstName)
        localStorage.setItem("lastname",lasttName)
        localStorage.setItem("email",email1)
        localStorage.setItem("pass1",password1)
        if(firstName === "" || lasttName == "" || email1=="" || password1=== ""){
            alert("All fields are required")
        }
        else{
        alert("Your Account Created")
         window.location.href = "index.html" 
        }
        })