var btnDecreaseFont = document.getElementById("btn-decrease");
var btnIncreaseFont = document.getElementById("btn-increase");
var mainHeading = document.getElementById("main-heading");

var initialFontSize = window.getComputedStyle(mainHeading).fontSize;
initialFontSize = parseInt(initialFontSize.substr(0, (initialFontSize.length - 2)));

btnIncreaseFont.addEventListener("click", function() {
    initialFontSize = initialFontSize + 16;
    mainHeading.style.fontSize = initialFontSize + "px";
})

btnDecreaseFont.onclick = function() {
    initialFontSize = initialFontSize - 16;
    mainHeading.style.fontSize = initialFontSize + "px";
}

// mainHeading.style.fontSize = parseInt(initialFontSize) + 16 + "px";


