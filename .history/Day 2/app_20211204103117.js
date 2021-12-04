var fs = require("fs");
var text = fs.readFileSync("./Day 2/input.txt").toString('utf-8');

const parse_input = string => {
    return string
            .split("\n")
            .map(el=>el.split("x")
                .map(el => parseInt(el, 10)));
}
let input = parse_input(text);

console.log(input);