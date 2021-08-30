const COLORS_ARRAY = ['blue', 'cyan', 'gold', 'gray', 'green', 'magenta', 'orange', 'red', 'white', 'yellow'];

function runGame() {
    let guess = ' ';
    let correct = false;
    let numTries =0;

     let targetIndex =  Math.floor(Math.random() * COLORS_ARRAY.length);
     let target = COLORS_ARRAY[targetIndex];
     console.log(target);

     do {
        guess = prompt('I am thinking of one of these colors:\n\n' + COLORS_ARRAY + 'What color am I thinking of?\n')
        numTries += 1;
        if (guess === null){
            alert('Game hase been aborted')
            return    
        }
         correct=checkguess(guess, target)   
     }
     while(!correct)
      alert('Congratulations! You have guessed the color!\n\nIt took you ' + numTries)
    }

       function checkguess(guess, target) {

        let correct = false;

        if(!COLORS_ARRAY.includes(guess)){
            alert("sorry, I don't recognize your color.\n\nPlease try again")
        } else if (guessNumber > target) {
            alert("Your number is too large ");
        } else if (guessNumber < target) {
            alert("Your number is too small ");
        } else {
            correct = true
        }
         return correct;
       }