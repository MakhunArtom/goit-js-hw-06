// Кількість КАТЕГОРІЙ \\\\\\\\\\\\\
const categoriesAmountRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAmountRef.length}`);

// Масив ЗАГОЛОВКІВ //////////////
const titlRef = document.querySelectorAll("h2");

// Категорія ANIMAL \\\\\\\\\\\\\
const animalLiRef = categoriesAmountRef[0].querySelectorAll("li");

console.log(`Category: ${titlRef[0].textContent}`);
console.log(`Elements: ${animalLiRef.length}`);

// Категорія products \\\\\\\\\\\\\
const productsLiRef = categoriesAmountRef[1].querySelectorAll("li");

console.log(`Category: ${titlRef[1].textContent}`);
console.log(`Elements: ${productsLiRef.length}`);

// Категорія technologies \\\\\\\\\\\\\
const technologiesLiRef = categoriesAmountRef[2].querySelectorAll("li");

console.log(`Category: ${titlRef[2].textContent}`);
console.log(`Elements: ${technologiesLiRef.length}`);
