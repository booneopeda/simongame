# Simon Game

### Simon Game using Javascript Framework jQuery

**Game URL:**

- https://booneopeda-simongame.netlify.app/

# Simon Game Mechanics

## Game Start

The game begins with a welcome screen which require for the user to press any key to start the game.

## Gameplay Rounds

Each round consists of the following steps:

- **Sequence Generation**: The game generates a random sequence of colors with sounds. This sequence starts with one step and increases in length as the game progresses.
- **Display Sequence**: The game displays the next generated random color to the player using visual cues.

- **Player Input**: After the next sequence is displayed, the player must replicate it by selecting the corresponding colors or pressing the corresponding buttons in the same order.

- **Checking Input**: The game checks if the player's input matches the generated sequence.
  - If the input matches, the player advances to the next level.
  - If the input does not match, the player loses the game and the round ends.

## Progression

With each correct sequence replicated, the game level increases by 1, making the subsequent sequences longer and more challenging.

## Game Over

The game ends when the player makes a mistake in replicating the sequence. The final level achieved is displayed along with an option to restart the game.

## User Interface

- Colorful tiles representing the different colors in the game.
- Clear indication of whose turn it is (game or player).
- Visual and auditory feedback for correct and incorrect inputs.
