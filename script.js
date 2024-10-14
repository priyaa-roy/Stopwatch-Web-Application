let startStopBtn = document.getElementById('startStopBtn');
let resetBtn = document.getElementById('resetBtn');
let display = document.getElementById('display');

let startTime;
let updatedTime;
let difference;
let timerInterval;
let running = false;

// Function to update the time display
function updateDisplay(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);

    display.innerHTML = 
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds);
}

// Start/Stop button functionality
startStopBtn.addEventListener('click', () => {
    if (!running) {
        running = true;
        startTime = new Date().getTime() - (difference || 0);
        timerInterval = setInterval(() => {
            updatedTime = new Date().getTime() - startTime;
            updateDisplay(updatedTime);
        }, 1000);
        startStopBtn.textContent = "Stop";
    } else {
        running = false;
        clearInterval(timerInterval);
        difference = updatedTime;
        startStopBtn.textContent = "Start";
    }
});

// Reset button functionality
resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    running = false;
    difference = 0;
    updateDisplay(0);
    startStopBtn.textContent = "Start";
});
