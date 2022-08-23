const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", onTargetInput);

function onTargetInput(event) {
  let string = event.currentTarget.value;

  if (string.length === Number(inputLength)) {
    input.classList.add("valid");
    input.classList.replace("invalid", "valid");
    return;
  }
  input.classList.replace("valid", "invalid");
  input.classList.add("invalid");
}
