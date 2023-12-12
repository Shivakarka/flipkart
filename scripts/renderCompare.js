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

export { renderCompare };
