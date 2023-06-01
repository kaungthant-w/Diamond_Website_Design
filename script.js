function toggleDarkMode() {
    const body = document.body;
    const bgdark = document.getElementById("bgdark");
    const navbar = document.getElementById('navbar');
    const mobileNav = document.getElementById("mobileNav");
    const icons = document.querySelectorAll('.dark-mode-icon');
    const subdropdown = document.querySelector(".subdropdown");
    body.classList.toggle('dark');
    bgdark.classList.toggle('dark');
    navbar.classList.toggle('bg-gray-900');
    navbar.classList.toggle('text-white');
    mobileNav.classList.toggle('bg-gray-900');
    subdropdown.classList.toggle('bg-gray-900');
    subdropdown.classList.toggle('border-none');
    
    for (let i = 0; i < icons.length; i++) {
      icons[i].classList.toggle('text-gray-600');
    }
  }

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const cardContainer = document.getElementById('cardContainer');
const cards = cardContainer.querySelectorAll('.w-64');

let scrollPosition = 0;
const cardWidth = cards[0].offsetWidth + 16; // Account for margin

prevButton.addEventListener('click', () => {
  scrollPosition -= cardWidth;
  if (scrollPosition < 0) scrollPosition = 0;
  cardContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
  scrollPosition += cardWidth;
  if (scrollPosition > cardContainer.scrollWidth - cardContainer.clientWidth)
    scrollPosition = cardContainer.scrollWidth - cardContainer.clientWidth;
  cardContainer.scrollTo({ left: scrollPosition, behavior: 'smooth' });
});

cards.forEach((card) => {
  const image = card.querySelector('img');
  image.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.classList.add('fixed', 'top-0', 'left-0', 'right-0', 'bottom-0', 'bg-black', 'bg-opacity-75', 'flex', 'justify-center', 'items-center');

    const modalContent = document.createElement('div');
    modalContent.classList.add('bg-white', 'rounded-lg', 'p-4');

    const modalImage = document.createElement('img');
    modalImage.src = image.src;
    modalImage.alt = image.alt;
    modalImage.classList.add('w-full', 'h-auto', 'object-contain');

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;';
    closeButton.classList.add('absolute', 'top-36', 'md:top-20', 'right-4','md:right-56',  'text-white', 'text-5xl');

    modalContent.appendChild(modalImage);
    modalContent.appendChild(closeButton);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    closeButton.addEventListener('click', () => {
      modal.remove();
    });

    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.remove();
      }
    });
  });
});


//navbar 
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
      subdropdown.classList.add("md:absolute", "left-32", "top-2", "mt-2", "md:w-96");
      document.querySelectorAll("#mobileNav > li").forEach((li) => {
        li.setAttribute("data-aos", "fade-up");
        li.setAttribute("data-aos-duration", "3000");
      });
    } else {
      navbar.classList.remove("hidden");
      subdropdown.classList.remove("md:absolute", "right-0", "top-full", "mt-2", "md:w-96");
      document.querySelectorAll("#mobileNav > li").forEach((li) => {
        li.removeAttribute("data-aos");
        li.removeAttribute("data-aos-duration");
      });
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


  // scroll 
  window.sr = ScrollReveal();

  const reveal = {
    origin : 'bottom',
    delay    : 500,
    duration: 2000,
    distance : '500px',
    viewFactor: 0.8,
    easing   : 'ease-in-out',
    mobile: true,
  };

  

sr.reveal('#section1');
sr.reveal('#section2');
sr.reveal('#sierraLeone');
sr.reveal('#section3');
sr.reveal('#section4');
sr.reveal('#section5');
sr.reveal('#section6');
sr.reveal('#section7');
sr.reveal('#footer');


//aos
AOS.init({
  offset: 200,
  duration: 600,
  easing: 'ease-in-sine',
  delay: 100,
});