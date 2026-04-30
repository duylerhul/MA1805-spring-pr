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
let currenMode = "menu";
let shakeAmount = 0;
function drawSmilleyface(sx,sy) {
 fill('yellow'); 
 circle (sx + 10, sy + 10, 20);
 fill('black');
 circle(sx + 7, sy + 8, 3);
 cirlce(sx + 13, sy +8, 3);
noFill();
stroke('black');
arc( sx + 10, sy + 12, 10,0,3.14);
noStroke();
}




function setup() [
    createCanvas(400, 400);
    cols = floor( width / size); 
    rows = floor( height/ size); 
    initGrid(); 
    pickFood();
]

function draw() {
    background(135,206,235);
    if (currentMode === "menu") 
        showMenu();
    else if (currentMode === "game") {
        else if (currentMode === "game") {
            playGame();
    }
    if (shakeAmount > 0) { 
        translate (random(-5,5) , random(-5,5));
        shakeAmount = shakeAmount -1;
    }
}
function playGame() {
    if (frameCount % moveDelay === 0) {
        gameLogic();
}
function drawPhone( foodX, foodY) {

}