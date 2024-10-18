let quote = document.querySelector(".advice h1");
let button = document.querySelector("button");
let i = document.querySelector(".advice button i");

async function getAdvice() {
  let respone = await fetch(
    "https://raw.githubusercontent.com/YoussefSamirM/Advice-Generator/refs/heads/master/Json/advice_list.json"
  );
  let data = await respone.json();
  setTimeout(() => {
    quote.innerHTML = data[Math.floor(Math.random() * data.length)].advice;
  }, 500);
}

button.onclick = function () {
  getAdvice();
  rotate();
};

function rotate() {
  setTimeout(() => {
    i.classList.toggle("rotate");
  }, 500);
}
