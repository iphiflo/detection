function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

img ="";

function preload()
{
    img = loadImage("basket.jpg");
}

function draw()
{
    image(img, 0, 0, 640, 420,);
    fill("purple");
    noFill();
    stroke("purple");
    text("Basket", 155, 165);
    rect(100, 150, 420, 235);
}

function back()
{
    window.location = "Index.html";
}