const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },

  // ПРОСТО ЩОБ НАБИТИ СІТКУ :)

  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },

  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// // ФУТКЦІЯ СТВОРЮЄ <li> <img> </li>

// const creatLi = (options) => {
//   return options.map(({ url, alt }) => {
//     const liEl = document.createElement("li");
//     liEl.classList.add("gallery-item");

//     const imgEl = document.createElement("img");
//     imgEl.classList.add("gallery-img");
//     imgEl.src = url;
//     imgEl.alt = alt;

//     liEl.appendChild(imgEl);

//     return liEl;
//   });
// };

// // ФУНКЦІЯ ВІШАЄ <li> <img> </li> в DOM

// const galleryAppendLi = (options, callback) => {
//   const galleryEl = document.querySelector(".gallery");
//   return galleryEl.append(...callback(options));
// };

// const app = galleryAppendLi(images, creatLi);

// МЕТОД insertAdjacentHTML().///////////

const galleryEl = document.querySelector(".gallery");

const creatLi = (options) =>
  options
    .map(
      ({ url, alt }) =>
        `<li class="gallery-item"><img class='gallery-img' src='${url}' alt='${alt}'></li>`
    )
    .join("");

galleryEl.insertAdjacentHTML("afterbegin", creatLi(images));
