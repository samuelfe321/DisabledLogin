// // === Accessibility Toggles ===
// const themeBtn = document.getElementById("themeBtn");
// const ttsBtn = document.getElementById("ttsBtn");
// const body = document.body;

// // Helper: Update button text based on current theme
// function updateThemeButtonText() {
//   const isDark = body.getAttribute("data-theme") === "dark";
//   const visibleText = themeBtn.querySelector('span[aria-hidden="true"]');
//   visibleText.textContent = isDark ? "Light Mode" : "Dark Mode";
//   themeBtn.setAttribute("aria-label", isDark ? "Light Mode" : "Dark Mode");
//   themeBtn.setAttribute(
//     "title",
//     isDark ? "Switch to Light Mode" : "Switch to Dark Mode"
//   );
// }

// // Initial text setup
// updateThemeButtonText();

// // Toggle Theme
// themeBtn.addEventListener("click", () => {
//   const isDark = body.getAttribute("data-theme") === "dark";
//   body.setAttribute("data-theme", isDark ? "standard" : "dark");
//   themeBtn.setAttribute("aria-pressed", !isDark);
//   themeBtn.classList.toggle("active");

//   // Update button text immediately
//   updateThemeButtonText();
// });

// // TTS Toggle (unchanged)
// ttsBtn.addEventListener("click", () => {
//   const isOn = body.getAttribute("data-tts") === "on";
//   body.setAttribute("data-tts", isOn ? "off" : "on");
//   ttsBtn.setAttribute("aria-pressed", !isOn);
//   ttsBtn.classList.toggle("active");
//   if (!isOn) speak("Text-to-speech enabled.");
//   else speechSynthesis.cancel();
// });

// // === Speak Function ===
// function speak(text) {
//   if (body.getAttribute("data-tts") !== "on") return;
//   speechSynthesis.cancel();
//   const utterance = new SpeechSynthesisUtterance(text);
//   utterance.rate = 0.9;
//   utterance.pitch = 1;
//   speechSynthesis.speak(utterance);
// }

// // Auto-read labels on focus
// document.querySelectorAll("input, button").forEach((el) => {
//   el.addEventListener("focus", () => {
//     const label =
//       el.closest(".field")?.querySelector("label")?.textContent ||
//       el.textContent;
//     speak(label);
//   });
// });

// // === Eye Toggle ===
// document.querySelectorAll(".toggle-password").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     const input = btn.previousElementSibling;
//     const type = input.type === "password" ? "text" : "password";
//     input.type = type;
//     btn.innerHTML =
//       type === "text"
//         ? '<i class="fa fa-eye"></i>'
//       : '<i class="fa fa-eye-slash"></i>';
//   });
// });

// // === Forgot Password (simulated) ===
// document.getElementById("forgotLink")?.addEventListener("click", (e) => {
//   e.preventDefault();
//   const email = prompt("Enter your email:");
//   if (email && email.includes("@")) {
//     alert(`Password reset link sent to ${email}`);
//     speak(`Password reset link sent to ${email}`);
//   }
// });

// // Auto-focus
// document.getElementById("loginEmail")?.focus();

// OAuth Login Simulation
function oauthLogin(provider) {
  speak(`Signing in with ${provider}`);
  setTimeout(() => {
    alert(`Signed in with ${provider.charAt(0).toUpperCase() + provider.slice(1)}!`);
    // In real app: redirect to /auth/provider
  }, 800);
}

// Forgot Password Modal
const modal = document.getElementById('resetModal');
const closeBtn = modal.querySelector('.modal-close');
const forgotLink = document.getElementById('forgotLink');
const resetForm = document.getElementById('resetForm');

forgotLink.addEventListener('click', e => {
  e.preventDefault();
  modal.setAttribute('aria-hidden', 'false');
  document.getElementById('resetEmail').focus();
  speak('Enter your email to receive a reset link');
});

closeBtn.addEventListener('click', () => {
  modal.setAttribute('aria-hidden', 'true');
});
modal.addEventListener('click', e => {
  if (e.target === modal) modal.setAttribute('aria-hidden', 'true');
});

resetForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = resetForm.resetEmail.value.trim();
  if (!email || !email.includes('@')) {
    alert('Please enter a valid email');
    return;
  }
  // Simulate sending email
  alert(`Password reset link sent to ${email}`);
  speak(`Reset link sent to ${email}`);
  modal.setAttribute('aria-hidden', 'true');
  resetForm.reset();
});

// Auto-focus
document.getElementById("loginEmail")?.focus();