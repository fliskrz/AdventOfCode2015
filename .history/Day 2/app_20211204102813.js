var fs = require("fs");
var text = fs.readFileSync("./Day 2/input.txt").toString('utf-8');

const parse_input = string => {
    string
    .split("\n")
    .map(el=>el.split("x")
        .map(el => parseInt(el, 10)));
}

console.log(parse_input(text));

const get_box_surface = (dimensions) => {
    let sides, min;
    sides[0] = 2*dimensions[0]*dimensions[1];
    sides[1] = 2*dimensions[1]*dimensions[2];
    sides[2] = 2*dimensions[2]*dimensions[0];
    min = Math.min(...sides);
    return sides[0]+sides[1]+side1+min;
}

const total_surface = (input) => {
    let dimensions = parse_input(input);
    let result = 0;

    for (let i=0; i<dimensions.length; i++){
        result =+ get_box_surface(dimensions[i]);
    }
    return result;
}

console.log(total_surface(text));