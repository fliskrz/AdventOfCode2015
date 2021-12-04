var fs = require("fs");
var text = fs.readFileSync("./Day 2/input.txt").toString('utf-8');

const parse_input = string => {
    string
    .split("\n")
    .map(el=>el.split("x")
        .map(el => parseInt(el, 10)));
}

const get_surface = (l,w,h) => {
    let sides, min;
    sides[0] = 2*l*w;
    sides[1] = 2*w*h;
    sides[2] = 2*h*l;
    min = Math.min(...sides);
    return sides[0]+sides[1]+sides[2]+min;
}