function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pinString;
  } else {
    // console.log("got 3 digit and calling again",pin);
    return getPin();
  }
}
function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}
document.getElementById("key-pad").addEventListener("click", (event) => {
  const number = event.target.innerText;
  const calc = document.getElementById("typed-numbers");
  if (!isNaN(number)) {
    const previousCalc = calc.value;
    const newCalc = previousCalc + number;
    calc.value = newCalc;
  } else if (number == "C") {
    calc.value = "";
  } else if (number == "<") {
    const arr = calc.value.split("");
    console.log(arr);
    arr.pop();
    let x = "";
    arr.forEach((element) => {
      x += element;
    });
    calc.value = x;
  }
});

function verifyPin() {
  const pin = document.getElementById("display-pin").value;
  const typeNumbers = document.getElementById("typed-numbers").value;
  const successMessage = document.getElementById("notify-success");
  const failError = document.getElementById("notify-fail");
  if (pin == typeNumbers) {
    failError.style.display = "none";
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
    failError.style.display = "block";
  }
}
