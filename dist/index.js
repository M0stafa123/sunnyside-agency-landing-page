"use strict";
let burger = document.querySelector(".hamburger");
let menu = document.querySelector("nav ul");
burger.addEventListener("click", function () {
    if (innerWidth < 767) {
        if (menu.classList.contains("w-0")) {
            menu.style.height = "150px";
            menu.style.width = "300px";
            setTimeout(function () {
                menu.style.overflow = "visible";
            }, 40);
            menu.classList.remove("w-0");
        }
        else {
            menu.classList.add("w-0");
            menu.style.width = "0";
            menu.style.height = "0px";
            menu.style.overflow = "hidden";
        }
    }
});
