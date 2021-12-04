var fs = require("fs");
var text = fs.readFileSync("./Day 2/input.txt").toString('utf-8');

const parse_input = string => {
    return string
            .split("\n")
            .map(el=>el.split("x")
                .map(el => parseInt(el, 10)));
}
let input = parse_input(text);

let result =0;
let arr;

for (let i=0; i<input.length; i++){
    arr=[2*input[i][0]*input[i][1], 2*input[i][1]*input[i][2], 2*input[i][2]*input[i][0]];
    // result+=arr[0]+arr[1]+arr[2]+Math.min(...arr);
    console.log(arr[0], arr[1], arr[2], Math.min(...arr));
}
