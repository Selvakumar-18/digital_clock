const hourEl = document.getElementById("hour")
const minuteEl = document.getElementById("minutes")
const secondsEl = document.getElementById("seconds")
const ampmEl = document.getElementById("ampm")

const dateEl = document.getElementById("date")
const monthEl = document.getElementById("month")
const YearEl = document.getElementById("year")


function updateClock(){
    let h = new Date().getHours()
    
    let m = new Date().getMinutes()

    let s = new Date().getSeconds()

    let ampm = "AM"

    let d = new Date().getDate()

    let mo = new Date().getMonth()

    let y = new Date().getFullYear()


    
   
    if(h>=12){
        h=h-12
        ampm="PM"
    }

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondsEl.innerText = s;
    ampmEl.innerText = ampm;

    dateEl.innerText =d
    monthEl.innerText = mo
    YearEl.innerText =y 

    setTimeout(()=>{
        updateClock()
        console.log("Inside the SEtTimeout.-.")
    },1000)
}

updateClock()