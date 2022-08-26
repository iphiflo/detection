function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img ="";

function preload()
{
    img = loadImage("desk.png");
}

function draw()
{
    image(img, 0, 0, 640, 500,);
    fill("dark green");
    noFill();
    stroke("dark green");
    text("Desk", 100, 160);
    rect(100, 150, 420, 250);
}

function back()
{
    window.location = "Index.html"
}