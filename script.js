window.onscroll = function () {
  const header = document.getElementById("sushi-header");
  if (window.scrollY > 20) {
    header.classList.add("sushi-header--scroll");
  } else {
    header.classList.remove("sushi-header--scroll");
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const offcanvasElement = document.getElementById("offcanvasNavbar");
  const offcanvasLinks = offcanvasElement.querySelectorAll("a");

  const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement);

  offcanvasLinks.forEach((link) => {
    link.addEventListener("click", () => {
      bsOffcanvas.hide();
    });
  });
});
