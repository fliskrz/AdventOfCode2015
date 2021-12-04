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

grid[h][v] = 1;

for (let i=0; i<text.length; i++){
    switch (text[i]){
        case '>':
            h++;
            grid[h][v] = 1;
        case '^':
            v++;
            grid[h][v] = 1;
        case '<':
            h--;
            grid[h][v] = 1;
        case 'v':
            v--;
            grid[h][v] = 1;
    }
}

let result = 0;

for (let i=0; i<grid.length;i++){
    for (let j=0; j<grid[i].length; j++){
        if(grid[i][j]==1){
            result++;
        }
    }
}

console.log(result);