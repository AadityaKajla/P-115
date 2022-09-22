function start_classifications(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_s9w92kXK/',modelReady);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    console.log(results);
}