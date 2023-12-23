import { eventListenerFunction } from "./eventListenerFunction.js";
import { loadDataFromUrl } from "./helperFunctions.js";
import { renderCompare } from "./renderCompare.js";
import { renderFooter } from "./renderFooter.js";
import { renderNavBar } from "./renderNavBar.js";
import { renderProducts } from "./renderProducts.js";
import { updateCompareSection } from "./updateCompare.js";

// Data fetching functions
const initStore = () => {
  loadDataFromUrl("https://sandbox.nextleap.app/products/fetch").then(
    (products) => {
      renderProducts(products);
      renderFooter(products);
    }
  );
};

// Main function
document.addEventListener("DOMContentLoaded", () => {
  renderNavBar();
  initStore();
  renderCompare();

  // main event listener function
  eventListenerFunction();

  // compare animation
  const compareButton = document.querySelector(".compare");
  compareButton.addEventListener("mouseover", () => {
    const compareWindow = document.querySelector(".compare-window");
    compareWindow.classList.add("compare-animate");
    compareWindow.style.visibility = "visible";
  });

  updateCompareSection();
});
