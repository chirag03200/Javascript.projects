const clock = document.getElementById('clock') // ye bhi use kr skte h 
// const clock = document.querySelector('#clock') // ye bhi 

setInterval(function() {
let date = new Date();
// console.log(date.toLocaleTimeString);
clock.innerHTML = date.toLocaleTimeString();
}, 1000);
