document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const closeBtn = document.querySelector(".close");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      lightboxImage.src = item.src;
      lightbox.classList.add("visible");
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.classList.remove("visible");
    setTimeout(() => {
      lightbox.style.display = "none";
    }, 300);
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target !== lightboxImage) {
      lightbox.classList.remove("visible");
      setTimeout(() => {
        lightbox.style.display = "none";
      }, 300);
    }
  });
});
