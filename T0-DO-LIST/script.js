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
    saveData(); // it will save the updated data
}
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); // it will save the updated data
    } 
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // it will save the updated data
    }
}, false);
// function to daveData
function saveData(){
localStorage.setItem("data",listContainer.innerHTML);
}
// function to display data
function displayData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
displayData();