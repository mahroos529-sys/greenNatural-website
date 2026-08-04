/* ===========================
   Green Natural - app.js
=========================== */

// Navbar shadow while scrolling
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(0,0,0,0.75)";
    header.style.boxShadow = "0 10px 25px rgba(0,0,0,.3)";
  } else {
    header.style.background = "rgba(255,255,255,.08)";
    header.style.boxShadow = "none";
  }
});

// Smooth fade animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

document.querySelectorAll(".box,.welcome,.contact").forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(50px)";
  item.style.transition = "1s";

  observer.observe(item);
});

// Button ripple effect
document.querySelectorAll(".btn,.whatsapp").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const circle = document.createElement("span");

    circle.style.position = "absolute";
    circle.style.width = "20px";
    circle.style.height = "20px";
    circle.style.background = "rgba(255,255,255,.6)";
    circle.style.borderRadius = "50%";
    circle.style.left = e.offsetX + "px";
    circle.style.top = e.offsetY + "px";
    circle.style.transform = "translate(-50%,-50%)";
    circle.style.animation = "ripple .6s linear";

    this.appendChild(circle);

    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});

// Ripple Animation
const style = document.createElement("style");

style.innerHTML = `
.btn,.whatsapp{
position:relative;
overflow:hidden;
}

@keyframes ripple{

from{
opacity:1;
transform:translate(-50%,-50%) scale(0);
}

to{
opacity:0;
transform:translate(-50%,-50%) scale(15);
}

}
`;

document.head.appendChild(style);

// Floating Hero Text
const heroTitle = document.querySelector(".hero h2");

if (heroTitle) {
  setInterval(() => {
    heroTitle.style.transform = "translateY(-8px)";

    setTimeout(() => {
      heroTitle.style.transform = "translateY(0px)";
    }, 600);
  }, 2500);
}

// Welcome message
console.log("🍹 Green Natural Website Loaded Successfully!");
