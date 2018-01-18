const Tiles = require('./tile');
const Score = require('./score');
const Board = require('./board');
const Leaderboard = require('./leaderboard');
const CurrentSelection = require('./current_selection');
const Timer = require('./timer');
const SubmittedWords = require('./submitted_words');


class Game {
  constructor() {
    $.ajax({
      method: 'GET',
      url: '../assets/enabledict.txt'
    }).then( (dict) => {
      this.createDictionary(dict);

    });

  }

  createDictionary(dict) {
    let wordArr = dict.split("/n");
    let dictObj = {};
    wordArr.forEach( entry => {
      dictObj[entry] = true;
    });
    return dictObj;
  }

  

}

module.exports = Game;
