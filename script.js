
var btn = document.getElementById("startButton");
var output = document.getElementById("outputtext");
var words =["door", "four", "cats", "fork", "pies"];
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var timeLe = document.querySelector(".time");
var secLe = 60;

//this is the timer

//this calls my function to start

btn.addEventListener("click", function setTime(event) {
    var timerInterval = setInterval(function() {
        secLe--;
        timeLe.textContent = secLe + " is this working";
        if(secLe === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
})

setTime();



