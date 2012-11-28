var idValue = 1;
var orderBy ;

//function to add a new row to the table
function addEntry() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    
    //to not allow empty fields
    var regexp = /\w/;
    if(regexp.test(name) && regexp.test(email)) {
      createEntry(name,email);
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
    }
    else {
      alert("please fill in the fields")    
    }
}

//function to create the new row to be added
function createEntry(name, email) {
    var myTable = document.getElementById("myTable");
    var tbody = myTable.tBodies[1];
    tr = document.createElement('tr');
    
    tr.appendChild(createTD("id"));
  
    tr.appendChild(createTD("name",name));
    
    tr.appendChild(createTD("email",email));
    
    tbody.appendChild(tr);
    
    idValue++;
}

//function to create 'td' for the row
function createTD(className,content) {
    var td = document.createElement('td');
    td.setAttribute("class",className);
    if(content) {
      td.textContent = content;
    }
    else {
      td.textContent = idValue;
    }
    return td;
}

//function to sort the table
function sortTable(calledBy,index) {
    var list = [];
    var myTable = document.getElementById("myTable");
    var tbody = myTable.tBodies[1];
    
    //store all rows in a list
    for(var i = 0; i < tbody.children.length; i++) {
      list [i] = tbody.children[i];
    }
    
    //check for the order of the sorting
    checkSort(calledBy);    
    
    list.sort(sort_by(calledBy.getAttribute("data-value")));

    tbody.innerHTML = "";
    
    for(var i = 0; i < list.length; i++) {
      tr = list[i];
      tbody.appendChild(tr);
    }  
}

//function to check the sort order and update it
function checkSort(calledBy) {
    if(calledBy.getAttribute("data-orderby") == "true") {
      orderBy = true;
      calledBy.setAttribute("data-orderby","false");
    }
    else {
      orderBy = false;
      calledBy.setAttribute("data-orderby","true");
    }
}

//function to definie how the sort should be done
var sort_by = function(field) {
                               var columnValue = function (x) {
                                                               return x.getElementsByClassName(field)[0].textContent;
                                                 }
   
                               var returnValue = function (a,b) {
                                                                 var A = columnValue(a), B = columnValue(b);
                                                                 if(orderBy) { 
                                                                   return ((A < B) ? -1 : (A > B) ? +1 : 0);
                                                                 }
                                                                 else { 
                                                                   return ((A < B) ? +1 : (A > B) ? -1 : 0);                 
                                                                 }
                                                  }
                               return returnValue;
               }
