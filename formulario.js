const colorblind = document.getElementById('colorblindness');
const fname = document.getElementById('name');
const age = document.getElementById('age');
const gender = document.getElementById('gender');
const sex = document.getElementById('sex');
const ex = document.getElementById('ex');
const email = document.getElementById('email');

setInterval(function (){
    if (colorblind.value == "No") {
        document.getElementById('no').style.visibility = "visible";
        document.getElementById('yes').style.visibility = "collapse";
    }
    else {
        document.getElementById('yes').style.visibility = "visible";
        document.getElementById('no').style.visibility = "collapse";
    }
    document.cookie = `F1=${fname.value}; max-age=31536000;`;
    document.cookie = `F2=${age.value}; max-age=31536000;`;
    document.cookie = `F3=${gender.value}; max-age=31536000;`;
    document.cookie = `F4=${sex.value}; max-age=31536000;`;
    document.cookie = `F5=${ex.value}; max-age=31536000;`;
    document.cookie = `F6=${email.value}; max-age=31536000;`;
    document.cookie = `F7=${colorblind.value}; max-age=31536000;`;
});