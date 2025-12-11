'use strict';

const soundHover = new Audio("sounds/hover_vocabulare.mp3");

const summarySound = new Audio("sounds/summary_sound.mp3");

soundHover.preload = "auto";

summarySound.preload = "auto";

const labels = document.querySelectorAll("label");

const summaries = document.querySelectorAll("summary");

// labels.forEach(label => {
//  label.addEventListener(
//   "mouseenter", () => {
//    soundHover.currentTime = 0;
//    soundHover.play();
//   }
//  )
// })

summaries.forEach(summary => {
 summary.addEventListener(
  "click", () => {
   soundHover.currentTime = 0;
   summarySound.play();
  }
 )
})