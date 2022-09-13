function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet Is Initialized !')
}
function draw(){
    background('#0000ff');
    document.getElementById("square_side").innerhtml = "width And Height of a Square will be -" + difference +"px";
    fill('#9900ff');
    stroke('#9900ff');
    square(noseX,noseY,difference);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.X;
        noseY = results[0].pose.nose.Y;
        console.log("noseX = " + noseX +"noseY = "+noseY);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("leftWristX = " + leftWristX +"rightWristX ="+ rightWristX + "difference =" +difference);
    }
}