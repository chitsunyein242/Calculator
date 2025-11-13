const display = document.querySelector("#display");
const buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
  button.addEventListener("click", calculate);
});

function calculate(e) {
  let value = e.target.innerText;

  switch (value) {
    case "AC":
      display.innerText = "";
      display.classList.remove("error");
      break;

    case "←":
      display.innerText = display.innerText.slice(0, -1);
      break;

    case "=":
      try {
        if (display.innerText === "") {
          display.innerText = "";
        } else {
          display.innerText = eval(display.innerText);
        }
        display.classList.remove("error"); 
        break;
      } catch (e) {
        display.innerText = "Invalid Input";
        display.classList.add("error"); 
        break;
      }

    default:
      display.innerText += value;
  }
}
