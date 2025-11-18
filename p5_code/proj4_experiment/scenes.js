
// =============================================================
// =                         BEGIN SCENES                      =
// =============================================================


////////////////////////////// 1 /////////////////
function splash()  {
    var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the splash scene
    let btnevent1 =false;//help
    let btnevent2 =false;//start
    let btnevent3 =false;//start
    let btnevent4 =false;//help
    let btnevent5 =false;//start
    let btnevent6 =false;//start
    let btnevent7 =false;//start
    let btnevent8 =false;//start

    // scene1.setup
    this.setup = function() {
      console.log("We are at setup for splash");
      // do all stuff you want to initialize things,
      // as this it need to be called only once.
      outputVolume(.15);  // turn down the volume.  // 0-1
    }

    // enter() will be called each time SceneManager switches
    // to this scene
    this.enter = function()  {
        console.log("We are at entering splash");
        background("grey");
        textAlign(CENTER);
        textSize(30);
        noStroke();

        // reset or disable the other scenes and their stuff
        // turn off the other scene stuff
        snd1.pause();
        // make sure ghost is gone from this scene
        ghosty.visible = false;
      

    }


    this.draw = function()
    {
      background("darkred");
      // this is the draw function for all p5.play commands
     
      fill(200,150,200);
      ellipse(width/2,height/2-10,500,500);
      ellipse(100,100,300,300);
      ellipse(900,900,300,300);
      ellipse(900,100,300,300);
      ellipse(100,900,300,300);
      // fill(0,120,200);
      // rect(-5,height-170,width+5,170);

      
        push();
        
        translate(width/2,200);
        fill(10,200,160);
        text("WAAAAAAAAAAAAAA!",0,-100);
        scale(7);
        text('🧠',-40,25,80);


        if (loy > height-140) {
          loy = 0;
        }
         loy++;

        pop();
        
    
   
                             // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent1 = checkButtonPress("Info!",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
      if (btnevent1) { // help
        btnevent1 = false;
        this.sceneManager.showScene( help );
      }
                            // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
      btnevent2 = checkButtonPress("Explore Here", width/2-65, height-140, 130, 40, color(120,180,100), color(100), color(250));
      if (btnevent2) {   // main or next scene
        btnevent2 = false;
         playshortsound();
         this.sceneManager.showNextScene();
      }

    }

    this.keyPressed = function() {
        fill(0,255,0);
        text(keyCode, textX, textY += 10);

        if ( textY > height )  {
            textX += 20;
            textY = 0;
        }
    }

    this.mousePressed = function() {

     
    }
    
}



///////////////////////  2  ////////////////////////

function main()  {
   this.y = 0;
    // var y = 0;
    this.lox = 50;
    // var lox = 50;

   this.loy = 120;
    // var loy = 120;

   let btnevent1 = false;

  this.setup = function() {
      console.log("We are at setup for main");
      // make sure ghost is gone from this scene
  }

  this.enter = function()
  {
    console.log("We are at entering main");
    ghosty.position.x = 50;
    ghosty.position.y = 80;
    ghosty.position.x =  width/2;
    ghosty.position.y =  height/2;
    ghosty.visible = true;
    ghosty.changeAnimation("normal");


    if ( !snd1.isPlaying() ) {
      snd1.play();
   }


  }




    this.draw = function() {
      background("darkblue");
      image(img1, 0, 0, 1000, 1000);
      // this is the draw function for all p5.play commands
     
      // fill(250,180,60);
      // ellipse(width/2,height/2+100,260,260);
      // fill(100,120,200);
      // rect(-5,height-190,width+5,190);
      // ghost events defined

    
    ghosty.changeAnimation("normal");

     if ( ghosty.mouse.hovering() ) {
        console.log("over");
        ghosty.changeAnimation("stand");
        // ghosty.position.x += random(-9,9);
        // ghosty.position.y += random(-9,9);
        // snd2.play();  // lots of fast sound playing
     }
      
    //  if (ghosty.mouse.pressing()) {
    //        if ( !snd2.isPlaying() ) {
    //           snd2.play();
    //       } else {
    //           snd2.pause();

    //       }

    //  }  


    // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Info!",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }

    btnevent3 = checkButtonPress("ANGRY!!!",width-830,height-660,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent3) { // help
      btnevent3 = false;
      playangrysound();
      this.sceneManager.showScene( angry );
    }

    btnevent4 = checkButtonPress("Rolling Crying :)",width-300,height-650,150,40,color(220,100,100),color(100),color(250));  
    if (btnevent4) { // help
      btnevent4 = false;
      playlaughingsound();
      this.sceneManager.showScene( lmfao );
    }

    btnevent5 = checkButtonPress("Sad:(",width-830,height-220,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent5) { // help
      btnevent5 = false;
      playsadsound();
      this.sceneManager.showScene( sad );
    }

    btnevent6 = checkButtonPress("Heart!",width-280,height-200,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent6) { // help
      btnevent6 = false;
      playlovesound();
      this.sceneManager.showScene( heart );
    }

    btnevent7 = checkButtonPress("BACK!",width-900,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent7) { // help
      btnevent7 = false;
      playshortsound();
      this.sceneManager.showScene( splash );
    }

    // zoom.apply();

    }  //end

    this.mousePressed = function()
    {
      

    }


}



////////////////////////////// 3 /////////////////

function help() {
  var textX;
    var textY;
    var loy= 0;  // exists as data saved when in the splash scene

    this.setup = function()  {
        console.log("We are at setup for help");
        // access a different scene using the SceneManager

    }

    this.enter = function()
    {
     console.log("We are at entering for help");
     ghosty.visible = true;
     ghosty.position.x = 100;
     ghosty.position.y = 100;

    }

    this.draw = function() {
      background("lightblue");

      push();
        
        translate(width/2,loy-200);
        // fill(10,200,160);
        // text("WAAAAAAAAAAAAAA!",0,-100);
        scale(6);
        text('🧠',-40,0,80);
        text('🧠',-70,45,80); //good
        text('🧠',-100,25,80);
        // text('🧠',-130,15,80);
        // text('🧠',-160,50,80);
        text('🧠',-10,25,80);
        text('🧠',20,5,80);
        text('🧠',50,55,80);
        text('🧠',80,35,80);
        // text('🧠',110,50,80);
        // text('🧠',140,220,80);




        if (loy > height-140) {
          loy = 0;
        }
         loy++;

        pop();

      
      // this is the draw function for all p5.play commands
     
      // fill(200,150,0);
      // ellipse(width/2,height/2+150,260,220);
      fill(0,120,200);
      rect(-5,height-170,width+5,170); 
      fill("black");
      textAlign(LEFT);
      textSize(25);
      text( "So...............lost eh? \nWell you came to the right place.... " , 170,70);
      text( "Click on me, to go back to the main page,\nand roll over me to see what i can do. ", 20, 220);
      text ("To navigate, click on the green Explore button to proceed beyond the introduction page.", 20, 320);
      text ("Next, click on one of the 4 buttons: to see other emojis that represent the same emotion. \nAlso,hover over middle face to see what it does :)", 20, 420);
      text ("To go back to the splash page, click the Back button.", 20, 520);
      text("Use buttons 1-7 to navigate between the pages and also h to go to the help page.", 20, 620);

      

      if ( ghosty.mouse.hovering() ) {
        console.log("over");
        ghosty.changeAnimation("stand");
        // ghosty.position.x += random(-4,4);
        // ghosty.position.y += random(-2,2);
      
     }  else {

      ghosty.changeAnimation("normal");


     }
      

     if (ghosty.mouse.pressing()) {
           if ( !snd2.isPlaying() ) {
              snd2.play();
          } else {
              snd2.pause();

          }

       this.sceneManager.showScene( main );

     }  
     



        
    }

   

}




////////////////////////////// angry /////////////////
function angry()  {
  var textX;
  var textY;
  var loy= 0;  // exists as data saved when in the splash scene
  // let btnevent1 =false;//help
  // let btnevent2 =false;//start
  // let btnevent3 =false;//start

  // scene1.setup
  this.setup = function() {
    console.log("We are at setup for splash");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    outputVolume(.15);  // turn down the volume.  // 0-1
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering splash");
      background("grey");
      textAlign(CENTER);
      textSize(30);
      noStroke();

      // reset or disable the other scenes and their stuff
      // turn off the other scene stuff
      snd1.stop();
      // make sure ghost is gone from this scene
      ghosty.visible = false;
    

  }


  this.draw = function()
  {
    background("lightblue");
    image(img2, 0, 0, 1000, 1000);
    textSize(25);
    fill(200);
    text("clown emoji \n mocking \n dismissing", 200, 350);
    text("eye roll \n dismissing \n tired", 800, 350);
    text("upside down smile \n tired \n upset", 200, 820);
    text("smile \n acceptance \nsarcastic representation of anger", 800, 830);
    // this is the draw function for all p5.play commands
   
    // fill(200,150,0);
    // ellipse(width/2,height/2-10,240,240);
    // fill(200,120,200);
    // rect(-5,height-270,width+5,170);

    
    //   push();
      
    //   translate(width/2,200);
    //   fill(10,200,160);
    //   text("WAAAAAAAAAAAAAA!",0,-100);
    //   scale(4);
    //   text('🧠',-40,-5,80);


    //   if (loy > height-140) {
    //     loy = 0;
    //   }
    //    loy++;

    //   pop();
      
  
 
                           // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Info!",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }

    btnevent8 = checkButtonPress("BACK!",width-900,height-70,100,40,color(220,200,100),color(100),color(250));  
    if (btnevent8) { // help
      btnevent8 = false;
      this.sceneManager.showScene( main );
    }

  }

  this.keyPressed = function() {
      fill(0,255,0);
      text(keyCode, textX, textY += 10);

      if ( textY > height )  {
          textX += 20;
          textY = 0;
      }
  }

  this.mousePressed = function() {

   
  }
  
}

////////////////////////////// Rolling Cying /////////////////
function lmfao()  {
  var textX;
  var textY;
  var loy= 0;  // exists as data saved when in the splash scene
  // let btnevent1 =false;//help
  // let btnevent2 =false;//start
  // let btnevent3 =false;//start

  // scene1.setup
  this.setup = function() {
    console.log("We are at setup for splash");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    outputVolume(.15);  // turn down the volume.  // 0-1
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering splash");
      background("grey");
      textAlign(CENTER);
      textSize(30);
      noStroke();

      // reset or disable the other scenes and their stuff
      // turn off the other scene stuff
      snd1.stop();
      // make sure ghost is gone from this scene
      ghosty.visible = false;
    

  }


  this.draw = function()
  {
    background("lightblue");
    image(img3, 0, 0, 1000, 1000);
    textSize(20);
    fill(0);
    text("Laughing crying \nlaughing at sadness \npittying", 220, 360);
    text("Nerd \nmocking \ndemeaning", 750, 370);
    text("Yawning \ndismmissive \nmocking", 220, 865);
    text("Skull \na slang - I'm dead \nsaying its very funny", 750, 865);
    
    // this is the draw function for all p5.play commands
   
    // fill(200,150,0);
    // ellipse(width/2,height/2-10,240,240);
    // fill(200,120,200);
    // rect(-5,height-270,width+5,170);

    
    //   push();
      
    //   translate(width/2,200);
    //   fill(10,200,160);
    //   text("WAAAAAAAAAAAAAA!",0,-100);
    //   scale(4);
    //   text('🧠',-40,-5,80);


    //   if (loy > height-140) {
    //     loy = 0;
    //   }
    //    loy++;

    //   pop();
      
  
 
                           // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Info!",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }

    btnevent8 = checkButtonPress("BACK!",width-900,height-70,100,40,color(220,200,100),color(100),color(250));  
    if (btnevent8) { // help
      btnevent8 = false;
      this.sceneManager.showScene( main );
    }

  }

  this.keyPressed = function() {
      fill(0,255,0);
      text(keyCode, textX, textY += 10);

      if ( textY > height )  {
          textX += 20;
          textY = 0;
      }
  }

  this.mousePressed = function() {

   
  }
  
}

////////////////////////////// Sadge /////////////////
function sad()  {
  var textX;
  var textY;
  var loy= 0;  // exists as data saved when in the splash scene
  // let btnevent1 =false;//help
  // let btnevent2 =false;//start
  // let btnevent3 =false;//start

  // scene1.setup
  this.setup = function() {
    console.log("We are at setup for splash");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    outputVolume(.15);  // turn down the volume.  // 0-1
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering splash");
      background("grey");
      textAlign(CENTER);
      textSize(30);
      noStroke();

      // reset or disable the other scenes and their stuff
      // turn off the other scene stuff
      snd1.stop();
      // make sure ghost is gone from this scene
      ghosty.visible = false;
    

  }


  this.draw = function()
  {
    background("lightblue");
    image(img4, 0, 0, 1000, 1000);
    textSize(20);
    fill(200);
    text("Dove \nway of sending condolenses \ncould just be a bird", 200, 350);
    text("Upside Down Smile \ndissapointed \nin disbelief", 750, 350);
    text("Salute \nway of giving respect \nway of sending condolenses", 200, 830);
    text("Neutral \nshows concern about something \nshows dissapointment", 760,840);
    // this is the draw function for all p5.play commands
   
    // fill(200,150,0);
    // ellipse(width/2,height/2-10,240,240);
    // fill(200,120,200);
    // rect(-5,height-270,width+5,170);

    
    //   push();
      
    //   translate(width/2,200);
    //   fill(10,200,160);
    //   text("WAAAAAAAAAAAAAA!",0,-100);
    //   scale(4);
    //   text('🧠',-40,-5,80);


    //   if (loy > height-140) {
    //     loy = 0;
    //   }
    //    loy++;

    //   pop();
      
  
 
                           // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Info!",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }

    btnevent8 = checkButtonPress("BACK!",width-900,height-70,100,40,color(220,200,100),color(100),color(250));  
    if (btnevent8) { // help
      btnevent8 = false;
      this.sceneManager.showScene( main );
    }

  }

  this.keyPressed = function() {
      fill(0,255,0);
      text(keyCode, textX, textY += 10);

      if ( textY > height )  {
          textX += 20;
          textY = 0;
      }
  }

  this.mousePressed = function() {

   
  }
  
}

////////////////////////////// Heart /////////////////
function heart()  {
  var textX;
  var textY;
  var loy= 0;  // exists as data saved when in the splash scene
  // let btnevent1 =false;//help
  // let btnevent2 =false;//start
  // let btnevent3 =false;//start

  // scene1.setup
  this.setup = function() {
    console.log("We are at setup for splash");
    // do all stuff you want to initialize things,
    // as this it need to be called only once.
    outputVolume(.15);  // turn down the volume.  // 0-1
  }

  // enter() will be called each time SceneManager switches
  // to this scene
  this.enter = function()  {
      console.log("We are at entering splash");
      background("grey");
      textAlign(CENTER);
      textSize(30);
      noStroke();

      // reset or disable the other scenes and their stuff
      // turn off the other scene stuff
      snd1.stop();
      // make sure ghost is gone from this scene
      ghosty.visible = false;
    

  }


  this.draw = function()
  {
    background("lightblue");
    image(img5, 0, 0, 1000, 1000);
    textSize(20);
    fill(200);
    text("Smiling with Hearts \nsaying you appreciate someone \nsarcastic sign of love", 220, 410);
    text("Fire \nway of calling someone attractive \nliteral fire", 750, 420);
    text("Scrunched Face \nway of saying someone is attractive \nway of saying you want something", 220, 870);
    text("Surprise Face \nstunned by something beautiful \nshocked by something unexpected", 750,870);
    // this is the draw function for all p5.play commands
   
    // fill(200,150,0);
    // ellipse(width/2,height/2-10,240,240);
    // fill(200,120,200);
    // rect(-5,height-270,width+5,170);

    
    //   push();
      
    //   translate(width/2,200);
    //   fill(10,200,160);
    //   text("WAAAAAAAAAAAAAA!",0,-100);
    //   scale(4);
    //   text('🧠',-40,-5,80);


    //   if (loy > height-140) {
    //     loy = 0;
    //   }
    //    loy++;

    //   pop();
      
  
 
                           // title,lx,ly, btnW, btnH, upcolor, rollcolor, downcolor
    btnevent1 = checkButtonPress("Info!",width-150,height-70,100,40,color(220,100,100),color(100),color(250));  
    if (btnevent1) { // help
      btnevent1 = false;
      this.sceneManager.showScene( help );
    }

    btnevent8 = checkButtonPress("BACK!",width-900,height-70,100,40,color(220,200,100),color(100),color(250));  
    if (btnevent8) { // help
      btnevent8 = false;
      this.sceneManager.showScene( main );
    }

  }

  this.keyPressed = function() {
      fill(0,255,0);
      text(keyCode, textX, textY += 10);

      if ( textY > height )  {
          textX += 20;
          textY = 0;
      }
  }

  this.mousePressed = function() {

   
  }
  
}








function checkButtonPress(str,bx,by,boxW,boxH,upcolor,ovcolor,dncolor) {

  let btnc = "";
  let btnstate =false;

  // Test if the cursor is over the box
  if ( mouseX > bx - boxW &&
       mouseX < bx + boxW &&
       mouseY > by - boxH &&
       mouseY < by + boxH ) {
       overBox = true;

    if (!mouseIsPressed) {
      stroke(255);
      btnc = ovcolor;
      btnstate = false;
    } else {
      console.log(str + " pressed");
      stroke(255);
      btnc = dncolor;
      btnstate = true;
    }

  } else {
    stroke(255);
    btnc = upcolor;
    overBox = false;
  }

  push();
  translate(bx,by);
  fill(btnc);
  rect(0, 0, boxW, boxH,10); // draw the box

  fill(20);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text (str,boxW/2,28);

    pop();

    return btnstate;
    

}



function playshortsound() {
  if ( !snd2.isPlaying() ) {
    snd2.play();
  } else {
     snd2.stop();
 }


}

function playangrysound() {
  if ( !snd3.isPlaying() ) {
    snd3.play();
  } else {
     snd3.stop();
 }


}

function playlaughingsound() {
  if ( !snd4.isPlaying() ) {
    snd4.play();
  } else {
     snd4.stop();
 }


}

function playsadsound() {
  if ( !snd5.isPlaying() ) {
    snd5.play();
  } else {
     snd5.stop();
 }


}

function playlovesound() {
  if ( !snd6.isPlaying() ) {
    snd6.play();
  } else {
     snd6.stop();
 }


}

