const productSection = document.querySelector(".product-section");
const footerDiv = document.querySelector(".footer");

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

const randomNumber = () => {
  return Math.floor(Math.random() * 100000);
};

const renderProducts = (products) => {
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
              <div class="add-cart">
                <input type="checkbox" id="${random}-cart" class="checkbox" />
                <label for="${random}-cart">Add to cart</label>
              </div>
              <div class="add-compare">
                <input type="checkbox" id="${random}-compare" class="checkbox" />
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
};

const renderFooter = (products) => {
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
};

document.addEventListener("DOMContentLoaded", initStore);
