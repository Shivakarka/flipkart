import { loadDataFromUrl } from "./helperFunctions.js";
import { renderCompare } from "./renderCompare.js";
import { renderFooter } from "./renderFooter.js";
import { renderNavBar } from "./renderNavBar.js";
import { renderProducts } from "./renderProducts.js";
import { updateCompareSection } from "./updateCompare.js";

let compareProducts = JSON.parse(localStorage.getItem("compareProducts")) || [];

// Data fetching functions
const initStore = () => {
  loadDataFromUrl("https://sandbox.nextleap.app/products/fetch").then(
    (products) => {
      renderProducts(products);
      renderFooter(products);
    }
  );
};

// Event listeners and init functions
document.addEventListener("DOMContentLoaded", () => {
  renderNavBar();
  initStore();
  renderCompare();

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (target.matches(".add-checkbox")) {
      let products =
        target.parentElement.parentElement.parentElement.parentElement;
      let productName =
        products.children[1].children[0].children[0].textContent;
      let qty = 1;

      let localProducts = JSON.parse(localStorage.getItem("products")) || [];

      const existingProduct = localProducts.find(
        (product) => product.productName === productName
      );

      if (existingProduct) {
        existingProduct.qty += qty;
      } else {
        localProducts.push({ productName, qty });
      }

      localStorage.setItem("products", JSON.stringify(localProducts));
    }

    if (target.matches(".add-checkbox")) {
      let products =
        target.parentElement.parentElement.parentElement.parentElement;

      let productName =
        products.children[1].children[0].children[0].textContent;

      let image = products.children[0].children[0].getAttribute("src");

      const existingProduct = compareProducts.find(
        (product) => product.title === productName
      );

      if (!existingProduct) {
        compareProducts.push({ title: productName, image });
        localStorage.setItem(
          "compareProducts",
          JSON.stringify(compareProducts)
        );
        updateCompareSection();
      }
    }

    if (target.matches(".remove-compare")) {
      const title = target.dataset.title;
      compareProducts = compareProducts.filter(
        (product) => product.title !== title
      );
      localStorage.setItem("compareProducts", JSON.stringify(compareProducts));
      updateCompareSection();
    }

    if (target.matches("#remove-all")) {
      compareProducts = [];
      localStorage.setItem("compareProducts", JSON.stringify(compareProducts));
      updateCompareSection();
    }
  });

  updateCompareSection();
});
