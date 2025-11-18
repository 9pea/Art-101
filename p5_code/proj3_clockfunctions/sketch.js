
let stime;
let dura;

function setup() {
   createCanvas(1000,1000);
   background(100);
   fill(255);

   textSize(64); // Set the size of the text (emoji)
  textAlign(CENTER, CENTER); // Align text to the center

   stime = millis();
   dura = 1000*10;

   console.log(stime);
  }
  
  function draw() {
   background(0, 90);
  //  frameRate(.1);

   let s = second(); //0-59
   let m = minute(); //0-59
   let h = hour();   //0-23

   let mil = millis(); //its the number of milliseconds since start

   console.log(" sec " + s + " min " + m + " hour " + h);
   console.log(mil);

  //  rect(h, 50, 50, 30);
  //  rect(m, 100, 50, 30);
  //  rect(s, 150, 50, 30);
            // input, rawlow, rawhigh, mappedlow, mappedhigh
   let mmil = map(mil, 0, 999, 0, width);
   let ms = map(s, 0, 59, 0, width);
   let mm = map(m, 0, 59, 0, width);
   let mh = map(h, 0, 23, 0, width);

  //  rect(mh, 200, 50, 30);
  //  rect(mm, 250, 50, 30);
  //  rect(ms, 300, 50, 30);
   // now length is measurement
   mmil = map (mil, 0, 999, 0, 410);
    ms = map(s, 0, 59, 0, 410);
    mm = map(m, 0, 59, 0, 410);
    mh = map(h, 0, 23, 0, 410);

    if (h > 1 && h < 8) {//1-8
    background (0, 0, 36);
    fill(145);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('sleep...', 300,200);
    text('😴', 800, 200);
    }

    if (h > 7 && h < 9) {//8
      
    background (0, 2, 64);
    fill(255, 181, 54);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('🛌', 800, 200);
    textSize(100);
    text('more sleep...', 300,200);
     
    }

    if (h > 8 && h < 10) {//9
      
    background (107, 174, 255);
    fill(255, 221, 48);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('🤳🏼', 800, 200);
    textSize(110);
    text('phone time',300,200);
     
    }

    if (h > 9 && h < 11) {//10
      
    background (148, 196, 255);
    fill(255, 221, 48);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('🦷', 800, 200);
    textSize(65);
    text('get up & brush teeth', 300,200);
     
    }

    if (h > 10 && h < 12) {//11
      
    background (163, 204, 255);
    fill(255, 221, 48);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('🍽️', 800, 200);
    text('lunch',300,200);
     
    }

    if (h > 11 && h < 14) {//12-1
    
    background (163, 204, 255);
    fill(255, 221, 48);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('😰', 800, 200);
    textSize(80);
    text('almost study time', 330,200);
      
    }

    if (h > 13 && h < 16) {//2-3
      
    background (163, 204, 255);
    fill(255, 221, 48);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('📚', 800, 200);
    text('not fun', 300,200);
     
    }

    if (h > 15 && h < 17) {//4
   
    background (56, 99, 255);
    fill(255, 181, 54);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('😌', 800, 200);
    text('relax',300,200);
     
    }

    if (h > 16 && h < 18) {//5
     
    background (255, 117, 31);
    fill(255, 106, 0);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('🚶‍♂️', 800, 200);
    textSize(110);
    text('touch grass', 300,200);
      
    }

    if (h > 17 && h < 19) {//6
      
    background (219, 84, 0);
    fill(255, 106, 0);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('🍽️', 800, 200);
    text('dinner',300,200);
     
    }

    if (h > 18 && h < 20) {//7
     
    background (181, 0, 118);
    fill(255, 106, 0);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('🛀', 800, 200);
    text('shower',300,200);
     
    }

    if (h > 19 && h < 21) {//8
      
    background (1, 0, 82);
    fill(200);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('☺️', 800, 200);
    text('lazy',300,200);
    
    }

    if (h > 20 && h < 24){//9-11
    background (0, 0, 36);
    fill(145);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('📄', 800, 200);
    textSize(120);
    text('homework',300,200);
      
    }

    if (h == 0){//12
    background (0, 0, 36);
    fill(145);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('📄', 800, 200);
    textSize(120);
    text('homework',300,200);
      
    }

    if (h > 0 && h < 2) {//1
      if (m > 0 && m < 30){
    background (0, 0, 36);
    fill(145);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('📱', 800, 200);
    textSize(110);
    text('doomscroll',300,200);
      }
    }

    if (h > 0 && h < 2) {//1
      if (m > 29 && m < 59){
    background (0, 0, 36);
    fill(145);
    textSize(150);
    ellipse(800, 200, 300, 300);
    fill(200);
    text('💤', 800, 200);
    text('sleep',300,200);
      }
    }


    push();
    translate(15, 60);
    scale(2);
    rotate (radians(0));
    textSize(40);
    fill(100, 90);
    // rect(x, y, w)
    rect(0, 220, 420, 215);
    fill(200,0,0);
    rect(5, 225, mh, 30);
    text("🙀", mh, 238);
    fill(0, 30, 255);
    rect(5, 285, mm, 30);
    text("😓", mm, 300)
    fill (28, 240, 0);
    rect(5, 345, ms, 30);
    text("😎", ms, 360);
    fill (100,200,30);
    rect(5, 400, mmil, 30);
    text("🥛", mmil, 412);

    pop();

       // 500 - .5 = 499.5 > 2000
    if ( (millis() - stime) > dura ){ // starts as false

      fill(255,0,0);
      ellipse(random(100), random(100), 50, 50);

      stime = millis();
    }
  
  }
