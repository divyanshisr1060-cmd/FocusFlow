let timeLeft = 25 * 60;
let timer;
let isRunning = false;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const status = document.getElementById("status");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    timeDisplay.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
    if (isRunning) return;

    isRunning = true;
    status.textContent = "Focus Time 🔥";

    timer = setInterval(() => {
        timeLeft--;

        updateDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            isRunning = false;
            status.textContent = "🎉 Session Complete!";
            alert("Great job! Take a 5-minute break.");
        }
    }, 1000);
});

pauseBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    status.textContent = "Paused ⏸";
});

resetBtn.addEventListener("click", () => {
    clearInterval(timer);
    isRunning = false;
    timeLeft = 25 * 60;
    updateDisplay();
    status.textContent = "Focus Time";
});

updateDisplay();