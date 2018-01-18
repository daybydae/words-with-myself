# Words with Myself

### Background

A word game that allows users to make scores during a 60 second session by forming words given a 4x4 grid of random letters with point values according to Scrabble conventions ([Scrabble letter distribution](https://en.wikipedia.org/wiki/Scrabble_letter_distributions)).
<br></br>
I will be using the Official Scrabble Players Dictionary to check the veracity of submitted words.
The selected letters will:
  * change to green for every tile selected
  * change to red if they don't constitute a valid word
  * flashes to pink if they do constitute a valid word
  * change to blue if they are already a submitted word

### Functionality & MVP  

- [ ] Board logic and rendering
- [ ] Board pieces
- [ ] Dictionary lookup and initializing when the page loads
- [ ] Start
- [ ] Play again -> reset board, scoreboard, timer
- [ ] Mouse event handling
- [ ] Timer
- [ ] Scoreboard
- [ ] High Scores
- [ ] Modal to input name into High Scores List
- [ ] An About modal describing the rules of the game
- [ ] A production README

### Wireframes

This app will consist of a single screen with a game board, game controls, and nav links to the Github, my LinkedIn, my AngelList, and my personal website.
Game controls will only include a Start button and an About button.  
On top of the grid, there will be a timer, a scoreboard, and the Start and About buttons.
On the left, there will be high scores.
On the right, there will be the words already made during the current session.

![wireframes](https://github.com/daybydae/words-with-myself/blob/master/images/wireframe.jpg)

### Architecture and Technologies

This project will be implemented with the following technologies:

- `JavaScript` for game logic,
- `jQuery` to handle mouse events, and initial lookup of dictionary when page loads
- `CSS` and `HTML` to handle rendering and styling,

In addition to the entry file, this project will include these scripts:

`board.js`: this script will handle the logic for creating the board  

`game.js`: this script will handle the game logic behind the scenes.

`score.js`: this script will handle scoreboard logic

`timer.js`: this script will handle the timer logic

`tile.js`: this script will include the letters object and the logic involved with tile pieces

`leaderboard.js`: this script will include the logic of the high score list

`submitted_words.js`: this script will include the logic of the list of submitted words

### Implementation Timeline

**Day 1**:

Goals for the day:
- Setup all necessary Node modules, including getting webpack up
- Install a word-list library
- Write a basic entry file
- Write the bare bones of all scripts outlined above
- Write the board.js file

**Day 2**:

Goals for the day:
- Implement word validation
- Implement scoring system
- Implement game timer
- Implement user controls

**Day 3**:

Goals for the day:

- Create button for Start/Play Again, About Modal, High Score Input Modal
- Style


### Bonus features

- [ ] Add 2 blank tiles and logic behind using them
- [ ] Add bonuses the user can use after point milestones
