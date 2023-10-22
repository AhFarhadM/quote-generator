const quoteDisplay = document.querySelector(".quote");
const authorDisplay = document.querySelector(".author");
const newQuoteBtn = document.querySelector(".quote-btn");
const twitterBtn = document.querySelector(".twitter-link");
let link;

fetch("https://type.fit/api/quotes")
  .then((response) => response.json())
  .then((data) => {
    let i = -1;
    newQuoteBtn.addEventListener("click", () => {
      i < data.length - 1 ? i++ : (i = 0);
      quoteDisplay.textContent = data[i].text;
      authorDisplay.textContent = data[i].author;

      link = `https://twitter.com/intent/tweet?text=${data[i].text} - ${data[i].author}`;
    });
  });
twitterBtn.addEventListener("click", () => {
  twitterBtn.setAttribute("href", link);
});
