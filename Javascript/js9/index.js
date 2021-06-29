var btn = document.getElementById("top-btn");

btn.addEventListener("mousedown", function(){
    console.log("Mouse Down Event")
})

btn.addEventListener("mouseup", function(){
    console.log("Mouse Up Event")
})

btn.addEventListener("click", function(){
    console.log("Mouse Click Event")
})

btn.addEventListener("dblclick", function(){
    console.log("Mouse db click Event")
})

var over = document.getElementById("over");
var overcount = 0;
over.addEventListener("mouseover", function(){
    var countElement = document.querySelector("#over > p")
    overcount += 1;
    countElement.innerHTML = overcount;

})

var enter = document.getElementById("enter");
var entercount = 0;
enter.addEventListener("mouseenter", function(){
    var countElement = document.querySelector("#enter > p")
    entercount += 1;
    countElement.innerHTML = entercount;

})

var move = document.getElementById("move");
var movecount = 0;
move.addEventListener("mousemove", function(){
    var countElement = document.querySelector("#move > p")
    movecount += 1;
    countElement.innerHTML = movecount;

})