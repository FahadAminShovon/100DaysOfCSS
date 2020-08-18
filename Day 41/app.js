let hour = document.querySelector('#hour');
let min = document.querySelector('#min');
let sec = document.querySelector('#sec');
const day = document.querySelector('#day');
const releaseDate = new Date("09/04/2020");
console.log(releaseDate);
let i = 1;
(function timer(){
    const today = new Date();
    const seconds = parseInt((releaseDate - today)/1000);
    day.innerHTML = parseInt(seconds / 60 / 60/24);
    hour.innerHTML = parseInt((seconds/60/60)%24);
    min.innerHTML = parseInt((seconds/60)%60);
    sec.innerHTML = seconds%60;
    if(seconds > 0)setTimeout(timer, 1000);
    
}())



