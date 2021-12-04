var fs = require("fs");
var text = fs.readFileSync("./Day 2/input.txt").toString('utf-8');

let h = text.length/2, v = text.length/2;
let grid = [];
let temp = [];

for (let i=0; i<text.length;i++){
    temp = [];
    for (let j=0; j<text.length; j++){
        temp.push(0);
    }
    grid.push(temp);
}

console.log(grid);