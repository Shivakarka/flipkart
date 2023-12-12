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

export { renderFooter };
