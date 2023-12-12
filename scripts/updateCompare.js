import { showCompare } from "./helperFunctions.js";

const updateCompareSection = () => {
  const compareWindow = document.querySelector(".compare-window");
  const compareCountSpan = document.getElementById("compare-count");

  let compareProducts =
    JSON.parse(localStorage.getItem("compareProducts")) || [];

  compareCountSpan.textContent = compareProducts.length;

  compareWindow.innerHTML = "";

  compareProducts.forEach((product) => {
    compareWindow.innerHTML += `
        <div class="compare-images">
          <img
            src=${product.image}
            alt=${product.title}
            title=${product.title}
          />
          <span>${product.title.slice(0, 12)}...</span>
          <button class="remove-compare" data-title="${
            product.title
          }">&#10005</button>
        </div>
        <button id="remove-all">REMOVE ALL</button>
      `;
  });

  showCompare();
};

export { updateCompareSection };
