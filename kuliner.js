document.addEventListener("DOMContentLoaded", () => {
    // Jalankan sistem menu responsif
    initResponsiveMenu();
    initDropdownEngine();
});

// 1. SISTEM RESPONSIVE BURGER MENU (Aktivasi laci menu vertical di HP)
function initResponsiveMenu() {
    const burgerBtn = document.getElementById("burger-btn");
    const navMenu = document.getElementById("nav-menu");

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener("click", () => {
            // Memunculkan / menyembunyikan list tautan navigasi
            navMenu.classList.toggle("mobile-active");
            // Mengubah bentuk 3 garis burger menu jadi bentuk tanda silang (X)
            burgerBtn.classList.toggle("active-burger");
        });
    }
}

// 2. SISTEM MANAJEMEN DROPDOWN (Beralih fungsi Klik khusus pada layar sentuh HP)
function initDropdownEngine() {
    const dropBtn = document.getElementById("dropdown-btn");
    const dropContent = document.querySelector(".dropdown-content");

    if (dropBtn && dropContent) {
        dropBtn.addEventListener("click", (e) => {
            // Cek apabila ukuran layar berada di resolusi smartphone
            if (window.innerWidth < 768) {
                e.preventDefault(); // Mencegah melompatnya link anchor (#)
                dropContent.classList.toggle("show-dropdown");
            }
        });

        // Menutup menu dropdown otomatis jika user mengklik area lain di luar navbar
        window.addEventListener("click", (e) => {
            if (!dropBtn.contains(e.target)) {
                dropContent.classList.remove("show-dropdown");
            }
        });
    }
}