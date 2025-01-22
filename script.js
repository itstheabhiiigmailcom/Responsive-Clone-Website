const hamburger = document.getElementById("hamburger");
const navbarMenu = document.querySelector(".navbar-menu");
const mainContent = document.querySelector(".main");

hamburger.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");

    // Push down body content when menu is active
    if (navbarMenu.classList.contains("active")) {
        mainContent.style.transform = "translateY(100vh)";
    } else {
        mainContent.style.transform = "translateY(0)";
    }
});

// Text Blibking animation in hero section
document.addEventListener("DOMContentLoaded", () => {
    const heading = document.querySelector(".hero h2");
    const text = heading.textContent; // Get the complete text
    heading.textContent = ""; // Clear initial text for animation
  
    let index = 0;
  
    function typeEffect() {
      if (index < text.length) {
        heading.textContent += text.charAt(index); // Add one character at a time
        index++;
        setTimeout(typeEffect, 100); // Adjust typing speed (100ms per character)
      }
    }
  
    typeEffect();
  });
  
  
