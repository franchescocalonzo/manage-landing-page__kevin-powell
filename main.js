const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

const container = document.querySelector("web-content");
const element = document.querySelector("html");

navToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});

addEventListener("scroll", () => {
  primaryNav.hasAttribute("data-visible") &&
    primaryHeader.toggleAttribute("data-overlay");
  primaryNav.hasAttribute("data-visible") &&
    primaryNav.toggleAttribute("data-visible");
});
const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centerMode: true,
  arrows: false,

  responsive: {
    800: {
      arrows: false,
      dots: false,
    },
  },
});
