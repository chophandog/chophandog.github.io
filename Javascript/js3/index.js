var countdownElement = document.getElementById("countdown");
var initialCountdownVal = countdownElement.innerHTML;

var bgImage = document.getElementById("bg-image");
// var bgImgElement = document.getElementById("bg-image");

//     bgImgElement.className = "clas-image"

var interval = setInterval(function() {
    
    initialCountdownVal > 0 ? initialCountdownVal -=1 : 0;
    countdownElement.innerHTML = initialCountdownVal;
    countdownElement.style.fontSize = initialCountdownVal * 100 + "px";
    
    bgImage.style.width = initialCountdownVal * 10 + "%"
    
    if(initialCountdownVal == 0){
        countdownElement.style.fontSize = "100px";
    }



    
    if(initialCountdownVal <=0){
        clearInterval(interval);
    }
    // var backImgPath = initialCountdownVal % 2 === 0 ? "https://i.pinimg.com/564x/4d/b9/86/4db986ce8ef4bf80eef7115d90b0d810.jpg" : "https://i.pinimg.com/564x/dc/c7/96/dcc796d4fd290c78137bfa61099aaf8b.jpg";
    // bgImgElement.src = backImgPath;

    // console.log("Interval Running");
    // console.log(bgImgElement);
}, 1000);
