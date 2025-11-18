
// let f1;
// let f2;

// let counter = 3;
// let faces = new Array(3);

// function setup() {
//   createCanvas(500,500);
//   background(20);
//   fill(255);
//   // k,lx,ly,spx,spy,w

//   for (let i = 0; i < counter; i++) {
    

//   f1 = new knFace(color(200,100,0), random(255), random(255), 
//    random(-5,5), random(-5,5), random(-3,), 10, -20);
//   f2 = new knFace(color(20,100,random(255)), random(255), random(255), 
//    random(-5,5), random(-5,5), random(-3,), 40, 25);

//   }

// }

// function draw() {
//   background(0);

//   f1.display();
//   f2.display();

// }

// function mousePressed(){
//   f1.twitch();
//   f2.twitch();
// }

// function keyPressed(){
//   f1.jump();
//   f2.jump();
// }

//-----------------------------------------------------------------

let fcount = 15;
let faces = new Array(fcount);


function setup() {
  createCanvas(500,500);
  background(20);
  fill(255);
   //(k,lx,ly,spx,spy,w)
   for (let i = 0; i < fcount; i++) {
    faces[i] = new knFace( color(200,random(255),0) , random(width),random(height),
    random(-5,5),random(-5,5),random(-3,3),random(3,12),random(-30,30));
   }

}

function draw() {
  background(0);
  for (let i = 0; i < fcount; i++) { 
    faces[i].display();
    faces[i].display();
   }
}

function mousePressed() {

  for (let i = 0; i < fcount; i++) {
    faces[i].twitch(); 
    // faces[i].spin();
   }
}

function keyPressed() {

  for (let i = 0; i < fcount; i++) {  
    faces[i].jump();
    // faces[i].twitch();
  }
}