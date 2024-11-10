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

const timer = document.getElementById('timer');

const q1o1 = document.getElementById('q1o1');
const q1o2 = document.getElementById('q1o2');
const q1o3 = document.getElementById('q1o3');
const q1o4 = document.getElementById('q1o4');

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

stage = 0;
timert = 11;
r1 = 0;

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

function checkstg () {
    if (getCookie("STGA")) {
        stage = parseInt(getCookie("STGA"));
    }
    else {
        document.cookie = `STGA=0; max-age=31536000; SameSite=Lax;`;
    }
}

checkstg();

function update() {
    document.cookie = `STGA=${stage}; max-age=31536000; SameSite=Lax;`;
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
        document.cookie = `A1=${r1}; max-age=31536000; SameSite=Lax;`;
        document.cookie = `A2=${[c0.checked, c1.checked, c3.checked, c4.checked, c5.checked, c6.checked, c7.checked, c8.checked, c9.checked]}; max-age=31536000; SameSite=Lax;`;
        document.cookie = `A3=${qq3tsk.value}; max-age=31536000; SameSite=Lax;`;
        f.style.visibility = "visible";
    }
    else {
        f.style.visibility = "collapse";
    }
    if (stage % 2 == 0) {
        cont.style.visibility = "visible";
    }
    else {
        cont.style.visibility = "collapse";
    }
    if (stage % 2 == 0 || timert == 11) {
        timer.style.visibility = "collapse";
    }
    else {
        timer.style.visibility = "visible";
    }
}

function continuebutton() {
    stage += 1;
    timert = 11;
}

setInterval(function() {
    update();
}, 1);

setInterval(function() {
    if (stage % 2 != 0 && stage != 7) {
        timert -= 1;
    }
    if (timert <= -1) {
        stage += 1;
        timert = 11;
    }
    else {
        timer.textContent=`${timert}`;
    }
}, 1000);
