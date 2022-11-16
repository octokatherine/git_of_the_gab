var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);

const dictionary = {
  "burden demand": "bird in the hand",
  "draw hint thub uck it": "drop in the bucket",
  "faux matt them owth": "foam at the mouth",
  "ace lip puff that hung": "a slip of the tongue",
  "neck ole san ditch": "knuckle sandwich",

}

// get random key from dictionary
const keys = Object.keys(dictionary)
let hint 
let answer

const hintEl = document.getElementById("hint")

const newGame = () => {
  hint = keys[keys.length * Math.random() << 0]
  answer = dictionary[hint] 

  hintEl.innerText = hint
}

const isCorrectAnswer = (guess) => {
  return guess === answer
}

const guessInput = document.getElementById("guess-input")

const submitButton = document.getElementById("submit-btn")
submitButton.addEventListener("click", (e) => {
  const userGuess = guessInput.value
  const correct = isCorrectAnswer(userGuess)
  if (correct) {
    confetti.render();
  } else {

  }
})


newGame()
