function playSound(e) {
    const keyCode = e.keyCode;
    const audio = document.querySelector(`audio[data-key='${keyCode}']`);
    const key = document.querySelector(`.key[data-key='${keyCode}']`);
    const keys = document.querySelectorAll('.key');
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

window.addEventListener("keydown", playSound);