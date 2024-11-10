const i = document.getElementById('i');

const q1 = document.getElementById('q1');
const q1img = document.getElementById('q1img');
const qq1 = document.getElementById('qq1');
const qq1tsk = document.getElementById('qq1tsk');

const q2 = document.getElementById('q2');
const q2img = document.getElementById('q2img');
const qq2 = document.getElementById('qq2');
const qq2tsk = document.getElementById('qq2tsk');

const q3 = document.getElementById('q3');
const q3img = document.getElementById('q3img');
const qq3 = document.getElementById('qq3');
const qq3tsk = document.getElementById('qq3tsk');

const cont = document.getElementById('continue');

const f = document.getElementById('finish');

const q1o1 = document.getElementById('q1o1');
const q1o2 = document.getElementById('q1o2');
const q1o3 = document.getElementById('q1o3');
const q1o4 = document.getElementById('q1o4');

const q2o1 = document.getElementById('q2o1');
const q2o2 = document.getElementById('q2o2');
const q2o3 = document.getElementById('q2o3');
const q2o4 = document.getElementById('q2o4');

const c0 = document.getElementById('0');
const c1 = document.getElementById('1');
const c2 = document.getElementById('2');
const c3 = document.getElementById('3');
const c4 = document.getElementById('4');
const c5 = document.getElementById('5');
const c6 = document.getElementById('6');
const c7 = document.getElementById('7');
const c8 = document.getElementById('8');
const c9 = document.getElementById('9');

r1 = 0;
r2 = 0;

stage = 0;

function update() {
    if (stage == 0) {
        i.style.visibility = "visible";
    }
    else {
        i.style.visibility = "collapse";
    }
    if (stage == 1) {
        q1.style.visibility = "visible";
        q1img.style.visibility = "visible";
    }
    else {
        q1.style.visibility = "collapse";
        q1img.style.visibility = "collapse";
    }
    if (stage == 2) {
        qq1.style.visibility = "visible";
        qq1tsk.style.visibility = "visible";
    }
    else {
        qq1.style.visibility = "collapse";
        qq1tsk.style.visibility = "collapse";
    }
    if (stage == 3) {
        q2.style.visibility = "visible";
        q2img.style.visibility = "visible";
    }
    else {
        q2.style.visibility = "collapse";
        q2img.style.visibility = "collapse";
    }
    if (stage == 4) {
        qq2.style.visibility = "visible";
        qq2tsk.style.visibility = "visible";
    }
    else {
        qq2.style.visibility = "collapse";
        qq2tsk.style.visibility = "collapse";
    }
    if (stage == 5) {
        q3.style.visibility = "visible";
        q3img.style.visibility = "visible";
    }
    else {
        q3.style.visibility = "collapse";
        q3img.style.visibility = "collapse";
    }
    if (stage == 6) {
        qq3.style.visibility = "visible";
        qq3tsk.style.visibility = "visible";
    }
    else {
        qq3.style.visibility = "collapse";
        qq3tsk.style.visibility = "collapse";
    }
    if (stage == 7) {
        if (q1o1.checked == true) r1 = 1;
        if (q1o2.checked == true) r1 = 2;
        if (q1o3.checked == true) r1 = 3;
        if (q1o4.checked == true) r1 = 4;
        if (q2o1.checked == true) r2 = 1;
        if (q2o2.checked == true) r2 = 2;
        if (q2o3.checked == true) r2 = 3;
        if (q2o4.checked == true) r2 = 4;
        document.cookie = `B1=${r1}; max-age=31536000;`;
        document.cookie = `B2=${[c0.checked, c1.checked, c3.checked, c4.checked, c5.checked, c6.checked, c7.checked, c8.checked, c9.checked]}; max-age=31536000;`;
        document.cookie = `B3=${r2}; max-age=31536000;`;
        f.style.visibility = "visible";
        cont.style.visibility = "collapse";
    }
    else {
        f.style.visibility = "collapse";
        cont.style.visibility = "visible";
    }
}

function continuebutton() {
    stage += 1;
    timert = 16;
    if (stage == 1) {
        q1img.play();
    }
    else {
        q1img.pause();
        q1img.currentTime = 0;
    }
    if (stage == 3) {
        q2img.play();
    }
    else {
        q2img.pause();
        q2img.currentTime = 0;
    }
    if (stage == 5) {
        q3img.play();
    }
    else {
        q3img.pause();
        q3img.currentTime = 0;
    }
}

setInterval(function() {
    update();
}, 1);
