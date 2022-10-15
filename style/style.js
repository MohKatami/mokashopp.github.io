// humbeRGER MENU

function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
}

// slider trending

const productContainer = [...document.querySelectorAll(".product-trending")];
const btnNext = [...document.querySelectorAll(".btn-next")];
const btnPrev = [...document.querySelectorAll(".btn-prev")];

productContainer.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  btnNext[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  btnPrev[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// slider 1

const productContainers = [...document.querySelectorAll(".product-container1")];
const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
const preBtn = [...document.querySelectorAll(".pre-btn")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// slider 2

const productContainers2 = [...document.querySelectorAll(".product-container2")];
const btnNxt = [...document.querySelectorAll(".btn-nxt")];
const btnPre = [...document.querySelectorAll(".btn-pre")];

productContainers2.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  btnNxt[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  btnPre[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});

// slider 3

const productContainers3 = [...document.querySelectorAll(".product-container3")];
const nextBtn = [...document.querySelectorAll(".next-btn")];
const prevBtn = [...document.querySelectorAll(".prev-btn")];

productContainers3.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  prevBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
