Webcam.set ({
    width: 350,
    height: 300,
    image_format : 'png',
    png_quality: 110 
});

cammera = document.getElementById("camera");

Webcam.attach( '#camera' );

function take_snapshot() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "caprtured_image" src = "' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);

var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/M2R74Qqg8/', modelLoaded);

function modelLoaded() {
    console.log('Model loded!');
    alert('Model Loded!!!');
}

function check() {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }

    else {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixer(3);
    }
}