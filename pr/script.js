// starting position of player
let x = 0; 
let y= 0; 
// size of each grid 
let size = 20;
// original speed of the player
let speedX= 0;
let speedY= 0;
// movement speed
let moveDelay = 10;
// x and y position of the food
let foodX; 
let foodY;
//
let gridMap = [];
let cols, rows; // number of colums and rows in the grid 
let wasteCount = 0; // score counter 
let currentMode = "menu";
let shakeAmount = 0; // level of screen shake 

// draw the player 
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

// draw the food that the player going to take
function drawPhone(bx,by) {
    fill(50);
    rect (bx +4, by +2, 12, 16);
    fill('skyblue');
    rect (bx+5, by + 4, 10, 10);
    fill('white');
    circle(bx +10, by + 16, 2);
}
// draw the scrap that the player drop after they eat the food
function drawScrap(wx, wy){
    fill(100);
    rect(wx, wy, size, size);
    stroke(0);
    line (wx + 10, wy +10, wx + 10, wy + size);
    noStroke();
    fill(200);
    rect(wx +2, wy + 2,4 ,4 );
}
// add sound effect to the game
let themeSong;
let eatSound;
// sound files to use
function preload() {
themeSong = loadSound('theme.mp3');
eatSound = loadSound('eat.wav');
}
// setup the canva and the grid
function setup() {
    createCanvas(400, 400);
    cols = floor(width / size);
    rows = floor(height / size);
    generateGrid(); // create a empty grid
    pickFood(); // place the first food
    themeSong.setVolume(0.1); // make the background music quieter
}

function draw() {
    // the screen shake effect the food are collected 
    if (shakeAmount > 0) { // translate the screen slightly
       translate (random(-5,5) , random(-5,5)); 
        shakeAmount = shakeAmount -1; // make the animation happen quickly
    }
     background(135,206,235); // blue background 
    if (currentMode === "menu") { 
        drawStarMenu();
    } else if (currentMode === "play") {
        playGame();
    }
}
function playGame() {
    if (frameCount % moveDelay === 0) { // control the movement speed of the player 
        gameLogic(); }
drawPhone( foodX, foodY); // make the food appear on the screen at random locations
drawSmilleyface(x,y); // draw the player on screen 
for(let r= 0; r <rows; r++) {
    for (let c= 0; c< cols; c++) {
        if (gridMap [r] [c] === 1) {
            drawScrap(c*size, r*size); // draw the scrap on the screen where player drop after eat the food 
        }
    }
}
}

function drawStarMenu() {
    fill(50);
    textAlign(CENTER, CENTER); // center the text on screen 
    textSize(12);
    text("E waste snake", width / 2, height / 2 - 20);
    textSize(10);
    text("press enter to start", width / 2, height / 2 + 10);
}
function gameLogic() {
    let oldX = x; // remember the old x postion of the player before moving to see if the player take the food or not
    let oldY = y; // remember the old y postion of the player before moving to see if the player take the food or not
// calculate next x and y position of player
let nextX = x + (speedX * size); 
let nextY = y + (speedY * size);
// check if player collide with the wall so game restart 
if (nextX < 0 || nextX >= width || nextY < 0 || nextY >= height) { 
    resetGame(); 
    return; 
}
// find the grid rows and colums for the next move 
let gridX = floor (nextX / size);
let gridY = floor (nextY / size);
// check if the player hitting the scrap to restart the game
if (gridMap[gridY][gridX] === 1) {
    resetGame();
    return; 
}
// move the player to the next position
    x= nextX
    y= nextY 
// check if the player has collide with the food (the phone)
    if (x === foodX && y === foodY){
        eatSound.play(); // play the eating sound effect 
        pickFood(); // move phone to appear at random location 
        let dropC = floor(oldX / size); // find the grid colum where player eat
        let dropR= floor(oldY / size); // find the row colum where player eat
        gridMap[dropR][dropC] = 1; // mark the spot for the scrap to appear
        wasteCount++; // add 1 to the score conuter
        shakeAmount = 10; // shake screen 
        if (moveDelay >3) moveDelay--;  // speed up the game 

    }
}

// player movement 
function keyPressed() {
    if (currentMode === "play"){
        if (keyCode === LEFT_ARROW) { speedX = -1; speedY = 0;} 
        if (keyCode === RIGHT_ARROW) { speedX = 1; speedY = 0;}
        if (keyCode === UP_ARROW) { speedX = 0; speedY = -1;}
        if (keyCode === DOWN_ARROW) { speedX = 0; speedY = 1;}
    } else if (keyCode === ENTER) { // start the game when hit enter
        currentMode = 'play';
    }
    if (themeSong.isLoaded() && !themeSong.isPlaying()) { // play background music when start
        themeSong.loop();
    }
}
function generateGrid() { 
    for ( let r = 0; r<rows; r++) { 
        gridMap[r] = []; // create a new row in the grid map
        for (let c = 0 ; c<cols; c++) { 
            gridMap[r][c] = 0; // set every spot to 0 
        }
    }
}
// how player pick up the phone 
function pickFood() {
    let valid = false; 
    while (!valid) {
        let c = floor(random(cols)); // pick a random colum 
        let r = floor(random(rows)); // pick a random row
    if (gridMap[r][c] === 0) { // check if the spot is empty to place the food
        foodX = c * size;
        foodY = r* size; 
        valid = true; // stop the loop when find a spot to place food
    }    
}
}
// reset the game if player hit wall or scrap
function resetGame(){ 
    x = 0; y = 0; // reset layer to original position 
    speedX = 0; speedY = 0; // stop movement 
    wasteCount = 0; // reset score counter
    moveDelay = 5; // reset game speed 
    generateGrid(); // clear all the scrap
    pickFood(); // place a new first food
    currentMode = "menu"; // back to main menu
}

