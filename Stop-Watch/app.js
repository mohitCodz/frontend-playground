// Initial time
let seconds = 0, minutes = 0, hours = 0;
let timer = null;

// Update the display
function updateDisplay() {
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    document.getElementById("displayTime").textContent = `${h}:${m}:${s}`;
}

// Stopwatch function
function stopWatch() {
    seconds++;
    if (seconds === 60) { 
        seconds = 0; 
        minutes++; 
    }
    if (minutes === 60) { 
        minutes = 0; 
        hours++; 
    }
    updateDisplay();
}

// Start button
function watchStart() {
    if (timer) clearInterval(timer);
    timer = setInterval(stopWatch, 1000);
}

// Stop button
function watchStop() {
    clearInterval(timer);
    timer = null;
}

// Reset button
function watchReset() {
    clearInterval(timer);
    timer = null;
    seconds = minutes = hours = 0;
    updateDisplay();
}

// Wait for DOM to load before connecting buttons
document.addEventListener('DOMContentLoaded', function() {
    // Connect buttons
    document.getElementById("startBtn").onclick = watchStart;
    document.getElementById("stopBtn").onclick = watchStop;
    document.getElementById("resetBtn").onclick = watchReset;
    
    // Initialize display
    updateDisplay();
    
    console.log("Stopwatch loaded successfully!");
});