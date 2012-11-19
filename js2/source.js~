function do_check(daySelected) {
    var names = "", count = 0, i;
    var daysCheckBoxes = document.getElementsByClassName("days");
    
    // to take a count of the number of checkboxes selected
    for (i = 0; i < daysCheckBoxes.length; i++) {
        if (daysCheckBoxes[i].checked == true) {
            if(daysCheckBoxes[i].value != daySelected.value) {
            names = names + "," + daysCheckBoxes[i].value;
            }
            count = count + 1;
        }
    }
    
    // to toggle the 'none' checkbox in case any other box is selected  
    if (count > 0) {
        var check_all_checkbox = document.getElementsByClassName("check_all")[0];
        check_all_checkbox.checked = false;
    }
  
    //action on the fourth check box being selected
    if (count == 4) {    
        alert("Not more than 3 can be selected and you have already chosen 3 namely" + names);
        daySelected.checked = false;
    }
}


function unchecking_all() {
    var daysCheckBoxes = document.getElementsByClassName("days"), i;
    for (i = 0; i < daysCheckBoxes.length; i++) {
      daysCheckBoxes[i].checked = false;
    }
}





