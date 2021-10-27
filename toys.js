toysImg = "";

function preload() {
    toysImg = loadImage("toys.jpg");
}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
}

function draw() {
    image(toysImg, 0, 0, 400, 400);
}