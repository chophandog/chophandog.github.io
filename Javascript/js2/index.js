var countdownElement = document.getElementById("countdown");
var initialCountdownVal = countdownElement.innerHTML;


var bgImgElement = document.getElementById("bg-image");

    bgImgElement.className = "clas-image"


setInterval(function() {
    if(initialCountdownVal > 0) {
        initialCountdownVal -= 1;
    } else {
        initialCountdownVal = 0;
    }
    countdownElement.innerHTML = initialCountdownVal;

    var backImgPath = initialCountdownVal % 2 === 0 ? "https://i.pinimg.com/564x/4d/b9/86/4db986ce8ef4bf80eef7115d90b0d810.jpg" : "https://i.pinimg.com/564x/dc/c7/96/dcc796d4fd290c78137bfa61099aaf8b.jpg";
    bgImgElement.src = backImgPath;

    // console.log("Interval Running");
    // console.log(bgImgElement);
}, 1000);
