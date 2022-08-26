function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img ="";

function preload()
{
    img = loadImage("bed.png");
}

function draw()
{
    image(img, 0, 0, 640, 420,);
    fill("purple");
    noFill();
    stroke("purple");
    text("Bed", 155, 165);
    rect(150, 150, 350, 235);
}

function back()
{
    window.location = "Index.html";
}