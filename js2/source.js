function do_check(e) {
    var names = "", count = 0, i;
    var group = document.getElementsByClassName("days");
    
    // to take a count of the number of checkboxes selected
    for (i = 0; i < group.length; i++) {
        if (group[i].checked == true) {
            names = names + "," + group[i].value;
            count = count + 1;
        }
    }
    
    // to toggle the 'none' checkbox in case any other box is selected  
    if (count > 0) {
        var ele = document.getElementsByClassName("check_all");
        ele[0].checked = false;
    }
  
    //action on the fourth check box being selected
    if (count == 4) {
        if (e) {
            e.preventDefault(); 
        }
        else {
            window.event.preventDefault(); 
        }
            
        alert("Not more than 3 can be selected and you have chosen 4" + names);
    }
}


function unchecking_all() {
    var elements = document.getElementsByClassName("days"), i;
    for (i = 0; i < elements.length; i++) {
        elements[i].checked = false;
    }
}





