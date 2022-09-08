const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const numberCounter = document.getElementById("numberCounter");
const stars = document.getElementById("stars");
let count = 2;

const updateStars = () => {
  stars.innerHTML = "";
  for (let i = 1; i <= count; i++) {
    stars.innerHTML += `<div class="fa fa-star checked fa-lg"/>`;
  }
  numberCounter.textContent = count;
};
updateStars();

minus.addEventListener("click", () => {
  if (count > 0) count -= 1;
  updateStars();
});

plus.addEventListener("click", () => {
  if (count <= 4) {
    count += 1;
    updateStars();
  }
});
