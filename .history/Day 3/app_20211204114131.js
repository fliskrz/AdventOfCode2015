var fs = require("fs");
var text = fs.readFileSync("./Day 2/input.txt").toString('utf-8');

let h = 0, v = 0;
let grid = [];
let temp = [];

for (let i=0; i<2*text.length;i++){
    for (let j=0; j<2*text.length; j++){
        temp.push(0);
    }
    grid.push(temp);
}

console.log(grid);