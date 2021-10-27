couchImg = "";

function preload() {
    couchImg = loadImage("couch.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
}

function draw() {
    image(couchImg, 0, 0, 400, 400);
}