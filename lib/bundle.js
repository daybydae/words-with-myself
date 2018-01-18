/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const tileData = {
  "A": {
    freq: 9,
    pts: 1
  },
  "B": {
    freq: 2,
    pts: 3
  },
  "C": {
    freq: 2,
    pts: 3
  },
  "D": {
    freq: 4,
    pts: 2
  },
  "E": {
    freq: 12,
    pts: 1
  },
  "F": {
    freq: 2,
    pts: 4
  },
  "G": {
    freq: 3,
    pts: 2
  },
  "H": {
    freq: 2,
    pts: 4
  },
  "I": {
    freq: 9,
    pts: 1
  },
  "J": {
    freq: 1,
    pts: 8
  },
  "K": {
    freq: 1,
    pts: 5
  },
  "L": {
    freq: 4,
    pts: 1
  },
  "M": {
    freq: 2,
    pts: 3
  },
  "N": {
    freq: 6,
    pts: 1
  },
  "O": {
    freq: 8,
    pts: 1
  },
  "P": {
    freq: 2,
    pts: 3
  },
  "Q": {
    freq: 1,
    pts: 10
  },
  "R": {
    freq: 6,
    pts: 1
  },
  "S": {
    freq: 4,
    pts: 1
  },
  "T": {
    freq: 6,
    pts: 1
  },
  "U": {
    freq: 4,
    pts: 1
  },
  "V": {
    freq: 2,
    pts: 4
  },
  "W": {
    freq: 2,
    pts: 4
  },
  "X": {
    freq: 1,
    pts: 8
  },
  "Y": {
    freq: 2,
    pts: 4
  },
  "Z": {
    freq: 1,
    pts: 10
  }
};

class Tiles {
  constructor() {

    this.tiles = [];
    this.populateAllTiles();
  }

  value(letter) {
    //letter is a string
    return tileData[letter].pts;
  }

  randomInt() {
    return Math.floor(Math.random() * (this.tiles.length));
  }

  randomTile() {
    let tileObj = {};
    let randomInd = randomInt();
    let letter = this.tiles[randomInd];
    tileObj["letter"] = letter;
    tileObj["value"] = tileData[letter].pts;
    this.tiles.splice(randomInd,1);
    return tileObj;
  }

  populateAllTiles() {
    Object.keys(tileData).forEach( letterString => {
      for (let i = 0; i < tileData[letterString].freq; i++) {
        this.tiles.push(letterString);
      }
    });
  }
}

module.exports = Tiles;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const Tiles = __webpack_require__(2);
const Score = __webpack_require__(4);
const Board = __webpack_require__(5);
const Leaderboard = __webpack_require__(6);
const Timer = __webpack_require__(7);
const SubmittedWords = __webpack_require__(8);


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


/***/ }),
/* 4 */
/***/ (function(module, exports) {

class Score {
  constructor() {


  }



  wordValue(wordArr) {
    let value = 0;
    wordArr.forEach( letterObj => {
      value += letterObj.value;
    });
    return value;
  }


}

module.exports = Score;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const Tiles = __webpack_require__(2);

class Board {
  constructor() {

    this.tiles = new Tiles();

  }

  setup() {

  }

  populateRow() {
    
  }

  activateBoard() {

  }

  deactivateBoard() {

  }

  handleMouseClick() {

  }

  handleMouseDrag() {

  }

  isValidWord(word) {

  }

  handleWordSubmission(word) {

  }
}

module.exports = Board;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

class Leaderboard {
  constructor() {


  }

}

module.exports = Leaderboard;


/***/ }),
/* 7 */
/***/ (function(module, exports) {

class Timer {
  constructor($el) {
    this.$el = $.el;
    this.setTime(60);
  }

  reset() {

  }

  start() {

  }

  handleTimeOut() {

  }

  countDown() {
    this.setTime(this.seconds - 1);
    if (this.seconds === 0) {
      this.handleTimeOut();

    } else if (this.seconds <= 10){
      this.$el.html.addClass("red");
    }
  }

  setTime(seconds) {
    this.seconds = seconds;
    this.$el.html(this.seconds);
  }
}

module.exports = Timer;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

class SubmittedWords {
  constructor() {


  }
}

module.exports = SubmittedWords;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map