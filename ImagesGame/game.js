var sequence = [];                // the sequence having the number of the image reserved for the number   
var SelectedCouple = [null,null]; // the id of the buttons selected
var state = [];                 // for the state of all buttons // state : closed opened freezed 
var score = 0;
var numberOfimages = 18;         // at max 18 
//before the game starts disable all
function disableAll() {
   var imageCollection = document.getElementById('picturestore');
   for (var i = 0; i < imageCollection.children.length;i++) {
   imageCollection.children[i].disabled = true ;
   }
}

//when the game is started by the user
//initialize the sequence of images in a random arrangement
function loadGame() {
    //disable the start button
    document.getElementById('startbtn').disabled = true;
    
    document.getElementById('scorecard').value = 0;
    generateSequence();
    timerCount = self.setInterval(function(){Timer()},1000);
    
    //to enable all buttons
    disableOthers(false);
}

function Timer() {
    document.getElementById('timer').value = parseInt(document.getElementById('timer').value) + 1 ;
    //incase the limited time is reached
    if(parseInt(document.getElementById('timer').value) == 20) {
        alert("time up dude,you can still carry on");
    }
}
    
function generateSequence() {
    sequence1 = [],sequence2 = [];
    while(sequence1.length < numberOfimages) {
        var randNum = Math.floor(Math.random() * numberOfimages);
        if(sequence1.indexOf(randNum) == -1) {
            sequence1[sequence1.length] = randNum;
        }    
    }
     
    while(sequence2.length < numberOfimages) {
        var randNum = Math.floor(Math.random() * numberOfimages);
        if(sequence2.indexOf(randNum) == -1) {
            sequence2[sequence2.length]= randNum;
        }    
    }
    
    for (var i = 0, j = numberOfimages; i < numberOfimages, j < 2 * numberOfimages; i++, j++) {
        sequence[i] = sequence1[i]; 
        sequence[j] = sequence2[j - numberOfimages];
        state [i] = state [j] = "closed";
    }
}

function btnClicked(btn) {
    imageLocation = "images/image_" + sequence[btn.id] + ".jpg";
    if (state[btn.id] == "opened") {
        btn.style.backgroundImage = "";
        state[btn.id] = "closed"
        }
    else {
        btn.style.backgroundImage = "url("+imageLocation+")";
        state[btn.id] = "opened";
    }
    updateCouple(btn.id);
}

function updateCouple(currentBtn) {
    if (SelectedCouple[0] == null) {
        SelectedCouple[0] = currentBtn;
        //disable the current image clicked
        document.getElementById(SelectedCouple[0]).disabled = true;
    }
    else {
        SelectedCouple[1] = currentBtn;
        checkMatch();
    }
}

function checkMatch() {
    //disable others so user clicks only two at a time
    disableOthers(true);
    
    var image1 = sequence[SelectedCouple[0]];
    var image2 = sequence[SelectedCouple[1]];
    
    if (image1 == image2) {
        document.getElementById('expression').value = ":)";
 
        document.getElementById(SelectedCouple[0]).disabled = true;
        document.getElementById(SelectedCouple[1]).disabled = true;
 
        state[SelectedCouple[0]] = "freezed";
        state[SelectedCouple[1]] = "freezed";
 
        SelectedCouple = [null,null];
 
        updateScoreCard();
 
        disableOthers(false);
    }
    else {
        setTimeout(function() {btnReset();},1000); 
    }
}

function updateScoreCard() {
   document.getElementById('scorecard').value = parseInt(document.getElementById('scorecard').value) + 2;
 
   //if all images are matched successfully
   if (document.getElementById('scorecard').value == 2 * numberOfimages) {
      timerCount = window.clearInterval(timerCount);
      alert("bravo! you are a true hero.. you finished it in " + document.getElementById('timer').value + " secs");
      document.getElementById('startbtn').disabled = false;
   }
}

function btnReset() {
   
   document.getElementById(SelectedCouple[0]).style.backgroundImage = "";
   document.getElementById(SelectedCouple[0]).disabled = false;
   state[document.getElementById(SelectedCouple[0]).id] = "closed";
   
   document.getElementById(SelectedCouple[1]).style.backgroundImage = "";
   document.getElementById(SelectedCouple[1]).disabled = false;
   state[document.getElementById(SelectedCouple[1]).id] = "closed";
   
   SelectedCouple = [null,null];
   disableOthers(false); 
   document.getElementById('expression').value = ":(";
}

function disableOthers(disable) {
   var imageCollection = document.getElementById('picturestore');
   for( i = 0; i < 2 * numberOfimages;i++) {
       if(state[i] == "closed") {
           imageCollection.children[i].disabled = disable;
       }
   }
}
