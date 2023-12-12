// const navBar = document.querySelector("nav");
const productSection = document.querySelector(".product-section");
const footerDiv = document.querySelector(".footer");
const compareDiv = document.querySelector(".compare-div");
const compareWindow = document.querySelector(".compare-window");
const compareCountSpan = document.getElementById("compare-count");
const removeAllButton = document.getElementById("remove-all");

let compareProducts = JSON.parse(localStorage.getItem("compareProducts")) || [];

let localProducts = JSON.parse(localStorage.getItem("products"));

// Data fetching functions
const initStore = () => {
  loadDataFromUrl("https://sandbox.nextleap.app/products/fetch").then(
    (products) => {
      renderProducts(products);
      renderFooter(products);
    }
  );
};

const loadDataFromUrl = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`http error! status=${response.status}`);
    }
    return (products = await response.json());
  } catch (error) {
    console.error(error);
    productSection.innerHTML = ` <div class="product-container load-error">
        <div class="product-left">
          <div class="product-left-items error-items">
           <h1>Something went wrong!</h1>
            <button onclick="window.location.reload();">Reload Page</button>
            </div>
          </div>`;
  }
};

// All render functions
const renderNavBar = () => {
  const navBar = document.createElement("nav");
  navBar.innerHTML += ` <div>
        <a href="https://www.flipkart.com"><img src="./assets/Vector.svg" /></a>
        <input type="text" name="search" placeholder="Search" />
        <a
          href="https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect"
          class="become-seller"
          >Become a Seller
        </a>
        <a
          href="https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART"
        >
          Cart
        </a>
      </div>
      `;
  document.body.prepend(navBar);
};

const renderProducts = (products) => {
  const productSection = document.createElement("section");
  productSection.classList.add("product-section");
  products?.productCard?.forEach((product) => {
    const random = randomNumber();
    productSection.innerHTML += `
     <div class="product-container">
        <div class="product-left">
          <div class="product-left-items">
            <img
              src=${product.image.url}
              alt=${product.image.alt}
              title=${product.title}
            />
            <div class="checkboxes">
              <form class="add-cart">
                <input type="checkbox" name="addcart" id="${random}-cart" class="add-checkbox" />
                <label for="${random}-cart">Add to cart</label>
              </form>
              <div class="add-compare">
                <input type="checkbox" id="${random}-compare" class="add-checkbox" />
                <label for="${random}-compare">Add to compare</label>
              </div>
            </div>
          </div>
          <div class="product-info">
            <a
              href=${product.productPageLink.url}
              ><h3>${product.title}</h3></a
            >
            <p>
              <span class="star-rating">${
                product.ratings.overallRating
              } &starf;</span> ${product.ratings.totalRatingsNum.toLocaleString()} Ratings &
              ${product.ratings.totalReviewsNum.toLocaleString()} Reviews
            </p>
            <ul>
              ${product.featuresList
                .map((feature) => {
                  return `<li>${feature}</li>`;
                })
                .join("")}
             </ul>
          </div>
        </div>
        <div class="product-right">
          <p class="price"><strong>Rs. ${product.price.finalPrice.toLocaleString()}</strong></p>
          <p><s>Rs. ${product.price.mrp.toLocaleString()}</s> <span>${
      product.price.discount.data
    }% off</span></p>
          <p>${product.freeDelivery && "Free Delivery"}</p>
          <p>Upto <strong>₹${product.exchangeOfferDiscount.data.toLocaleString()}</strong> off on Exchange</p>
          <p><span>${product.bankOffersLink.buttonText}</span></p>
        </div>
      </div>
              `;
  });
  document.body.append(productSection);
};

const renderFooter = (products) => {
  const footerDiv = document.createElement("footer");
  const footerItem1 = products?.footer.colunms;
  const footerItem2 = products?.footer.bottomColunms;

  const footerRightData1 = footerItem1[4].data.split(",");
  const footerRightData2 = footerItem1[5].data.split(",");

  footerDiv.innerHTML += `
     <div class="footer-top">
          <div class="footer-left">
      ${footerItem1
        .slice(0, 4)
        .map(
          (item) => `
          <div>
            <h6 class="about">${item.title}</h6>
            <ul>
              ${item.data.map((data) => `<li>${data}</li>`).join("")}
            </ul>
          </div>
        `
        )
        .join("")}
    </div>
        <div class="footer-right">
          <div>
            <h6>${footerItem1[4].title}</h6>
            <p>${footerRightData1[0]}</p>
            <p>${footerRightData1[1]}, ${footerRightData1[2].slice(0, 10)}</p>
            <p>${footerRightData1[2].slice(10)},</p>
            <p>${footerRightData1[3]}, ${footerRightData1[4]},</p>
            <p>${footerRightData1[5]}, ${footerRightData1[6]},</p>
            <p>${footerRightData1[7]}, ${footerRightData1[8]}</p>
          </div>
          <div>
            <h6>${footerItem1[5].title}</h6>
            <p>${footerRightData2[0]},</p>
            <p>${footerRightData2[1]}, ${footerRightData2[2].slice(0, 10)}</p>
            <p>${footerRightData2[2].slice(10)},</p>
            <p>${footerRightData2[3]}, ${footerRightData2[4]},</p>
            <p>${footerRightData2[5]}, ${footerRightData2[6]},</p>
            <p>${footerRightData1[7]}, ${footerRightData1[8]}</p>
            <p>${footerRightData2[8].slice(6, 34)}</p>
            <p>${footerRightData2[8].slice(
              35,
              45
            )} <span>${footerRightData2[8].slice(46)}</span></p>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        ${footerItem2
          .map((item) => {
            return `<div>
           ${
             item.img
               ? `<img
            src=${item.img}
            alt="logo"
          />`
               : ""
           }
          ${item.text ? `<a href="">${item?.text}</a>` : ""}
        </div>
        `;
          })
          .join("")} 
   
      </div>
      `;

  document.body.append(footerDiv);
};

const renderCompare = () => {
  const section = document.createElement("section");
  section.classList.add("compare-section");
  section.innerHTML += `
         <div class="compare-div">
        <div class="compare-window"></div>

        <div class="compare">
          <span>COMPARE</span><span id="compare-count">3</span>
        </div>
      </div>
    `;
  document.body.append(section);
};

// Helper functions
const randomNumber = () => {
  return Math.floor(Math.random() * 100000);
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
