var validation=true,timeZoneSelected=false;
function validateForm() {
   var form=document.getElementsByName("myForm")[0];
   var list_elements=form.elements;
   
   //To navigate through the elements in the form for validation
   for(var i=0; i<list_elements.length; i++) {
       
       //To check for text fields
       if (list_elements[i].type=="text") {
          if(list_elements[i].value.length==0) {
             validation=false;
             alert(list_elements[i].name+" must be filled out");
             return false;
          }
       }
   
       //To check for Text Area
       if(list_elements[i].type=="textarea") {    
           var val=list_elements[i].value.length;
           if(val<50) {
           alert("text area needs to be atleast 10 characters");
           validation=false;
           return false;
           }
       }
   
       //To check for "receive notifications checkbox"
       if(list_elements[i].type=="checkbox") {
           if(list_elements[i].checked==false) {
              alert("Receive Notifications must be accepted");
              validation=false;
              return false;
          }
       } 
    
    }   
    
    //To check for TimeZone selection 
    if(timeZoneSelected==0) {
        alert("timezone not selected");
        return false;
    }
}
  
function timeZoneChanged() {
  timeZoneSelected =true;
}

function defaultIndex() {
  var ele=document.getElementById("timezone");
  ele.selectedIndex=0;
}
