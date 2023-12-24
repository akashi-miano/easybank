const footerNav = document.querySelector(".footer__nav");
const footerSocialWrapper = document.querySelector(".footer__socials-wrapper");
const footerList = document.querySelector(".footer__list");
const mobileHeroImage = document.querySelector(".hero .bg-img");
const mobileNav = document.getElementById("mobile-nav");
const mobileToggle = document.querySelector(".nav-toggle");

const updateClasses = () => {
  if (window.innerWidth <= 750) {
    footerNav.classList.add("flow-content--m");
    footerSocialWrapper.classList.add("flow-content--m");
    footerList.classList.add("flow-content--m");
  }
};

const removeHeroImg = () => {
  if (window.innerWidth <= 1200) mobileHeroImage.style = "display: none";
};

mobileToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("clicked");
  if (mobileNav.classList.contains("clicked")) {
    mobileToggle.querySelector("img").src = "images/icon-close.svg";
    mobileNav.classList.add("flex");
  } else {
    mobileToggle.querySelector("img").src = "images/icon-hamburger.svg";
    mobileNav.classList.remove("flex");
  }
});
removeHeroImg();
updateClasses();
