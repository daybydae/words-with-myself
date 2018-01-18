const Tiles = require('./tile');
const Score = require('./score');
const Board = require('./board');
const Leaderboard = require('./leaderboard');
const Timer = require('./timer');
const SubmittedWords = require('./submitted_words');


class Game {
  constructor() {
    $.ajax({
      method: 'GET',
      url: '../images/enabledict.txt'
    }).then( (dict) => {
      this.createDictionary(dict);




    });

  }


  createDictionary(dict) {
    let wordsArr = dict.split("/n");
    let dictObj = {};
    wordsArr.forEach( entry => {
      dictObj[entry] = true;
    });
  }

}

module.exports = Game;
