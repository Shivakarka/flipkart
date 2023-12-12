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

export { renderNavBar };
