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
  whitelist: "acceptlist",
  blacklist: "blocklist",
  businessman: "business person"
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
  whitelist: "acceptlist",
  blacklist: "blocklist",
  businessman: "businessperson"
};

let elements = document.querySelectorAll(
  "h1, h2, h3, h4, h5, h6, p, li, td, caption, span, div, a, body, ul, strong, em, table, form, i, b"
);

function find() {
  elements.forEach((element) => {
    element.childNodes.forEach((child, index) => {
      if (child.nodeType === 3) {
        if (child.textContent) {
          let text = child.textContent;
          for (const key in DICT) {
            let regex;
            if (key in DICT2) {
              regex = new RegExp(key, "i");
            } else {
              regex = new RegExp("\b" + key + "\b", "i");
            }
            console.log(text);
            text = text.replace(
              regex,
              `<span class='flagged' data-word='${DICT[key]}'>${key}</span>`
            );
            console.log(text);
          }
          const newChild = document.createElement("span");
          newChild.innerHTML = text;
          element.replaceChild(newChild, child);
        }
      }
    });
  });
}

function replace(elem) {
  let newValue = elem.getAttribute('data-word');
  elem.textContent = newValue;
  elem.classList.add("changed");
}

function debate(elem) {
  elem.classList.add("hovered");
}

window.onload = find();

let words = document.getElementsByClassName('flagged');
for (let i = 0; i < words.length; i++) {
  words[i].onclick = () => replace(words[i]);
}

for (let i = 0; i < words.length; i++) {
  words[i].onmouseover = () => debate(words[i]);
}

