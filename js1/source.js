function checking_all(action_check) {
  var elements = document.getElementsByClassName("colors");
  
  for (var i = 0; i < elements.length; i++) 
   {
     elements[i].checked = action_check;
   }
}
