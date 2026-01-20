console.log("JS Loaded");

/* ================= MOBILE MENU ================= */
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}

// Active link + close menu
const links = document.querySelectorAll(".nav a, .mobile-menu a");

links.forEach(link => {
  link.addEventListener("click", () => {
    links.forEach(l => l.classList.remove("active"));
    link.classList.add("active");

    document.getElementById("mobileMenu").classList.remove("active");
  });
});


/* ================= HERO VERTICAL SLIDER ================= */
const slides = document.querySelectorAll(".flex-child");
let current = 0;

function changeSlide() {
  const currentSlide = slides[current];
  currentSlide.classList.remove("active");
  currentSlide.classList.add("exit");

  current = (current + 1) % slides.length;
  slides[current].classList.add("active");

  setTimeout(() => {
    currentSlide.classList.remove("exit");
  }, 1000);
}

setInterval(changeSlide, 3000);


/* ================= SOLUTIONS PANEL ================= */
const panels = document.querySelectorAll(".solution");
const colors = ["#3b82f6", "#facc15", "#22c55e", "#ef4444"];
let panelIndex = 0;
let panelInterval;

function activatePanel(index) {
  panels.forEach(p => p.classList.remove("active"));
  panels[index].style.setProperty(
    "--active-color",
    colors[index % colors.length]
  );
  panels[index].classList.add("active");
  panelIndex = index;
}

function startPanelAuto() {
  panelInterval = setInterval(() => {
    activatePanel((panelIndex + 1) % panels.length);
  }, 2500);
}

function stopPanelAuto() {
  clearInterval(panelInterval);
}

if (panels.length) {
  activatePanel(0);
  startPanelAuto();

  panels.forEach((panel, i) => {
    panel.addEventListener("mouseenter", () => {
      stopPanelAuto();
      activatePanel(i);
    });

    panel.addEventListener("mouseleave", startPanelAuto);
  });
}

/* ================= BLOG PREVIEW ================= */
const items = document.querySelectorAll(".blog-item");
  const previewImg = document.getElementById("previewImg");

  items.forEach(item => {
    item.addEventListener("mouseenter", () => {
      // active class switch
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");

      // image swap with fade
      const imgSrc = item.getAttribute("data-img");
      previewImg.style.opacity = 0;

      setTimeout(() => {
        previewImg.src = imgSrc;
        previewImg.style.opacity = 1;
      }, 200);
    });
  });

/* ================= PARTNER SLIDER (RIGHT TO LEFT) ================= */
const partnerSlides = document.querySelectorAll(".slide");
let partnerIndex = 0;

if (partnerSlides.length) {
  setInterval(() => {
    partnerSlides.forEach(s => s.classList.remove("active"));
    partnerSlides[partnerIndex].classList.add("active");
    partnerIndex = (partnerIndex + 1) % partnerSlides.length;
  }, 5000);
}

/* ================= WORLD CLOCK ================= */
const timeBoxes = document.querySelectorAll(".time-box");

function updateTime() {
  timeBoxes.forEach(box => {
    const zone = box.getAttribute("data-zone");
    const span = box.querySelector(".time");

    const time = new Intl.DateTimeFormat("en-GB", {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    }).format(new Date());

    span.textContent = time;
  });
}

if (timeBoxes.length) {
  updateTime();
  setInterval(updateTime, 1000);
}




// back button
  const backToTopBtn = document.getElementById("backToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });




// pop-pup

  function openContact() {
  document.getElementById("contactPopup").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeContact() {
  document.getElementById("contactPopup").classList.remove("active");
  document.body.style.overflow = "";
}





const arrow = document.getElementById("followArrow");
const section = document.getElementById("definesSection");

if (arrow && section) {
  section.addEventListener("mousemove", (e) => {
    const rect = section.getBoundingClientRect();

    // mouse position relative to section
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // arrow center
    const arrowRect = arrow.getBoundingClientRect();
    const arrowX = arrowRect.left + arrowRect.width / 2 - rect.left;
    const arrowY = arrowRect.top + arrowRect.height / 2 - rect.top;

    const angle =
      Math.atan2(y - arrowY, x - arrowX) * (180 / Math.PI);

    arrow.style.transform = `
      translate(-50%, -50%)
      rotate(${angle}deg)
    `;
  });
}





function openContact() {
  document.getElementById("contactPopup").classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeContact() {
  document.getElementById("contactPopup").classList.remove("active");
  document.body.style.overflow = "";
}







