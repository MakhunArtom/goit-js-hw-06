const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", onTargetInput);

function onTargetInput(event) {
  let string = event.currentTarget.value;

  if (string.length <= Number(inputLength)) {
    return (input.style.borderColor = "#4caf50");
  }
  input.style.borderColor = "#f44336";
}
