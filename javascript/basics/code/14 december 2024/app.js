function showText() {
  console.log("checking...");
  const btn = document.querySelector("button");
  const text = document.createElement("p");
  text.innerText = "Haider";
  document.body.prepend(text);
  btn.innerText = `Hide Text`;
  btn.setAttribute("onclick", "hideText()");
}

function hideText() {
  const btn = document.querySelector("button");
  const text = document.querySelector("p");
  document.body.removeChild(text);
  btn.innerText = `Show Text`;
  btn.setAttribute("onclick", "showText()");
}
