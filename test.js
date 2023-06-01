const navbar = document.getElementById("navbar");
  const subdropdown = document.querySelector(".subdropdown");

  function toggleSubDropdown(event) {
    event.preventDefault();
    event.stopPropagation();
    subdropdown.classList.toggle("hidden");
  }

  document.addEventListener("click", function (event) {
    const targetElement = event.target;
    const subdropdown = document.querySelector(".subdropdown");

    if (!subdropdown.contains(targetElement)) {
      subdropdown.classList.add("hidden");
    }

    if (navbar.contains(targetElement) && window.innerWidth < 768) {
      navbar.classList.add("hidden");
    }
  });

  function hideNavbarOnSmallDevice() {
    if (window.innerWidth < 768) {
      navbar.classList.add("hidden");
      subdropdown.classList.add("md:absolute", "right-0", "top-full", "mt-2", "w-40");
    } else {
      navbar.classList.remove("hidden");
      subdropdown.classList.remove("md:absolute", "right-0", "top-full", "mt-2", "w-40");
    }
  }

  window.addEventListener("resize", hideNavbarOnSmallDevice);
  hideNavbarOnSmallDevice(); // Initial execution on page load

  function toggleMobileMenu() {
    navbar.classList.toggle("hidden");
  }

  subdropdown.addEventListener("click", function () {
    if (window.innerWidth < 768) {
      navbar.classList.add("hidden");
    }
  });