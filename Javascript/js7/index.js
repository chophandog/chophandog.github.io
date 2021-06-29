var username = document.getElementById("username");
var password = document.getElementById("password");

var loginForm = document.getElementById("login-form")

username.addEventListener("input", function(event) {
    var currentValue = event.target.value;
    currentValue = currentValue.toUpperCase();
    console.log(currentValue);   

    username.value = currentValue;

    // console.log(event.target.value.toUpperCase())
})

username.addEventListener("focus", function (){
    console.log("Element Focus"); 
})

username.addEventListener("blur", function(){
    console.log("Element Blur")
})

loginForm.addEventListener("submit", function(e){
    alert("Submit Button Clicked")
    e.preventDefault();
})