const fs = require("fs");
const Papa = require("papaparse");

fs.readFile("./assets/ospd.csv", 'utf8', function(err, results){
  const data = Papa.parse(results, {
    header: false,
    delimiter: "\n",
    error: console.log("error parsing"),
  });
  fs.writeFile("./lib/dictionary1.js", "export const DictFile = ".concat(JSON.stringify(data)));
});
