import { randomNumber } from "./helperFunctions.js";

const renderProducts = (products) => {
  const productSection = document.createElement("section");
  productSection.classList.add("product-section");

  products?.productCard?.forEach((product) => {
    const productContainer = document.createElement("div");
    productContainer.classList.add("product-container");

    const productLeft = document.createElement("div");
    productLeft.classList.add("product-left");

    const productLeftItems = document.createElement("div");
    productLeftItems.classList.add("product-left-items");

    const productImage = document.createElement("img");
    productImage.src = product.image.url;
    productImage.alt = product.image.alt;
    productImage.title = product.title;

    const checkboxes = document.createElement("div");
    checkboxes.classList.add("checkboxes");

    const addCartForm = document.createElement("form");
    addCartForm.classList.add("add-cart");

    const addCartCheckbox = document.createElement("input");
    addCartCheckbox.type = "checkbox";
    addCartCheckbox.name = "addcart";
    addCartCheckbox.id = `${randomNumber()}-cart`;
    addCartCheckbox.classList.add("add-checkbox");

    const addCartLabel = document.createElement("label");
    addCartLabel.htmlFor = addCartCheckbox.id;
    addCartLabel.textContent = "Add to cart";

    addCartForm.appendChild(addCartCheckbox);
    addCartForm.appendChild(addCartLabel);

    const addCompareDiv = document.createElement("div");
    addCompareDiv.classList.add("add-compare");

    const addCompareCheckbox = document.createElement("input");
    addCompareCheckbox.type = "checkbox";
    addCompareCheckbox.id = `${randomNumber()}-compare`;
    addCompareCheckbox.classList.add("add-checkbox");

    const addCompareLabel = document.createElement("label");
    addCompareLabel.htmlFor = addCompareCheckbox.id;
    addCompareLabel.textContent = "Add to compare";

    addCompareDiv.appendChild(addCompareCheckbox);
    addCompareDiv.appendChild(addCompareLabel);

    checkboxes.appendChild(addCartForm);
    checkboxes.appendChild(addCompareDiv);

    productLeftItems.appendChild(productImage);
    productLeftItems.appendChild(checkboxes);

    productLeft.appendChild(productLeftItems);

    const productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    const productTitleLink = document.createElement("a");
    productTitleLink.href = product.productPageLink.url;

    const productTitle = document.createElement("h3");
    productTitle.textContent = product.title;

    productTitleLink.appendChild(productTitle);
    productInfo.appendChild(productTitleLink);

    const starRating = document.createElement("span");
    starRating.classList.add("star-rating");
    starRating.innerHTML = `${product.ratings.overallRating} &starf;`;

    const ratingsInfo = document.createElement("p");
    ratingsInfo.innerHTML = `${
      starRating.outerHTML
    } ${product.ratings.totalRatingsNum.toLocaleString()} Ratings & ${product.ratings.totalReviewsNum.toLocaleString()} Reviews`;

    const featuresList = document.createElement("ul");
    product.featuresList.forEach((feature) => {
      const featureItem = document.createElement("li");
      featureItem.textContent = feature;
      featuresList.appendChild(featureItem);
    });

    productInfo.appendChild(ratingsInfo);
    productInfo.appendChild(featuresList);

    productLeft.appendChild(productInfo);

    const productRight = document.createElement("div");
    productRight.classList.add("product-right");

    const priceParagraph = document.createElement("p");
    priceParagraph.classList.add("price");

    const priceStrong = document.createElement("strong");
    priceStrong.textContent = `Rs. ${product.price.finalPrice.toLocaleString()}`;

    priceParagraph.appendChild(priceStrong);

    const discountParagraph = document.createElement("p");
    const discountStrikethrough = document.createElement("s");
    discountStrikethrough.textContent = `Rs. ${product.price.mrp.toLocaleString()}`;
    const discountSpan = document.createElement("span");
    discountSpan.textContent = `${product.price.discount.data}% off`;

    discountParagraph.appendChild(discountStrikethrough);
    discountParagraph.appendChild(discountSpan);

    const freeDeliveryParagraph = document.createElement("p");
    freeDeliveryParagraph.textContent = product.freeDelivery && "Free Delivery";

    const exchangeOfferParagraph = document.createElement("p");
    exchangeOfferParagraph.innerHTML = `Upto <strong>₹${product.exchangeOfferDiscount.data.toLocaleString()}</strong> off on Exchange`;

    const bankOffersParagraph = document.createElement("p");
    const bankOffersSpan = document.createElement("span");
    bankOffersSpan.textContent = product.bankOffersLink.buttonText;

    bankOffersParagraph.appendChild(bankOffersSpan);

    productRight.appendChild(priceParagraph);
    productRight.appendChild(discountParagraph);
    productRight.appendChild(freeDeliveryParagraph);
    productRight.appendChild(exchangeOfferParagraph);
    productRight.appendChild(bankOffersParagraph);

    productContainer.appendChild(productLeft);
    productContainer.appendChild(productRight);

    productSection.appendChild(productContainer);
  });

  document.body.appendChild(productSection);
};

export { renderProducts };
