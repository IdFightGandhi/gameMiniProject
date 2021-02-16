# gameMiniProject
mini project Feb 16, 2021

I need an array with the words to guess
I need a function to choose a random word from my words array
I need a function to get the number of wins
I need a function to get the number of losses
I need a function to set the number of wins
I need a function to set the number of losses

I need an event listener attached to the start button to start the game

I need a countdown timer that counts down from 25

I need a function to render the correct number of blanks for the letters in the random word
    
    var array for the answers 
    var blankSpace = array with four blanks
        
        when the person guesses the correct letter, it is then added to the array with the blanks in the correct index spot

    while the word hasnt been guessed, we are going to show the current state of the word with all blanks. The player will guess (1 letter guess) and the player will update the blank space upon typing the correct letter.

    we display the currrent state of the word being guessed (beginning with all blanks);
        this is where we display the variable blankSpace
        
     ask the player for a guess (and make sure it’s a valid, single-letter guess); and update the answer array with the chosen letter, if that letter appears inthe wordd

I need a keydown event listener so when I push a key it checks to see if that key is in the random word I am guessing


I need a function to check if I won(picked all the letters correctly) or lost(missed some of the letters)