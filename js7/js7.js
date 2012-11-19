function newWindow() {
    
    var urlentered=document.getElementById("url").value;
    var toMatch=/[^ ]/;
    if(toMatch.test(urlentered)) {
    
    myWindow=window.open(urlentered,'new window','width=400px','height=450px','status=no','scrollbars=no','toolbar=yes');
    }
    else {
    alert("please enter a valid URl"); }
}
