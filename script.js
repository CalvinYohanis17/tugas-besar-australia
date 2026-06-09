// Memastikan halaman telah termuat sepenuhnya (FITUR: JS Events)
document.addEventListener("DOMContentLoaded", () => {
    initResponsiveMenu();
    initDropdownEngine();
    generateArtefakList();
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

// 2. FITUR: JS Function & Events (Dropdown Handler)
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

// 3. FITUR: JS Function & Conditional Logic (Filter / Action Card)
function bacaEksplorasi(kategori) {
    if (kategori === "aborigin") {
        alert("Eksplorasi Kebudayaan Purba:\n\nSuku Aborigin menggunakan medium seni lukis titik (dot painting) untuk mentransmisikan rahasia teritorial sejarah air dan batuan sakral Uluru kepada generasi penerus.");
    } else if (kategori === "kolonial") {
        alert("Eksplorasi Garis Waktu Kolonial:\n\nArsitektur bergaya Georgian dan Victorian di kota-kota tua seperti Sydney (The Rocks) merupakan relik fisik langsung masa pembentukan awal koloni narapidana Inggris.");
    } else {
        alert("Modul materi sedang dimuat.");
    }
}

// 4. FITUR: JS Conditional (Filter Menu Dropdown)
function filterBudaya(tipe) {
    const cardAborigin = document.getElementById("card-aborigin");
    const cardKolonial = document.getElementById("card-kolonial");

    if (tipe === "aborigin") {
        cardAborigin.style.display = "block";
        cardKolonial.style.display = "none";
    } else if (tipe === "kolonial") {
        cardAborigin.style.display = "none";
        cardKolonial.style.display = "block";
    } else {
        cardAborigin.style.display = "block";
        cardKolonial.style.display = "block";
    }
}

// 5. FITUR: JS Looping untuk Membuat List Data secara Dinamis (Fakta Akurat)
function generateArtefakList() {
    const dataBudaya = [
        { nama: "Didgeridoo (Yidaki)", deskripsi: "Alat musik tiup tiang kayu kuno peradaban Aborigin utara, pembuat resonansi suara spiritual bumi." },
        { nama: "Boomerang", deskripsi: "Senjata aerodinamis berburu tradisional yang bertransformasi menjadi simbol ritus kultural adat." },
        { nama: "Dot Painting", deskripsi: "Seni rupa visual berbasis simbol titik-titik rahasia untuk memetakan rute sakral nenek moyang." },
        { nama: "The First Fleet Relics", deskripsi: "Sisa peninggalan 11 kapal Inggris pertama tahun 1788 yang menandai titik awal era kolonisasi narapidana." },
        { nama: "Sovereign Hill Gold", deskripsi: "Artefak dan replika era Eureka Rebellion (1854), tonggak pergerakan demokrasi pekerja tambang emas Australia." }
    ];

    const listContainer = document.getElementById("dynamic-list");
    if (!listContainer) return;

    listContainer.innerHTML = ""; // Bersihkan list sebelum render

    for (let i = 0; i < dataBudaya.length; i++) {
        const item = dataBudaya[i];
        const listItem = document.createElement("li");
        listItem.className = "artefak-item";

        listItem.innerHTML = `
            <div>
                <span class="artefak-title">${item.nama}</span>
                <p class="artefak-desc">${item.deskripsi}</p>
            </div>
            <span style="font-size: 0.8rem; color: #C5A880; font-weight: 600;">Koleksi Digital</span>
        `;
        listContainer.appendChild(listItem);
    }
}

// 6. FITUR: JS Function & Form Handling Event
function validasiForm(event) {
    event.preventDefault();

    const nama = document.getElementById("username").value;
    const minat = document.getElementById("user-interest").value;
    const pesan = document.getElementById("user-message").value;

    alert(`Terima kasih atas kunjungannya, ${nama}!\n\nData Minat: Sektor ${minat}\nPesan Anda: "${pesan}"\n\nData berhasil disimpan ke memori lokal web server.`);
    
    document.getElementById("guestbook-form").reset();
}

// Memastikan halaman telah termuat sepenuhnya (FITUR: JS Events)
document.addEventListener("DOMContentLoaded", () => {
    initResponsiveMenu();
    initDropdownEngine();
    generateArtefakList();
    initLiveQuotes();         // Pemicu Rotasi Fakta Sejarah
    animateHistoricalStats(); // Pemicu Angka Statistik Berjalan
    initDarkModeEngine();     // Pemicu Saklar Kecerahan Layar
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

// 2. FITUR: DROPDOWN ENGINE
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

// 3. FITUR HIASAN: ROTASI BANNERS QUOTE OTOMATIS (Fakta Akurat)
function initLiveQuotes() {
    const quotes = [
        `"Uluru bukan sekadar batu, melainkan sebuah entitas hidup tempat bermulanya hukum Dreamtime bagi suku Anangu."`,
        `"Sebelum kolonialisasi 1788, terdapat lebih dari 250 rumpun bahasa asli yang aktif dituturkan di seantero benua."`,
        `"Eureka Stockade (1854) di Ballarat merupakan satu-satunya pemberontakan bersenjata dalam sejarah Australia yang melahirkan reformasi hak pilih."`,
        `"Konstitusi Persemakmuran Australia baru resmi berlaku pada tanggal 1 Januari 1901 melalui proses proklamasi federasi enam koloni."`
    ];
    
    const quoteElement = document.getElementById("live-quote");
    if (!quoteElement) return;

    let index = 0;
    // Lakukan pergantian teks otomatis setiap 7 detik secara halus
    setInterval(() => {
        index = (index + 1) % quotes.length;
        quoteElement.style.opacity = 0;
        setTimeout(() => {
            quoteElement.innerText = quotes[index];
            quoteElement.style.opacity = 1;
        }, 300);
    }, 7000);
}

// 4. FITUR UTAMA: INTERAKTIF COUNTER ANGKA BERGERAK (Mathematical Logic)
function animateHistoricalStats() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            
            // Atur rasio kecepatan kalkulasi inkremen angka
            const speed = target / 80; 

            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 20);
            } else {
                // Beri penyesuaian tanda plus khusus untuk angka tahun purba
                counter.innerText = target === 65000 ? target.toLocaleString('id-ID') + "+" : target;
            }
        };
        updateCount();
    });
}

// 5. FITUR PREMIUM: CONTROLLER SAKLAR TEMA (Dark/Light Mode)
function initDarkModeEngine() {
    const toggleBtn = document.getElementById("dark-mode-toggle");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        // Simpan preferensi agar tema tidak hilang saat berpindah menu kuliner
        if(document.body.classList.contains("dark-theme")){
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    // Pemuatan preferensi simpanan otomatis saat user berganti halaman
    if(localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
}

// 6. ACTION COMPONENT BACA MODAL EXPLORE
function bacaEksplorasi(kategori) {
    if (kategori === "aborigin") {
        alert("Eksplorasi Kebudayaan Purba:\n\nSuku Aborigin menggunakan medium seni lukis titik (dot painting) untuk mentransmisikan rahasia teritorial sejarah air dan batuan sakral Uluru kepada generasi penerus.");
    } else if (kategori === "kolonial") {
        alert("Eksplorasi Garis Waktu Kolonial:\n\nArsitektur bergaya Georgian dan Victorian di kota-kota tua seperti Sydney (The Rocks) merupakan relik fisik langsung masa pembentukan awal koloni narapidana Inggris.");
    } else {
        alert("Modul materi sedang dimuat.");
    }
}

// 7. DROPDOWN CONTROLLER
function filterBudaya(tipe) {
    const cardAborigin = document.getElementById("card-aborigin");
    const cardKolonial = document.getElementById("card-kolonial");

    if (tipe === "aborigin") {
        cardAborigin.style.display = "block";
        cardKolonial.style.display = "none";
    } else if (tipe === "kolonial") {
        cardAborigin.style.display = "none";
        cardKolonial.style.display = "block";
    } else {
        cardAborigin.style.display = "block";
        cardKolonial.style.display = "block";
    }
}

// 8. JS LOOPING GENERATOR DATA KOLEKSI ARTEFAK
function generateArtefakList() {
    const dataBudaya = [
        { nama: "Didgeridoo (Yidaki)", deskripsi: "Alat musik tiup tiang kayu kuno peradaban Aborigin utara, pembuat resonansi suara spiritual bumi." },
        { nama: "Boomerang", deskripsi: "Senjata aerodinamis berburu tradisional yang bertransformasi menjadi simbol ritus kultural adat." },
        { nama: "Dot Painting", deskripsi: "Seni rupa visual berbasis simbol titik-titik rahasia untuk memetakan rute sakral nenek moyang." },
        { nama: "The First Fleet Relics", deskripsi: "Sisa peninggalan 11 kapal Inggris pertama tahun 1788 yang menandai titik awal era kolonisasi narapidana." },
        { nama: "Sovereign Hill Gold", deskripsi: "Artefak dan replika era Eureka Rebellion (1854), tonggak pergerakan demokrasi pekerja tambang emas Australia." }
    ];

    const listContainer = document.getElementById("dynamic-list");
    if (!listContainer) return;

    listContainer.innerHTML = "";

    for (let i = 0; i < dataBudaya.length; i++) {
        const item = dataBudaya[i];
        const listItem = document.createElement("li");
        listItem.className = "artefak-item";

        listItem.innerHTML = `
            <div>
                <span class="artefak-title">${item.nama}</span>
                <p class="artefak-desc">${item.deskripsi}</p>
            </div>
            <span style="font-size: 0.8rem; color: #C5A880; font-weight: 600;">Koleksi Digital</span>
        `;
        listContainer.appendChild(listItem);
    }
}

// 9. VALIDASI DATA PENJELAJAH FORM GUESTBOOK
function validasiForm(event) {
    event.preventDefault();

    const nama = document.getElementById("username").value;
    const minat = document.getElementById("user-interest").value;
    const pesan = document.getElementById("user-message").value;

    alert(`Terima kasih atas kunjungannya, ${nama}!\n\nData Minat: Sektor ${minat}\nPesan Anda: "${pesan}"\n\nData berhasil disimpan ke memori lokal web server.`);
    
    document.getElementById("guestbook-form").reset();
}