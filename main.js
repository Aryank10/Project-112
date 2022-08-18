prediction = "";

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot() {
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML = '<img id="image_captured" src="'+data_uri+'"/>';
    });
}

console.log("ml5 version:",ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Qorn6llzx/model.json',modelLoaded);

function modelLoaded() {
    console.log("Model Loaded Successfully!");
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "The Prediction Is " + prediction;
    speak_dat1 = "second prediction is" + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data + speak_dat1);
    synth.speak(utterThis);
}

function check() {
    img = document.getElementById("image_captured");
    classifier.classify(img, gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML = results[0].label;
        document.getElementById("result_gesture_name1").innerHTML = results[1].label;
        prediction = results[0].label;
        prediction_1 = results[1].label;
        speak();
        if(results[0].label == "Amazing"){
            document.getElementById("result_emoji").innerHTML = "&#128076;";
        }
        if(results[0].label == "Best"){
            document.getElementById("result_emoji").innerHTML = "&#128077";
        }
        if(results[0].label == "Victory"){
            document.getElementById("result_emoji").innerHTML = "&#9996;";
        }
        if(results[0].label == "Unity"){
            document.getElementById("result_emoji").innerHTML = "&#9994;";
        }
        if(results[0].label == "Clap"){
            document.getElementById("result_emoji").innerHTML = "&#128079;";
        }
        if(results[0].label == "Rock"){
            document.getElementById("result_emoji").innerHTML = "&#129304;";
        }
        if(results[0].label == "Bye"){
            document.getElementById("result_emoji").innerHTML = "&#128075;";
        }
        if(results[1].label == "Amazing"){
            document.getElementById("result_emoji1").innerHTML = "&#128076;";
        }
        if(results[1].label == "Best"){
            document.getElementById("result_emoji1").innerHTML = "&#128077";
        }
        if(results[1].label == "Victory"){
            document.getElementById("result_emoji1").innerHTML = "&#9996;";
        }
        if(results[1].label == "Unity"){
            document.getElementById("result_emoji1").innerHTML = "&#9994;";
        }
        if(results[1].label == "Clap"){
            document.getElementById("result_emoji1").innerHTML = "&#128079;";
        }
        if(results[1].label == "Rock"){
            document.getElementById("result_emoji1").innerHTML = "&#129304;";
        }
        if(results[1].label == "Bye"){
            document.getElementById("result_emoji1").innerHTML = "&#128075;";
        }
    }
}