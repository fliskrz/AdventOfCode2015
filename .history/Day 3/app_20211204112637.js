var fs = require("fs");
var text = fs.readFileSync("./Day 2/input.txt").toString('utf-8');

let h = 0, v = 0;
let grid = [];
grid[0][0] = 1

for (let i=0; i<text.length; i++){
    switch (text[i]) {
        case '>':
            h++;
            grid[h][v]=1;
            break;
        case '^':
            v++;
            grid[h][v]=1;
            break;
        case '<':
            h--;
            grid[h][v]=1;
            break;
        case 'v':
            v--;
            grid[h][v]=1;
            break;
    }
}

console.log(grid);