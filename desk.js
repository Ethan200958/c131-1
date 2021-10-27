deskImg = "";

function preload() {
    deskImg = loadImage("desk.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
}

function draw() {
    image(deskImg, 0, 0, 400, 400);
}