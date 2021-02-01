const toggles = document.querySelectorAll(".faq-toggle");
const faqs = document.querySelectorAll(".faq");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    const isActive = toggle.parentNode.classList.toggle("active");
  });
});
