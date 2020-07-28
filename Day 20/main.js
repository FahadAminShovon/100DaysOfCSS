document.addEventListener("DOMContentLoaded", function () {
  const icon = document.getElementById("successTickIcon");
  const message = document.getElementById("successMessage");
  icon.style.opacity = "1";
  icon.style.top = "80%";
  icon.style.transition = "all 1s ease-out";
  message.style.opacity = 1;
  message.style.transition = "opacity 1s ease-out 1s";
});
