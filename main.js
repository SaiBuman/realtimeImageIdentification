nose_x = "" ;
nose_y = "" ;

left_wrist_x = "" ;
right_wrist_x = "" ;

difference = "" ;

 function setup() {
     canvas = createCanvas(400,400);
     canvas.position(800,125);
     video = createCapture(VIDEO);
     video.size(400,400);
     video.position(200,125);
     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on("pose",gotPoses)
     }

     function draw() {
        background("#4a875b");  
        fill("#fa483e");
        stroke("fa483e");
        square(nose_x,nose_y,difference)
     }

     function modelLoaded() {
         console.log("Model is Loaded");
     }

     function gotPoses(results) {
         if (results.length>0) {
             console.log(results);
             nose_x = results[0].pose.nose.x;
             nose_y = results[0].pose.nose.y;

             left_wrist_x = results[0].pose.leftWrist.x;
             right_wrist_x = results[0].pose.rightWrist.y;
             difference = floor(left_wrist_x - right_wrist_x);
         }
     }