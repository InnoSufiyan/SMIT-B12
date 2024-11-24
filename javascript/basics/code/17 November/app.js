var charactersToShow = 150

var data = `
Hi! My name is Muhammad Sufiyan, and i am full stack developer, working in
the industry since past 3 years, my core experitse are on the backend
side, and also training in Saylani Mass IT...
`;

var seeMore = false;

document.querySelector(
  "p"
).innerHTML = `${data}<span onclick='toggleText()'>See Less</span>`;

function toggleText() {
  console.log("chal raha hun main");
  if (!seeMore) {
    seeMore = true;
    document.querySelector("p").innerHTML = `${data.slice(
      0,
      charactersToShow
    )}...<span onclick='toggleText()'>See More</span>`;
  } else {
    seeMore = false;
    document.querySelector(
      "p"
    ).innerHTML = `${data}...<span onclick='toggleText()'>See Less</span>`;
  }
}
