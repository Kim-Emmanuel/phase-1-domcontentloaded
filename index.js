// Your code goes here
document.addEventListener('DOMContentLoaded', (e) => {
//    console.log("The DOM has loaded");
    const p = document.querySelector('p')
    p.textContent = "This is really cool!"
    console.log(e);
});
//console.log(
//  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
//);
 


