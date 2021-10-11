Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quailty:90
});

camera_webcam_js=document.getElementById("camera");

Webcam.attach("#camera_webcam_js")

function take_snapshot(){
    Webcam.snap(function(data_uri) {
    document.getElementById("result").innerHTML='<img id="captured_image" <src="'+data_uri+'"/>';
    });
}

console.log('ml5.version',ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tP5pd4jaW/model.json",modelLoaded);

function modelLoaded(){
    console.log("model Loaded")
}
