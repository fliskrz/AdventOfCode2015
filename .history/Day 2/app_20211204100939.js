var fs = require("fs");
var text = fs.readFileSync("./Day 1/input.txt").toString('utf-8');
let input = text.slice("\n").map(el => el.slice('x'));

console.log(input);


let l,w,h;