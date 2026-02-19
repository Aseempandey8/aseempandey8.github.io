(function () {
  emailjs.init("P3LLXFjQffpoErqSM");
})();

// ===============================
// EMAILJS CONTACT FORM
// ===============================

const form = document.getElementById("contact-form");
const statusMessage = document.getElementById("form-status");
const sendBtn = document.getElementById("send-btn");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  sendBtn.disabled = true;
  sendBtn.innerText = "Sending...";

  emailjs
    .sendForm("service_hke7o2w", "template_dmys7k4", this)
    .then(function () {
      statusMessage.innerText = "Message sent successfully 🚀";
      statusMessage.className = "form-status success";

      form.reset();
      sendBtn.disabled = false;
      sendBtn.innerText = "Send Message";

      setTimeout(() => {
        statusMessage.innerText = "";
      }, 4000);
    })
    .catch(function (error) {
      statusMessage.innerText = "Failed to send message ❌";
      statusMessage.className = "form-status error";

      sendBtn.disabled = false;
      sendBtn.innerText = "Send Message";

      console.log(error);
    });
});

// ===============================
// REVEAL SECTIONS ON SCROLL
// ===============================

const revealSections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

revealSections.forEach((section) => {
  observer.observe(section);
});
particlesJS("particles-js", {
  particles: {
    number: { value: 50 },
    size: { value: 2 },
    move: { speed: 1.5 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ffff",
      opacity: 0.2,
      width: 1,
    },
  },
});

// ===============================
// ACTIVE NAV LINK (Intersection Based)
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active-link");

          if (link.getAttribute("href") === "#" + id) {
            link.classList.add("active-link");
          }
        });
      }
    });
  },
  {
    threshold: 0.6, // 60% visible
  },
);

sections.forEach((section) => {
  navObserver.observe(section);
});
// ===== Typing Animations =====

// Hero Typing
new Typed("#typing-hero", {
  strings: ["Frontend Developer", "AI Website Builder", "Modern Web Creator"],
  typeSpeed: 60,
  backSpeed: 40,
  backDelay: 1500,
  loop: true,
});

// Hire Me Modal
const hireBtn = document.getElementById("hire-btn");
const hireModal = document.getElementById("hire-modal");
const closeHire = document.getElementById("close-hire");

hireBtn.addEventListener("click", () => {
  hireModal.style.display = "flex";
});

closeHire.addEventListener("click", () => {
  hireModal.style.display = "none";
});

// Close when clicking outside modal
window.addEventListener("click", (e) => {
  if (e.target === hireModal) {
    hireModal.style.display = "none";
  }
});
document.getElementById("hire-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("hire-status");

  emailjs
    .send("service_hke7o2w", "template_dqcligf", {
      user_name: this.user_name.value,
      user_email: this.user_email.value,
      message: this.message.value,
    })
    .then(
      function () {
        status.innerHTML = "✅ Request sent successfully!";
        status.style.color = "lightgreen";
        document.getElementById("hire-form").reset();
      },
      function (error) {
        status.innerHTML = "❌ Failed to send request.";
        status.style.color = "red";
        console.log(error);
      },
    );
});
document.getElementById("hire-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const status = document.getElementById("hire-status");
  const hireBtn = document.getElementById("hire-send-btn");

  hireBtn.disabled = true;
  hireBtn.innerText = "Sending...";

  emailjs
    .send("service_hke7o2w", "template_dqcligf", {
      user_name: this.user_name.value,
      user_email: this.user_email.value,
      message: this.message.value,
    })
    .then(
      function () {
        status.innerHTML = "✅ Request sent successfully!";
        status.style.color = "lightgreen";

        document.getElementById("hire-form").reset();

        hireBtn.disabled = false;
        hireBtn.innerText = "Send Request";

        // 🔥 Auto remove message after 4 seconds
        setTimeout(() => {
          status.innerHTML = "";
        }, 4000);
      },
      function (error) {
        status.innerHTML = "❌ Failed to send request.";
        status.style.color = "red";

        hireBtn.disabled = false;
        hireBtn.innerText = "Send Request";

        // 🔥 Auto remove error after 4 seconds
        setTimeout(() => {
          status.innerHTML = "";
        }, 4000);

        console.log(error);
      },
    );
});
// ===============================
// MOBILE NAV AUTO CLOSE
// ===============================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");
const navItems = document.querySelectorAll("nav a");

// Toggle menu (already exists in your code probably)
// If you already have this, do NOT duplicate it
if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// Close menu when clicking any nav link (Mobile Only)
navItems.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      navMenu.classList.remove("active");
    }
  });
});
