// Helper functions to create DOM elements
const createListItem = (text) => {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
};

const createDivWithClass = (className) => {
  const div = document.createElement("div");
  if (className) div.classList.add(className);
  return div;
};

const createParagraph = (text) => {
  const p = document.createElement("p");
  p.textContent = text;
  return p;
};

const createImage = (src, alt) => {
  if (!src) return "";
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  return img;
};

const createAnchor = (href, text) => {
  const a = document.createElement("a");
  a.href = href;
  a.textContent = text;
  return a;
};

const createSpan = (text1, text2) => {
  const span1 = document.createElement("span");
  span1.textContent = text1 + " ";
  span1.style.fontSize = "12px";
  const span2 = document.createElement("span");
  span2.textContent = text2;
  span2.style.fontSize = "12px";
  span2.style.color = "#3d72e8";
  const span = document.createElement("span");
  span.append(span1, span2);
  return span;
};

// Main function to render footer
const renderFooter = (products) => {
  const footerDiv = document.createElement("footer");

  const footerTop = document.createElement("div");
  footerTop.classList.add("footer-top");

  const footerLeft = document.createElement("div");
  footerLeft.classList.add("footer-left");
  footerLeft.append(
    ...products?.footer.colunms.slice(0, 4).map((item) => {
      const div = createDivWithClass("footer-left-items");
      const title = document.createElement("h6");
      title.textContent = item.title;
      div.appendChild(title);
      const ul = document.createElement("ul");
      ul.append(...item.data.map(createListItem));
      div.appendChild(ul);
      return div;
    })
  );

  const footerRight = document.createElement("div");
  footerRight.classList.add("footer-right");

  const rightDiv1 = createDivWithClass("footer-right-items1");
  rightDiv1.innerHTML = `<h6>${products?.footer.colunms[4].title}</h6>`;
  rightDiv1.append(
    createParagraph(products?.footer.colunms[4].data.split(",")[0]),
    createParagraph(
      `${
        products?.footer.colunms[4].data.split(",")[1]
      }, ${products?.footer.colunms[4].data.split(",")[2].slice(0, 10)}`
    ),
    createParagraph(products?.footer.colunms[4].data.split(",")[2].slice(10)),
    createParagraph(
      `${products?.footer.colunms[4].data.split(",")[3]}, ${
        products?.footer.colunms[4].data.split(",")[4]
      },`
    ),
    createParagraph(
      `${products?.footer.colunms[4].data.split(",")[5]}, ${
        products?.footer.colunms[4].data.split(",")[6]
      },`
    ),
    createParagraph(
      `${products?.footer.colunms[4].data.split(",")[7]}, ${
        products?.footer.colunms[4].data.split(",")[8]
      }`
    )
  );

  const rightDiv2 = createDivWithClass("footer-right-items2");
  const title = document.createElement("h6");
  title.textContent = products?.footer.colunms[5].title;
  rightDiv2.appendChild(title);
  rightDiv2.append(
    createParagraph(products?.footer.colunms[5].data.split(",")[0]),
    createParagraph(
      `${
        products?.footer.colunms[5].data.split(",")[1]
      }, ${products?.footer.colunms[5].data.split(",")[2].slice(0, 10)}`
    ),
    createParagraph(products?.footer.colunms[5].data.split(",")[2].slice(10)),
    createParagraph(
      `${products?.footer.colunms[5].data.split(",")[3]}, ${
        products?.footer.colunms[5].data.split(",")[4]
      },`
    ),
    createParagraph(
      `${products?.footer.colunms[5].data.split(",")[5]}, ${
        products?.footer.colunms[5].data.split(",")[6]
      },`
    ),
    createParagraph(
      `${products?.footer.colunms[4].data.split(",")[7]}, ${
        products?.footer.colunms[4].data.split(",")[8]
      }`
    ),
    createParagraph(
      products?.footer.colunms[5].data.split(",")[8].slice(6, 34)
    ),
    createSpan(
      `${products?.footer.colunms[5].data.split(",")[8].slice(35, 45)}`,
      `${products?.footer.colunms[5].data.split(",")[8].slice(46)}`
    )
  );

  footerRight.append(rightDiv1, rightDiv2);

  footerTop.append(footerLeft, footerRight);

  const footerBottom = document.createElement("div");
  footerBottom.classList.add("footer-bottom");
  footerBottom.append(
    ...products?.footer.bottomColunms.map((item) => {
      const div = document.createElement("div");
      const image = createImage(item.img, item.alt);
      div.append(item.img ? image : "");
      div.append(item.text ? createAnchor("", item.text) : "");
      return div;
    })
  );

  footerDiv.append(footerTop, footerBottom);
  document.body.append(footerDiv);
};

export { renderFooter };
