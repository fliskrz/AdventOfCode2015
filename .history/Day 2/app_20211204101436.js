var fs = require("fs");
var text = fs.readFileSync("./Day 2/input.txt").toString('utf-8');
let input = text.split("\n").map(el=>el.split("x").map(el => parseInt(el, 10)));


console.log(input);

let l,w,h;