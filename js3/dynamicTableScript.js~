var RowCounter=0;

function addTr() {
  createRow();
  bindSaveButton();
}

//function to create elements of the row and assign the row a unique id i.e row counter
function createRow() {
    RowCounter++;
    var table=document.getElementById('myTable');
    var oTBody=table.tBodies[0];

    var tRow=document.createElement("tr");
    tRow.setAttribute('id', 'tr_'+RowCounter);

// adding input text boxes to td
    for(i=0; i<2; i++) {
      var td=document.createElement("td"); 
      tRow.appendChild(addTextBox(td)); 
  }
  
//Give a unique class name to the column with buttons i.e "td_action"
    var tdAction=document.createElement("td");
    tdAction.setAttribute('class','td_action');
  
//create the save button using createBtn() function and then append it
    var saveBtn = createBtn("save");
    tdAction.appendChild(saveBtn);
    tRow.appendChild(tdAction);
  
//Append the row to the body of the table
    oTBody.appendChild(tRow);
}

//function to create the save button and assigning a class to it as "btn_save"
function createBtn(label) {
    var btn = document.createElement("input")
    btn.setAttribute("type","button");
    btn.setAttribute("value",label);
    btn.setAttribute("class","btn_"+label);
    return btn;
}

// editMode replaces the existing data in td to input element value
function addTextBox(td, editMode) {
    var inpt = document.createElement("input");
    inpt.setAttribute("class","text_input");
  
//To check if the function was called by save button or edit button 
    if(editMode) {
      inpt.value = td.innerHTML.trim();
      td.innerHTML = '';
    }
  
    td.appendChild(inpt);
    return td;
}

//function to bind the save button to the save function i.e bindSaveAction()
function bindSaveButton() {
    var rows = document.getElementById('myTable').rows;
    var lastRow = rows[rows.length-1]; // picking the latest row appended to table
    bindSaveAction(lastRow);
}

//Defining the action of save button using saveRow() function
function bindSaveAction(tRow) {
    var saveBtn = tRow.getElementsByClassName("btn_save")[0];
    var tr_id = tRow.id;
    saveBtn.setAttribute("onclick","saveRow('"+tr_id+"')");
}

//Function to save the row when save button is clicked
function saveRow(tr_id) {
    var tr = document.getElementById(tr_id);
    
    // picking input value and replacing with respective td's content
    tr.children[0].innerHTML= tr.getElementsByClassName("text_input")[0].value;
    tr.children[1].innerHTML= tr.getElementsByClassName("text_input")[0].value;
    
    // clean up last td i.e reserved for action buttons
    tr.getElementsByClassName('td_action')[0].innerHTML = '';

    // placing reuqired action buttons for edit and delete
    var tinputEdit=createBtn("edit");
    tr.children[2].appendChild(tinputEdit);
    bindEditButton(tinputEdit, tr_id);     
    
    var tinputDel=createBtn("delete");
    tr.children[2].appendChild(tinputDel);
    bindDeleteButton(tinputDel, tr_id);
  } 

//Defining the action for delete button using delRow() function
function bindDeleteButton(delBtn, tr_id) {
    delBtn.setAttribute("onclick", "delRow('"+tr_id+"')");
}

//function to delete the row
function delRow(tr_id) {
    var tr = document.getElementById(tr_id);
    tr.parentNode.removeChild(tr);
  }

//Defining the action for edit button using editRow() function
function bindEditButton(editBtn, tr_id) {
  editBtn.setAttribute("onclick", "editRow('"+tr_id+"')"); 
}

//Function to delete the row
function editRow(tr_id) {

  //fetch the needed row and adding text boxes
  var tr = document.getElementById(tr_id);
  addTextBox(tr.children[0], true); // passing td as argument

  addTextBox(tr.children[1], true);

  //Creating a new button for save
  var saveBtn = createBtn("save");
  
  //fetch the last column using class name 'td_action'
  var td = tr.getElementsByClassName('td_action')[0];

  //clear the last column
  td.innerHTML = '';

  //Appending the new save button
  td.appendChild(saveBtn);

  //Binding the save button with the action using bindSaveAction()
  bindSaveAction(tr);
}

