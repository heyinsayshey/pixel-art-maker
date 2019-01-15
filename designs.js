// Select color input
const pixelColor = document.querySelector('#colorPicker');

// Select size input
const pixelHeight = document.querySelector('#inputHeight');
const pixelWidth = document.querySelector('#inputWidth');

// When size is submitted by the user, call makeGrid()
var submit = document.querySelector('#submitButton');
submit.addEventListener('click', onSubmit);

//Eventlistener when submit button is clicked.
function onSubmit(event){
  event.preventDefault();
  makeGrid();
};

//Delete previous grid when click the submit button.
function deleteGrid(){
  var tableId = document.querySelector('table');
  for (var i=tableId.rows.length; i>0; i--){
    tableId.deleteRow(i-1);
  };
};

//Making grid function, add onclick attribute for each cells to change bgcolor.
function makeGrid(){
  h = pixelHeight.value;
  w = pixelWidth.value;
  //remove grid first when click submit Button
  deleteGrid();
  //make a new Grid
  for (var r=0; r<w; r++){
    var tr = document.createElement('tr');
    var table = document.querySelector('table')
    table.appendChild(tr);
    for (var c=0; c<h; c++){
      var td = document.createElement('td');
      tr.appendChild(td);
      //add background color in the cell.
      td.setAttribute('onclick', 'cellColor(this)');
    };
  };
};

//add backgroundColor in the cell function.
function cellColor(el){
  if (el.style.backgroundColor === '') {
    el.style.backgroundColor = pixelColor.value;
  } else {
    el.style.backgroundColor = ''
  };
};
