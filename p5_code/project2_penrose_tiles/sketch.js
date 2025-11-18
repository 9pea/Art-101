
let ds;
let recMode=false;
let can;  // create a canvas reference

let s1;
let f1;
let scount = 25;
let sinArr = new Array(scount);
let fcount = 150;
let faceArr = new Array(scount);
let counter1 = 0;

let radio;  // New knRadio object


function setup() {
  can = createCanvas(1920, 1080);
  ds = new PenroseLSystem();
  //please, play around with the following line
  ds.simulate(4);
  noLoop();

  for (let i = 0; i < scount; i++) {
       
    sinArr[i] =  new knRadio(8,random(45), random(200),200, color(random(255),0,random(90),200));
    
  }

   for (let i = 0; i < fcount; i++) {
    faceArr[i] = new knFace( color(200,random(255),0) , random(width),random(height),
    random(-5,5),random(-5,5),random(-3,3),random(3,12),random(-30,30));
   }

   radio = new knRadio();  // Initialize knRadio object
}

function draw() {
  frameRate(30);
  background(0);
  ds.render();

  push();

  translate(frameCount/1000);
  rotate(radians(frameCount/30));

  if (frameCount < 400) {
      console.log("the first act");


    
      // true between 100 and 199
  } else if (frameCount < 1000) {
      console.log("the second act");
      facegroup();
     
  }  else if(frameCount <2000) {
      console.log("the third act");
      sinegroup();
      radio.drawWave();  // Draw the wave using knRadio


  }

  else  {
    console.log("the fourth act");

    facegroup();
    facetwitch();

    sinegroup();
    radio.drawWave();  // Draw the wave using knRadio

}

  pop();
  

        // always at the end of a draw loop
    // recordit();
}

function sinegroup() {
  push();
  translate(counter1,100);
  counter1+=.02;
  
  for (let i = 0; i < scount; i++) {
  
    push()
    translate(100,100);
    rotate( radians(i*15));
    scale(.40);

    pop();
  
  }
  pop();
  
  }

function facegroup() {
  
  push();
  translate(100,200);
  scale(.9);
  for (let i = 0; i < fcount; i++) {
     
    faceArr[i].display();
   // faceArr[i].jump();
  
  }
  pop();
  
  }
  
  
  function facetwitch() {
    for (let i = 0; i < fcount; i++) {
      faceArr[i].twitch();
      faceArr[i].jump();

    }
  
  }

/////////////////////// use both keyPressed and recordit ///////////

function keyPressed() {

  if (keyIsPressed === true) {
      let k = key;
      console.log("k is " + k);

      if (k == 's' || k == 'S') {
          console.log("Stopped Recording");
          recMode = false;
          noLoop();
      }

      if (k == ' ') {
          console.log("Start Recording");
          recMode = true;
          loop();
      }
  }
}

function recordit() {  // new version
  if (recMode == true) {
      let ext = nf(frameCount, 4);
      saveCanvas(can, 'frame-' + ext, 'jpg');
      console.log("rec " + ext);
  }
}

function PenroseLSystem() {
    this.steps = 0;

   //these are axiom and rules for the penrose rhombus l-system
   //a reference would be cool, but I couldn't find a good one
    this.axiom = "[X]++[X]++[X]++[X]++[X]";
    this.ruleW = "YF++ZF----XF[-YF----WF]++";
    this.ruleX = "+YF--ZF[---WF--XF]+";
    this.ruleY = "-WF++XF[+++YF++ZF]-";
    this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";

    //please play around with the following two lines
    this.startLength = 460.0;
    this.theta = TWO_PI / 10.0; //36 degrees, try TWO_PI / 6.0, ...
    this.reset();
}

PenroseLSystem.prototype.simulate = function (gen) {
  while (this.getAge() < gen) {
    this.iterate(this.production);
  }
}

PenroseLSystem.prototype.reset = function () {
    this.production = this.axiom;
    this.drawLength = this.startLength;
    this.generations = 0;
  }

PenroseLSystem.prototype.getAge = function () {
    return this.generations;
  }

//apply substitution rules to create new iteration of production string
PenroseLSystem.prototype.iterate = function() {
    let newProduction = "";

    for(let i=0; i < this.production.length; ++i) {
      let step = this.production.charAt(i);
      //if current character is 'W', replace current character
      //by corresponding rule
      if (step == 'W') {
        newProduction = newProduction + this.ruleW;
      }
      else if (step == 'X') {
        newProduction = newProduction + this.ruleX;
      }
      else if (step == 'Y') {
        newProduction = newProduction + this.ruleY;
      }
      else if (step == 'Z') {
        newProduction = newProduction + this.ruleZ;
      }
      else {
        //drop all 'F' characters, don't touch other
        //characters (i.e. '+', '-', '[', ']'
        if (step != 'F') {
          newProduction = newProduction + step;
        }
      }
    }

    this.drawLength = this.drawLength * 0.5;
    this.generations++;
    this.production = newProduction;
}

//convert production string to a turtle graphic
PenroseLSystem.prototype.render = function () {
    translate(width / 2, height / 2);

    this.steps += .1;
    if(this.steps > this.production.length) {
      this.steps = this.production.length;
    }

    for(let i=0; i<this.steps; ++i) {
      let step = this.production.charAt(i);

      //'W', 'X', 'Y', 'Z' symbols don't actually correspond to a turtle action
      if( step == 'F') {
        stroke(random(255),random(255),random(255),random(-200,200));
        for(let j=0; j < this.repeats; j++) {
          // line(2, 2, 2, -this.drawLength);
          rect(1, 1,1, -this.drawLength*10);
          noFill();
          translate(30, -this.drawLength);
        }
        this.repeats = 2;
      }
      else if (step == '+') {
        rotate(this.theta);
        noStroke();
        fill(200);
        ellipse(1,1,20);
      }
      else if (step == '-') {
        rotate(-this.theta);
        stroke(random(255),random(255),random(255),random(255));
        arc(20, 20, 1, 1, 5, 1);
      }
      else if (step == '[') {
        rect(10, 20, 10);
        fill(200);
        line(200, 100, 100, 100);
        push();

      }
      else if (step == ']') {
        pop();
      }
    }
  }

  let yoff = 0.0; // 2nd dimension of perlin noise
//-----------------------------

class knFace{
    //class variable
    wiggle;
    lox;
    loy;
    spx;
    spy;
    k;
    ohh;
    rot;
    spin;
    big;
    scale;
     //used to define the object when its born, runs one time
    constructor(k,lx,ly,spx,spy,w,ohh,rot,spin,big,scale){
      console.log("hi");
      this.k = k;
      this.lox = lx;
      this.loy = ly;
      this.spx = spx;
      this.spy = spy;
      this.wiggle = w;
      this.ohh = ohh;
      this.rot = rot;
      this.spin = spin;
      this.big = big;
      this.scale = scale;
      
    }

      //method to show something on screen
  display(){
    fill(255);
    this.knface(this.k, this.lox, this.loy);
    // this.knface2(this.k, this.lox, this.loy);
  }

knface(k,x,y,w,h) {

  push();
  // noStroke();
  translate(x,y);
  rotate( radians(this.rot));
  scale(h);

  this.head(color(255,150,100),0+ 0,0+ 0);
  this.eye(color(0),0+ 10 ,0+ -10);
  this.eye(color(0),0+ -10 ,0+ -10);
  fill(0);
  ellipse(0+0,0+10, 20,10); //mouth
  fill(250);
  rect (0+ -3,0+ 5,3,5,5); //teef
  rect (0+ 0,0+ 5,3,5,5); //teef
  fill(200,50,100);
  rect(0+ -10,0+ 25,20,20,4); //beard
  ellipse(0+ 0,0+ -35,20,30); //hair

  this.body(color(250),0+ -30,0+ 32,k);
  this.arm(0+ 32,0+ 30,k);
  this.arm(0+ -42,0+ 30,k);
  this.leg(0+ -20,0+ 85,k);
  this.leg(0+ 10,0+ 85,k);
  this.spike(color(20,200,100),0+ 25,0+ -15,100,4);

  pop();

}
 body(c, xpos, ypos) {
  fill(c);
  rect(xpos,ypos,60,50,5);
}

 head(c,x,y){
  fill(c);
  ellipse(x,y,50,70); // anchor

}
 leg(xpos, ypos, c) {
 fill(c);
 rect(xpos,ypos,10,70,5);
}

 arm( xpos, ypos,  c) {
 fill(c);
 rect(xpos,ypos,10,80,5);
}

 hat(lx,ly){
  translate(lx,ly);

  fill (20,40,100);
    ellipse (0+ 0,0+ -50,30,40); //hat top
  ellipse(0+ 0,0+ -35,70,20); //hat

}

 eye(k,lx,ly,h){
  scale(h);

    fill(250);
  ellipse(lx ,ly,20,this.wiggle); //eye white
  fill(k);
  ellipse(lx ,ly,8,this.wiggle); //eye
}

 eye2(lx,ly,h){

  scale(h);

  fill(250);
ellipse(lx ,ly,20,this.wiggle); //eye white
fill(20);
ellipse(lx ,ly,8,this.wiggle); //eye
}

 spike(k,x,y,r,s,t){

  fill(random(250), random(250), random(250));
  scale(s);
  rotate(radians(r));
  ellipse(x,y,2,10);

}

twitch() {
  this.wiggle = random(-10,10);
}

    jump() {
      this.lox += this.spx;
      this.loy += this.spy;

      if (this.lox < 0 || this.lox > width) {
          this.spx = -this.spx;
         }

         if (this.loy < 0 || this.loy > height) {
          this.spy = -this.spy;
         } 
    }
}

class knRadio {
  constructor() {
      this.yofff = 0.0;
  }


  drawWave() {
    fill(0,0,0,0);
    strokeWeight(3);
    stroke(random(255), random(255), random(255));
      beginShape();
      let xoff = 0;
      for (let x = 50; x <= width; x += 10) {
          let y = map(noise(xoff, this.yofff), 0, 1, 20, 300);
          vertex(x, y);
          xoff += 0.5;
      }
      this.yofff += 0.1;
      vertex(width, height);
      vertex(0, height/2);
      vertex(300,100);
      endShape(CLOSE);
  }
}