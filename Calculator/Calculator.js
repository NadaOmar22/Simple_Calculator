// display function is to display the clicked button value
function display(value) {
  document.getElementById("Result").value += value
}

// claer() function is to delete all numbers and operations appear in screen
function clearScreen() {
  var Result2 = ""
  document.getElementById("Result").value = Result2
}

// deleteNumber to back one step
function deleteNumber() {
  var Result2 = document.getElementById("Result").value
  Result2 = Result2.substr(0,document.getElementById("Result").value.length-1)
  document.getElementById("Result").value = Result2
}

function calculate()
{
  var current_value = document.getElementById("Result").value;
  var result_value = eval(current_value);
  document.getElementById("Result").value = result_value;

}
