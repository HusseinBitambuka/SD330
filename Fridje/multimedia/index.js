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
