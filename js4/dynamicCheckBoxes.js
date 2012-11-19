
function dispChildList(callingNode) {
    var groupName=callingNode.className;
    var isChecked=callingNode.checked;
    var list= document.getElementsByClassName(groupName);
    
    //Get all sub_checkboxes in same state as the checkbox
    for(var i = 1;i < list.length; i++)
        list[i].checked = true;
        
    if(isChecked){
        list[1].style.display="";
    }
    else{
        list[1].style.display = "none";
    }
    //Shift focus to selected checkbox
    getFocus(callingNode);
}

//To get the window to focus on the selected node/checkbox
function getFocus(focusNode){
    var div_ele= document.getElementsByClassName("container")[0];
    div_ele.scrollTop= focusNode.offsetTop -10;
}
    

