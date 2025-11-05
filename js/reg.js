// /* -------------------------------------------------
//    register.js  (same code works in login.js)
//    ------------------------------------------------- */

// // === DOM elements ===
// const themeBtn = document.getElementById("themeBtn");
// const ttsBtn   = document.getElementById("ttsBtn");
// const body     = document.body;

// // === Helper: set button text / aria / title ===
// function updateThemeButton() {
//   const isDark = body.getAttribute("data-theme") === "dark";

//   const visible = themeBtn.querySelector('span[aria-hidden="true"]');
//   visible.textContent = isDark ? "Light Mode" : "Dark Mode";

//   themeBtn.setAttribute("aria-label", isDark ? "Light Mode" : "Dark Mode");
//   themeBtn.setAttribute("title",      isDark ? "Switch to Light Mode"
//                                             : "Switch to Dark Mode");
// }

// // === Load saved preference (if any) ===
// const savedTheme = localStorage.getItem("theme");   // "dark" | "standard" | null
// if (savedTheme && savedTheme === "dark") {
//   body.setAttribute("data-theme", "dark");
//   themeBtn.setAttribute("aria-pressed", "true");
//   themeBtn.classList.add("active");
// } else {
//   body.setAttribute("data-theme", "standard");
// }
// updateThemeButton();   // set correct label on load

// // === Theme toggle ===
// themeBtn.addEventListener("click", () => {
//   const isDark = body.getAttribute("data-theme") === "dark";

//   // flip theme
//   const newTheme = isDark ? "standard" : "dark";
//   body.setAttribute("data-theme", newTheme);
//   localStorage.setItem("theme", newTheme);   // persist

//   // UI feedback
//   themeBtn.setAttribute("aria-pressed", !isDark);
//   themeBtn.classList.toggle("active");

//   updateThemeButton();
// });

// /* -------------------------------------------------
//    TTS (unchanged – just kept here for completeness)
//    ------------------------------------------------- */
// ttsBtn.addEventListener("click", () => {
//   const isOn = body.getAttribute("data-tts") === "on";
//   body.setAttribute("data-tts", isOn ? "off" : "on");
//   ttsBtn.setAttribute("aria-pressed", !isOn);
//   ttsBtn.classList.toggle("active");

//   if (!isOn) speak("Text-to-speech enabled.");
//   else speechSynthesis.cancel();
// });

// function speak(text) {
//   if (body.getAttribute("data-tts") !== "on") return;
//   speechSynthesis.cancel();
//   const utter = new SpeechSynthesisUtterance(text);
//   utter.rate = 0.9;
//   speechSynthesis.speak(utter);
// }

// /* read label on focus */
// document.querySelectorAll("input").forEach(el => {
//   el.addEventListener("focus", () => {
//     const label = el.closest(".field")?.querySelector("label")?.textContent || "";
//     speak(label);
//   });
// });

// /* -------------------------------------------------
//    Password-eye toggle (register page only)
//    ------------------------------------------------- */
// document.querySelectorAll(".toggle-password").forEach(btn => {
//   btn.addEventListener("click", () => {
//     const input = btn.previousElementSibling;
//     const isPwd = input.type === "password";
//     input.type = isPwd ? "text" : "password";
//     btn.innerHTML = isPwd
//       ? '<i class="fa fa-eye"></i>'
//       : '<i class="fa fa-eye-slash"></i>';
//   });
// });

// /* -------------------------------------------------
//    Password-match validation (register page only)
//    ------------------------------------------------- */
// const pwd        = document.getElementById("regPassword");
// const confirm    = document.getElementById("confirmPassword");
// const mismatch   = document.getElementById("passwordMismatch");

// if (confirm) {
//   confirm.addEventListener("input", () => {
//     if (!confirm.value) {
//       mismatch.textContent = "";
//       confirm.setCustomValidity("");
//       return;
//     }
//     if (pwd.value !== confirm.value) {
//       mismatch.textContent = "Passwords do not match";
//       confirm.setCustomValidity("Passwords do not match");
//     } else {
//       mismatch.textContent = "";
//       confirm.setCustomValidity("");
//     }
//   });
// }

// /* -------------------------------------------------
//    Auto-focus first field
//    ------------------------------------------------- */
// document.getElementById("firstName")?.focus();

// OAuth (same as login)
function oauthLogin(provider) {
  speak(`Signing up with ${provider}`);
  setTimeout(() => {
    alert(`Account created with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`);
  }, 800);
}

// Password match
const pwd = document.getElementById("regPassword");
const confirm = document.getElementById("confirmPassword");
const mismatch = document.getElementById("passwordMismatch");

confirm.addEventListener("input", () => {
  if (!confirm.value) {
    mismatch.textContent = "";
    confirm.setCustomValidity("");
    return;
  }
  if (pwd.value !== confirm.value) {
    mismatch.textContent = "Passwords do not match";
    confirm.setCustomValidity("Passwords do not match");
  } else {
    mismatch.textContent = "";
    confirm.setCustomValidity("");
  }
});

// Auto-focus
document.getElementById("firstName")?.focus();