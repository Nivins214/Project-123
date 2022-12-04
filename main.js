leftWristX=0;
rightWristX=0;
difference=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
posenet=ml5.poseNet(video,modelloaded);
posenet.on('pose',gotPoses);
}

function modelloaded(){
//    console.log('posenet is initialized');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX-rightWristX);
    }
}

function draw(){
    background('#969A97');
    textSize(difference);
    fill('#FFE787');
    text("Nivin", 50, 400)
}