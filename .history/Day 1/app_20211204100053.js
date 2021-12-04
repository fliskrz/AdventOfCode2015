var fs = require("fs");
var text = fs.readFileSync("./Day 1/input.txt").toString('utf-8');

let floor = 0;

for(let i=0; i<text.length; i++){
    text[i]==='(' ? floor++ : floor--;
}

console.log(floor);