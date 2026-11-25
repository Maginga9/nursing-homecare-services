const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  menuButton.textContent = isOpen ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.textContent = "☰";
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();
  const data = new FormData(this);
  const message = [
    "Hello Nursing Homecare Services, I would like to request a service.",
    "",
    `Name: ${data.get("name")}`,
    `Phone: ${data.get("phone")}`,
    `Service: ${data.get("service")}`,
    `Message: ${data.get("message") || "I would like to discuss my care needs."}`
  ].join("\n");
  const whatsappUrl = `https://wa.me/255682524572?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank", "noopener,noreferrer");
});
