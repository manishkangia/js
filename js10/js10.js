function checkField() {
    var inputEle=document.getElementById("inputElement").value;
    var putEle=document.getElementById("putElement");
    var regex = /^(\+|\-)?\d\.?\d+$/;
    var check=regex.test(inputEle);
    if(check) {
       putEle.value="true";
       alert("form submitted");
    }
    else {
    putEle.value="false";
    alert("form not submitted");
    return false;
    }
}
