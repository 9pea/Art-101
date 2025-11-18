
// This contains the use of both Scenemanager and P5.play
// Documentation and additional examples of these libraries can be found at:
//https://github.com/mveteanu/p5.SceneManager
//http://molleindustria.github.io/p5.play/


let image1_up, image2_over;
let snd1,snd2,snd3,snd4,snd5,snd6,img1,img2,img3,img4,img5;
// let zoom = new Zoom(Vec.fromList([200, 200]));
// var duration;
// var  slideWidth = 500;

// global manager object
var mgr;

// define your p5.play sprites that you want to use in more that 1 scene.
var ghosty;



function preload() {
    // sound should be loaded so its available for all places.
   snd1 = loadSound("assets/background.mp3");
   snd2 = loadSound("assets/zapsplat.mp3");
   snd3 = loadSound("assets/angry.mp3");
   snd4 = loadSound("assets/laughing.mp3");
   snd5 = loadSound("assets/sad.mp3");
   snd6 = loadSound("assets/love.mp3");
   img1 = loadImage("assets/main.png");
   img2 = loadImage("assets/angry_scene.png");
   img3 = loadImage("assets/rollingcrying_scene.png");
   img4 = loadImage("assets/sad_scene.png");
   img5 = loadImage("assets/heart_scene.png");

}

function setup() {
    createCanvas(1000, 1000);
    //console.log(hell);
    mgr = new SceneManager();

    ghosty = createSprite(0, 0);
    ghosty.addAnimation("normal", "assets/emoji0001.png");  // first image, and last image
    ghosty.addAnimation("stand", "assets/emoji0004.png",  "assets/emoji0001.png"); // first image, and last image
     // make the sprite invisible until you need it.
    ghosty.visible = false;

    // Preload scenes. Preloading is normally optional
    // ... but needed if showNextScene() is used.
    // mgr.addScene (main);
    // mgr.addScene (angry);
    // mgr.addScene (lmfao);
    // mgr.addScene (sad);
    // mgr.addScene (heart);
    mgr.addScene (splash);
    mgr.addScene (main);
    mgr.addScene (help);
    mgr.addScene (angry);
    mgr.addScene (lmfao);
    mgr.addScene (sad);
    mgr.addScene (heart);
    mgr.showNextScene();

    // noSmooth();

}

function draw()
{
    

    // zoom.apply();

    // passthe current draw function into the SceneManager
    mgr.draw();

    // zoom.apply();
}

function mousePressed()
{
   // pass the mousePressed message into the SceneManager
  mgr.mousePressed();
}

function keyPressed()
{
    // You can optionaly handle the key press at global level...
    switch(key)
    {
        case '1':
            mgr.showScene( splash );
            break;
        case '2':
            mgr.showScene( main );
            break;
        case '3':
            mgr.showScene( help );
            break;
        case '4':
            mgr.showScene( angry );
            break;
        case '5':
            mgr.showScene( lmfao );
            break;
        case '6':
            mgr.showScene( sad );
            break;
        case '7':
            mgr.showScene( heart );
            break;
        case 'h':
            mgr.showScene( help );
            break;
    }

    // ... then dispatch via the SceneManager.
    mgr.keyPressed();
}

// function mouseWheel(event) {
//     // Use the position of the mouse wheel and how much the wheel was scrolled to control the zoom
//     zoom.zoom(
//       // The location to zoom to, which is mouseX and mouseY offset so that 0, 0 is at the center of the screen
//       Vec.fromList([mouseX, mouseY]).numSub(200),
//       event.delta / 1000 // How much to zoom
//     );
//   }
