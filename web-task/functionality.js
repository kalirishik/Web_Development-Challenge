document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".service img").forEach((img) => {
      img.addEventListener("click", () => {
        img.style.transition = "transform 0.5s ease, border 0.5s ease";
        img.style.transform = "scale(1.5)";
        img.style.border = "5px solid #5F41FF";
        setTimeout(() => {
          img.style.transform = "scale(1)";
          img.style.border = "none";
        }, 1000);
      });
    });
  });