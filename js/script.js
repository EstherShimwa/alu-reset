let progress = 0;

function nextScreen(id, step){

let screens = document.querySelectorAll(".screen");
screens.forEach(s=>s.classList.remove("active"));

document.getElementById(id).classList.add("active");

progress = step * 16;
document.getElementById("progressBar").style.width = progress + "%";

if(id==="breathing"){
startBreathingTimer();
}

}

function validateOffload(){

let text=document.getElementById("offloadInput").value.trim();

if(text===""){
document.getElementById("offloadWarning").innerText="Please write something before continuing.";
return;
}

nextScreen("breathing",2);

}

function validateReflection(){

let text=document.getElementById("reflectionInput").value.trim();

if(text===""){
document.getElementById("reflectionWarning").innerText="Please write something before continuing.";
return;
}

nextScreen("emotion",4);

}

function startBreathingTimer(){

let time=10;

let timer=document.getElementById("timer");

timer.innerText=time;

let countdown=setInterval(()=>{

time--;

timer.innerText=time;

if(time<=0){
clearInterval(countdown);
}

},1000);

}

let slider=document.getElementById("emotionSlider");

if(slider){
slider.oninput=function(){
document.getElementById("emotionValue").innerText=this.value+" / 10";
}
}

function restartReset(){

location.reload();

}