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
    img: "./images/app-icons/contact.svg",
  },
  {
    id: 4,
    name: "resume",
    img: "./images/app-icons/resume.svg",
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
const tab = document.querySelector(".tab");

window.addEventListener("DOMContentLoaded", function () {
  displayIcons(app);
});

function displayTab() {
  tab.classList.add("about");
}

function displayIcons(appItems) {
  let display = appItems.map(function (item) {
    return `<button type="button" class="icon-btn" data-id=${item.name}>
    <img src=${item.img} alt="" />${item.name}
      </button>`;
  });
  display = display.join("");

  icons.innerHTML = display;
  const apps = icons.querySelectorAll(".icon-btn");

  apps.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      if (category) {
      }
    });
  });
}

// start
const startBtn = document.querySelector(".start-btn");
const startContainer = document.querySelector(".start-container");

startBtn.addEventListener("click", function () {
  startContainer.classList.toggle("active");
});
