const password_box = document.getElementById('password_box');
const copy_btn = document.getElementById('copy_btn');
const pass_generator_btn = document.getElementById('gntr_btn');

const pass_length = 12;

const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_case = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const special_char = "~!@#$%^&*_-=+(){}[]|.,?:;";
const all_chars = upper_case + lower_case + number + special_char;



pass_generator_btn.addEventListener('click', function(){

    let password = "";
    
    password += upper_case[Math.floor(Math.random() * upper_case.length)];
    password += lower_case[Math.floor(Math.random() * lower_case.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += special_char[Math.floor(Math.random() * special_char.length)];
    
    while( password.length < pass_length){
            password += all_chars[Math.floor(Math.random() * all_chars.length)];
        }
    
    password_box.value = password;
});

copy_btn.addEventListener('click', function(){
    password_box.select();
    document.execCommand("copy");
    if (password_box.value != ""){
        alert("Password Copid to Clip-board.");
    }else{
        alert("First Generate a Password.");
    }
});