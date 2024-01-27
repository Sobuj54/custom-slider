const prev = document.getElementById("prev");
const next = document.getElementById("next");
const carousel = document.querySelector(".carousel");
const listItem = document.querySelector(".carousel .list");
const thumbnail = document.querySelector(".carousel .thumbnail");

next.onclick = function () {
  showSlider("next");
};

const timeRunning = 3000;
let runTimeOut;

function showSlider(type) {
  const sliderItems = document.querySelectorAll(".carousel .list .item");
  const thumbnailItems = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  if (type === "next") {
    listItem.appendChild(sliderItems[0]);
    thumbnail.appendChild(thumbnailItems[0]);
    carousel.classList.add("next");
  }

  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carousel.classList.remove("next");
  }, timeRunning);
}
