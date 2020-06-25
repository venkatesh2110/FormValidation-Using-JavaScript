function input() {
    let fname = document.getElementById("fname");
    let lname = document.getElementById("lname");
    let dob = document.getElementById("dob");
    let ext = document.getElementById("ext");
    let phone = document.getElementById("phone");
    let email = document.getElementById("email");
    let lane1 = document.getElementById("lane1");
    let lane2 = document.getElementById("lane2");
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let zip = document.getElementById("zip");
    let other = document.getElementById("others");
    let skills = document.getElementById("skills");
    let training = document.getElementById("training");
}

function fnameValidation() {
    if(this.fname.value.length<4) {
        document.getElementById('fnameMessage').innerHTML = 'Maximum Char should be 4';
    }
    let letters = /^[A-Za-z]+$/;
    if(this.fname.value.match(letters) ) {
        document.getElementById('fnameTypemessage').innerHTML = '';
    }
    else {
        document.getElementById('fnameTypemessage').innerHTML = 'Only alphabets';
    }
}

function lnameValidation() {
    let letters = /^[A-Za-z]+$/;
    if(this.lname.value.match(letters) ) {
        document.getElementById('lnameTypemessage').innerHTML = '';
    }
    else {
        document.getElementById('lnameTypemessage').innerHTML = 'Only alphabets';
    }
}

function extensionValidation() {
    
    if(this.ext.value.length<4){
        document.getElementById('extMessage').innerHTML = '';
    }
    else {
        document.getElementById('extMessage').innerHTML = 'Maxnumber is 4';
    }
}

function phoneNumberValidation() {
    if(this.phone.value.length>8) {
        document.getElementById('phoneMessage').innerHTML = '';
    }
    else {
        document.getElementById('phoneMessage').innerHTML = 'Enter Valid Number';
    }
}

function emailValidation() {
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(this.email.value.match(emailFormat)) {
        document.getElementById('emailMessage').innerHTML = '';
    }
    else {
        document.getElementById('emailMessage').innerHTML = 'Enter Valid Format';
    }
}