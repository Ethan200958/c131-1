randomItemsImg = "";

function preload() {
    randomItemsImg = loadImage("randomItems.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
}

function draw() {
    image(randomItemsImg, 0, 0, 400, 400);
}