let menuBtn = document.querySelector(".menu__btn");
let menuRight = document.querySelector(".menu__right");
let menuLeft = document.querySelector(".menu__left");
menuBtn.addEventListener("click", function () {
  menuLeft.classList.toggle("open");
  menuRight.classList.toggle("open");
  gsap.fromTo(
    ".menu__left.open",
    { y: "-100%", duration: 0.5, ease: "power4.out" },
    { y: "0%" }
  );
  gsap.fromTo(
    ".menu__right.open",
    { y: "100%", duration: 0.5, ease: "power4.out" },
    { y: "0%" }
  );
});
