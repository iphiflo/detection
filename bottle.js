function setup()
{
    canvas = createCanvas(640, 500);
    canvas.center();
}

img ="";

function preload()
{
    img = loadImage("bottle.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 500,);
    fill("green");
    noFill();
    stroke("red");
    text("Bottle", 170, 30);
    rect(150, 10, 340, 420);
}

function back()
{
    window.location = "Index.html";
}