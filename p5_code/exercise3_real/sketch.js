
let counter=0;
let speedX, speedY, loX, loY;

function setup() {
  createCanvas(500,500);
  background(100);
  fill(255);
  speedX = random(-5, 5);
  speedY = random(-5, 5);
  loX = height / 2;
  loY = width / 2;
}

function draw() {
  background(100);

  if (loX < 0) {
    speedX = -speedX;
}
if (loX > width) {
    speedX = -speedX;
}
// this is the short hand way of doing the same as the 2 'ifs' above
// this uses or '||'
if ((loY < 0) || (loY > height)) {
    speedY = -speedY;
}
// update the position of the ball and print to screen
loX += speedX;
loY += speedY;

// knDonut(loX, loY, 50, 20);
knEyeGuy(loX,loY,loX);
knface2(loX,loY,loX,loY,2);
// spaceBug(loX,loY);


  let c = color(255,150,100);

  //   face(c,200,100);
  //  c = color(100,255,0);
  // face(c,200,200);
  knface(c,height/2,120,0,2);

}


  // a wrapper function it never has arguments
  // using basic offsets
// function face(k,lx,ly) {

//   head(k,lx,ly);
//   fill(20);
//   eye(color(20),color(255),lx+ -10,ly + -10);
//   eye(color(20),color(255),lx+  10,ly + -10);
//   //eye
//   mouth(color(50),lx,ly);

// }

// function facehappy(k,lx,ly) {

//   head(k,lx+5,ly);
//   fill(20);
//   eye(color(200),color(20),lx+ -12,ly + -8);
//   eye(color(200),color(20),lx+  12,ly + -8);
//   //eye
//   mouth(color(200),lx,ly);
//   beard(color(20),lx,ly);
// }

function knface(k,x,y,w,h) {

  // push();
  // noStroke();
  translate(x,y);
  rotate( radians(w));
  scale(h);

  // fill(k);
  // ellipse(0,0,50,70); // anchor
  head(color(255,150,100),0+ 0,0+ 0);
  // fill(250);
  // ellipse(0+ -10 ,0+ -10,20,20); //eye white
  // ellipse(0+ 10 ,0+ -10,20,20); //eye white
  // fill(20);
  // ellipse(0+ -10 ,0+ -10,8,6); //eye
  // ellipse(0+ 10 ,0+ -10,8,6); //eye
  eye(0+ 10 ,0+ -10);
  eye(0+ -10 ,0+ -10);
  ellipse(0+0,0+10, 20,10); //mouth
  fill(250);
  rect (0+ -3,0+ 5,3,5,5); //teef
  rect (0+ 0,0+ 5,3,5,5); //teef
  fill(200,50,100);
  rect(0+ -10,0+ 25,20,20,4); //beard
  ellipse(0+ 0,0+ -35,20,30); //hair



  body(color(250),0+ -30,0+ 32,k);
  arm(0+ 32,0+ 30,k);
  arm(0+ -42,0+ 30,k);
  leg(0+ -20,0+ 85,k);
  leg(0+ 10,0+ 85,k);
  spike(color(20,200,100),0+ 25,0+ -15,100,4);

  // pop();
}

function knface2(k,x,y,w,h) {

  push();
  // noStroke();
  translate(x,y);
  rotate( radians(w));
  scale(h);

  fill(250);
  ellipse(0,0,50,70); // anchor
  // fill(250);
  // ellipse(0+ -10 ,0+ -10,20,20); //eye white
  // ellipse(0+ 10 ,0+ -10,20,20); //eye white
  // fill(20);
  // ellipse(0+ -10 ,0+ -10,8,6); //eye
  // ellipse(0+ 10 ,0+ -10,8,6); //eye
  fill(0);
  ellipse(0+0,0+10, 30,10); //mouth
  fill(50,100,40);
  fill (250,20,20);
  ellipse (0+ -0,0+ 30,20,50); //tongue
  fill(250);
  ellipse(0+ 0,0+ 8, 25,5); //mouth

  eye2(0+ 10 ,0+ -10);
  eye2(0+ -10 ,0+ -10);
  hat(color(200,200,10),0+ 0, 0);
    spike(color(random(250),random(250),random(250)),0+ 0,0+ 10,0,4);
  pop();
}

function knEyeGuy(x,y,w,h){

  push();
  translate(x,y);
  rotate( radians(w));
  scale(h);
 
  knDonut(0,0);
  eye2(0,0,5);

  pop();
}



function body(c, xpos, ypos) {
  fill(c);
  rect(xpos,ypos,60,50,5);
}

function head(c,x,y){
  fill(c);
  ellipse(x,y,50,70); // anchor

}


function leg(xpos, ypos, c) {
 fill(c);
 rect(xpos,ypos,10,70,5);
  //  rect(width/2+xpos,height/2+140 + ypos,27,150,5);
}

function arm( xpos, ypos,  c) {
 fill(c);
 rect(xpos,ypos,10,80,5);
}

function hat(k,lx,ly,w,h){
    fill (k);
  translate(lx,ly);
  scale(h);
    ellipse (0+ 0,0+ -50,30,40); //hat top
  ellipse(0+ 0,0+ -35,70,20); //hat
}

function eye(lx,ly,h){

  scale(h);

    fill(250);
  ellipse(lx ,ly,20,20); //eye white
  fill(20);
  ellipse(lx ,ly,8,6); //eye
}

function eye2(lx,ly,h){

  scale(h);

  fill(250);
ellipse(lx ,ly,20,7); //eye white
fill(20);
ellipse(lx ,ly,8,6); //eye
}

function spike(k,x,y,r,s,t){

  fill(k);
  scale(s);
  rotate(radians(r));
  ellipse(x,y,2,10);

}

function knDonut(x, y, outerRadius, innerRadius,h) {
  // Draw the outer circle
  fill(200, 100, 100); // Outer color
  // ellipse(x, y, outerRadius * 2, outerRadius * 2);
  ellipse(x, y, 200, 200);

  // Draw the inner circle (hole)
  fill(100); // Background color
  // ellipse(x, y, innerRadius * 2, innerRadius * 2);
  ellipse(x, y, 100, 100);

  // eye(x,y);
}

counter++;