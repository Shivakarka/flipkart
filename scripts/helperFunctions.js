const randomNumber = () => {
  return Math.floor(Math.random() * 100000);
};

const loadDataFromUrl = async (url) => {
  try {
    let products = [];
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`http error! status=${response.status}`);
    }
    return (products = await response.json());
  } catch (error) {
    console.error(error);
    const productSection = document.createElement("section");
    productSection.classList.add("product-section");
    productSection.innerHTML = ` <div class="product-container load-error">
        <div class="product-left">
          <div class="product-left-items error-items">
           <h1>Something went wrong!</h1>
            <button onclick="window.location.reload();">Reload Page</button>
            </div>
          </div>`;
    document.body.append(productSection);
  }
};

const showCompare = () => {
  const compareDiv = document.querySelector(".compare-div");

  let compareProducts =
    JSON.parse(localStorage.getItem("compareProducts")) || [];

  if (compareProducts.length > 0) {
    compareDiv.style.display = "block";
  } else {
    compareDiv.style.display = "none";
  }
};

export { randomNumber, loadDataFromUrl, showCompare };
