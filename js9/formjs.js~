//To set the index of time-zone as -1 initially
function defaultIndex() {
  var ele=document.getElementById("timezone");
  ele.selectedIndex=-1;
}

function validateForm() {
    var form=document.getElementsByName("myForm")[0];
    var list_elements=form.elements;
   
    //To navigate through the elements in the form for validation
    for(var i=0; i<list_elements.length; i++) {
       
    //To check for text fields including email and url
      if (list_elements[i].type=="text") {
        if(list_elements[i].value.length==0) {
          alert(list_elements[i].name+" must be filled out");
          return false;
        }
      }
   
       //To check for Text Area
      if(list_elements[i].type=="textarea") {    
        var val=list_elements[i].value.length;
        if(val<50) {
          alert("text area needs to be atleast 10 characters");
          return false;
        }
      }
      
        // For E-mail validation
      if(list_elements[i].className=="e-mail") {
        var genEx=/^[a-zA-z0-9]+[\w\.]*\w+@\w+\.[a-zA-Z]{2,3}$/;
        var id= list_elements[i].value;
        if(!genEx.test(id)){
          alert("please enter a valid email-id");
		      return false;
		    }
     }

      //To check for TimeZone selection
        if(list_elements[i].id=="timezone") {
          if(list_elements[i].selectedIndex==-1) {
           alert("please select a time zone");
           return false;
          }
        }
        
               // For URL validation 
      if(list_elements[i].className=="url") {
        var genEx=/^(https?:\/\/)?(www\.){1}\w+\.(com|org)$/;
        var id= list_elements[i].value;
        if(!genEx.test(id)){
          alert("please enter a valid URL");
		      return false;
		    }
		  }
        
       //To check for "receive notifications checkbox"
      if(list_elements[i].type=="checkbox") {
        if(list_elements[i].checked==false) {
          alert("Receive Notifications must be accepted");
          return false;
        }
      }  
    }
}


