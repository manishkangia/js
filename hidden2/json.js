//JSON object
var myJSONObject =[{"name":"1","url":"1.jpg","color":"Yellow","brand":"BRAND A","sold_out":"1"},{"name":"2","url":"2.jpg","color":"Red","brand":"BRAND B","sold_out":"0"},{"name":"3","url":"3.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},{"name":"4","url":"4.jpg","color":"Red","brand":"BRAND A","sold_out":"1"},{"name":"5","url":"5.jpg","color":"Blue","brand":"BRAND B","sold_out":"0"},{"name":"6","url":"6.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},{"name":"7","url":"7.jpg","color":"Red","brand":"BRAND C","sold_out":"1"},{"name":"8","url":"8.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},{"name":"9","url":"9.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"},{"name":"10","url":"10.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},{"name":"11","url":"11.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},{"name":"12","url":"12.jpg","color":"Yellow","brand":"BRAND D","sold_out":"0"},{"name":"13","url":"13.jpg","color":"Blue","brand":"BRAND A","sold_out":"0"},{"name":"14","url":"14.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},{"name":"15","url":"15.jpg","color":"Green","brand":"BRAND B","sold_out":"0"},{"name":"16","url":"16.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},{"name":"17","url":"17.jpg","color":"Green","brand":"BRAND A","sold_out":"1"},{"name":"18","url":"18.jpg","color":"Blue","brand":"BRAND D","sold_out":"1"},{"name":"19","url":"19.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},{"name":"20","url":"20.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"}]

var list = new Array();
var sortBy='name',order=true;

//function on load to just fill the table with JSON object's values
function fillTable() {
     
      //to initialize the dropdown with -1
      var sortList = document.getElementById('sortList');
      sortList.selectedIndex = -1;
      var orderList = document.getElementById('order');
      orderList.selectedIndex = 0;
      var table = document.getElementById('table');
      for (var i = 1; i <= myJSONObject.length; i++) {
          var tr = document.getElementById(i);
          var img_file = "images/"+myJSONObject[i-1].url
          tr.innerHTML = "<img src="+img_file+"></img>";
      }
}

//function to change the order of list(ascend or descend)
function changeOrder(value) {
      order = value;
      toSortTable();
}

function toSortTable(dropDown) {
    if(dropDown)
    sortBy = dropDown.value;
    list = [];
    
    for (var i = 0; i < myJSONObject.length; i++) {
        list[i] = myJSONObject[i];
    }
    
    //to sort out the list in order of sold_out initially so the sold out comes in the end in any group
    list.sort(sort_by('sold_out', true, function(a){return a.toUpperCase()}));
    
    //in case of name we need to use parseInt so separating that from other cases
    if (sortBy.toString() != "name")
        list.sort(sort_by(sortBy.toString(), order, function(a){return a.toString()}));
            else if(sortBy.toString() == "name")
                list.sort(sort_by(sortBy.toString(), order, parseInt));
    
    //to fill up the table with the list
    var table = document.getElementById('table');
    for(var i = 1; i <= myJSONObject.length; i++) {
        var tr = document.getElementById(i);
        var img_file = "images/"+list[i-1].url;
        tr.innerHTML = "<img src="+img_file+"></img>" ;
    }
}

//the sort function to be used to sort according to the attribute of the object//
//reverse it if required//
//convertTo to tell us which format to convert to
var sort_by = function(field, reverse, convertTo) {
   var attrValue = function (x) {return convertTo ? convertTo(x[field]) : convertTo[field]};
   return function (a,b) {
       var A = attrValue(a), B = attrValue(b);
       if(reverse)
        return ((A < B) ? -1 : (A > B) ? +1 : 0)
        else
          return ((A < B) ? +1 : (A > B) ? -1 : 0)                  
   }
}

