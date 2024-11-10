const colorblind = document.getElementById('colorblindness');
const fname = document.getElementById('name');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const sex = document.getElementById('sex');
const ex = document.getElementById('ex');
const email = document.getElementById('email');

filled = 0;

function checkform () {
    if (fname.value != "" && age.value != "" && gender.value != "" && sex.value != "" && 
        email.value != "" && colorblind.value != "") {
        filled = 1;
    }
    else {
        filled = 0;
    }
}

setInterval(function (){
    checkform();
    if (colorblind.value == "No") {
        document.getElementById('no').style.visibility = "visible";
        document.getElementById('yes').style.visibility = "collapse";
    }
    else {
        document.getElementById('yes').style.visibility = "visible";
        document.getElementById('no').style.visibility = "collapse";
    }
    if (filled == 0) {
        document.getElementById('no').style.visibility = "collapse";
        document.getElementById('yes').style.visibility = "collapse";
    }
    document.cookie = `F1=${fname.value}; max-age=31536000; SameSite=Lax;`;
    document.cookie = `F2=${age.value}; max-age=31536000; SameSite=Lax;`;
    document.cookie = `F3=${gender.value}; max-age=31536000; SameSite=Lax;`;
    document.cookie = `F4=${sex.value}; max-age=31536000; SameSite=Lax;`;
    document.cookie = `F5=${ex.value}; max-age=31536000; SameSite=Lax;`;
    document.cookie = `F6=${email.value}; max-age=31536000; SameSite=Lax;`;
    document.cookie = `F7=${colorblind.value}; max-age=31536000; SameSite=Lax;`;
});
