import hedgehog from "./images/met hedgehog.jpeg";
import invasion from "./images/met invasion.jpeg";
import pig from "./images/met pig.jpeg";
import tart from "./images/met tart.jpeg";

function makeContent() {
  let images = [];
  let texts = [
    "Mett Hedgehog (10€) - For the kids.",
    "Mett Appetizers (20€) - Your entry point into the world of Mett.",
    "Mett Pig(50€) - Pleasing to the eye",
    "Mett Tart (100€) - A birthday like no other, the neighbour's dog in a world of pain.",
  ];
  const hedgehogImg = document.createElement("img");
  hedgehogImg.src = hedgehog;
  const invasionImg = document.createElement("img");
  invasionImg.src = invasion;
  const pigImg = document.createElement("img");
  pigImg.src = pig;
  const tartImg = document.createElement("img");
  tartImg.src = tart;
  images.push(hedgehogImg);
  images.push(invasionImg);
  images.push(pigImg);
  images.push(tartImg);

  let myHtml = document.createElement("div");
  for (let i = 0; i < 4; ++i) {
    let myContainer = document.createElement("div");
    myContainer.classList.add("entry");
    myHtml.appendChild(myContainer);
    myContainer.appendChild(images[i]);
    myContainer.append(texts[i]);
    let myStripline = document.createElement("hr");
    myHtml.appendChild(myStripline);
  }
  return myHtml;
}

export const menu = makeContent();
