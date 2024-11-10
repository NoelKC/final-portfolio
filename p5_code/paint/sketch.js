
let currentkey = '1';
let bgc ;
let gkcount;
let smally; 
let WarriorsLogo; 
let WOOPER; 
let WHOPPER; 
let Illuminati; 

function setup() {
    createCanvas(1400, 800);
    background(255);
    smooth();
    bgc = color(255);
    gkcount = 20;
    smally = loadImage("assets/smally.png"); 
    WarriorsLogo = loadImage("assets/Golden_Warriors_Logo.png"); 
    WOOPER = loadImage("assets/WOOPER.png"); 
    WHOPPER = loadImage("assets/WHOPPER.png"); 
    Illuminati = loadImage("assets/Illuminati.png");
}


function draw() {
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

function drawChoice() {
  // the key mapping if statemens that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of
  // graphic function
  // key global variable contains whatever key was last pressed
  let currentkey = key;

switch(currentkey) {
//Brushes
case '1':
  console.log("1");  // Waluigi line
  ncWaluigi(gkcount, mouseX, mouseY, pmouseX, pmouseY);
  if (gkcount > 50 ) {
    gkcount = 1;
} else {
    gkcount+= .5;
}
  break;
case '2':
  console.log("2");  // Star line
  ncStar( gkcount, mouseX, mouseY, pmouseX, pmouseY);
  if (gkcount > 50 ) {
    gkcount = 1;
} else {
    gkcount+= .5;
}
  break;
case '3':
  console.log("3");  // Warrior Chess line
  ncWarriorChess(color(0,255,0), mouseX, mouseY, pmouseX, pmouseY);
  break;
case '4':
  console.log("4");  // Smally line
  ncSmally(gkcount, mouseX, mouseY, pmouseX, pmouseY);
  if (gkcount > 50 ) {
    gkcount = 1;
} else {
    gkcount+= .5;
}
  break;
case '5':
  console.log("5");  // CrazCircle line
  ncCrazCircle(gkcount, mouseX, mouseY, pmouseX, pmouseY);
  if (gkcount > 50 ) {
    gkcount = 1;
} else {
    gkcount+= .5;
}
  break;
case '6':
  console.log("6");  // MysticalTriangle line
  ncMysticTriangle( gkcount, mouseX, mouseY, pmouseX, pmouseY); 
  if (gkcount > 50 ) {
    gkcount = 1;
} else {
    gkcount+= .5;
}
  break;
case '7':
  console.log("7");  // Wooper line
  ncWooper( gkcount, mouseX, mouseY, pmouseX, pmouseY); 
  if (gkcount > 50 ) {
      gkcount = 1;
} else {
    gkcount+= .5;
}
  break;
case '8':
  console.log("8");  // Wooper line
  ncIlluminati( gkcount, mouseX, mouseY, pmouseX, pmouseY); 
  break;


//system 
case 'e':
  console.log("SmallErase");  // small erase with bg color
  SmallEraser(bgc,mouseX, mouseY,25);
  break;
case 'r':
  console.log("BigErase");  // big erase with bg color
  BigEraser(bgc,mouseX, mouseY,25);
  break;




default:             // Default executes if the case labels
  console.log("None");   // don't match the switch parameter
  break;
}

}

function ncWaluigi( k,  lx, ly,  px, py) { // slightly randomized lines in the shape of Waluigi's logo 
  let rando = random(15);
  let ran = random(10);
  let ah = random(100);
  strokeWeight(ran);
  //blue  
  stroke(0,0,ah+100);
  line(lx+ran, ly-ran, px+rando, py+rando);
  //purple  
  stroke(ah+80,0,ah+150);
  line(lx+ran+60, ly+ran, px+rando, py+rando);
  //yellow  
  stroke(ah+150,242,0);
  line(lx+ran, ly+ran+100, px+rando, py+rando);
  console.log(mouseX);
  console.log(pmouseX);
}

function ncStar( k,  lx, ly,  px, py) { //a star made out of lines that have slight random sizes 
  let rando = random(15);
  let ran = random(10);
  let ah = random(100);
  strokeWeight(ran);
  //blue 
  stroke(0,0,250);
  line(lx+5, ly-ran-20, px+rando, py+rando);
  //green 
  stroke(0,250,0);
  line(lx+ran+30, ly, px+rando, py+rando);
  //orange 
  stroke(252,186,3);
  line(lx+30, ly+ran+30, px+rando, py+rando);
  //red 
  stroke(250,0,0);
  line(lx-30, ly+ran+30, px+rando, py+rando);
  //purple 
  stroke(169,3,252);
  line(lx-ran-30, ly, px+rando, py+rando);
  console.log(mouseX);
  console.log(pmouseX);
}

function ncWarriorChess( k,  lx, ly,  px, py) { //Warriors logo in the center with rectangles surounding it 
  let rando = random(15);
  let ran = random(10);
  let ah = random(100);
  strokeWeight(0);
  //yellow right 1
    fill(ah+150,ah+80,0);
    rect( mouseX+50, mouseY, 10, 10 );
  //blue left 1
    fill(20,0,ah+ah);
    rect( mouseX-50, mouseY, 10, 10 );
  //yellow left 2 
    fill(ah+150,ah+80,0);
    rect( mouseX-100, mouseY, 10, 10 );
  //blue right 2 
    fill(20,0,ah+ah);
    rect( mouseX+100, mouseY, 10, 10 );
  //yellow right 3
    fill(ah+150,ah+80,0);
    rect( mouseX, mouseY+50, 10, 10 );
  //blue left 3
    fill(20,0,ah+ah);
    rect( mouseX, mouseY-50, 10, 10 );
  //yellow right 4
  fill(ah+150,ah+80,0);
  rect( mouseX, mouseY-100, 10, 10 );
  //blue left 4
    fill(20,0,ah+ah);
    rect( mouseX, mouseY+100, 10, 10 );

    image(WarriorsLogo, mouseX-20, mouseY-20, 60, 50);
}

function ncSmally( k,  lx, ly,  px, py) { //brush made out of a image of smally 
  let rando = random(100); 
      image(smally, mouseX-25, mouseY-25, 60, 60);
      console.log("smally");
}

function ncCrazCircle( k,  lx, ly, sz) { //randomizes circles 
  let rando = random(250); 
  let ran = random(60);
  strokeWeight(0);
  stroke(0);
  //red up left 
    fill(250,0,50, rando);
    ellipse(lx-ran, ly-ran, ran-50,ran-50);
  //purple up right 
    fill(150,0,250+50, rando);
    ellipse(lx+ran, ly-ran, ran-50,ran-50);
  //blue center 
    fill(0,0,250, rando);
    ellipse(lx, ly, ran-50,ran-50);
  //teal down left 
    fill(0,250,250+50, rando);
    ellipse(lx-ran, ly+ran, ran-50,ran-50);
  //green down right 
    fill(0,250,0, rando);
    ellipse(lx+ran, ly+ran, ran-50,ran-50);
}

function ncMysticTriangle( k,  lx, ly,  w, h) { //randomizes triangles 
  let rando = random(250); 
  let ran = random(100);
  let ah = random(60);
  strokeWeight(1);
  //orange center rigth ish 
  fill(250,80,0,rando);  
  stroke(245,220,174);
  triangle (lx+ah,ly+10,lx+10,ly-ran+20,lx+ah+20,ly+10);
  //red bottom left
  fill(250,0,0,rando);
  stroke(245,182,174);
  triangle(lx-ran+30,ly+35,lx-20,ly+ran-20,lx-20,ly+35);
  //blue bottom right 
  fill(50,0,250,rando);
  stroke(174,176,245);
  triangle(lx+ah-5,ly+ran-15,lx+25, ly+45,lx+ah-40,ly+ran-15)
  //teal up left centerish 
  fill(0,250,250+50,rando);
  stroke(174,231,245);
  triangle(lx-ran+40,ly-15,lx-20,ly-ah,lx-ah+15,ly-15);
  //green up left  
  fill(0,250,50,rando);
  stroke(180,245,174);
  triangle(lx+ah-40,ly-ah+30,lx-50,ly-ran+30,lx+ah-20,ly-ah+20);
  //purple centerish 
  fill(150,0,250+50,rando);
  stroke(224,174,245);
  triangle(lx-ah-35,ly+10,lx-5,ly-ah+30,lx+ah-45,ly+10);
  //yellow multiple positions 
  fill(255,242,0,rando);
  stroke(255,242,0);
  triangle(lx-ah+10,ly+10,lx-30,ly-ah+10,lx-5,ly+ah-45); //top right 

  strokeWeight(0);
  stroke(0);
}

function ncWooper(  k,  lx, ly, sz) { // remix of Craz Circle with images of Wooper and Whoopers 
  let rando = random(250); 
  let ran = random(60);
  strokeWeight(0);
  stroke(0);
  //dark blue up left 
  fill(0,5,99);
  ellipse(lx-ran, ly-ran, 50, 50);
  image(WHOPPER, lx-ran-20,ly-ran-20,40,40);
  //purple up right 
  fill(150,0,250+50);
  ellipse(lx+ran, ly-ran, 50, 50);
  image(WHOPPER, lx+ran-20,ly-ran-20,40,40);
  //teal down left 
  fill(0,250,250+50);
  ellipse(lx-ran, ly+ran, 50, 50);
  image(WHOPPER, lx-ran-20,ly+ran-20,40,40);
  //blue green down right 
  fill(3,252,177);
  ellipse(lx+ran, ly+ran, 50, 50);
  image(WHOPPER, lx+ran-20,ly+ran-20,40,40);
  //blue center 
  fill(0,0,250);
  ellipse(lx, ly, 50, 50);
  image(WOOPER, lx-20,ly-20,40,40);
} 

function ncIlluminati( k,  lx, ly,  px, py) { //remix of Warrior Chess with Illuminati image  
  let rando = random(15);
  let ran = random(10);
  let ah = random(100);
  strokeWeight(0);
  //Big Colors 
   //Yellow Big  Center T
   fill(ah+150,ah+80,0,ah);
   triangle(lx-50,ly+50,lx,ly-80,lx+50,ly+50);
   //Med Green Big Left T
   fill(22,ah+50,ah-60,ah);
   triangle(lx-100,ly+50,lx-40,ly-65,lx-30,ly+50);
   //Dark Green Big Right T 
   fill(ran,ah-60,2,ah);
   triangle(lx+30,ly+50,lx+40,ly-65,lx+100,ly+50);
   //Yellow Big  Center B 
   fill(ah+150,ah+80,0,ah);
   triangle(lx-50,ly+50,lx,ly+80,lx+50,ly+50);
   //Med Green Big Left B 
   fill(22,ah+50,ah-60,ah);
   triangle(lx-100,ly+50,lx-40,ly+65,lx-30,ly+50);
   //Dark Green Big Right B 
   fill(ran,ah-60,2,ah);
   triangle(lx+30,ly+50,lx+40,ly+65,lx+100,ly+50);

  //Yellow 1
  fill(ah+150,ah+80,0);
  rect( mouseX-mouseY+ah, mouseY+ah, 10, 10 );
  //Yellow 2
  fill(ah+150,ah+80,0);
  rect( mouseX+mouseY-ah, mouseY-ah, 10, 10 );
  //Yellow 3
  fill(ah+150,ah+80,0);
  rect( mouseX+ah, mouseY-mouseX+ah, 10, 10 );
  //Yellow 4
  fill(ah+150,ah+80,0);
  rect( mouseX-ah, mouseY+mouseX-ah, 10, 10 );
  
  //Med Green 1 
  fill(22,ah+50,ah-60);
  rect( mouseX+rando, mouseY-mouseX+ah, 10, 10 );
  //Med Greeen 2
  fill(22,ah+50,ah-60);
  rect( mouseX-rando, mouseY+mouseX-ah, 10, 10 );
  //Med Green 3
  fill(22,ah+50,ah-60);
  rect( mouseX+mouseY-ah, mouseY-rando, 10, 10 );
  //Med Greeen 4 
  fill(22,ah+50,ah-60);
  rect( mouseX-mouseY+ah, mouseY+rando, 10, 10 );

  //Dark Green 1
  fill(ran,ah-60,2);
  rect( mouseX+ran, mouseY-mouseX+ah, 10, 10 );
  //Dark Green  2
  fill(ran,ah-60,2);
  rect( mouseX-ran, mouseY+mouseX-ah, 10, 10 );
  //Dark Green 3
  fill(ran,ah-60,2);
  rect( mouseX-mouseY+ah, mouseY+ran, 10, 10 );
  //Dark Green  4
  fill(ran,ah-60,2);
  rect( mouseX+mouseY-ah, mouseY-ran, 10, 10 );

  image(Illuminati, mouseX-30, mouseY-25, 60, 40);
}

function SmallEraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz,sz);
}

function BigEraser( k, lx, ly, sz) {
  fill(k);
  stroke(k);
  ellipse(lx, ly, sz+50,sz+50);
}

function clear_print() {

  // these 2 options let you choose between clearing the background
  // and saveing the current image as a file.
  if (key == 'c' || key == 'C') {
    background(255);
  } else if (key == 's' || key == 'S') {
    saveFrames('image-0', 'png', 1, 1);
    key = '';  // resets the key so it does not make more than one image.
  }

}

// mouseX ==> 100
// mpuseX --> 110  --<pmouseX 100

// mouseX > 100
// mouseX > 110
// pmouseX> 100
// mouseX > 120
// pmouseX> 110
// mouseX > 130
