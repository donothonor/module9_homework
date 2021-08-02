const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const resultNode = document.querySelector(".result");

btn.addEventListener("click", () => {
  if (input.value < 1 || input.value > 10) {
    resultNode.innerText = `Число ${input.value} вне диапозона от 1 до 10`;
  } else {
    useRequest(
      `https://picsum.photos/v2/list?limit=${input.value}`,
      displayResult
    );
  }
});

function useRequest(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (xhr.status !== 200) {
      console.log(`Status : ${xhr.status}`);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };
  xhr.send();
}

function displayResult(apiData) {
  let cards = "";
  apiData.forEach((item) => {
    let cardBlock = `
    <div class="card">
    <img
      src="${item.download_url}"
      class="card-image"
    />
    <p>${item.author}</p>
  </div>
`;
    cards = cards + cardBlock;
  });

  resultNode.innerHTML = cards;
}
