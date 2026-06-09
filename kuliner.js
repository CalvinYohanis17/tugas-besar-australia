document.addEventListener("DOMContentLoaded", () => {
    initResponsiveMenu();
    initDropdownEngine();
});

// 1. SISTEM RESPONSIVE BURGER MENU
function initResponsiveMenu() {
    const burgerBtn = document.getElementById("burger-btn");
    const navMenu = document.getElementById("nav-menu");

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener("click", () => {
            navMenu.classList.toggle("mobile-active");
            burgerBtn.classList.toggle("active-burger");
        });
    }
}

// 2. SISTEM MANAJEMEN DROPDOWN
function initDropdownEngine() {
    const dropBtn = document.getElementById("dropdown-btn");
    const dropContent = document.querySelector(".dropdown-content");

    if (dropBtn && dropContent) {
        dropBtn.addEventListener("click", (e) => {
            if (window.innerWidth < 768) {
                e.preventDefault();
                dropContent.classList.toggle("show-dropdown");
            }
        });

        window.addEventListener("click", (e) => {
            if (!dropBtn.contains(e.target)) {
                dropContent.classList.remove("show-dropdown");
            }
        });
    }
}