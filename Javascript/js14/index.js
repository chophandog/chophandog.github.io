var userName = document.getElementById("username")
var loginForm = document.getElementById("login-form")
var userNameErrorPara = document.getElementById("username-error")

userName.addEventListener("input", function(e){
    var pattern = /^[\w]{6,8}$/;
    var currentValue = e.target.value;
    var valid = pattern.test(currentValue);

    if (valid) {
        userNameErrorPara.style.display = "none";
    } else {
        userNameErrorPara.style.display = "block";
    }
})