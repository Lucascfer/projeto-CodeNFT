import { Animation } from "./Animation.js";

import {
  cardHomeAnimation,
  leftAnimationContainerElementList,
  topAnimationContainerElementList,
  topAnimationElementList,
} from "./AnimationData.js";

document.onreadystatechange = function () {
  if (document.readyState === "complete") {
    Animation({
      items: leftAnimationContainerElementList,
      delay: 100,
      origin: "left",
    });

    Animation({
      items: [...topAnimationContainerElementList, ...topAnimationElementList],
      delay: 100,
      origin: "top",
    });

    Animation({
      items: cardHomeAnimation,
      delay: 500,
      origin: "bottom",
    });

    createCarousel(".info-content", ".info");
  }
};

function createCarousel(containerClass, itemClass) {
  var currentIndex = 0,
    items = document.querySelectorAll(containerClass + " " + itemClass);

  function slideItems() {
    var item = items[currentIndex];
    item.classList.remove("current");
    currentIndex = (currentIndex + 1) % items.length;
    item = items[currentIndex];
    item.classList.add("current");
  }

  setInterval(slideItems, 3000);
}