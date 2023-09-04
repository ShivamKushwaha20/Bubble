let score = 0;
let hitScore = 0;
function bubbleRen() {
    let clutter = '';
    for (let i = 0; i < 160; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector('#panel_botm').innerHTML = clutter;

}
function timer() {
    var timer = 60;
    let timerVal = document.querySelector('#timerVal')
    var timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            timerVal.innerHTML = timer;
        }
        else {
            clearInterval(timerInt);
            document.querySelector('#panel_botm').innerHTML = "";
        }
    }, 1000)
}
function hitTarget() {
    hitScore = Math.floor(Math.random() * 10);
    document.querySelector('#hitScore').innerHTML = hitScore;
}
function IncreaseScore() {
    score += 10;
    document.querySelector('#scoreVal').innerHTML = score;
}
let fieldClick = document.querySelector("#panel_botm")
fieldClick.addEventListener("click", (bubble) => {
    let value = Number(bubble.target.textContent);
    if (value === hitScore) {
        IncreaseScore();
        hitTarget();
        bubbleRen();
    }
    else {
        alert("Incorrect!!");
    }
})
bubbleRen();
timer();
IncreaseScore();
hitTarget();