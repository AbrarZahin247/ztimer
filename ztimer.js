class Ztimer{
    constructor(Object){
        Object.starttime ==undefined?this.starttime="0,0,0":this.starttime=Object.starttime;
        this.endtime=Object.endtime;
        this.selector=Object.selector;
        this.currentTime=0;
        this.endTime;
        this.h=0;
        this.min=0;
        
    }
    
    RealClockTime(){
        let sec= this.currentTime%60;
        this.min=Math.floor(this.currentTime/60);
        this.h=Math.floor(this.currentTime/3600);
        let finaltime=`${this.h}:${this.min}:${sec}`;
        let selectedElement=document.querySelector(this.selector);
        selectedElement.innerText=finaltime;
       
    }

    StartTimer(){
        
        this.CalibrateClock();
        let myInterval=setInterval(()=>{
            this.currentTime++;
            if(this.currentTime==this.endTime){
                clearInterval(myInterval);
            }
           
            this.RealClockTime();
            
        },1000)
    }

    CalibrateClock(){
        let calibratedStartingTime=this.starttime.split(",");
        let calibratedEndingTime=this.endtime.split(",");
        this.currentTime= parseInt(calibratedStartingTime[0])*60+parseInt(calibratedStartingTime[1])*60+parseInt(calibratedStartingTime[2])
        this.endTime= parseInt(calibratedEndingTime[0])*60+parseInt(calibratedEndingTime[1])*60+parseInt(calibratedEndingTime[2])
        console.log(this.currentTime);
        console.log(this.endTime);
    }
}