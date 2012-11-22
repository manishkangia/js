function getDomains() {
  var url=document.getElementById("url").value;
  
  //regular expression
  var regexp=/^(https?:\/\/)?(www\.)?((\S*)\.)*(\w+\.com){1}/;
  var matches=url.match(regexp);
    if (matches[0] == null) {
       alert ("not a valid url");
    }
    
    else {
        domain = matches[5];
        sub_domain = matches[4];    
        if (sub_domain != undefined) {
            alert("domain : " + domain + " sub-domain : " + sub_domain);
        }
        else {
            alert("domain :"+domain);
        }
    }
}
