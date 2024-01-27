const prev = document.getElementById("prev");
const next = document.getElementById("next");
const carousel = document.querySelector(".carousel");
const listItem = document.querySelector(".carousel .list");
const thumbnail = document.querySelector(".carousel .thumbnail");

next.onclick = function () {
  showSlider("next");
};

prev.onclick = function () {
  showSlider("prev");
};

const timeRunning = 3000;
const autoNext = 7000;
let runTimeOut;

let autoRun = setTimeout(() => {
  next.click();
}, autoNext);

function showSlider(type) {
  const sliderItems = document.querySelectorAll(".carousel .list .item");
  const thumbnailItems = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    listItem.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    carousel.classList.add("next");
  } else {
    const lastItem = sliderItems.length - 1;
    listItem.prepend(sliderItems[lastItem]);
    thumbnail.prepend(thumbnailItems[lastItem]);
    carousel.classList.add("prev");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove("next");
    carousel.classList.remove("prev");
  }, timeRunning);

  clearTimeout(autoRun);
}
