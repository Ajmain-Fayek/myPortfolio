const hire_me = document.getElementById('hire_me');

hire_me.addEventListener('click', function(){
    location.href = "mailto:ajmainfayek733@gmail.com";
});

document.getElementById('day_1').addEventListener('click', function(){
    window.open("projects/day_1/weather_app.html");
});

document.getElementById('day_2').addEventListener('click', function(){
    window.open("projects/day_2/to_do_app.html");
});

document.getElementById('day_3').addEventListener('click', function(){
    window.open("projects/day_3/quiz-app.html");
});

document.getElementById('day_4').addEventListener('click', function(){
    window.open("projects/day_4/random_password_generator.html");
});

document.getElementById('calculator').addEventListener('click', function(){
    window.open("projects/calculator/index.html");
});