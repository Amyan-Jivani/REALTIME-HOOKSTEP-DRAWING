nosex=0;
nosey=0;
rightwristx=0;
leftwristx=0;
difference=0;

function setup(){
    canvas= createCanvas(550, 550);
    canvas.position(560, 130);
    video= createCapture(VIDEO);
    video.size(550, 500);
posenet = ml5.poseNet(video, modelLoaded);
posenet.on('pose', gotPoses);
}

function modelLoaded(){
    window.alert("Model is Loaded!!!!!!!!!!!!!!");
}

function draw(){
    background("#01b0bb");
    document.getElementById("square_side").innerHTML = "The size of the SQUARE is " + difference + "px !!";
    stroke("#ba1a62");
    strokeWeight(3);
    fill("#44225e");
    square(nosex, nosey, difference);
}

function gotPoses(results){
if(results.length>0){
    console.log(results);
    nosex=results[0].pose.nose.x;
    nosey=results[0].pose.nose.y;
    console.log("X coordinates of Nose = " + nosex + " and the Y coordinates of Nose = "+ nosey);
    leftwristx=results[0].pose.leftWrist.x;
    rightwristx = results[0].pose.rightWrist.x;
    difference = floor(leftwristx - rightwristx);
    console.log("LeftWristx = " + leftwristx + " , RightWristx = " + rightwristx + " and difference = " + difference);
}
}