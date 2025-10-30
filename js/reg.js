const contrastBtn = document.getElementById("contrastBtn");
const textBtn = document.getElementById("textBtn");
const body = document.body;

contrastBtn.addEventListener("click", () => {
  const on = body.getAttribute("data-theme") === "high-contrast";
  body.setAttribute("data-theme", on ? "standard" : "high-contrast");
  contrastBtn.setAttribute("aria-pressed", !on);
  contrastBtn.classList.toggle("active");
});

textBtn.addEventListener("click", () => {
  const on = body.getAttribute("data-text") === "large";
  body.setAttribute("data-text", on ? "normal" : "large");
  textBtn.setAttribute("aria-pressed", !on);
  textBtn.classList.toggle("active");
});

document.getElementById("firstName").focus();
