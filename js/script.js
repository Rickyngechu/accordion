"use strict";
// Select all the accordion btn
const btn = document.querySelectorAll(".acc-btn");
const accDetails = document.querySelectorAll(".accordion-details");

const accHead = document.querySelectorAll(".headtxt");

const images = document.querySelectorAll(".img");
console.log(btn);
console.log(accDetails);
console.log(accHead);

for (let i = 0; i < accDetails.length; i++) {
  //   console.log(btn[i]);
  //   console.log(accDetails[i]);
  console.log(accHead[i]);

  btn[i].addEventListener("click", function () {
    accDetails[i].classList.toggle("hide");

    images[i].classList.toggle("imgrt");

    if (images[i].classList.contains("imgrt")) {
      accHead[i].style.color = "hsl(238, 29%, 16%)";
    } else {
      accHead[i].style.color = "hsl(237, 12%, 33%)";
    }
  });
}
