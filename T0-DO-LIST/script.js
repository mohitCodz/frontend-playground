const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask(){
    if(inputBox.value === ''){
        alert("Write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
listContainer.addEventListener("click",function(e){
    if(e.target.targetName === "li"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.targetName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);