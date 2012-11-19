
function dispChildList(callingNode) {
    
    var groupName=callingNode.className;
    var list= document.getElementsByClassName(groupName);
    
    if(list[2].style.display=="") {
        list[2].style.display="none";
    }    
    else {
        list[2].style.display="";
    }
    getFocus(callingNode);    
}

function checkChildList(callingNode) {
    var groupName=callingNode.className;
    var list= document.getElementsByClassName(groupName);
    
    if(list[2].style.display=="none") {
        dispChildList(callingNode);
    }
    
    for(var i = 2;i < list.length; i++)
        list[i].checked = list[0].checked;
    
    getFocus(callingNode);
}

//To get the window to focus on the selected node/checkbox
function getFocus(focusNode){
    var div_ele= document.getElementsByClassName("container")[0];
    div_ele.scrollTop= focusNode.offsetTop -10;
}
    

