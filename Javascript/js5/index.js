var mainHeading = document.getElementById("main-heading");
mainHeading.classList.add("big");

var btn = document.getElementById("btn-click")
btn.addEventListener("click", function() {
    mainHeading.classList.remove("big");
})

// setTimeout(function() {
//     mainHeading.classList.remove("big");
// }, 1500)






var sidebar = document.getElementById("sidebar");
var toggleButton = document.getElementById("toggle-icon");
toggleButton.addEventListener("click", function() {
    if(sidebar.classList.contains("show")){
        sidebar.classList.remove("show");
        sidebar.classList.add("hide");
    } else {
        sidebar.classList.remove("hide");
        sidebar.classList.add("show");
    }

})