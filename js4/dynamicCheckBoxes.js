
function dispChildList(callingNode) {
    var groupName=callingNode.className;
    var isChecked=callingNode.checked;
    var list= document.getElementsByClassName(groupName);
    
    if(isChecked){
        list[1].style.display="";
        getFocus(callingNode);
    }
    else{
        list[1].style.display = "none";
    }
    
}

function getFocus(focusNode){
    var div_ele= document.getElementsByClassName("container")[0];
    div_ele.scrollTop= focusNode.offsetTop -10;
}
    

