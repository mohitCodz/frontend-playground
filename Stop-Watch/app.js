let [seconds, minutes, hours] = [0, 0, 0];
let displayTime = document.getElementById("displayTime");
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
            if (hours == 60) {
                hours = 0;
            }
        }
    }

    // format with leading zeros
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    displayTime.innerHTML = `${h}:${m}:${s}`;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer); // prevent multiple timers
    }
    timer = setInterval(stopWatch, 1000);
}

function watchStop() {
    clearInterval(timer);
    timer = null;
}

function watchReset() {
    clearInterval(timer);
    timer = null;
    [seconds, minutes, hours] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00";
}

document.getElementById("startBtn").onclick = watchStart;
document.getElementById("stopBtn").onclick = watchStop;
document.getElementById("resetBtn").onclick = watchReset;
