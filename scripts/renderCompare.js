const renderCompare = () => {
  const section = document.createElement("section");
  section.classList.add("compare-section");

  const compareDiv = document.createElement("div");
  compareDiv.classList.add("compare-div");

  const compareWindow = document.createElement("div");
  compareWindow.classList.add("compare-window");

  const compareInfo = document.createElement("div");
  compareInfo.classList.add("compare");

  const compareTitle = document.createElement("span");
  compareTitle.textContent = "COMPARE";

  const compareCountSpan = document.createElement("span");
  compareCountSpan.id = "compare-count";
  compareCountSpan.textContent = "3";

  compareInfo.appendChild(compareTitle);
  compareInfo.appendChild(compareCountSpan);

  compareDiv.appendChild(compareWindow);
  compareDiv.appendChild(compareInfo);

  section.appendChild(compareDiv);
  document.body.appendChild(section);
};

export { renderCompare };
