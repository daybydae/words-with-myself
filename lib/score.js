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
