let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

let currentTime = new Date();
// console.log(currentTime.getHours());

hrs.innerHTML = currentTime.getHours(); // displaying hours
min.innerHTML = currentTime.getMinutes(); // displaying minutes
sec.innerHTML = currentTime.getSeconds(); // displaying seconds