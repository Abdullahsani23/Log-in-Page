    
// login function//
    var loginAcc = document.getElementById("loginBtn")    
    console.log(loginAcc);
    loginAcc.addEventListener("click", function(){
        var loginEmail = document.getElementById("loginEmail").value
        var loginPass =document.getElementById("loginPass").value

        var storedEmail = localStorage.getItem("email")
        console.log(storedEmail);
        var storedPass = localStorage.getItem("pass1")

        if(loginEmail === storedEmail && loginPass=== storedPass){
            alert("login successfull!")
            window.location= "homePage.html"
        }else{
            alert("invalid Email or Password")
        }
    })
    





































// var creatAcc = document.getElementById("creatAcc")
// console.log(creatAcc);
// creatAcc.addEventListener("click", function(){
//     window.location.href ="sign-up.html"
// })
// var logIn = document.getElementById("login")
// console.log(logIn);
// logIn.addEventListener("click",function(){
//    var userEmail = localStorage.getItem("email")
//    var userPass = localStorage.getItem("pass1")
//    var inputEmail = document.getElementById("email")
//    var inputPaass = document.getElementById("password")

//    if(inputEmail === userEmail && inputPaass=== userPass){
//     alert("Your Account Is Login")
//     window.location.href= "homePage.html"
//    }


// })


