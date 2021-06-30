var btn = document.getElementsByClassName("btn")
var result = document.getElementById("result")
var previousOperand = document.getElementsByClassName("previous-operand")
var currentOperand = document.getElementsByClassName("current-operand")

for (var number of btn ){
   number.addEventListener("click", function(){
       result.innerHTML += this.value
   }) 
}

function equal(){
    var result1 = result.innerHTML;
    var output = eval(result1);
    result.innerHTML = output;
}

function clean() {
    result.innerHTML = "";
}