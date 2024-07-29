// script.js

let startTime, updatedTime, difference, tInterval, savedTime;
let running = false;

const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

function startTimer() {
    if (!running) {
        running = true;
        startTime = new Date().getTime();
        tInterval = setInterval(getShowTime, 1);
        startButton.style.display = "none";
        stopButton.style.display = "inline-block";
    }
}

function stopTimer() {
    if (running) {
        running = false;
        clearInterval(tInterval);
        savedTime += difference;
        startButton.style.display = "inline-block";
        stopButton.style.display = "none";
    }
}

function resetTimer() {
    clearInterval(tInterval);
    savedTime = 0;
    running = false;
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    milliseconds.innerHTML = '00';
    startButton.style.display = "inline-block";
    stopButton.style.display = "none";
}

function getShowTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime + (savedTime || 0);

    const time = new Date(difference);
    const min = time.getUTCMinutes();
    const sec = time.getUTCSeconds();
    const msec = Math.floor(time.getUTCMilliseconds() / 10);

    minutes.innerHTML = min < 10 ? '0' + min : min;
    seconds.innerHTML = sec < 10 ? '0' + sec : sec;
    milliseconds.innerHTML = msec < 10 ? '0' + msec : msec;
}
