// Show the mobile nav menu if the hamburger menu icon is clicked
const menu = document.querySelector(".hamburger-menu-icon")
const body = document.querySelector("body")
const nav = document.querySelector(".nav");
menu.onclick = function(event) {
  nav.style.display = "block";
  menu.classList.add("clicked")
  body.classList.add("hamburger-menu-open");  
}

// Hide the mobile nav menu if it's currently open and user has clicked outside the menu
body.onclick = function(event) {
  if (menu.classList.contains("clicked")
    && event.target.closest(".hamburger-menu-icon") === null 
    && event.target.closest(".nav") === null) 
  {
    nav.style.display = "none";
    menu.classList.remove("clicked");  
    body.classList.remove("hamburger-menu-open");  
  }
}

// Hide the mobile nav menu on window width stretch. Ensure the nav menu is shown 
// if stretching the window from mobile to desktop width.
window.onresize = function() {
  nav.style.display = window.innerWidth >= 980 ? "block" : "none";
}
