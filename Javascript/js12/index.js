var chooseItemRed = document.getElementById("red-item");
var chooseItemBlack = document.getElementById("black-item");
var chooseItemBlue = document.getElementById("blue-item");
var chooseItemPink = document.getElementById("pink-item");
var chooseItemPurple = document.getElementById("purple-item");

var productPreview = document.getElementById("product-preview");


chooseItemRed.addEventListener("click", function(){
    productPreview.src = "/Javascript/js12/red.png";

    chooseItemRed.style.border = "2px solid teal";
    chooseItemBlack.style.border = "2px solid transparent";
    chooseItemBlue.style.border = "2px solid transparent"; 
    chooseItemPink.style.border = "2px solid transparent";
    chooseItemPurple.style.border = "2px solid transparent";
})

chooseItemBlack.addEventListener("click", function(){
    productPreview.src = "/Javascript/js12/black.png";

    chooseItemBlack.style.border = "2px solid teal";
    chooseItemRed.style.border = "2px solid transparent";
    chooseItemBlue.style.border = "2px solid transparent"; 
    chooseItemPink.style.border = "2px solid transparent";
    chooseItemPurple.style.border = "2px solid transparent";
})

chooseItemBlue.addEventListener("click", function(){
    productPreview.src = "/Javascript/js12/blue.png";

    chooseItemBlue.style.border = "2px solid teal";
    chooseItemBlack.style.border = "2px solid transparent";
    chooseItemRed.style.border = "2px solid transparent"; 
    chooseItemPink.style.border = "2px solid transparent";
    chooseItemPurple.style.border = "2px solid transparent";
})

chooseItemPink.addEventListener("click", function(){
    productPreview.src = "/Javascript/js12/pink.png";

    chooseItemPink.style.border = "2px solid teal";
    chooseItemBlack.style.border = "2px solid transparent";
    chooseItemBlue.style.border = "2px solid transparent"; 
    chooseItemRed.style.border = "2px solid transparent";
    chooseItemPurple.style.border = "2px solid transparent";
})

chooseItemPurple.addEventListener("click", function(){
    productPreview.src = "/Javascript/js12/purple.png";

    chooseItemPurple.style.border = "2px solid teal";
    chooseItemBlack.style.border = "2px solid transparent";
    chooseItemBlue.style.border = "2px solid transparent"; 
    chooseItemPink.style.border = "2px solid transparent";
    chooseItemRed.style.border = "2px solid transparent";
})


var timing = document.getElementById("timing");
timing.onload = startTime();
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("timing").innerHTML = h+ ":" + m + ":" + s;
    t = setTimeout(function(){ startTime() }, 500);
  }
  
  function checkTime(i) {
    if (i<10) {
      i = "0" + i;
    }
    return i;
  }


var chooseItemTime = document.getElementById("time-item");
var chooseItemHeart = document.getElementById("heart-item");


chooseItemTime.addEventListener("click", function(){
    document.getElementById("heartheart").style.display = "none";
    document.getElementById("timetime").style.display = "block";
    document.getElementById("time-item").style.color = "white";
    document.getElementById("time-item").style.backgroundColor = "gray";

    document.getElementById("heart-item").style.color = "black";
    document.getElementById("heart-item").style.backgroundColor = "gainsboro";
})


chooseItemHeart.addEventListener("click", function(){
    document.getElementById("timetime").style.display = "none";
    document.getElementById("heartheart").style.display = "block";
    document.getElementById("heart-item").style.color = "white";
    document.getElementById("heart-item").style.backgroundColor = "gray";

    document.getElementById("time-item").style.color = "black";
    document.getElementById("time-item").style.backgroundColor = "gainsboro";
})

document.getElementById("primary-btn").addEventListener("click", function(){
    alert("Có cái đb mà mua")
})




