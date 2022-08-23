const input = document.querySelector("#validation-input");
const inputLength = input.getAttribute("data-length");

input.addEventListener("blur", onTargetInput);

function onTargetInput(event) {
  let string = event.currentTarget.value;
  console.log(string.length);
  if (string.length === Number(inputLength)) {
    console.log(string.length === Number(inputLength));
    input.classList.add("valid");
    return input.classList.replace("invalid", "valid");
  }
  input.classList.replace("valid", "invalid");
  input.classList.add("invalid");
}
