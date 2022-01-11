Webcam.set({
width:350,
height:350,
image_format:'png',
png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach('#camera');

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2Zmiv_NAQ/model.json',modelLoaded);

function modelLoaded() 
{
    console.log
}

function speak()
{
    var synth = windowSynthesis;
    speak_data_1 = " The First Prediction is" + prediction_1;
    speak_data_2 ="And the second prediction is" +prediction_2;
    var utterThis = new SpeechSynthsisUtterane(speak_data_1+speak_data_2)
    synth.speak(utterThis);
}