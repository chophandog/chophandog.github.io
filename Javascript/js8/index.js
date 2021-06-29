document.body.addEventListener("keydown", function(e){
    var keyCode = e.keyCode;
    console.log("KeyDown for ==>" + keyCode)
})

document.body.addEventListener("keyup", function(e){
    var keyCode = e.keyCode;
    console.log("KeyUp for ==>" + keyCode)
})

document.body.addEventListener("keypress", function(e){
    var keyCode = e.keyCode;
    console.log("KeyPress for ==>" + keyCode)
})

var key = document.getElementsByClassName("audio-click")
var keyclap = document.getElementById("clap");
var keyhihat = document.getElementById("hihat");
var keykick = document.getElementById("kick");
var keyopenhat = document.getElementById("ophenhat");
var keyboom = document.getElementById("boom");
var keyride = document.getElementById("ride");
var keysnare = document.getElementById("snare");
var keytom = document.getElementById("tom");
var keytink = document.getElementById("tink");


document.addEventListener("keydown", function(e) {
    if (e.keyCode == 65) {
      document.getElementById("audioA").play();
    //   keyclap.style.transform = scale(1.2, 1.2);
    }
});

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 83) {
      document.getElementById("audioS").play();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 68) {
      document.getElementById("audioD").play();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 70) {
      document.getElementById("audioF").play();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 71) {
      document.getElementById("audioG").play();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 72) {
      document.getElementById("audioH").play();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 74) {
      document.getElementById("audioJ").play();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 75) {
      document.getElementById("audioK").play();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.keyCode == 76) {
      document.getElementById("audioL").play();
    }
});