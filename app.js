const taskbar = document.querySelector(".taskbar");
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".icon-btn");
const startBtns = document.querySelectorAll(".start-icon");
const project = document.querySelector(".projects-container");
const projBtns = document.querySelectorAll(".project-btn");
const projViews = document.querySelectorAll(".project-viewer");
// const closeBtns = document.querySelectorAll(".close-btn");

// pag click dapat nasa front yung tab
// resize ung tab
// disapper in start after 10 seconds pag di na click

// closeBtns.forEach(function (closeBtn) {
//   closeBtn.addEventListener("click", function (e) {
//     const element = e.target.parentElement.parentElement.parentElement;
//     console.log(element);
//     element.classList.remove(
//       "project",
//       "about",
//       "contact",
//       "resume",
//       "welcome",
//       "headshot",
//       "active"
//     );
//   });
// });

project.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    projBtns.forEach(function (projBtn) {
      projBtn.classList.remove("open-btn");
    });
    e.target.classList.add("open-btn");
  }
  projViews.forEach(function (projView) {
    projView.classList.remove("open-view");
  });
  const element = document.getElementById(id);
  element.classList.add("open-view");
});

// start
const startBtn = document.querySelector(".start-btn");
const startContainer = document.querySelector(".start-container");

startBtn.addEventListener("click", function () {
  startContainer.classList.toggle("active");
  setTimeout(function () {
    startContainer.classList.remove("active");
  }, 5000);
});

// open app
// background
btns.forEach(function (btn) {
  btn.addEventListener("click", openApp);
});
// start
startBtns.forEach(function (startBtn) {
  startBtn.addEventListener("click", openApp);
});

//closing app
function openApp(e) {
  // e.preventDefault();
  const id = e.target.dataset.id;
  const element = document.getElementById(id);
  element.classList.add("active");

  const tabBtns = element.querySelector(".tab-btn");
  tabBtns.addEventListener("click", resize);

  const closeBtn = document.querySelector(".close-btn");
  closeBtn.addEventListener("click", closeApp);

  setDefault();
}

function resize(e) {
  const element = e.currentTarget.parentElement.parentElement.parentElement;
  element.classList.toggle("resize");
}

function closeApp(e) {
  const element = e.currentTarget.parentElement.parentElement.parentElement;
  console.log(element);
  element.classList.remove(
    "project",
    "about",
    "contact",
    "resume",
    "welcome",
    "headshot",
    "active"
  );
}

function setDefault() {
  startContainer.classList.remove("active");
}

// move tab
// function onDrag(e, movementX, movementY) {
//   const element =
//     e.currentTarget.parentElement.parentElement.parentElement.parentElement;
//   console.log(e, movementX, movementY);

//   let getStyle = window.getComputedStyle(element);
//   let leftVal = parseInt(getStyle.left);
//   let topVal = parseInt(getStyle.top);
//   element.style.left = `${leftVal + movementX}px`;
//   element.style.top = `${topVal + movementY}px`;
// }
