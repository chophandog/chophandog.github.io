var list = document.getElementById("todo-list")
var txt = document.getElementById("text-input");
var btnAdd = document.getElementById("add-item")
var btnUpdate = document.getElementById("update-item")
var btnRemove = document.getElementById("remove-item")



function createNewNode() {
    var newListElenment = document.createElement("li")
    var textNode = document.createTextNode(txt.value)
    newListElenment.appendChild(textNode)
    list.appendChild(newListElenment)

    return newListElenment;
}

function addListItem(){
    if(txt.value === ""){
        alert("Điền vào chỗ trống đi thằng ngu")

    } else {
        var newListElenment = createNewNode();
        txt.value = "";
        
    }
}


btnAdd.addEventListener("click", addListItem);
txt.addEventListener("keyup", function(e){
    if(e.keyCode === 13){
        addListItem()
    }
})

btnUpdate.addEventListener("click", function updateListItem(){
    var firstElement = list.firstElementChild;
    var newListElenment = createNewNode();
    
    list.replaceChild(newListElenment, firstElement)

})


btnRemove.addEventListener("click", function removeListItem() {
    var firstElement = list.firstElementChild;
    
    list.removeChild(firstElement);
})

