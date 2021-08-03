const secondHand = document.querySelector('.second-hand');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.min-hand');
const hands = document.querySelectorAll('.hand');

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // ex. 60/60 = 1 * 360 = 360
    // +90 to account for 90deg initial offset
    const minutes = now.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

    const hours = now.getHours();
    const hoursDegrees = (hours / 12) * 360 + 90;
    // use es6 template literal to rotate
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    // every time a hand reaches 90, remove transition CSS effect for all hands
    if(secondsDegrees === 90) {
        hands.forEach(hand => hand.style.transition = 'none');
    } else {
        hands.forEach(hand => hand.style.transition = '');
    }

}


setInterval(setDate, 1000);