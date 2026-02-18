const steps = document.querySelectorAll(".step-content");
const numbers = document.querySelectorAll(".step-number");
const scrollContainer = document.querySelector(".right-scroll");

scrollContainer.addEventListener("scroll", () => {
  let current = "";

  steps.forEach(step => {
    const rect = step.getBoundingClientRect();
    if (rect.top <= 200) {
      current = step.getAttribute("data-step");
    }
  });

  numbers.forEach(num => {
    num.classList.remove("active");
    if (num.getAttribute("data-step") === current) {
      num.classList.add("active");
    }
  });
});
