
const resetBtn = document.getElementById("resetBtn")
const num1 = document.getElementById("num1"),
num2 = document.getElementById("num2"),
result = document.getElementById("result")

function performOperation(typeOfOperation){
  let res = 0;
  const val1 = parseInt(num1.value);
  const val2 = parseInt(num2.value);
  if (typeOfOperation == 'add')
  {
    res = val1 + val2
  }else if(typeOfOperation == 'sub'){
    res = val1 - val2;
  }
  else if(typeOfOperation == 'mul'){
    res = val1 * val2;
  }
  else if(typeOfOperation == 'div'){
    res = val1 / val2;
  }
  else if(typeOfOperation == 'reset'){
    res = 0;
  }
  result.innerHTML = res;
}

const buttons = document.querySelectorAll(".button")
console.log(buttons)
buttons.forEach(button => {
  console.log(button.id)
  button.addEventListener("click", function(){
    performOperation(button.id)
  })
});