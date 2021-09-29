noseX=0;
noseY=0;
difference=0;
left_WristX=0;
right_WristX=0;

function setup () {
    canvas= createCanvas(500,501);
    canvas.position(850, 400);
    video=createCapture(VIDEO);
    video.size(600, 600);

    posenet= ml5.poseNet(video, foundResult)
    posenet.on("pose", holdingResult)
}
function foundResult() {
    console.log("It made a great journey");
}

function holdingResult(result) {
    if (result.length>0) {
    console.log(result);

    noseX= result[0].pose.nose.x;
    noseY= result[0].pose.nose.y;

    left_WristX= result[0].pose.leftWrist.x;
    right_WristX= result[0].pose.rightWrist.x;
    difference= floor(left_WristX-right_WristX);
}
}
function draw () {
background("springgreen");

document.getElementById("black0").innerHTML="Width and height/size of the square = " + difference + "px";
fill("blue");
square(noseX, noseY, difference);
textSize(difference-206) ;
text('Hi I am going to Mars', noseX, noseY-15)

}