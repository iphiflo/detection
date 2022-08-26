function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img ="";

function preload()
{
    img = loadImage("tv.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420,);
    fill("red");
    noFill();
    stroke("red");
    text("Television(TV)", 170, 30);
    rect(150, 10, 430, 235);
}

function back()
{
    window.location = "Index.html"
}