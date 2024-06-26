const imgs = document.getElementById("imgs");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

const img = document.querySelectorAll("#imgs img");

let imageIndex = 0;

function run() {
  imageIndex++;
  changeImage();
}

function changeImage() {
  if (imageIndex > img.length - 3) {
    imageIndex = 0;
  } else if (imageIndex < 0) {
    imageIndex = img.length - 3;
  }
  const translateXValue = -(imageIndex * (100 / 3));
  imgs.style.transform = `translateX(${translateXValue}%)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
}

let interval = setInterval(run, 2000);

rightBtn.addEventListener("click", () => {
  imageIndex++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener("click", () => {
  imageIndex--;
  changeImage();
  resetInterval();
});

function navigateToStore() {
  window.location.href = "pages/store/store.html";
}
