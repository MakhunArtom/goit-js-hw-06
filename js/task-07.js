const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", onTargetInput);

function onTargetInput(event) {
  const fontSize = event.currentTarget.value;

  span.style.fontSize = `${fontSize}px`;
}
