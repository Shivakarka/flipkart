import { showCompare } from "./helperFunctions.js";

const createCompareImage = (product) => {
  const compareImageContainer = document.createElement("div");
  compareImageContainer.classList.add("compare-images-container");

  const compareImageDiv = document.createElement("div");
  compareImageDiv.classList.add("compare-images");

  const productImage = document.createElement("img");
  productImage.src = product.image;
  productImage.alt = product.title;
  productImage.title = product.title;

  const productTitle = document.createElement("span");
  productTitle.textContent = `${product.title.slice(0, 12)}...`;

  const removeButton = document.createElement("button");
  removeButton.classList.add("remove-compare");
  removeButton.dataset.title = product.title;
  removeButton.innerHTML = "&#10005";

  compareImageDiv.appendChild(productImage);
  compareImageDiv.appendChild(productTitle);
  compareImageDiv.appendChild(removeButton);

  compareImageContainer.appendChild(compareImageDiv);

  return compareImageContainer;
};

const createRemoveAllButton = () => {
  const removeAllButton = document.createElement("button");
  removeAllButton.id = "remove-all";
  removeAllButton.textContent = "REMOVE ALL";
  return removeAllButton;
};

const updateCompareSection = () => {
  const compareWindow = document.querySelector(".compare-window");
  const compareCountSpan = document.getElementById("compare-count");

  let compareProducts =
    JSON.parse(localStorage.getItem("compareProducts")) || [];

  compareCountSpan.textContent = compareProducts.length;

  compareWindow.innerHTML = "";

  compareProducts.forEach((product) => {
    const compareImageDiv = createCompareImage(product);
    compareWindow.appendChild(compareImageDiv);
  });

  if (compareProducts.length > 1) {
    const removeAllButton = createRemoveAllButton();
    compareWindow.appendChild(removeAllButton);
  }

  showCompare();
};

export { updateCompareSection };
