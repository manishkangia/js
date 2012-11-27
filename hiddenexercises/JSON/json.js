//JSON object
var myJSONObject =[{"name":"1","url":"1.jpg","color":"Yellow","brand":"BRAND A","sold_out":"1"},{"name":"2","url":"2.jpg","color":"Red","brand":"BRAND B","sold_out":"0"},{"name":"3","url":"3.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},{"name":"4","url":"4.jpg","color":"Red","brand":"BRAND A","sold_out":"1"},{"name":"5","url":"5.jpg","color":"Blue","brand":"BRAND B","sold_out":"0"},{"name":"6","url":"6.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},{"name":"7","url":"7.jpg","color":"Red","brand":"BRAND C","sold_out":"1"},{"name":"8","url":"8.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},{"name":"9","url":"9.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"},{"name":"10","url":"10.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},{"name":"11","url":"11.jpg","color":"Green","brand":"BRAND D","sold_out":"0"},{"name":"12","url":"12.jpg","color":"Yellow","brand":"BRAND D","sold_out":"0"},{"name":"13","url":"13.jpg","color":"Blue","brand":"BRAND A","sold_out":"0"},{"name":"14","url":"14.jpg","color":"Blue","brand":"BRAND D","sold_out":"0"},{"name":"15","url":"15.jpg","color":"Green","brand":"BRAND B","sold_out":"0"},{"name":"16","url":"16.jpg","color":"Yellow","brand":"BRAND B","sold_out":"1"},{"name":"17","url":"17.jpg","color":"Green","brand":"BRAND A","sold_out":"1"},{"name":"18","url":"18.jpg","color":"Blue","brand":"BRAND D","sold_out":"1"},{"name":"19","url":"19.jpg","color":"Green","brand":"BRAND C","sold_out":"0"},{"name":"20","url":"20.jpg","color":"Yellow","brand":"BRAND A","sold_out":"0"}]

var list = new Array();
var sortBy = 'name';
var order = true;
var tbody;

//function on load to just fill the table with JSON object's values
function fillTable() {
     
    //to initialize the dropdown with -1
    document.getElementById('sortList').selectedIndex = -1;
    document.getElementById('order').selectedIndex = 0;
    var table = document.getElementById('table');
    tbody = table.tBodies[0];
    initalizePictures();
}

//Initialize the picture in the table
function initalizePictures() {
    for (var i = 0; i < myJSONObject.length; i++) {
        var tr = document.createElement('tr');
        var image = document.createElement('img');
        image.src = "images/"+myJSONObject[i].url;
        tr.appendChild(image);
        tbody.appendChild(tr);
    }
}

//function to change the order of list(ascend or descend)
function changeOrder(value) {
    order = value;
    toSortTable();
}

function toSortTable(dropDown) {
    if(dropDown) {
        sortBy = dropDown.value;
    }
    
    for (var i = 0; i < myJSONObject.length; i++) {
        list[i] = myJSONObject[i];
    }
    
    //to sort out the list in order of sold_out initially so the sold out comes in the end in any group
    list.sort(sort_by('sold_out'));
    
    //in case of name we need to use parseInt so separating that from other cases
    if (sortBy != "name") {
        list.sort(sort_by(sortBy));
    }
    else {
        list.sort(sort_by(sortBy, parseInt));
    }
    
    //change the images according to the sorted list
    for(var i = 0; i < myJSONObject.length; i++) {
        var tr = tbody.children[i];
        tr.children[0].src = "images/"+list[i].url;
    }
}

//the sort function to be used to sort according to the attribute of the object
//reverse it if required
//convertTo to tell us which format to convert to
var sort_by = function(field, convertTo) {
   var attrValue = function (x) {
                                 return convertTo ? convertTo(x[field],10) : x[field];
                   }
   
   var parameter = function (a,b) {
                                   var A = attrValue(a), B = attrValue(b);
                                   if(order) {
                                     return ((A < B) ? -1 : (A > B) ? +1 : 0);
                                   }
                                   else {
                                     return ((A < B) ? +1 : (A > B) ? -1 : 0);                 
                                   }
                   }
   
   return parameter;
}
