prediction_1="";
Webcam.set({
 width:350,
 height:300,
 image_format:'png',
 png_quality:90   
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="snapshot" src="'+data_uri+'"/>';
});    
}
console.log('ml5 version', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/tJIG5lcL0/.json', modelLoaded);
function modelLoaded(){
    console.log("ModelLoaded");
}
function speak(){
var synth= window.speechSynthesis;
speak_data1="The first prediction is"+prediction_1;
var utterThis=new SpeechSynthesisUtterance(speak_data1);
synth.speak(utterThis);    
}

 function check(){
 img=document.getElementById("snapshot");
 classifier.classify(img,gotResult);
 }
 function gotResult(error,results){
     if(error){
       console.error(error);  
     }
     else {
         console.log(results);
    document.getElementById("result_emotion_name").innerHTML
    
prediction_1=results[0].label;
prediction_2=results[1].label;
speak();