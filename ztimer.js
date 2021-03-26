

class ZCounter{
    constructor(Object){
        Object.starttime ==undefined?this.starttime="0,0,0":this.starttime=Object.starttime;
        this.endtime=Object.endtime;
        this.selector=Object.selector;
        this.currentTime=0;
        this.endTime;
        this.h=0;
        this.min=0;
        
    }
    
    RealClockTime(currentTime){
       //console.log(currentTime);
       let sec= this.currentTime%60;
       this.currentTime%60==0?this.min=this.currentTime/60:this.min=Math.floor(this.currentTime/60);
       this.min%60==0?this.h=this.min/60:this.h=Math.floor(this.min/60);
       let finaltime=`${this.h}:${this.min}:${sec}`;
       let selectedElement=document.querySelector(this.selector);
       selectedElement.innerText=finaltime;
       //console.log('.........');
       //console.log(finaltime);
       
    }

    StartTimer(){
        //var realEndTime=this.endtime*60;
        this.CalibrateClock();
        let myInterval=setInterval(()=>{
            this.currentTime++;
            if(this.currentTime==this.endTime){
                clearInterval(myInterval);
            }
            //console.log(currentTime);
            this.RealClockTime(this.currentTime);
            
        },1000)
    }

    CalibrateClock(){
        let calibratedStartingTime=this.starttime.split(",");
        let calibratedEndingTime=this.endtime.split(",");
        this.currentTime= parseInt(calibratedStartingTime[0])*60+parseInt(calibratedStartingTime[1])*60+parseInt(calibratedStartingTime[2])
        this.endTime= parseInt(calibratedEndingTime[0])*60+parseInt(calibratedEndingTime[1])*60+parseInt(calibratedEndingTime[2])
        //console.log(this.currentTime);
        //console.log(this.endTime);
    }
}
