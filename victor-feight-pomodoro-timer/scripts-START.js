let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {

    // clear any existing timers first
    clearInterval(countdown);

    // const now = (new Date()).getTime();
    const now = Date.now();
    const then = now + seconds * 1000;
    // console.log({now, then});
    displayTimeLeft(seconds);
    displayEndTime(then);

    // run timer every second
    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        // check if timer should be stopped
        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        // display timer
        displayTimeLeft(secondsLeft);
    }, 1000);
} 

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainderSeconds = seconds % 60;

    // time format, then display on the webpage
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
    document.title = display;
    timerDisplay.textContent = display;
    console.log({ minutes, remainderSeconds });
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    const hour = end.getHours() % 12 || 12;
    const minutes = end.getMinutes();
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
    // gives us the entire html tag
    // console.log(this);

    // using data-time attribute gives us a dataset object with time
    // console.log(this.dataset)

    // gives a string with the number of minutes
    const seconds = parseInt(this.dataset.time);
    // console.log(seconds);
    timer(seconds);


// gives a string with the number of minutes
}

buttons.forEach(button => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', function(e) {
        // prevent JS from reloading page and sending data over GET
        e.preventDefault();

        // this is the form, minutes is the input textbox
        const mins = this.minutes.value;

        // timer requires seconds
        timer(mins * 60);
        this.reset();
});
