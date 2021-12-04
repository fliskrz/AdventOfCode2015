var fs = require("fs");
var text = fs.readFileSync("./Day 1/input.txt").toString('utf-8');

let floor = 0;
let position;

for(let i=0; i<text.length; i++){
    text[i]==='(' ? floor++ : floor--;

    if(floor === -1){
        positon = i;
        break;
    }
}

console.log(floor);