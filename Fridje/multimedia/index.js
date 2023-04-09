// add the clock event
let time=document.getElementById("time");
time.addEventListener("onload",doStartClock());
let format=document.getElementById("format");
format.addEventListener("click",changeformat())
function changeformat(){
        format.addEventListener("click",()=>{
            if(format.textContent=="12h"){
                format.innerHTML="24h";}
            else{
                    format.innerHTML="12h";
                }
        })
}

function doStartClock(){
    setInterval(doClockTick,1000)
}
function doClockTick(){
    let currentDate=new Date();
    let hours=currentDate.getHours();
    let hours12format=hours%12;
    let minutes=currentDate.getMinutes();
    let seconds=currentDate.getSeconds();
    let watch=document.getElementById("watch");
    if(format.textContent=="24h"){
        let time=hours+" : "+minutes+" : "+seconds;
        watch.textContent=time;
    }
    else{
        let time=hours12format+" : "+minutes+" : "+seconds;
        watch.textContent=time;
    }
    
}
// temperature

let temperature=document.getElementById("temperature-screen");
temperature.addEventListener("onload",generate());

let up=document.getElementById("up");
up.addEventListener("click", increase)

let down=document.getElementById("down");
down.addEventListener("click",decrease)

let change=document.getElementById("change");
change.addEventListener("click",changetemp)

function increase(){
    let temp=parseInt(temperature.textContent);
    if(change.textContent=="C"){
        if(temp<100){
            temp=Math.floor(temp+1);
            temperature.innerHTML=" "+ temp+" C";
        }
    }
    else{
        if(temp<212){
            temp=Math.floor(temp+1);
            temperature.innerHTML=" "+ temp+" F";
        }
    }
    
}

function decrease(){
    let temp=parseInt(temperature.textContent);
    if(change.textContent=="C"){
        if(temp>0){
            temp=Math.floor(temp-1);
            temperature.innerHTML=" "+ temp+" C";
        }
    }
    else{
        if(temp>32){
            temp=Math.floor(temp-1);
            temperature.innerHTML=" "+ temp+" F";
        }
    }
    

}

function generate(){
    let tempe=30
    temperature.innerHTML=""+tempe +" C";
    }
function changetemp(){
    if(change.textContent=="C"){
        let temp=parseInt(temperature.textContent);
        change.innerHTML="F";
        temp=Math.floor((temp*9)/5+32);
        temperature.innerHTML=" "+temp+" F";
    }
else{
    let temp=parseInt(temperature.textContent);
        change.innerHTML="C";
        temp=Math.floor(((temp-32)*5)/9);
        temperature.innerHTML=" "+temp+" C";
}
}

//screen

// web
let internet=document.getElementById("web");
internet.addEventListener("click",updateweb);

function updateweb(){
    let screen=document.getElementById("screen");
    let child=screen.lastChild;
    while (child){
        screen.removeChild(child);
        child=screen.lastChild;
     }
    let url="./multimedia/gogle.jpeg"
    const img= new Image(350,100); // width, height
    img.src=url;
    screen.appendChild(img);
}
// video
let power=document.getElementById("power");
power.addEventListener("click",updateTV);

function updateTV(){
    let screen=document.getElementById("screen");
    let child=screen.lastChild;
    while (child){
        screen.removeChild(child);
        child=screen.lastChild;
     }
    let url="./multimedia/gym_class_heroes_stereo_hearts_ft._adam_levine_official_video_h264_37062.mp4"

    const video= document.createElement("video");
    video.src=url;
    video.controls=true;
    video.muted=false;
    video.height=100;
    video.width=350;
    screen.appendChild(video);
}

// music

let music=document.getElementById("music");
music.addEventListener("click", updateImage)
music.addEventListener("click", updateAudio)
music.addEventListener("click", stopAudio)

function updateImage(){
    let screen=document.getElementById("screen");
    let child=screen.lastChild;
    while (child){
        screen.removeChild(child);
        child=screen.lastChild;
     }
    let url="./multimedia/music.jpeg"
    const img= new Image(350,100); // width, height
    img.src=url;
    screen.appendChild(img);
}

function updateAudio(){    
    const beat= new Audio("./multimedia/Alikiba-Ndombolo-AFROHITS.NET_.mp3");
    beat.play();
}




