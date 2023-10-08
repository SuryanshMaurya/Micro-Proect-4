let Final_Result = 0;
let function_used = document.querySelectorAll(".btn");
let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {input.value = "";};

function_used.forEach((button_class) => {
  button_class.addEventListener("click", () => {
    if (Final_Result == 1) {
      input.value = "";
      Final_Result = 0;
    }
    input.value += button_class.value;
  });
});

// calculating the input 
equal.addEventListener("click", () => {
  Final_Result = 1;
  let user_input = input.value;
  try {
    let Answer = eval(user_input);
    if (Number.isInteger(Answer)) {
      input.value = Answer;
    } 
    else {
      input.value = Answer.toFixed(2);
    }
  } catch (err) {alert("Not a Valid Input");}
});

clear.addEventListener("click", () => {input.value = "";});
erase.addEventListener("click", () => {input.value = input.value.substr(0, input.value.length - 1);});
