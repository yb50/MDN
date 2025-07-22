const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const pictures = [
  "pic1.jpg",
  "pic2.jpg",
  "pic3.jpg",
  "pic4.jpg",
  "pic5.jpg"
];

/* Declaring the alternative text for each image file */
const alt = {
  "pic1.jpg" : "Closeup of a human eye",
  "pic2.jpg" : "Rock deformation",
  "pic3.jpg" : "White and purple flowers",
  "pic4.jpg" : "Egyptian wall painting",
  "pic5.jpg" : "Butterfly"
};

/* Looping through images */
for (const picture of pictures) {
  const newPicture = document.createElement("img");
  newPicture.setAttribute('src', `images/${picture}`);
  newPicture.setAttribute('alt', alt[picture]);
  thumbBar.appendChild(newPicture);
  newPicture.addEventListener("click", (e) => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");
  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});