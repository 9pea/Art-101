let counter = 0;
let counterG = 0;
let counterR = 0;
let f; 
let b;
let d;
let b2;
let cx,cy;
let bgc;
let gridSize;
let minion = false;
let value = 0;
let popper = 0;


 /*
   You can get free font on the web.. the format that seems to work well with p5
   is .otf  format.    https://www.1001fonts.com/opentype-fonts.html
 */
   
// // optional font loading
function preload() {
   f = loadFont('assets/luxuriougenics.ttf');
   d = loadFont('assets/transonite.ttf');
}


function setup() {
  createCanvas(800, 800);

  counterR = height;

  //optionally set the font for drawing
  // textFont(d);

  // set color of text
  fill(0, 255, 0);


  b = loadImage("assets/snake.jpeg"); 
  b2 = loadImage("assets/island.JPG");
  stroke(2);
  cx = width/2;
  cy = height/2;
  gridSize = 40;
  textSize(40);


  // frameRate(2);

 
}

function draw() {

  rectMode(RADIUS);
  fill(255);
  rect(50, 50, 30, 30);

  rectMode(CENTER);
  fill(100);
  rect(50, 50, 30, 30);

  // // Create an RGB background effect
  // let r = (sin(frameCount * 0.01) * 128 + 128);
  // let g = (sin(frameCount * 0.01 + TWO_PI / 3) * 128 + 128);
  // let x = (sin(frameCount * 0.01 + 2 * TWO_PI / 3) * 128 + 128);
  // background(r, g, x);  // Set the background color to RGB values


   fill(255,0,0);
   textSize(10);
   text ('TROLOLOLOLO',mouseX,mouseY);
   textFont(f);

   ellipse(width/2, height/2, 100, 100); 
   fill (value);
   fill (popper);
   



  background(0,15);
  // this is an example of 'and' logic
  if ( mouseIsPressed && keyIsPressed == true )  {
    textSize((counterR)/2.5);
    textAlign(CENTER);
    fill(255, 0, 0);
    text("fork in outlet ", width/2, counterR);
    counterR-=.75;
    if (counterR < -50) {
      counterR = height;
    }
    
  } else  {
  
  textSize((counterG+50)/3);
  textAlign(CENTER);
  fill(0, 255, 0);
  text("PAIN", width/2, counterG);
  textFont(d);

  counterG +=1.5;
    if (counterG > width) {
      counterG = -50;
    }

  }

  ransnake = random(250);
ranisland = random(255);

for (let i = 0; i < 50; i+=10){

  if (mouseIsPressed===true) {
    // if(popper == 0){
    //   popper = 50;
    // } else{
    //   popper = 0;
    // }

    fill(240,150,60);
    text("i hate code",mouseX,mouseY);
    // background(rgb);
    
    
  }


image(b, ransnake, 60,100);
image(b2, ranisland, 250, 200,200);



  
}

counter+=2;

if (keyIsPressed){

  keyChoice();
}

if (mouseIsPressed && minion) {  // tests true or false
  console.log("show that purple");
  fill(205,70,125);
  let r = random(50,width-10);
  ellipse(width/2, height/2, r, r );
}

if(mouseIsPressed) {
  drawChoice();
 }

}

function keyChoice() {
  // the 'key' maps what characters on the keyboard you can use.
  // switch statment
 switch(key) {
 case 'a':
   console.log("a left");  // left
   cx+= -gridSize;
   image(b,cx,cy,gridSize,gridSize);
   break;
 case 'w':
   console.log("w up");  // up
   cy+= -gridSize; 
   image(b,cx,cy,gridSize,gridSize);
   break;
 case 'd':
   console.log("d  right");  //right
   cx+= gridSize;
   image(b,cx,cy,gridSize,gridSize);
   break;
 case 's':
   console.log("s back");  // back
   cy+= gridSize;
   image(b,cx,cy,gridSize,gridSize);
   break;
 case 't':
     console.log("t text");  // text
     fill(255,0,0);
     text("samuel l jackson",cx,cy);
     break;
 default:             // Default executes if the case labels
   console.log("None");   // don't match the switch parameter
   break;
 }
 key = "";  // you can empty it so, it does not double trigger
 
 }

 function keyPressed() { 
  if ( key == 'b' || key == 'B' ) { 
    // example of toggle logic 
    if (value == 0) { 
      value = 255;
    } else { 
      value = 0;
    }
  }

  if (  (key == 'p' || key == 'P') ) {
   minion = true;    
  }

  if (  (key == 'x' || key == 'X' || key == " ") ) {
    minion = false;    
   }
}

//------------------------------------------------------------------

function drawChoice() {
  let currentkey = key;

  switch(currentkey) {

    case '9':
      drawCry(color(0),mouseX,mouseY,pmouseX,pmouseY);
      break;
  
  default:             // Default executes if the case labels
    console.log("None");   // don't match the switch parameter
    break;

  }

}

//------------------------------------------------------------------

//------------------------------------------------------------------
function drawCry(c,lx,ly,rx,ry){

  let r = random(20);

  rect(lx,ly,rx+20,ry+20,20);
  // let 9c = color(hcount,random(30),random(30),random(30));
  stroke (3);
  // noStroke();
  strokeWeight(r);


}
//------------------------------------------------------------------