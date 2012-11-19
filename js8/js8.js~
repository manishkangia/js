
//function of shift the elements   
function move(from,to) {
   
   firstList = document.getElementById(from);
   secondList = document.getElementById(to);
   
   var move_list=new Array();  
   for(var i=0; i<firstList.length; i++)
   {
    if(firstList[i].selected==true)
    move_list = move_list + i;
   }
   
   for(var i=0; i<move_list.length; i++)
   { 
    secondList.appendChild(firstList[move_list[move_list.length-1-i]]);
   }
   
   //to empty the array list for next action
   move_list = [];
}

