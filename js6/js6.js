var fName,lName,toMatch=/[^ ]/g;
function getFirstName() {
    fName = prompt("What is your first name? ", "");
    if(fName.match(toMatch)!=null) {
        getLastName()
    }
    else getFirstName();
}

function getLastName() {
    lName= prompt("what is your last name?","");
    if(lName.match(toMatch)!=null) {
        alert("welcome "+ fName+" " + lName); 
        initialDisplay(fName+" "+lName);
        }
    else getLastName();
}   

function initialDisplay(name) {
    var para= document.getElementById("displayName");
    para.innerHTML=name;
}       
