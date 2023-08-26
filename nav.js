/* Set styling on current (active) nav link */
document.querySelectorAll(".nav-item__link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

/*---------------------Scroll down and header becomes dark-grey------------------ */
// Get a reference to the nav-container
const outernavContainer = document.querySelector(".nav-outer-container");

// Listen for scroll events
window.addEventListener("scroll", () => {
  // Check if the user has scrolled beyond a certain threshold (e.g., 50 pixels)
  if (window.scrollY > 50) {
    // Add the 'scrolled' class to apply the dark background
    outernavContainer.classList.add("scrolled");
  } else {
    // Remove the 'scrolled' class to make the background transparent
    outernavContainer.classList.remove("scrolled");
  }
});

/* ------------------------footer____________________________*/
const yearSpan = document.querySelector("#currentYear");
const currentYear = new Date();
console.log(currentYear); //check to see if working - it's not essential
yearSpan.innerText = currentYear.getFullYear();
