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
    this.cat1(this.k, this.lox+100, this.loy);
    // this.knface2(this.k, this.lox, this.loy);
  }

  //  faceP(k,lx,ly) {
  //   // head
  //   push();
  //   translate(lx,ly);
  //   rotate (radians(this.rot));
  //   fill(k);
  //   ellipse(0,0,100,150);  // anchor
  //   //eye(-25,-15,-5,5);
  //   this.patch(-30,-20,-5,5);
  //   this.eye(25,-15,this.wiggle,5);
  //   this.nose(color(200),0,5);
  //     //color,x,y,mw,mh
  //   this.mouth(color(50),0,40,20,this.ohh);  //(teeth, tongue, uvela, piercing)
  //   pop();
  
  // }
  
  
  //  patch(lx,ly,px,py) {
  //   fill(20);
  //   rect(lx,ly,20,17,5);
  //   fill(0);
  //   // ellipse(lx+px,ly+py,5,5);
  // }
  
  
  //  eye(lx,ly,px,py) {
  //   fill(240);
  //   ellipse(lx,ly,20,17);
  //   fill(0);
  //   ellipse(lx+px,ly+py,5,5);
  // }
  
  //  nose(k,lx,ly) {
  //   fill(k);
  //   rect(lx+-5,ly+0,10,17,5);
  // }
  
  
  //  mouth(k,lx,ly,msw,msh) {
  
  //   fill(k);
  //   ellipse(lx,ly,msw,msh);
  // }

  twitch(){

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


  spin(){
    this.rot = rotate(radians(random(-10,10)));
  }

  scale(){

    this.big = scale(random(10));
  }
  //----------------------------------------------------------------

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
  
   knface2(k,x,y,w,h) {
  
    push();
    // noStroke();
    translate(x,y);
    rotate( radians(w));
    scale(h);
  
    fill(250);
    ellipse(0,0,50,70); // anchor
    fill(0);
    ellipse(0+0,0+10, 30,10); //mouth
    fill(50,100,40);
    fill (250,20,20);
    ellipse (0+ -0,0+ 30,20,50); //tongue
    fill(250);
    ellipse(0+ 0,0+ 8, 25,5); //mouth
  
    this.hat();
    this.eye2(0+ 10 ,0+ -10);
    this.eye2(0+ -10 ,0+ -10);

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

  //-------------------------------------------------------------

  cat1(k,lx,ly) {
    // head
    push();
    translate(lx,ly);
    rotate(radians(this.rot));
    fill(0);
    ellipse(30,-5, 75, 60);// anchor
    //this.eye(-25,-15,-5,5);
    this.paw(-30,-20,-5,0);
    this.eyes(25,-15,this.wiggle,5);
    this.nose(color(200),25,-10);
    //   //color,x,y,mw,mh
    this.ears(color(50),25,-15,20,this.ohh);  
    pop();
  
  }


   paw(lx,ly,px,py) {
    fill(0);
    rect(lx,ly,20,17,5);
    fill(0);
    // ellipse(lx+px,ly+py,5,5);
  }
  
  
   eyes(lx,ly,px,py) {
    fill (0,255,255);
    ellipse(lx+23,ly+14, 18, this.wiggle);
    ellipse(lx-12,ly+14, 18, this.wiggle);
    fill (0)
    ellipse(lx+23,ly+14, 5, this.wiggle);
    ellipse(lx-12,ly+14, 5, this.wiggle);

  }
  
   nose(k,lx,ly) {
    fill (255,255,0)
  ellipse(lx+5,ly+20, 6, 5);
  }
  
  
   ears(k,lx,ly,msw,msh) {   
    fill (0)
    triangle (lx+10, ly, lx + 40, ly, lx + 25, ly - 40);
    triangle (lx-30, ly, lx , ly, lx -15, ly - 40);
      fill (255,0,255);
      triangle (lx+15, ly, lx + 35, ly, lx + 25, ly - 30);
      triangle (lx-25, ly, lx -5, ly, lx -15, ly - 30);
  }
  
}
