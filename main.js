//https://teachablemachine.withgoogle.com/models/S_3LoHnft/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/S_3LoHnft/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error,results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+
        (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("
        +random_number_r+","+random_number_g+","+random_number_r+")";
        
        img = document.getElementById('Cat');
        img1 = document.getElementById('Dog');
        img2 = document.getElementById('Cow');
        img3 = document.getElementById('Lion');
        
        if (results[0].label == "Meowing") {
            img.src = 'Cat.gif';
            img1.src = 'Screenshot (2).png';
            img2.src = 'Screenshot (3).png';
            img3.src = 'Screenshot (4).png';
        } else if (results[0].label == "Barking") {
            img.src = 'Screenshot (1).png';
            img1.src = 'Dog.gif';
            img2.src = 'Screenshot (3).png';
            img3.src = 'Screenshot (4).png';
        } else if (results[0].label == "Mooing") {
            img.src = 'Screenshot (1).png';
            img1.src = 'Screenshot (2).png';
            img2.src = 'Cow.gif';
            img3.src = 'Screenshot (4).png';
        }else if (results[0].label == "Roar") {
            img.src = 'Screenshot (1).png';
            img1.src = 'Screenshot (2).png';
            img2.src = 'Screenshot (3).png';
            img3.src = 'Lion.gif';
        }
    }
}