const inputBox = document.getElementById("input-box");
const list = document.getElementById("lists");
const button = document.getElementById("button");

button.addEventListener('click', ()=>{
    if(inputBox.value === ''){
        alert("Empty Task can not be Added.");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
        let spanTag = document.createElement("span");
        spanTag.innerHTML = "&Cross;";
        li.appendChild(spanTag);
    }
    inputBox.value = "";
    task_saver();
});

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        task_saver();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        task_saver();
    }
}, false);

function task_saver(){
    localStorage.setItem("task", list.innerHTML);
}

function task_shower(){
    list.innerHTML = localStorage.getItem("task");
}

task_shower();