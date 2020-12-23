const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

const newYears = '1 jan 2021';

function countdown(){
    const newYearsDate = new Date(newYears);
    const currDate = new Date();

    const tot_seconds  = (newYearsDate - currDate)/1000;
    const days = Math.floor(tot_seconds/3600/24);
    const hours = Math.floor(tot_seconds/3600)%24;
    const mins = Math.floor(tot_seconds/60)%60;
    const secs  = Math.floor(tot_seconds) %60;

    console.log(days,hours,mins,secs);
    daysEl.innerHTML = format(days);
    hoursEl.innerHTML = format(hours);
    minsEl.innerHTML = format(mins);
    secsEl.innerHTML = format(secs);

}

function format(time){
    return time < 10 ? (`0${time}`) : time ;
}


countdown();

setInterval(countdown,1000);