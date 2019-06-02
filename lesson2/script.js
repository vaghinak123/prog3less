let side = 20;
let xotArr = [];
let eatArr = [];
let eateatnArr = [];
let alleatArr = [];
let EatalleatArr = [];


let matrix = [];
let rows = 49;
let columns = 55;
for (let y = 0; y < rows; y++) {
    matrix[y] = [];
    for (let x = 0; x < columns; x++) {
        let a = Math.floor(Math.random() * 100);
        if (a >= 0 && a < 10) {
            matrix[y][x] = 0;
        }
        if (a >= 10 && a < 30) {
            matrix[y][x] = 1;
        }
        else if (a >= 30 && a < 45) {
            matrix[y][x] = 2;
        }
        else if (a >= 50 && a < 70) {
            matrix[y][x] = 3;
        }
        else if (a >= 70 && a < 85) {
            matrix[y][x] = 4;
        }
        else if (a >= 85 && a < 100) {
            matrix[y][x] = 5;
        }
    }
}

function setup() {
    noStroke();
    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 2) {
                let eatgrass = new Eatgrass(x, y);
                eatArr.push(eatgrass);
            } else if (matrix[y][x] == 1) {
                let grass = new Grass(x, y);
                xotArr.push(grass);
            }
            else if (matrix[y][x] == 3) {
                let eateatn = new Eateatn(x, y);
                eateatnArr.push(eateatn);
            }
            else if (matrix[y][x] == 4) {
                let alleatn = new Alleat(x, y);
                alleatArr.push(alleatn);
            }
            else if (matrix[y][x] == 5) {
                let eatalleat = new Eatalleat(x, y);
                EatalleatArr.push(eatalleat);
            }

        }

    }
}




function draw() {
    background('#acacac');
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 3) {
                fill("red");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 4) {
                fill("blue");
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 5) {
                fill("black")
                rect(j * side, i * side, side, side);
            }
            else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            }
        }
    }

    for (let i in xotArr) {
        xotArr[i].mul();
    }
    for (let i in eatArr) {
        eatArr[i].eat();
    }
    for (let i in eateatnArr) {
        eateatnArr[i].eat();
    }
    for (i in alleatArr) {
        alleatArr[i].eat();
    }
    for (i in EatalleatArr) {
        EatalleatArr[i].eat();
    }
}