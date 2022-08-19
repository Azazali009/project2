"use strict";
const showModel = document.querySelectorAll(".show-model");
const model = document.querySelector(".model");
const closeBtn = document.querySelector(".close-model");
const overlay = document.querySelector(".overlay");

const remove = function () {
  model.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const add = function () {
  model.classList.add("hidden");
  overlay.classList.add("hidden");
};
for (let i = 0; i < showModel.length; i++)
  showModel[i].addEventListener("click", remove);
closeBtn.addEventListener("click", add);

overlay.addEventListener("click", add);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    add();
  }
});
