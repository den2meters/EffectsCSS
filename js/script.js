"use strict";

function verticalMenu1() {
   let target = Array.from(document.querySelectorAll('.vertical-menu-1__item'));
   let backIcon = document.querySelector('.vertical-menu-1__back');
   let backColor = document.querySelector('.vertical-menu-1__border');
   for (let i = 0; i < target.length; i++) {
      let icon = target[i].querySelector('.vertical-menu-1__icon');
      let text = target[i].querySelector('.vertical-menu-1__text');
      icon.addEventListener('mouseenter', () => {
         text.classList.add("vertical-menu-1__text-active");
         backIcon.style.transform = `translate(${-50}%, ${68 * i}px)`;
         if (i == 0) {
            backIcon.style.backgroundColor = 'rgb(255, 0, 0)';
            backColor.style.backgroundColor = 'rgb(255, 0, 0)';
         };
         if (i == 1) {
            backIcon.style.backgroundColor = 'rgb(135, 255, 80)';
            backColor.style.backgroundColor = 'rgb(135, 255, 80)';
         }
         if (i == 2) {
            backIcon.style.backgroundColor = 'rgb(80, 150, 255)';
            backColor.style.backgroundColor = 'rgb(80, 150, 255)';
         };
         if (i == 3) {
            backIcon.style.backgroundColor = 'rgb(255, 80, 182)';
            backColor.style.backgroundColor = 'rgb(255, 80, 182)';
         }
         if (i == 4) {
            backIcon.style.backgroundColor = 'rgb(255, 252, 80)';
            backColor.style.backgroundColor = 'rgb(255, 252, 80)';
         };
      });
      text.addEventListener('mouseout', () => {
         text.classList.remove("vertical-menu-1__text-active");
      })
      text.addEventListener('mouseenter', () => {
         text.classList.add("vertical-menu-1__text-active");
      });
      icon.addEventListener('mouseout', () => {
         text.classList.remove("vertical-menu-1__text-active");
      })
   }
}
verticalMenu1();