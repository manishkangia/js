function getDomains() {
  var url=document.getElementById("url").value;
  
  //regular expression
  var regexp=/^(https?:\/\/)?([A-z0-9\.]*)(\w\.[A-z])*/;
  var matches=url.match(regexp);
  
    if(matches[0]=null) {
    alert("not a valid url");
}
  //the second element has the string containing all domain names
  var all_domains=matches[2];
  
  //storing all domain names separately in an array
  var names= all_domains.split('.');
  
  //joining the last two names to give the domain name
  var domain=names.splice(names.length-2,2).join(".");
  //and rest for sub-domain
  var sub_domain=names.join(".");
  
    if(sub_domain.length > 0) {
      alert("domain :"+ domain + " sub-domains :"+sub_domain);
    }
    else {
      alert("domain :"+domain);
    }
}
