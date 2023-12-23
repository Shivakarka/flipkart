const renderNavBar = () => {
  const navBar = document.createElement("nav");

  const navBarContent = document.createElement("div");

  const flipkartLink = document.createElement("a");
  flipkartLink.href = "https://www.flipkart.com";
  const flipkartImg = document.createElement("img");
  flipkartImg.src = "./assets/Vector.svg";
  flipkartImg.alt = "Flipkart Logo";
  flipkartLink.appendChild(flipkartImg);
  navBarContent.appendChild(flipkartLink);

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.name = "search";
  searchInput.placeholder = "Search";
  navBarContent.appendChild(searchInput);

  const sellerLink = document.createElement("a");
  sellerLink.href =
    "https://seller.flipkart.com/sell-online/?utm_source=fkwebsite&utm_medium=websitedirect";
  sellerLink.classList.add("become-seller");
  sellerLink.textContent = "Become a Seller";
  navBarContent.appendChild(sellerLink);

  const cartLink = document.createElement("a");
  cartLink.href =
    "https://www.flipkart.com/viewcart?exploreMode=true&preference=FLIPKART";
  cartLink.textContent = "Cart";
  navBarContent.appendChild(cartLink);

  navBar.appendChild(navBarContent);

  document.body.prepend(navBar);
};

export { renderNavBar };
