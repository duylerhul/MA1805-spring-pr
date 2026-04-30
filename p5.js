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
function setup() [
    createCanvas(400, 400);
    cols = floor( width / size); 
    rows = floor( height/ size); 
    initGrid(); 
    pickFood();
]