let x = 0; 
let y= 0;
let size = 20;
let speedX= 0;
let speedY= 0;
let moveDelay = 6 

let foodX; 
let foodY;
let gridMap = [];
let cols, rows; 
let wasteCount = 0;
let currentMode = "menu";
let shakeAmount = 0;

function drawSmilleyface(sx,sy) {
 fill('yellow'); 
 circle (sx + 10, sy + 10, 20);
 fill('black');
 circle(sx + 7, sy + 8, 3);
 circle(sx + 13, sy +8, 3);
noFill();
stroke('black');
arc( sx + 10, sy + 12, 10, 10, 0, 3.14);
noStroke();
}
function drawPhone(bx,by) {
    fill(50);
    rect (bx +4, by +2, 12, 16);
    fill('skyblue');
    rect (bx+5, by + 4, 10, 10);
    fill('white');
    circle(bx +10, by + 16, 2);
}
function drawScrap(wx, wy){
    fill(100);
    rect(wx, wy, size, size);
    stroke(0);
    line (wx + 10, wy +10, wx + 10, wy + size);
    noStroke();
    fill(200);
    rect(wx +2, wy + 2,4 ,4 );
}
let themeSong;
let eatSound;
function preload() {
themeSong = loadSound('theme.mp3');
eatSound = loadSound('eat.wav');
}

function setup() {
    createCanvas(400, 400);
    cols = floor(width / size);
    rows = floor(height / size);
    generateGrid();
    pickFood();
}

function draw() {
    background(135,206,235);
    if (currentMode === "menu") {
        drawStarMenu();
    } else if (currentMode === "play") {
        playGame();
    }
    if (shakeAmount > 0) { 
        push();
        translate (random(-5,5) , random(-5,5));
        shakeAmount = shakeAmount -1;
    }
}
function playGame() {
    if (frameCount % moveDelay === 0) {
        gameLogic(); }
drawPhone( foodX, foodY); 
drawSmilleyface(x,y);
for(let r= 0; r <rows; r++) {
    for (let c= 0; c< cols; c++) {
        if (gridMap [r] [c] === 1) {
            drawScrap(c*size, r*size);
        }
    }
}
}

function drawStarMenu() {
    fill(50);
    textAlign(CENTER, CENTER);
    textSize(12);
    text("E waste snake", width / 2, height / 2 - 20);
    textSize(10);
    text("press enter to start", width / 2, height / 2 + 10);
}
function gameLogic() {
    let oldX = x; 
    let oldY = y; 

let nextX = x + (speedX * size);
let nextY = y + (speedY * size);

if (nextX < 0 || nextX >= width || nextY < 0 || nextY >= height) { 
    resetGame(); 
    return; 
}
let gridX = floor (nextX / size);
let gridY = floor (nextY / size);
if (gridMap[gridY][gridX] === 1) {
    resetGame();
    return; 
}
    x= nextX
    y= nextY 

    if (x === foodX && y === foodY){
        eatSound.play();
        pickFood();
        let dropC = floor(oldX / size);
        let dropR= floor(oldY / size);
        gridMap[dropR][dropC] = 1;
        wasteCount++;
        shakeAmount = 10;
        if (moveDelay >3) moveDelay--;

    }
}


function keyPressed() {
    if (currentMode === "play"){
        if (keyCode === LEFT_ARROW) { speedX = -1; speedY = 0;}
        if (keyCode === RIGHT_ARROW) { speedX = 1; speedY = 0;}
        if (keyCode === UP_ARROW) { speedX = 0; speedY = -1;}
        if (keyCode === DOWN_ARROW) { speedX = 0; speedY = 1;}
    } else if (keyCode === ENTER) {
        currentMode = 'play';
    }
}
function generateGrid() { 
    for ( let r = 0; r<rows; r++) { 
        gridMap[r] = [];
        for (let c = 0 ; c<cols; c++) {
            gridMap[r][c] = 0;
        }
    }
}
function pickFood() {
    let valid = false; 
    while (!valid) {
        let c = floor(random(cols));
        let r = floor(random(rows));
    if (gridMap[r][c] === 0) {
        foodX = c * size;
        foodY = r* size; 
        valid = true; 
    }    
}
}
function resetGame(){ 
    x = 0; y = 0;
    speedX = 0; speedY = 0;
    wasteCount = 0;
    moveDelay = 5;
    generateGrid();
    pickFood();
    currentMode = "menu";
}

