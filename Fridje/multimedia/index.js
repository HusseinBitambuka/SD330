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


