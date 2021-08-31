const imgWidth = document.querySelector(".input_1");
const imgHeight = document.querySelector(".input_2");
const btn = document.querySelector(".btn");
const result = document.querySelector(".result");

btn.addEventListener("click", () => {
  if (imgWidth.value > 300 || imgWidth.value < 100) {
    result.innerText = "Одно из чисел не попадает в диапозон от 100 до 300";
  } else if (imgHeight.value > 300 || imgHeight.value < 100) {
    result.innerText = "Одно из чисел не попадает в диапозон от 100 до 300";
  } else {
    fetch(`https://picsum.photos/${imgWidth.value}/${imgHeight.value}`)
    .then(
      (response) => {
        result.innerHTML = `<div class="img-box"> <img width="${imgWidth.value}" heigth="${imgHeight.value}" src="${response.url}" alt="" "> </div>`;
      }
    );
  }
});
