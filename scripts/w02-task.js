/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = "Jacob Martin";
let currentYear = "2024";
let profilePicture = "images/guy.jpg";

/* Step 3 - Element Variables */

const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector('picture img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let foodArray = [`Pie`, `Limes`, `Nachos`, `Steak`];
let favFood = "Pizza"; 
foodArray.unshift(favFood); 

let listItems = "";
for (const fa of foodArray) {
  listItems += `<li>${fa}</li>`;
}

document.querySelector("ul").innerHTML = listItems;
foodElement.innerHTML = listItems;

/*commit?*/