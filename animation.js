// 3D Mouse Move Effect

const cards = document.querySelectorAll(".card");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    let x = e.offsetX;
    let y = e.offsetY;

    let centerX = card.offsetWidth / 2;
    let centerY = card.offsetHeight / 2;

    let rotateX = (y - centerY) / 15;
    let rotateY = (centerX - x) / 15;

    card.style.transform = `
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
scale(1.05)
`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
