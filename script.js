const productSection = document.querySelector(".product-section");

const initStore = () => {
  loadDataFromUrl("https://sandbox.nextleap.app/products/fetch").then(
    (products) => {
      renderProducts(products);
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

const renderProducts = (products) => {
  products?.productCard?.forEach((product) => {
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
              <div class="add-cart">
                <input type="checkbox" id="cart" class="checkbox" />
                <label for="cart">Add to cart</label>
              </div>
              <div class="add-compare">
                <input type="checkbox" id="compare" class="checkbox" />
                <label for="compare">Add to compare</label>
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
              <li>${product.featuresList[0]}</li>
              <li>${product.featuresList[1]}</li>
              <li>${product.featuresList[2]}</li>
              <li>${product.featuresList[3]}</li>
              <li>${product.featuresList[4]}</li>
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
};

document.addEventListener("DOMContentLoaded", initStore);
