let textBtn = function () {
  let textButton = document.querySelector(".about__button");
  let textTittle = document.querySelector(".text__about");

  if (textButton) {
    textButton.addEventListener("click", function () {
      textButton.classList.toggle("about__button--active");
      textTittle.classList.toggle("text__about--active");

      if (textButton.classList.contains("about__button--active")) {
        textButton.textContent = "Скрыть";
      } else {
        textButton.textContent = "Показать все";
      }
    });
  }
};

textBtn();

let swiper = new Swiper(".swiper", {
  direction: "horizontal",
  spaceBetween: 15,
  slidesPerView: "auto",
  breakpoints: {
    768: {
      enabled: false,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

let hideBtn = function () {
  let clickkBtn = document.querySelector(".btn-slide--vision");
  let hideSlide = document.querySelectorAll(".hidden, .swiper-slide--hidden");
  if (clickkBtn) {
    clickkBtn.addEventListener("click", function () {
      clickkBtn.classList.toggle("active");
      hideSlide.forEach((slide) => {
        slide.classList.toggle("hidden");
        slide.classList.toggle("swiper-slide--hidden");
      });
      if (clickkBtn.classList.contains("active")) {
        clickkBtn.textContent = "Скрыть";
      } else {
        clickkBtn.textContent = "Показать все";
      }
    });
  }
};

hideBtn();

let boxBtn = function () {
  let clickBoxBtn = document.querySelector(".box__button");
  let hideBox = document.querySelectorAll(".swiper-slide--hide");
  if (clickBoxBtn) {
    clickBoxBtn.addEventListener("click", function () {
      clickBoxBtn.classList.toggle("box__button--active");
      hideBox.forEach((slide) => {
        slide.classList.toggle("swiper-slide--hide");
        slide.classList.toggle("swiper-slide");
      });
      if (clickBoxBtn.classList.contains("box__button--active")) {
        clickBoxBtn.textContent = "Скрыть";
      } else {
        clickBoxBtn.textContent = "Показать все";
      }
    });
  }
};
boxBtn();

let acideMenu = function () {
  let clickBurger = document.querySelectorAll(
    ".page-header__burger, .acide__menu__burger"
  );
  let hideAcide = document.querySelector(".acide");
  let pageElement = document.querySelector(".main__page");

  if (clickBurger.length > 0 && hideAcide) {
    clickBurger.forEach(function (burger) {
      burger.addEventListener("click", function (event) {
        event.stopPropagation();
        hideAcide.classList.toggle("acide--open");

        if (hideAcide.classList.contains("acide--open")) {
          pageElement.style.filter = "blur(10px)";
        } else {
          pageElement.style.filter = "blur(0)";
        }
      });
    });
  }

  document.addEventListener("click", function (event) {
    if (
      hideAcide.classList.contains("acide--open") &&
      !hideAcide.contains(event.target) &&
      !Array.from(clickBurger).some((burger) => burger.contains(event.target))
    ) {
      hideAcide.classList.remove("acide--open");
      pageElement.style.filter = "blur(0)";
    }
  });
};

document.addEventListener("DOMContentLoaded", function () {
  acideMenu();
});

let feedbackModal = function () {
  let clickkBtn = document.querySelectorAll(
    ".acide__footer-buttons__feedback, .page__button__feedback"
  );
  let modalPage = document.querySelector(".modal__feedback");
  let closeButton = document.querySelector(".feedback__btn");
  let pageElement = document.querySelector(".main__page");

  if (clickkBtn.length > 0) {
    clickkBtn.forEach(function (btn) {
      btn.addEventListener("click", function () {
        modalPage.classList.toggle("open");

        if (modalPage.classList.contains("open")) {
          pageElement.style.filter = "blur(10px)";
        }
        if (!modalPage.classList.contains("open")) {
          pageElement.style.filter = "blur(0px)";
        }
      });
    });
  }
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      modalPage.classList.remove("open");
      pageElement.style.filter = "blur(0px)";
    });
  }
};

feedbackModal();

let callkModal = function () {
  let clickCall = document.querySelectorAll(
    ".acide__footer-buttons__call, .page__button__call"
  );
  let modalCall = document.querySelector(".modal__menu__call");
  let closeButton = document.querySelector(".call__btn");
  let pageElement = document.querySelector(".main__page");

  if (clickCall.length > 0) {
    clickCall.forEach(function (btn) {
      btn.addEventListener("click", function () {
        modalCall.classList.toggle("call--open");

        if (modalCall.classList.contains("call--open")) {
          pageElement.style.filter = "blur(10px)";
        }
        if (!modalCall.classList.contains("call--open")) {
          pageElement.style.filter = "blur(0px)";
        }
      });
    });
  }
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      modalCall.classList.remove("call--open");
      pageElement.style.filter = "blur(0px)";
    });
  }
};
callkModal();
