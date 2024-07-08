function dClock(){
    let hours: any = document.getElementById("hours")
    let minutes: any = document.getElementById("minutes")
    let seconds: any = document.getElementById("seconds")
    let period: any = document.getElementById("ampm")
    let time = new Date()

    let h:number|string= time.getHours()
    let m:number|string= time.getMinutes()
    let s:number|string= time.getSeconds()
    
    if(h > 12){
        h = h-12
    }else{
        console.log("Not working")
    }

    if (h == 0){
        h = 12
    }
    let ampm: string = h >=12 ? "PM" : "AM"
    h = h < 10 ? "0"+ h : h
    m = m < 10 ? "0"+ m : m
    s = s < 10 ? "0"+ s : s
   
    hours.innerHTML = h
    minutes.innerHTML = m
    seconds.innerHTML = s
    period.innerHTML = ampm;
    


}
setInterval(dClock, 1000)