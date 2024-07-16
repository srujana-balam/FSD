let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;

const timerElement = document.getElementById('timer');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateTimerDisplay() {
    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayHours = hours < 10 ? `0${hours}` : hours;
    timerElement.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateTimerDisplay();
        }, 1000);
    }
}


function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateTimerDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
