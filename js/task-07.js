const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
span.style.fontSize = `56px`;

input.addEventListener("input", onTargetInput);

function onTargetInput(event) {
  const fontSize = event.currentTarget.value;
  span.style.fontSize = `${fontSize}px`;
}
