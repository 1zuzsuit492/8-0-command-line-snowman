const readline = require("readline-sync");

const dictionary = require("./dictionary");

let word = getRandomWord();
// This line of code gets a random word. The `word` variable will be a string.

let win = "You lived! Victory is yours! 👑 ";
//winning message for the winning player
  
let lose = "Game Over. You're DEAD! 💀";
//losing message if player loses
  
let invalid = 'Invalid Entry!';
// an error message for when an invalid character entered
  
let repeat = 'Sorry, you already guessed that.';
// an error message letter repetition//

let wrong = 'Sorry, Wrong answer.';
//an error message that appears when the player inputs an incorrect answer//

let right = 'Great Job!';
//a message that appears when the player inputs a correct answer//

  function getRandomWord() {
  const index = Math.floor(Math.random() * dictionary.length);
  return dictionary[index];
}
const intro = readline.question(`Do you want to build a snow man?\n\n 'Y', 'N': `)
//This is a intro to the game, Something to jazz it up a bit
if (intro === 'y') {
  console.log(`\nYou fool! Killer snowmen are on the loose. Every wrong letter is a step closer to death. Play at your own risk!\n`);
  run()
  //We added a run command because we noticed it would not continue
} else {
  console.log(`\nGood choice! Killer snowmen are on the loose. Every wrong letter is a step closer to death. Good Luck!\n`);
  //The response is different because we feel passionate about this answer. 
  run ()
  }
  function run(snowman) {
 
    const underScore = []
    //array that accounts for underscores
    
    const guesses = []
    //array that accounts for guesses
    
    let validGuess = /^[a-z]+$/;
    // Ensures selects lowercase letters only
    
    for(let i= 0; i < word.length; i++){
      underScore[i] = '_' 
      // underscore will represent hidden letters in their entirety. 
    }
      let remainingLetters = word.length;

    let lives = 10 ; //score we're counting down from//
    while(remainingLetters > 0 && lives > 0){
    // This is saying while letters and lives remain you can play 
      console.log(underScore.join(' ') +word); 
      //shows letters
      console.log(guesses.join(' '))
      //shows guessed valid letters only
      console.log(`Lives left: ${lives}`);
      //shows lives remaining
      const userInput = readline.question("Guess a letter: ");
      // Game play question Tells them to guess a letter

      if (guesses.includes(userInput)){
        console.log(repeat)
        console.log("THE USER INPUTTED:", userInput);
        // This line of code will print out if user repeats guess
        continue //if user uses letters only 
      }
      
      if (!userInput.match(validGuess)){
        console.log(invalid)
        console.log("THE USER INPUTTED:", userInput);
        // This line of code will print out whatever is inputted in by the user.
        continue //if user uses letters only 
      }
          for(let i = 0; i < word.length; i++){
        //checking if the letter is within the word.
            if(userInput === word[i]){
            underScore[i] = userInput
          // if its in the code it adds it to the array. Will go through entire word and account for double letters. 
            remainingLetters--
        }
      }   guesses.push(userInput);
          //This line of code pushes guesses into array
          if (!word.includes(userInput)){
          lives--
          console.log(wrong)
          //if it is not in the array it is invalid and continue
          continue
      }   else {
          console.log(right)  
          //Shows correct response
          continue
          //returns to the game 
      } 
    }
    if (underScore.join("") === word) { // If the player won
      console.log(win); // Offer a chance to continue
      console.log(`The winning word was: ${word}.`);
  
      const newGame = readline.question(`Try again? \n\n 'Y',  'N':`);
      
      if (newGame === 'y') { // If the player wishes to continue
        word = getRandomWord();
        //it needed a fuction within the scope for get random to restart the game with a new word
        console.log(`\nGood Luck Player!\n`);
        run()
      } else { // If No
        console.log(`\nThank you for playing!\n`);
        process.exit()
        //exits the game
      }
    }
    let reTry = ""
  
    if (lives === 0) { // If the player lost
        console.log(lose)
        console.log(`The word was: ${word}.`)
      
      } reTry = readline.question(`Try again? \n\n 'Y',  'N':`)
      if (reTry === 'y') {
        word = getRandomWord();
          console.log(`\nGood Luck Player!\n`)
      } else {
        console.log(`\nThank you for playing!\n`)
    }
    }
    run();
    