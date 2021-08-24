// SCROLL ANIMATION
const fadeinElements = document.querySelectorAll(".project");

const elementInView = (element) => {
  const elementTop = element.getBoundingClientRect().top;

  return elementTop <= window.innerHeight;
};

const displayScrollElement = (element) => {
  element.classList.add("fadein");
};

const scrollAnimation = () => {
  fadeinElements.forEach((element) => {
    if (elementInView(element)) {
      displayScrollElement(element);
    }
  });
};

window.addEventListener("scroll", () => {
  scrollAnimation();
});

// COLLAPSIBLE BOX
const link = document.querySelector("[data-collapsible-link]");

link.addEventListener("click", () => {
  document.querySelector(".collapsible").classList.toggle("hidden");
});

link.classList.add("a");
