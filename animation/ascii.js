window.onload = function () {
    "use strict";
    initiate();
}

let splitter = "=====\n";
let selectedAnimation = "";
let selectedSize = "";
let isTurboOn = false;
let defaultInterval = 250;
let animationFrames;
let animator;
let hasStarted = false;
let frameIdx;

let sizeMap = {
    "Tiny": "5pt",
    "Small": "10pt",
    "Medium": "15pt",
    "Large": "20pt",
    "Extra Large": "25pt",
    "XXL": "30pt"
}

function elementById(id) {
    return document.getElementById(id);
}

function initiate() {
    setAnimation();
    setSize();
    elementById("animation").onchange = setAnimation;
    elementById("fontsize").onchange = setSize;
    elementById("turbo").onchange = setTurbo;
    elementById("start").onclick = start;
    elementById("stop").onclick = stop;
}

function setAnimation() {
    selectedAnimation = ANIMATIONS[elementById("animation").value];
    if (selectedAnimation !== "") {
        frameIdx = 0;
        animationFrames = selectedAnimation.split(splitter);
        elementById('text-area').value = animationFrames[0];
    }
}

function setSize() {
    selectedSize = sizeMap[elementById("fontsize").value];
    if(selectedAnimation !== ""){
        elementById("text-area").style.fontSize = selectedSize;
    }
}

function setTurbo() {
    if(elementById("turbo").checked){
        defaultInterval = 50;
    } else {
        defaultInterval = 250;
    }
}

function start() {
    hasStarted = true;
    toggleDisableEverythingExceptStop();
    animator = setInterval(() => {
        clear();
        frameIdx = (frameIdx + 1) % animationFrames.length;
        elementById('text-area').value = animationFrames[frameIdx];
    }, defaultInterval);
}

function stop(){
    hasStarted = false;
    toggleDisableEverythingExceptStop();
    clearInterval(animator);
}

function clear() {
    elementById('text-area').value = "";
}

function toggleDisableEverythingExceptStop(){
    elementById('text-area').disabled = hasStarted;
    elementById('start').disabled = hasStarted;
    elementById('animation').disabled = hasStarted;
    elementById('turbo').disabled = hasStarted;
    elementById('fontsize').disabled = hasStarted;
    elementById('stop').disabled = !hasStarted;
}