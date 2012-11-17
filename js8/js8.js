var move_list=new Array();
//Function to create a list of selected indexes
function generateList(selectedElement) {
   console.log(move_list);
   move_list= move_list + selectedElement.selectedIndex;
   console.log(move_list);
  }
  
//function of shift the elements 
//flow decides the flow of elements  
function move(flow) {
   if(flow) {
   firstList = document.getElementById("list1");
   secondList = document.getElementById("list2");
   }
   else {
   firstList = document.getElementById("list2");
   secondList = document.getElementById("list1");
   }
     
   for(var i=0; i<move_list.length; i++)
   {
    var ele= firstList.children[move_list[i]];
    secondList.appendChild(ele);
   }
   
   //to empty the array list for next action
   move_list = [];
}

