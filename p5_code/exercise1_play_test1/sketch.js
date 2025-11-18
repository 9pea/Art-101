let counter = 0;
let counter2 = 0;
let counter3 = 0;


function setup() {
  createCanvas(400, 400);
  background(200, 50, 20, 200);
  noStroke();
   frameRate(5);
  fill (counter,200,counter2);
  

  for (let i=0; i < height; i+=20) {
    fill(20,255,0);
    rect(0, i, width, 10);
    fill(255);
    rect(i, 0, 10, height);
    console.log(i);
  }
//------------------
  colorMode(RGB, 100);

  for (let x = 0; x < 400; x += 1) {
    for (let y = 0; y < 400; y += 1) {
      stroke(x, y, 0);
      point(x, y);
    }
  }//--------------------

  
}

function draw() {

  // ellipseMode(CENTER);
  // fill(counter);
  // ellipse(200, 100,30, 30);

  square(200, 200, 100, 90, 15, 100, counter);

  if (mouseX < height/2){
  for (let i = 50; i < 100; i += 10) {
  arc(100, 100, 150, 140, i, PI + HALF_PI);
 
  ellipse(counter3,height/2,50,50);
  
  }
}

  for (let i = 0; i < counter; i += 20) { // for loop = creates repetition
    for (let j = 0; j < counter; j += 20) {

     fill(random(255), random(255), random(255), random(255)); // another way to do it
     textSize(13);
     fill(255);
     text("6",i, j, 100 );
     fill(random(255), random(255), random(255));

     //let i = 0;
     ellipse( i+5, j+5, 10, 10 );


     //console.log("this has a greyscale value of" + randr);
    }
 }





let r = random (20);
  let mx = mouseX;
  let my = mouseY;
  if (mx < 250)  {
   
    for (let i = 0; i < mx; i += 20) {
      r1 = random(255);
      fill(r1);
      rect( i+5, my, 10, 10 );
      console.log("r1 = " + r1);
     }

  }
  if (mx > 200)  {

    for (let i = 0; i < mx; i += 20) {
      r2 = random(50,255);
      fill(r2,30);
      rect( mx, i+5, 10, 10 );
      console.log("r2 = " + r2);
     }

    if (mouseY < 400) {
      

      fill(50,60,250);
      // triangle(mx,my,mx-50,my+30,mx+50,my+50);
      circle(mx,my,30);

    }  
    
    else {
      
      for (let i = 0; i < mx; i += 20) {
        r3 = random(100);
        fill(200,100,0,r3);
        rect( i+5, my, 10, 10 );
        console.log("r3 = " + r3);
       }

      // fill(255,120,0,50);
      // ellipse(mx+100,my,30,30);

      //------------------------------------------------
      if (mx < height/2)  { //true result
        background(mx,my,5,5);
        ellipse(mx, 2, r3 * 2, r3 * 7);
      } 
      
      else { // false result
        background(width -mx,my,5, 5 );
        rect(counter, height/2, r3 * 2, r3 * 5);
      }
    
      rect (mx,my,50,50);
      //-----------------------------------------------

    }

  }
  



counter = counter+ 1;
counter2 = counter2+ 2;
counter3 = counter3+3;
  

}



