const keys = document.querySelector('.keys');
const audios = document.querySelectorAll('audio');
keys.addEventListener("keydown", reproducirSonido());

function reproducirSonido() {
    const key = document.querySelector('div[data-key="68"');
    console.log(key);

}