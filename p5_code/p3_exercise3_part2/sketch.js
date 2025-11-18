// example 5.2

// This uses the transformation matrix tools to move,
//rotate and scale things as batch operations
  // 11 x 11
let gridarr1 = [ //khoa
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    [4, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 4],
    [4, 0, 1, 2, 7, 7, 7, 2, 2, 7, 7, 7, 2, 1, 0, 4],
    [4, 0, 1, 7, 6, 6, 6, 7, 7, 6, 6, 6, 7, 1, 0, 4],
    [4, 0, 1, 7, 6, 8, 6, 7, 7, 6, 8, 6, 7, 1, 0, 4],
    [4, 0, 1, 7, 6, 6, 6, 7, 7, 6, 6, 6, 7, 1, 0, 4],
    [4, 4, 1, 8, 7, 7, 7, 2, 2, 7, 7, 7, 8, 1, 4, 4],
    [0, 0, 1, 2, 8, 2, 2, 2, 2, 2, 2, 8, 2, 1, 0, 0],
    [0, 0, 1, 2, 2, 8, 8, 8, 8, 8, 8, 2, 2, 1, 0, 0],
    [0, 0, 1, 2, 2, 2, 7, 2, 2, 7, 2, 2, 2, 1, 0, 0],
    [0, 0, 1, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 0],
    [0, 0, 1, 0, 1, 4, 1, 0, 1, 4, 1, 0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 4, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 5, 0, 7, 0, 0, 0, 7, 0, 5, 0, 0, 0, 0],
    [0, 0, 0, 5, 5, 5, 0, 0, 0, 5, 5, 5, 0, 0, 0, 0],
];

let gridarr2 = [ //nabeeha
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 1, 3, 3, 3, 3, 2, 2, 2, 3, 4, 4, 4],
    [0, 0, 1, 1, 3, 3, 1, 3, 1, 3, 2, 2, 4, 4, 4, 4],
    [0, 0, 0, 1, 3, 1, 0, 1, 0, 1, 2, 4, 4, 4, 4, 4],
    [0, 0, 0, 0, 3, 3, 1, 3, 1, 3, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 2, 2, 0, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 2, 2, 3, 3, 3, 3, 1, 0, 0, 0, 4, 0, 0],
    [0, 0, 2, 2, 3, 2, 3, 1, 1, 3, 1, 0, 0, 4, 0, 0],
    [0, 2, 2, 0, 0, 2, 2, 1, 1, 0, 1, 1, 0, 4, 0, 0],
    [0, 0, 2, 2, 0, 1, 1, 2, 1, 0, 0, 1, 1, 4, 0, 0],
    [0, 0, 0, 2, 1, 2, 1, 2, 2, 0, 0, 0, 1, 2, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 2, 2, 1, 0, 0, 0, 4, 0, 0],
    [0, 0, 0, 0, 2, 1, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0],
];

 let gridarr4 = [ //jingyi
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
    [0, 0, 1, 2, 2, 3, 3, 3, 3, 3, 3, 2, 2, 1, 0, 0],
    [0, 1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0],
    [1, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 1],
    [1, 3, 3, 3, 4, 4, 3, 3, 3, 3, 4, 4, 3, 3, 3, 1],
    [1, 3, 3, 4, 0, 0, 4, 3, 3, 4, 0, 0, 4, 3, 3, 1],
    [1, 3, 4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 3, 1],
    [1, 3, 4, 0, 0, 0, 0, 4, 4, 0, 0, 0, 0, 4, 3, 1],
    [1, 3, 3, 4, 0, 0, 4, 3, 3, 4, 0, 0, 4, 3, 3, 1],
    [1, 3, 3, 3, 4, 4, 3, 3, 3, 3, 4, 4, 3, 3, 3, 1],
    [0, 1, 2, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 2, 1, 0],
    [0, 0, 1, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 1, 0, 0],
    [0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

    // 5 x 5
let textarr = [
    ["Ble", "Ble", "Ble", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Eek", "Eek", "Ble", "Eek", "Eek", "Ble", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Eek", "Eek", "Ble", "Eek", "Eek", "Ble", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Ble", "Ble", "Ble", "Ble", "Ble", "Ble", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Ble", "Ble", "Ble", "Ble", "Ble", "Ble", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Boo", "Boo", "Boo", "Boo", "Boo", "Boo", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Ble", "Ble", "Ble", "Ble", "Ble", "Ble", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Ble", "Ble", "Ble", "Ble", "Ble", "Ble", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Ahh", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Gah", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Ble", "Ble", "Ble"],
    ["Ble", "Ble", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Gah", "Ble", "Ble", "Ble", "Ble"],
    
 ];

let font1;
let images =[];

let currentPage = 0;

function preload()  {
       font1 = loadFont('assets/oswald.ttf');
       images[0] = loadImage('assets/brain.jpg');
       images[1] = loadImage('assets/caveman.png');
       images[2] = loadImage('assets/ehh.jpg');
       images[3] = loadImage('assets/ghost.jpg');
       images[4] = loadImage('assets/normal.jpg');
       images[5] = loadImage('assets/butt.jpeg');
       images[6] = loadImage('assets/hero.jpg');
       images[7] = loadImage('assets/imagination.jpg');
       images[8] = loadImage('assets/smart.jpeg');
}

function setup() {
     createCanvas(800, 700);
     background(0, 60, 150);
     fill(100);
     textAlign(LEFT);
     textFont(font1);   
}

function draw() {
    background(0,15);

    if (currentPage == 1) {
        background(50);
      //2darr, x,y,rot,scale, alpha
    //   mapToMonoPixels(gridarr1, -30, -20, 0, 8, 40);
    //   mapToMonoPixels(gridarr1, 30, 20, 45, 2, 255);
    //   mapToMonoPixels(gridarr1, 580, 20, 20, 1.25, 100);
    //   mapToColorPixels(gridarr1, 220, 290, 45, 1.15, 255);
      mapToColorPixels(gridarr1, 160, 460, 0, 1, 255);
      mapToColorText(textarr, 350, 100, 0, 0.9, 175);
      mapToColorPixels(gridarr2, 100, 200, 0, 1, 255)
      mapToColorPixels(gridarr4, 450, 400, 0, 1, 250);

      push();
      translate(50,30);
      fill(200);
      textSize(20);
      let t = "This is the original copy of my number grid array and text array. The number array is Spongebob in a ghost costume (bottom left) and the text array is a generic ghost (top right). "
      t += "\n";   // this is a command you can put in text to create a line break.
        t += "I also included Nabeeha's (top left) and Jingyi's (bottom right).";
      text(t,0,0,300);  // the 4th argument is the textWidth per line.
      pop();
 

    } else if (currentPage == 2) {
              //2darr, x,y,rot,scale, alpha

     mapToColorShapes(gridarr2, -30, 0, 0, 9, 8);
    //  mapToColorPixels(gridarr1, 520, 260, 45, 2.15, 155);
     mapToColorShapes(gridarr1, 700, 240, 90, 0.35, 255);
     mapToColorShapes(gridarr1, 270, 110, -25, 1.2, 120);
    //  mapToColorText(textarr, 450, 50, -15, 0.45, 175);
     mapToWeirdText(textarr, 400, 350, 10, 1, 255); 
     mapToMonoPixels(gridarr1, 150, 200, 45, 2, 255);
     mapToWeird(gridarr1, 730,1, 69, 1, 200);

     push();
     translate(40,50);
     fill(250);
     textSize(20);
     let t = "This contains the same number and text array but I changed the rotation, color, scale, and shape for them."
     text(t,0,0,300);
     pop();


    } else if (currentPage == 3) {
        //2darr, x,y,rot,scale, alpha

      mapToColorShapes(gridarr2, -30, 0, 0, 9, 8);
     //  mapToColorPixels(gridarr1, 520, 260, 45, 2.15, 155);
      mapToBitMaps(gridarr1, images, 200, 201, 0, 2, 20);

     // mapToColorShapes(gridarr1, 120, 480, 0, 0.65, 255);
     // mapToColorShapes(gridarr1, 270, 180, -25, 1.2, 120);
     // mapToColorText(textarr, 450, 50, -15, 0.45, 175);
     // mapToWeirdText(textarr, 100, 350, 10, 1.55, 255); 
     // mapToMonoPixels(gridarr1, 30, 100, 45, 2, 255);
     // mapToWeird(gridarr1, 730,200, 69, 1, 200);

     push();
     translate(40,50);
     fill(250);
     textSize(20);
     let t = "This just contains my grid array but displayed with the images because pages 4 and 5 were too slow for me to work with."
     text(t,0,0,300);
     pop();


   } else if (currentPage == 4) {
              //2darr, x,y,rot,scale, alpha
        mapToColorShapes(gridarr4, 100, 100, -20, 10.85,7);
        mapToBitMaps(gridarr2,images, 100, 130, -3, 1.55);
        mapToTintedBitMaps(gridarr4,images, 500, 120, 0, 0.8,190);
        mapToColorShapes(gridarr2, 520, 260, 45, 2.15, 255);
        // mapToColorPixels(gridarr4, 420, 360, 205, 2.15, 155);
        mapToWeird(gridarr4, 320, 460, 105, 1.2, 255);
        push();
        translate(40,50);
        fill(200);
        textSize(20);
        let t = "This contains the arrays from my groupmates Jingyi and Nabeeha. I also made changes to these and displayed them using the images. (Sorry Jupiter yours had too many colors).";
        t += "\n";   // this is a command you can put in text to create a line break.
        // t += "..and them some.";
        text(t,0,0,400);
        pop();

    } else if (currentPage == 5) {
              //2darr, x,y,rot,scale, alpha
        mapToBitMaps(gridarr2, images, -400, 0, -20, 8,200);
        mapToColorShapes(gridarr4, 500, 10, -3, 1.2);
        // mapToTintedBitMaps(gridarr2,images, 200, 120, 0, 2.85,190);
        mapToMonoPixels(gridarr4, 220, 260, 45, 2, 250);
        mapToMonoPixels(gridarr2, 620, 460, 45, 1, 250);
        mapToTintedBitMaps(gridarr4, images, 220, 360, 205, 2.15, 155);
        mapToWeird(gridarr2, 800, 300, 105, 1.2, 255);
        push();
        translate(40,50);
        fill(250);
        textSize(20);
        let t = "This is just more of the same stuff in page 3.";
        t += "\n";   // this is a command you can put in text to create a line break.
        // t += "..and them some.";
        text(t,0,0,400);
        pop();

    } else {
        //where intro page is
        push();
        translate(80,100);
        fill(200);
        textSize(40);
        text ("My groups memebers are Jupiter, Nabeeha, and Jingyi.",0 ,0, 600 );
        translate(0,120);
        text ("I have 8 mapped images, copied at least twice \nfor a total of more than 16.",0 ,0,800 );
        translate(250,120);
        mapToColorPixels(gridarr1, -250, 0, 0, 1, 255);
        mapToColorText(textarr, 50,0,0,.9,255);
        pop();

    }

}

function keyPressed() { 

  
    //console.log(key);
     // or 
    if ( key == '1' ) { 
      console.log("Page 1");
      currentPage = 1;

     } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
        
     } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   
     } else if ( key == '4' ) { 
        console.log("Page 4");
        currentPage = 4;   
     } else if ( key == '5' ) { 
        console.log("Page 5");
        currentPage = 5;   
     } else {
        currentPage = 0;

     }
  
    }

// the map functions.

          //2darr, x,y,rot,scale, alpha
function mapToMonoPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 128, fade);
            ellipse(j * 12, i * 12, 12, 12);
        }
    }
   pop();

}

         //x,y,rot,scale, alpha
function mapToColorPixels(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == 1 ){//dark grey
                  fill(71, 98, 112, fade);
              } else if ( value == 2 ) {//grey
                  fill(115, 164, 189, fade);
              } else if ( value == 3 ) {//red
                fill(255,0,0, fade);
              } else if (value == 4) {//yellow
                 fill(255, 231, 10, fade); 
              }else if (value == 5) {//brown
                fill(145, 116, 32, fade); 
             }else if (value == 6) {//blue
                fill(43, 184, 255, fade); 
             }else if (value == 7) {//white
                fill(255, fade); 
             }else if (value == 8) {//black
                fill(0, fade); 
             } else{//sky blue

                fill (201, 106, 80, fade);
             }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}

         //x,y,rot,scale, alpha
function mapToWeird(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == 1 ){//dark grey
                  fill(31, 98, 192, fade);
              } else if ( value == 2 ) {//grey
                  fill(115, 114, 200, fade);
              } else if ( value == 3 ) {//red
                fill(205,0,0, fade);
              } else if (value == 4) {//yellow
                 fill(255, 231, 10, fade); 
              }else if (value == 5) {//brown
                fill(145, 216, 100, fade); 
             }else if (value == 6) {//blue
                fill(43, 184, 255, fade); 
             }else if (value == 7) {//white
                fill(55, fade); 
             }else if (value == 8) {//black
                fill(100, fade); 
             } else{//sky blue

                fill (21, 106, 80, fade);
             }
            rect(j * 12, i * 12, 10, 10);
        }
    }
    pop();

}

function mapToColorShapes(arr,lx,ly,rot,sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    noStroke();
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == 0 ) {
                  fill(100,70,50, fade);
                  ellipse(j * 12, i * 12, 20, 20);
              } else if ( value == 1 ){
                  fill(150,50,70, fade);
                   ellipse(j * 12, i * 12, 20, 20,20);
              } else {
                  fill(100,100,20, fade);
                   ellipse(j * 12, i * 12, 20, 20,5);
              }
        }
    }
    pop();

}

function mapToColorText(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "Ahh" ) { //grey
                  fill(115, 164, 189, fade);
              } else if ( value == "Boo" ){ //red
                  fill(200,0,30, fade);
              } else if (value == "Ble"){ //white
                  fill(255, fade);
              } else if (value == "Gah"){ //dark grey
                fill(71, 98, 112, fade);
            } else if (value == "Eek"){ //black
                fill(0, fade);
            } 
               text(value, j * 25, i * 20,100);
        }
    }
    pop();

}

function mapToWeirdText(arr,lx,ly,rot,sc,fade) {
    textSize(15);
    textAlign(CENTER);
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
              if ( value == "Ahh" ) { //grey
                  fill(205, 164, 189, fade);
              } else if ( value == "Boo" ){ //red
                  fill(150,50,20, fade);
              } else if (value == "Ble"){ //white
                  fill(25,100,200, fade);
              } else if (value == "Gah"){ //dark grey
                fill(201, 98, 212, fade);
            } else if (value == "Eek"){ //black
                fill(100,200,10, fade);
            } 
               text(value, j * 25, i * 20,100);
        }
    }
    pop();

}

                            //2darray,images in array ,x,y,rot,scale, alpha
 function mapToBitMaps(arr,imgarr,lx,ly,rot,sc) {
            push();
            translate(lx,ly);
            rotate(radians(rot));
            scale(sc);
            let nuimg;
            for (var i = 0; i < arr.length; i++) {
                for (var j = 0; j < arr[0].length; j++) {
                     let value = arr[i][j];
                      if ( value == 0 ) {
                        nuimg = imgarr[0];
                      } else if ( value == 1 ){
                        nuimg = imgarr[1];
                      } else if ( value == 2 ) {
                        nuimg = imgarr[2];
                      } else if ( value == 3 ) {
                        nuimg = imgarr[3];
                      } else if ( value == 4 ) {
                        nuimg = imgarr[4];
                      } else if ( value == 5 ) {
                        nuimg = imgarr[5];
                      } else if ( value == 6 ) {
                        nuimg = imgarr[6];
                      } else if ( value == 7 ) {
                        nuimg = imgarr[7];
                      } else {
                        nuimg = imgarr[8];
                      }
                    image(nuimg, j * 12, i * 12, 14, 14);
                }
            }
            pop();
        
}
    //2darray,images in array ,x,y,rot,scale, alpha
    function mapToTintedBitMaps(arr,imgarr,lx,ly,rot,sc,fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let c;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
                let value = arr[i][j];
                if ( value == 0 ) {
                nuimg = imgarr[3];
                c = color(255,100,0,fade);
                } else if ( value == 1 ){
                c = color(255,0,255,fade);
                nuimg = imgarr[2];
                } else if ( value == 2 ) {
                nuimg = imgarr[1];
                c = color(20,200,120,fade);
                } else {
                nuimg = imgarr[0];
                c = color(120,0,240,fade);
                }
            
            c = color(255,fade);
            tint(c);
            image(nuimg, j * 9, i * 9, 15, 15);
        }
    }
    pop();

    }
