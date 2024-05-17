let gamePattern = [];
let level = 0;
let restartGame = true;
let gamePatternIndex = 0;
let gameMode = false;
const buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {
  // Generate a random number from 0-3
  let randomNumber = function randomNumber() {
    return Math.floor(Math.random() * 4);
  };
  // Pick a random color at buttonColours array
  let randomChosenColour = buttonColours[randomNumber()];
  //  Add the random colour to the game pattern array

  // Animate the random color
  setTimeout(() => {
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    // Play sound depenting on random Colour
    playSound(randomChosenColour);
    gamePattern.push(randomChosenColour);
  }, 500);
  // Level Up
  level += 1;
  //   Show the current level in the game
  $("h1").text(`SIMON GAME - Level ${level}`);
  gamePatternIndex = 0;

  return gamePattern;
}

// Function for new game
function newGame() {
  restartGame = true;
  level = 0;
  gamePattern = [];
  gameMode = false;
  userClickedPattern = [];
  gamePatternIndex = 0;
  //   Show that the game is over and instruction to restart the game
  $("h1").text(`Game Over! 
  Press any key to restart game.`);
}

// Function for animating user pressed color
function animatePress(currentColor) {
  $(`#${currentColor}`).addClass("pressed");
  setInterval(() => {
    $(`#${currentColor}`).removeClass("pressed");
  }, 400);
}

// Function for playing sound based on color
function playSound(name) {
  const audio = new Audio(`./sounds/${name}.mp3`);
  audio.play();
}

// Function for cheking the correct sequence of color picke by the user vs the game pattern
function checkAnswer(gamePattern, userColor) {
  // if game pattern color is the same as the user picked color
  if (gamePattern[gamePatternIndex] === userColor) {
    // filter the last game color pattern vs user sequence
    if (gamePattern.length === gamePatternIndex + 1) {
      nextSequence();
      console.log(gamePattern);
    } else {
      // if the user sequence is not yet finished
      return (gamePatternIndex += 1);
    }
  } else {
    // if color sequence is not the same as user picked sequence
    playSound(`wrong`);
    gameMode = false;
    newGame();
  }
}

// handle the keypress function
$(document.body).keypress(() => {
  // Check if game is over and needs to be restarted
  if (restartGame === true) {
    gameMode = true;
    restartGame = false;
    gamePattern = [];
    nextSequence();
    gamePatternIndex = 0;
    // Revert level to level 1
    $("h1").text(` SIMON GAME - Level ${level}`);
  }
});

// Handle click for blue square
$("#blue").click(function () {
  if (gameMode === true) {
    let id = $(this).attr("id");
    animatePress(id);
    playSound(id);
    checkAnswer(gamePattern, id);
  } else {
    return null;
  }
});

// Handle click for red square
$("#red").click(function () {
  if (gameMode === true) {
    let id = $(this).attr("id");
    animatePress(id);
    playSound(id);
    checkAnswer(gamePattern, id);
  } else {
    return null;
  }
});
// Handle click for yellow square
$("#yellow").click(function () {
  if (gameMode === true) {
    let id = $(this).attr("id");
    animatePress(id);
    playSound(id);
    checkAnswer(gamePattern, id);
  } else {
    return null;
  }
});
// Handle click for green square
$("#green").click(function () {
  if (gameMode === true) {
    let id = $(this).attr("id");
    animatePress(id);
    playSound(id);
    checkAnswer(gamePattern, id);
  } else {
    return null;
  }
});
