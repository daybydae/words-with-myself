
import {DictFile} from "./dictionary1.js";

class DictionaryFile {
  constructor(){
    this.createDictionary(DictFile);
  }

  createDictionary(dict) {
    this.dictObj = {};
    dict.data.forEach( entry => {
      this.dictObj[entry] = true;
    });
  }

}

export default DictionaryFile;
