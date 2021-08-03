// listen for keydown, on press run function which gives event (e)
// giving info about keyboard keycode

function playSound(e) {
    // use an attribute selector on an element
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    // use an attribute selector on a class
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(audio);
    // prevent function from running
    if (!audio) return;

    audio.currentTime = 0; // rewind to the start

    // play the associated audio element
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return // we only want to remove transforms
    console.log(e);

    // addEventListener called on key, so this refers to this key
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');

// loop over array of keys, attach event listener
// when transition for key is ended, remove it
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

// recall no parentheses for function as argument
window.addEventListener('keydown', playSound);