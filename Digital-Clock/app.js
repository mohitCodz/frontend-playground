let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

setInterval(()=>{
let currentTime = new Date();

hrs.innerHTML = currentTime.getHours(); // displaying hours
min.innerHTML = currentTime.getMinutes(); // displaying minutes
sec.innerHTML = currentTime.getSeconds(); // displaying seconds
},1000)