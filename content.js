"use strict";

const DICT = {
  bad: "good",
  suck: "stink",
  fuck: "frick",
  fucking: "fricking",
  fucker: "fricker",
  man: "person",
  chairman: "chairperson",
  policeman: "police officer",
  guys: "team",
  mankind: "humanity",
  actress: "actor",
  nazi: "absolutist",
  hysterical: "intense",
  assertive: "confident",
};

const DICT2 = {
  fuck: "frick",
  fucking: "fricking",
  fucker: "fricker",
  chairman: "chairperson",
  policeman: "police officer",
  guys: "team",
  mankind: "humanity",
  actress: "actor",
  nazi: "absolutist",
  hysterical: "intense",
  assertive: "confident",
};

let elements = document.querySelectorAll(
  "h1, h2, h3, h4, h5, h6, p, li, td, caption, span, div, a, body, ul, strong, em, table, form, i, b"
);

function findAndReplace() {
  elements.forEach((element) => {
    element.childNodes.forEach((child, index) => {
      if (child.nodeType === 3) {
        if (child.textContent) {
          let text = child.textContent;
          for (const key in DICT) {
            if (key in DICT2) {
              const regex = new RegExp(key, "i");
              text = text.replace(
                regex,
                `<span class='changed'>${DICT[key]}</span>`
              );
            } else {
              const regex = new RegExp("\b" + key + "\b", "i");
              text = text.replace(
                regex,
                `<span class='changed'>${DICT[key]}</span>`
              );
            }
          }
          const newChild = document.createElement("span");
          newChild.innerHTML = text;
          element.replaceChild(newChild, child);
        }
      }
    });
  });
}

function find() {
  elements.forEach((element) => {
    element.childNodes.forEach((child, index) => {
      if (child.nodeType === 3) {
        if (child.textContent) {
          let text = child.textContent;
          for (const key in DICT) {
            if (key in DICT2) {
              const regex = new RegExp(key, "i");
              text = text.replace(
                regex,
                `<span class='changed'>${text}</span>`
              );
            } else {
              const regex = new RegExp("\b" + key + "\b", "i");
              text = text.replace(
                regex,
                `<span class='changed'>${text}</span>`
              );
            }
          }
          const newChild = document.createElement("span");
          newChild.innerHTML = text;
          element.replaceChild(newChild, child);
        }
      }
    });
  });
}

function replace(child) {
  let text = child.textContent;
  for (const key in DICT) {
    if (key in DICT2) {
      const regex = new RegExp(key, "i");
      text = text.replace(regex, `<span class='changed'>${DICT[key]}</span>`);
    } else {
      const regex = new RegExp("\b" + key + "\b", "i");
      text = text.replace(regex, `<span class='changed'>${DICT[key]}</span>`);
    }
  }
  const newChild = document.createElement("span");
  newChild.innerHTML = text;
  element.replaceChild(newChild, child);
}

window.onload = find();
let word = document.querySelector("span");
word.addEventListener("click", replace(word));

//window.onload = findAndReplace();
