const papaparse = require("papaparse");
const dictFile = require("../assets/ospd.csv");

class Dictionary {
  constructor(){
    this.dictFile = Papa.parse(dictfile);
  }

  createDictionary(dict) {
    const wordArr = words.split("/n");
    wordArr.pop();
    this.dictObj = {};
    wordArr.forEach( entry => {
      this.dictObj[entry] = true;
    });
  }

}
