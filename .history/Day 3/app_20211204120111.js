var fs = require("fs");
var text = fs.readFileSync("./Day 3/input.txt").toString('utf-8');

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
console.log(h,v,grid[h][v]);
for (let i=0; i<text.length; i+=2){
    switch (text[i]){
        case '>':
            h++;
            grid[h][v] = 1;
            break;
        case '^':
            v++;
            grid[h][v] = 1;
            break;
        case '<':
            h--;
            grid[h][v] = 1;
            break;
        case 'v':
            v--;
            grid[h][v] = 1;
            break;
    }
}
let h = text.length/2, v = text.length/2;
for (let i=1; i<text.length; i+=2){
    switch (text[i]){
        case '>':
            h++;
            grid[h][v] = 1;
            break;
        case '^':
            v++;
            grid[h][v] = 1;
            break;
        case '<':
            h--;
            grid[h][v] = 1;
            break;
        case 'v':
            v--;
            grid[h][v] = 1;
            break;
    }
}

let result = 1;

console.log(text[0]);

for (let i=0; i<grid.length;i++){
    for (let j=0; j<grid[i].length; j++){
        if(grid[i][j]==1){
            result++;
        }
    }
}

console.log(result);