const btn = document.querySelector("#btn");
function btnEvent() {
  const rangeNumber = parseInt(document.querySelector("#rangeNumber").value);
  const peopleChoice = parseInt(document.querySelector("#guessNumber").value);
  const information = document.querySelector("#information");
  console.log(rangeNumber);
  console.log(peopleChoice);
  localStorage.setItem("guessNumber", peopleChoice);
  const machineChoice = parseInt(Math.random() * (rangeNumber + 1));
  console.log(machineChoice);
  localStorage.setItem("machineChoice", machineChoice);
  //   information.innerText = "You chose:" + peopleChoice + ", the machine chose :"+ machineChoice;
  information.innerText = `You chose: ${peopleChoice} , the machine chose ${machineChoice}`;
  information.classList.remove("hidden");
  const check = sameCheck(peopleChoice, machineChoice);
  const result = document.querySelector("#result");
  result.classList.remove("hidden");
  if (check) {
    result.innerText = "You win";
  } else {
    result.innerText = "you lose";
  }
}
function sameCheck(num1, num2) {
  if (num1 === num2) {
    return true;
  }
  return false;
}
btn.addEventListener("click", btnEvent);
