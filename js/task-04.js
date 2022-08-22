const refs = {
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let counterValue = 0;

refs.increment.addEventListener("click", onTargetIncrementClick);

refs.decrement.addEventListener("click", onTargetDecrementClick);

function onTargetIncrementClick(event) {
  counterValue += 1;
  refs.value.textContent = counterValue;
}

function onTargetDecrementClick(event) {
  counterValue -= 1;
  refs.value.textContent = counterValue;
}
