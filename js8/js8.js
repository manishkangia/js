var move_list=new Array();
//Function to create a list of selected indexes
function generateList(selectedElement) {
   console.log(move_list);
   move_list= move_list + selectedElement.selectedIndex;
  }
  
//function of shift the elements 
//flow decides the flow of elements  
function move(from,to) {
   
   firstList = document.getElementById(from);
   secondList = document.getElementById(to);
     
   for(var i=0; i<move_list.length; i++)
   {
    var data= firstList.children[move_list[i]];
    secondList.appendChild(data);
   }
   
   //to empty the array list for next action
   move_list = [];
}

