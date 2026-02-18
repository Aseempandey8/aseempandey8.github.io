document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("P3LLXFjQffpoErqSM");

  // ================= CONTACT FORM =================
  const form = document.getElementById("contact-form");
  const statusMessage = document.getElementById("form-status");
  const sendBtn = document.getElementById("send-btn");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    sendBtn.disabled = true;
    sendBtn.innerText = "Sending...";

    emailjs
      .sendForm("service_hke7o2w", "template_dmys7k4", this)
      .then(() => {
        statusMessage.innerText = "Message Sent 🚀";
        statusMessage.className = "form-status success";
        form.reset();
        sendBtn.disabled = false;
        sendBtn.innerText = "Send Message";
      })
      .catch(() => {
        statusMessage.innerText = "Failed ❌";
        statusMessage.className = "form-status error";
        sendBtn.disabled = false;
        sendBtn.innerText = "Send Message";
      });
  });

  // ================= HIRE MODAL =================
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
      })
      .catch(() => {
        document.getElementById("hire-status").innerHTML = "Failed ❌";
      });
  });

  // ================= REVEAL ANIMATION =================
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

  // ================= PARTICLES =================
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

  // ================= TYPED HERO =================
  new Typed("#typing-hero", {
    strings: ["Frontend Developer", "AI Website Builder", "Modern Web Creator"],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
  });
});
