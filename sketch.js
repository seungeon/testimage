
var img;  
var img2;
var bg;
var img3;

function setup()
{
    createCanvas(900,900);
    bg = loadImage("back.jpg");
    img = loadImage("star1.png");
    img2 = loadImage("earth.png")
    img3 = loadImage("moon.png")
  // Load the image 
}

function draw()
{
    background(bg);

    fill(237,112,50);
    noStroke();
 


    var duration = 5000;
    var timing = (new Date()%duration)/duration;


  // Displays the image at its actual size at point (0,0)
  if(timing*3 <1){
  image(img, timing*900,10);
} else if(timing*3 <2){
  image(img2, timing*900,10);
}else{
  image(img3, timing*900,10);
}
    //지구

}