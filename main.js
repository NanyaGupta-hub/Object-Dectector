Status= "";
img= "";

function preload(){
    
}

function setup(){
     canvas = createCanvas(510, 410);
     canvas.position(470,150);
}

function draw() {
 image(img, 0, 0, 510, 410);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;

}