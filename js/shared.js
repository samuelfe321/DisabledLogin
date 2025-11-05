// === Theme & TTS (Shared) ===
const themeBtn = document.getElementById("themeBtn");
const ttsBtn = document.getElementById("ttsBtn");
const body = document.body;

function updateThemeButtonText() {
  const isDark = body.getAttribute("data-theme") === "dark";
  const visibleText = themeBtn.querySelector('span[aria-hidden="true"]');
  visibleText.textContent = isDark ? "Light Mode" : "Dark Mode";
  themeBtn.setAttribute("aria-label", isDark ? "Light Mode" : "Dark Mode");
  themeBtn.setAttribute("title", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
}

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.setAttribute("data-theme", "dark");
  themeBtn.setAttribute("aria-pressed", "true");
}
updateThemeButtonText();

// Toggle Theme
themeBtn.addEventListener("click", () => {
  const isDark = body.getAttribute("data-theme") === "dark";
  const newTheme = isDark ? "standard" : "dark";
  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  themeBtn.setAttribute("aria-pressed", !isDark);
  updateThemeButtonText();
});

// TTS Toggle
ttsBtn.addEventListener("click", () => {
  const isOn = body.getAttribute("data-tts") === "on";
  body.setAttribute("data-tts", isOn ? "off" : "on");
  ttsBtn.setAttribute("aria-pressed", !isOn);
  if (!isOn) speak("Text-to-speech enabled.");
  else speechSynthesis.cancel();
});

function speak(text) {
  if (body.getAttribute("data-tts") !== "on") return;
  speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1;
  speechSynthesis.speak(utterance);
}

// Auto-read labels on focus
document.querySelectorAll("input, button").forEach((el) => {
  el.addEventListener("focus", () => {
    const label = el.closest(".field")?.querySelector("label")?.textContent || el.textContent || el.getAttribute("aria-label");
    if (label) speak(label);
  });
});

// Password toggle
document.querySelectorAll(".toggle-password").forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;
    const isPassword = input.type === "password";
    input.type = isPassword ? "text" : "password";
    btn.innerHTML = isPassword
      ? '<i class="fa fa-eye-slash"></i>'
      : '<i class="fa fa-eye"></i>';
  });
});