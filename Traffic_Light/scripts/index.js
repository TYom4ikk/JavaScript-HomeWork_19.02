const default_background_color = "whitesmoke";
const Traffic_Light_btn = document.getElementById("Traffic-Light-btn");
const red_light = document.getElementById("red");
const yellow_light = document.getElementById("yellow");
const green_light = document.getElementById("green");

let IsOn = false;
Traffic_Light_btn.addEventListener("click", ()=>{
    if(IsOn){
        Traffic_Light_btn.textContent = "OFF";
        IsOn = false;
        red_light.style.backgroundColor = default_background_color;
        yellow_light.style.backgroundColor = default_background_color;
        green_light.style.backgroundColor = default_background_color;
    }
    else{
        Traffic_Light_btn.textContent = "ON";
        IsOn = true;
    }
});

red_light.addEventListener("click",()=>{
    if(IsOn){
        red_light.style.backgroundColor = "red";
        yellow_light.style.backgroundColor = default_background_color;
        green_light.style.backgroundColor = default_background_color;
    }
});

yellow_light.addEventListener("click",()=>{
    if(IsOn){
        red_light.style.backgroundColor = default_background_color;
        yellow_light.style.backgroundColor = "yellow";
        green_light.style.backgroundColor = default_background_color;
    }
});

green_light.addEventListener("click",()=>{
    if(IsOn){
        red_light.style.backgroundColor = default_background_color;
        yellow_light.style.backgroundColor = default_background_color;
        green_light.style.backgroundColor = "green";
    }
});