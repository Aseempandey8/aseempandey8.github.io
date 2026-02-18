document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("P3LLXFjQffpoErqSM");

  // Reveal Animations
  const sections = document.querySelectorAll(".section");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.2 },
  );
  sections.forEach((section) => observer.observe(section));

  // Hire Modal
  const hireBtn = document.getElementById("hire-btn");
  const hireModal = document.getElementById("hire-modal");
  const closeHire = document.getElementById("close-hire");

  hireBtn.addEventListener("click", () => {
    hireModal.style.display = "flex";
  });
  closeHire.addEventListener("click", () => {
    hireModal.style.display = "none";
  });
  window.addEventListener("click", (e) => {
    if (e.target === hireModal) {
      hireModal.style.display = "none";
    }
  });

  // Hire Form
  document.getElementById("hire-form").addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs
      .send("service_hke7o2w", "template_dqcligf", {
        user_name: this.user_name.value,
        user_email: this.user_email.value,
        message: this.message.value,
      })
      .then(() => {
        document.getElementById("hire-status").innerHTML = "Request Sent ✅";
        this.reset();
      });
  });

  // Contact Form
  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm("service_hke7o2w", "template_dmys7k4", this).then(() => {
      document.getElementById("form-status").innerHTML = "Message Sent 🚀";
      this.reset();
    });
  });

  // Typed Hero
  new Typed("#typing-hero", {
    strings: ["Frontend Developer", "AI Website Builder", "Modern Web Creator"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true,
  });

  // Particles
  particlesJS("particles-js", {
    particles: {
      number: { value: 60 },
      size: { value: 3 },
      move: { speed: 2 },
      line_linked: { enable: true, color: "#00ffff", opacity: 0.2 },
    },
  });
});
