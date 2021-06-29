var list = document.getElementById("todo-list")
var btn = document.getElementById("add-item")
// var firstItem = document.getElementById("item1")



// btn.addEventListener("click", function(){
    
//     var newListElenment = document.createElement("li")
//     var textNode = document.createTextNode("List Item " + (list.childElementCount + 1))
//     newListElenment.appendChild(textNode);
//     newListElenment.id = "item" + (list.childElementCount + 1);

//     var firstItem = list.firstElementChild;

//     // list.appendChild(newListElenment)
//     list.insertBefore(newListElenment, firstItem)

    
// })


var txt = document.getElementById("text-input");
function input(){
    var newListElenment = document.createElement("li")

    if(txt.value === ""){
        alert("Điền vào chỗ trống đi thằng ngu")

    } else {
        var textNode = document.createTextNode(txt.value)
        newListElenment.appendChild(textNode)
        list.appendChild(newListElenment)

        txt.value = "";
        
    }
}


btn.addEventListener("click", input);

txt.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        input()
    }
})