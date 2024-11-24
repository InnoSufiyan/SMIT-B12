function openModal() {
  const modalDiv = document.createElement("div");
  modalDiv.innerText = "Mera Modal";
  modalDiv.setAttribute("id", "modal");
  const button = document.querySelector("button");
  document.body.insertBefore(modalDiv, button);
}

function closeHandler() {
  console.log("==>> modalDiv");
  const modalDiv = document.querySelector("#modal");
  console.log(modalDiv, "===>>>modal");
  document.body.removeChild(modalDiv);
}
