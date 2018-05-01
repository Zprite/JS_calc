
var operator=null; // Used as a char variable

function sum () {
  var num1 = parseInt(document.getElementById('num1').value);
  var num2 = parseInt(document.getElementById('num2').value);
  switch(operator){
    case null:
      window.alert("Please select an operator first!");
      break;
    case '+' :
      document.getElementById('sum').innerHTML= num1 + num2;
      break;
    case'-':
      document.getElementById('sum').innerHTML= num1 - num2;
      break;
    case '*':
      document.getElementById('sum').innerHTML= num1 * num2;
      break;
    case '/':
      document.getElementById('sum').innerHTML= num1 / num2;
      break;
    default:
      document.getElementById('sum').innerHTML= "ERROR!!!";
  }
}

function change_operator(new_operator){
  operator=new_operator;
}

function change_buttonColor(button, color){

//Reset colors for all other buttons
  var buttons= new Array ("btn_+", "btn_-" , "btn_*" , "btn_/");
  var i;
  for (i=0; i < 4; i++){
    var temp = document.getElementById(buttons[i]);
    temp.style.backgroundColor='';
  }
// Change color of button in args
  var property = document.getElementById(button);
    property.style.backgroundColor =color;
}
