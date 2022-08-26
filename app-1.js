const app = [
  {
    id: 1,
    name: "my project",
    img: "./images/app-icons/project.svg",
  },
  {
    id: 2,
    name: "about",
    img: "./images/app-icons/about.svg",
  },
  {
    id: 3,
    name: "contact",
    img: "./images/app-icons/project.svg",
  },
  {
    id: 4,
    name: "resume",
    img: "./images/app-icons/contact.svg",
  },
  {
    id: 5,
    name: "tagline.txt",
    img: "./images/app-icons/tagline.svg",
  },
  {
    id: 6,
    name: "headshot.jpg",
    img: "./images/app-icons/headshot.svg",
  },
];

// icons
const icons = document.querySelector(".icons");
const taskbar = document.querySelector(".taskbar");

window.addEventListener("DOMContentLoaded", function () {
  displayIcons(app);
});

function displayIcons(appItems) {
  let display = appItems.map(function (item) {
    return `<button type="button" class="icon-btn">
        <img src=${item.img} alt="" />${item.name}
      </button>`;
  });
  display = display.join("");

  icons.innerHTML = display;
}

// add tab in taskbar
const addTab = document.createElement("div");
addTab.classList.add("tab-down");

taskbar.appendChild(addTab);
