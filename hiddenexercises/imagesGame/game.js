var sequence = [];                // the sequence having the number of the image reserved for the number   
var SelectedCouple = [null,null]; // the id of the buttons selected
var state = [];                 // for the state of all buttons // state : closed opened freezed 
var score = 0;
var numberOfimages = 18;         // at max 18 
var maxTime = 120; // in secs
var attempts = 0;

//before the game starts disable all
function disableAll() {
   var imageCollection = getElement('picturestore');
   for (var i = 0; i < imageCollection.children.length;i++) {
       imageCollection.children[i].disabled= true;
   }
}
//set of general functions
function getElement(idValue) {
   return document.getElementById(idValue);
   }
   
function disableElement(element) {
   element.disabled = true;
}

function enableElement(element) {
   element.disabled = false;
}

//when the game is started by the user
//initialize the sequence of images in a random arrangement
function loadGame() {
    //disable the start button
    disableElement(getElement('startbtn'));
    
    getElement('scorecard').value = 0;

    generateSequence();

    //Start Counter/Timer
    timerCount = setInterval('timer()',1000);
    
    //to enable all buttons
    disableOthers(false);
}

//Action to be performed after each interval of 1000 milliseconds
function timer() {
    countDown = getElement('timer');
    countDown.value = parseInt(countDown.value,10) + 1 ;

    //incase the limited time is reached
    if(parseInt(countDown.value,10) == maxTime) {
        alert("time up,you can still carry on");
    }
}
    
function generateSequence() {

    //generate two indiviual random sequences of digits 0 to 17 and then append them together
    var sequence1 = createSequence();
    var sequence2 = createSequence(); 
    
    //append
    for (var i = 0, j = numberOfimages; i < numberOfimages, j < (2 * numberOfimages); i++, j++) {
        sequence[i] = sequence1[i]; 
        sequence[j] = sequence2[j - numberOfimages];
        state [i] = state [j] = 0;
    }
}

function createSequence() {
    var sequenceString = [];
    while(sequenceString.length < numberOfimages) {
        var randNum = Math.floor(Math.random() * numberOfimages);
        if(sequenceString.indexOf(randNum) == -1) {
            sequenceString[sequenceString.length] = randNum;
        }    
    }
    return sequenceString;
}

//action on a click on any image
function btnClicked(btn) {
    imageLocation = "images/image_" + sequence[btn.id] + ".jpg";
    if (state[btn.id] == 1) {
        btn.style.backgroundImage = "";
        state[btn.id] = 0;
        }
    else {
        btn.style.backgroundImage = "url("+imageLocation+")";
        state[btn.id] = 1;
    }
    
    updateCouple(btn.id);
}

//update the SelectedCouple entry
function updateCouple(currentBtn) {
    if (SelectedCouple[0] == null) {
        SelectedCouple[0] = currentBtn;
        //disable the current image clicked
        disableElement(getElement(SelectedCouple[0]));
    }
    else {
        SelectedCouple[1] = currentBtn;
        checkMatch();
    }
}

function checkMatch() {
    //disable others so user clicks only two at a time
    attempts ++ ;
    disableOthers(true);
    
    //if matches
    if (sequence[SelectedCouple[0]] == sequence[SelectedCouple[1]]) {
        getElement('expression').value = ":)";
        
        //disable the two matched images
        disableElement(getElement(SelectedCouple[0]));
        disableElement(getElement(SelectedCouple[1]));
        
        //freeze their state
        state[SelectedCouple[0]] = state[SelectedCouple[1]] = "freezed";
 
        SelectedCouple = [null,null]; 
        updateScoreCard();
        
        //enable the images once again
        disableOthers(false);
    }
    else {
        
        //else wait for 1000 milliseconds and reset the images
        setTimeout('btnReset()',1000); 
    }
}

function updateScoreCard() {
   scoreCard = getElement('scorecard');
   scoreCard.value = parseInt(scoreCard.value) + 2;
 
   //if all images are matched successfully
   if (scoreCard.value == 2 * numberOfimages) {
      timerCount = window.clearInterval(timerCount);
      alert("bravo! you are a true hero.. you finished it in " + getElement('timer').value + " secs and in " + attempts + " matches");
      enableElement(getElement('startbtn'));
   }
}

//To reset the image buttons in case of 'No Match'
function btnReset() {

   //remove the image and enable the buttons again and update their respective state
   for (var i = 0; i < 2; i++) {
       imageButton = getElement(SelectedCouple[i]);
       imageButton.style.backgroundImage = "";
       enableElement(imageButton);
       state[imageButton.id] = 0;
   }
   
   SelectedCouple = [ null, null ];
   
   //enable images 
   disableOthers(false); 
   getElement('expression').value = ":(";
}

//function to disable or enable closed images/state:0
function disableOthers(setAbility) {
   var imageCollection = getElement('picturestore');
   for( i = 0; i < 2 * numberOfimages;i++) {
       if(state[i] == 0) {
          imageCollection.children[i].disabled = setAbility ;
       }
   }
}


