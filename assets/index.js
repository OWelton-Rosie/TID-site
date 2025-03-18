// Get all section elements
const sections = document.querySelectorAll("section");

function revealSections() {
    sections.forEach((section) => {
        // Get the position of each section
        const sectionTop = section.getBoundingClientRect().top;
        console.log(`Section top: ${sectionTop}`);  // Debug log: check position of each section

        // If the section is within the viewport (near the bottom)
        if (sectionTop < window.innerHeight - 100) {  // Trigger when the section is near the bottom of the viewport
            section.classList.add("visible");  // Add the visible class to reveal the section
        }
    });
}

// Check sections immediately on page load
revealSections();

// Add event listener for scroll events
window.addEventListener("scroll", function () {
    console.log("Scroll event triggered!");  // Debug log: check if scroll event is fired
    revealSections();
});
