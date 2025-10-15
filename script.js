
window.addEventListener("load", () => {
  setTimeout(() => {
    const intro = document.getElementById("intro");
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 1000);
  }, 3000);
});


function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}


function openProject(url) {
  window.location.href = url;
}