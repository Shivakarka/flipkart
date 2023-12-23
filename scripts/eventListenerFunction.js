import { updateCompareSection } from "./updateCompare.js";

const eventListenerFunction = () => {
  let compareProducts =
    JSON.parse(localStorage.getItem("compareProducts")) || [];

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

      // checked = true => add to cart
      // checked = false => remove from cart
      if (target.checked) {
        if (!existingProduct) {
          localProducts.push({ productName, qty });
          localStorage.setItem("products", JSON.stringify(localProducts));
        } else {
          localProducts = localProducts.map((product) => {
            if (product.productName === productName) {
              return { ...product, qty: product.qty + 1 };
            } else {
              return product;
            }
          });
          localStorage.setItem("products", JSON.stringify(localProducts));
        }
      } else {
        if (existingProduct) {
          localProducts = localProducts.filter(
            (product) => product.productName !== productName
          );
          localStorage.setItem("products", JSON.stringify(localProducts));
        }
      }

      localStorage.setItem("products", JSON.stringify(localProducts));
    }

    if (target.matches(".add-compare")) {
      let products =
        target.parentElement.parentElement.parentElement.parentElement;

      let productName =
        products.children[1].children[0].children[0].textContent;

      let image = products.children[0].children[0].getAttribute("src");

      const existingProduct = compareProducts.find(
        (product) => product.title === productName
      );

      // checked = true => add to compare
      // checked = false => remove from compare
      if (target.checked) {
        if (!existingProduct) {
          compareProducts.push({ title: productName, image });
          localStorage.setItem(
            "compareProducts",
            JSON.stringify(compareProducts)
          );
          updateCompareSection();
        }
      } else {
        if (existingProduct) {
          compareProducts = compareProducts.filter(
            (product) => product.title !== productName
          );
          localStorage.setItem(
            "compareProducts",
            JSON.stringify(compareProducts)
          );
          updateCompareSection();
        }
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
};

export { eventListenerFunction };
