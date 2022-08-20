const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const createlement = (araay) => {
  return araay.map((element) => {
    const liEl = document.createElement("li");
    liEl.classList.add("item");
    liEl.textContent = element;
    return liEl;
  });
};

const ulEl = document.querySelector("#ingredients");
ulEl.prepend(...createlement(ingredients));
