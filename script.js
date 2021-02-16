
var btn = document.getElementById("startButton");
var output = document.getElementById("outputtext");
//words
var words =["door", "four", "cats", "fork", "pies"];
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var timeLe = document.querySelector(".time");
var secLe = 60;

//this is the variable array with blank spaces
var blankSpace = ["_", "_", "_", "_"]

//this while loop needs a condition to be met -- while blankspace 
while () {


}

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



