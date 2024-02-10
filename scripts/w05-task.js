const templesElement = document.getElementById('temples');
let templeList = [];


const displayTemples = (temples) => {
  temples.forEach(temple => {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    let img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

const getTemples = async () => {
  const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
  templeList = await response.json();
  displayTemples(templeList);
};


const reset = () => {
  while (templesElement.firstChild) {
    templesElement.removeChild(templesElement.firstChild);
  }
};

const filterTemples = () => {
  reset();
  let filter = document.getElementById('filtered').value;
  let filteredTemples;
  switch (filter) {
    case 'utah':
      filteredTemples = templeList.filter(temple => temple.location.includes("Utah"));
      break;
    case 'nonutah':
      filteredTemples = templeList.filter(temple => !temple.location.includes("Utah"));
      break;
    case 'older':
      filteredTemples = templeList.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1));
      break;
    case 'all':
    default:
      filteredTemples = templeList;
      break;
  }
  displayTemples(filteredTemples);
};


document.getElementById('filtered').addEventListener('change', filterTemples);

getTemples();
