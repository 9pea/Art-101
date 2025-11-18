
let currentkey = '1'; // brushmode
let bgc ;
let gkcount;

let hcount = 0;
let counter = 0;

let changeWidth = 20;
let changeHeight = 20;
const changeAmount = 10;

function setup() {
    createCanvas(800, 600);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;

    // colorMode(HSB);
}


function draw() {

  // coolRect(color(255,0,0),100,20,40);
    // triggering the clear_print function
    
    if( keyIsPressed) {
      clear_print();
    }
    // triggering the newkeychoice
    if(mouseIsPressed) {
     drawChoice();
    }
}

   rect(0,0,20,20); // 4 arg


  //  function rect(lx,ly,w,h) {

   


  //   // magial rectangle

  //  }




      // wrapper function ( no parameters or arguments )
function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
  // key global variable contains whatever key was last pressed
  let currentkey = key;

switch(currentkey) {

case 'r':
  console.log("r");  // erase with bg color
  eraser(bgc,mouseX, mouseY,25);
   break;


 case 't':
  // let k = color(0);
  drawKNSpike(color(random(10)), mouseX, mouseY, pmouseX, pmouseY);
  break;

  case 'q':
    drawKNBox(color(0),mouseX,mouseY,20,20);
    break;

  case 'w':
    drawKNPacMan(color(random()),mouseX,mouseY,20,20);
    break;

  case 'e':
    drawKNChaos(color(20,50,100,20),mouseX,mouseY,100,300);
    break;

default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}



function eraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, 50,50);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'x' || key == 'X') {
    background(255);
  } else if (key == 'p' || key == 'P') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

function keyPressed() {
  if (key === 'A' || key === 'a') { // Increase size
      changeWidth += changeAmount;
      changeHeight += changeAmount;
  } else if (key === 'D' || key === 'd') { // Decrease size
      changeWidth = max(0, changeWidth - changeAmount); // Prevent negative width
      changeHeight = max(0, changeHeight - changeAmount); // Prevent negative height
  }
}

         //camel
// function coolRect(k,lx,ly,r){

//   //default stroke = black line

//   // noStroke();
//   strokeWeight(5);
//   stroke(0);
//   fill(k);
//   rect(lx,ly,200,200,r);
// }

function drawKNSpike( k,  lx, ly,  px, py) {
  
  strokeWeight(5);
  let rk = color(hcount,random(200),random(200),random(200));
  stroke(rk);
  line(random(-10,5)+lx, random(-25,25)+ly, px+10, py+10);
  console.log(mouseX);
  console.log(pmouseX);

  hcount++;
  if (hcount>255){
    hcount = 0;
  }
}

function drawKNBox(c,lx,ly,rx,ry){

  fill(20,50,100,50);
  let r = random(10);
  stroke (r);
  strokeWeight(5);
  rect(lx,ly,changeHeight,changeWidth,r);
  // let rc = color(scount,random(30),random(30),random(30));

  // noStroke();
}

function drawKNPacMan(c,lx,ly,rx,ry){
  noStroke();

  let r = random(10);
  // Update start and stop angles.
  let biteSize = PI / r;
  let startAngle = biteSize * sin(frameCount * 20) + biteSize;
  let endAngle = TWO_PI - startAngle;

  // Draw the arc.
  arc(lx, ly, rx, ry, startAngle, endAngle, PIE);
  fill (255, 228, 54);

  // frameRate(2);

}

function drawKNChaos(c,lx,ly,px,py){
  let r = random(height/2,width/2);
  let l = color(random(200),random(200),random(200),random(200));
  stroke (l);
  strokeWeight(2);
  
// for (let i = 0; i < height/2; i++) {

  line(random(-15,15)+lx, random(-10,15)+ly, r, r);
  fill (counter, counter,counter,5);
// }
}

counter+=0;

// mouseX ==> 100
// mpuseX --> 110  --<pmouseX 100 // 1 drawloop behind

// mouseX > 130 // pmouse now = 110
// mouseX > 110 // pmouse now = 130
// pmouseX> 100 // pmouse now = 110
// mouseX > 120
// pmouseX> 110
// mouseX > 130
