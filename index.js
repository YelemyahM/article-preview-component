const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn-2");
const bubble = document.getElementById("links-bubble");
const authorSection = document.getElementById("article__author");
const socialsSection = document.getElementById("socials");

btn.addEventListener("click", () => {
  if (window.innerWidth < 768) {
    authorSection.style.display = "none";
    socialsSection.style.display = "flex";
    bubble.style.display = "none";
  } else {
    if (bubble.style.visibility === "visible") {
      bubble.style.visibility = "hidden";
    } else {
      bubble.style.visibility = "visible";
    }
  }
});

btn2.addEventListener("click", () => {
  authorSection.style.display = "flex";
  socialsSection.style.display = "none";
});
