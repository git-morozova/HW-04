const trafficGreenLight = document.querySelector('#trafficGreenLight');
const trafficYellowLight = document.querySelector('#trafficYellowLight');
const trafficRedLight = document.querySelector('#trafficRedLight');
const anyLight = document.querySelector('.allLights');

anyLight.addEventListener('click', makeGreen);

function makeGreen() {
    trafficGreenLight.style.background = ('green');
    trafficYellowLight.style.background = ('black');
    trafficRedLight.style.background = ('black');
    //убедимся, что любая функция вызывается только один раз за клик, через консоль
    //console.log('makeGreen');
    anyLight.removeEventListener('click', makeGreen);
    anyLight.addEventListener('click', makeYellow);
}

function makeYellow() {
    trafficGreenLight.style.background = ('black');
    trafficYellowLight.style.background = ('yellow');
    trafficRedLight.style.background = ('black');
    //console.log('makeYellow');
    anyLight.removeEventListener('click', makeYellow);
    anyLight.addEventListener('click', makeRed);
}

function makeRed() {
    trafficGreenLight.style.background = ('black');
    trafficYellowLight.style.background = ('black');
    trafficRedLight.style.background = ('red');
    //console.log('makeRed');
    anyLight.removeEventListener('click', makeRed);
    anyLight.addEventListener('click', makeGreen);
}