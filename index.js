document.addEventListener("DOMContentLoaded", () => {
    initResponsiveMenu();
    initDropdownEngine();
    initActiveNavbar();
    initDarkModeEngine();
    
    if (document.getElementById("carousel-track")) {
        initHeroCarousel();
    }
    if (document.getElementById("dynamic-list")) {
        generateArtefakList();
    }
    if (document.getElementById("live-quote")) {
        initLiveQuotes();
    }
    if (document.querySelector(".stat-number")) {
        animateHistoricalStats();
    }
    
    checkHashFilter();
    
    if (document.getElementById("destinasi-detail-page")) {
        loadDestinasiDetail();
    }
    if (document.getElementById("flora-fauna-detail-page")) {
        loadFloraFaunaDetail();
    }
    if (document.getElementById("budaya-detail-page")) {
        loadBudayaDetail();
    }
});

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


function initActiveNavbar() {
    const path = window.location.pathname;
    const homeLink = document.getElementById("nav-home");
    const destinasiLink = document.getElementById("nav-destinasi");
    const floraLink = document.getElementById("nav-flora");
    const kulinerLink = document.getElementById("nav-kuliner");

    if (homeLink) homeLink.classList.remove("active");
    if (destinasiLink) destinasiLink.classList.remove("active");
    if (floraLink) floraLink.classList.remove("active");
    if (kulinerLink) kulinerLink.classList.remove("active");

    if (path.includes("kuliner.html")) {
        if (kulinerLink) kulinerLink.classList.add("active");
    } else if (path.includes("destinasi.html") || path.includes("detail-destinasi.html")) {
        if (destinasiLink) destinasiLink.classList.add("active");
    } else if (path.includes("flora-fauna.html") || path.includes("detail-flora-fauna.html")) {
        if (floraLink) floraLink.classList.add("active");
    } else if (path.includes("index.html") || path === "/" || path === "") {
        if (homeLink) homeLink.classList.add("active");
    }
}

function initDarkModeEngine() {
    const toggleBtn = document.getElementById("dark-mode-toggle");
    if (!toggleBtn) return;

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }
    });

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
}

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
    setInterval(() => {
        index = (index + 1) % quotes.length;
        quoteElement.style.opacity = 0;
        setTimeout(() => {
            quoteElement.innerText = quotes[index];
            quoteElement.style.opacity = 1;
        }, 300);
    }, 7000);
}

function animateHistoricalStats() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const speed = target / 80; 

            if (count < target) {
                counter.innerText = Math.ceil(count + speed);
                setTimeout(updateCount, 20);
            } else {
                counter.innerText = target === 65000 ? target.toLocaleString('id-ID') + "+" : target;
            }
        };
        updateCount();
    });
}

function filterBudaya(tipe) {
    const cardAborigin = document.getElementById("card-aborigin");
    const cardKolonial = document.getElementById("card-kolonial");
    const elements = document.getElementById("fact-elements");
    if (elements) elements.innerText = data.elemenKunci;

    if (!cardAborigin || !cardKolonial) return; 

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

function checkHashFilter() {
    const applyFilter = () => {
        const hash = window.location.hash;
        if (hash === "#aborigin") {
            filterBudaya("aborigin");
        } else if (hash === "#kolonial") {
            filterBudaya("kolonial");
        } else if (hash === "#semua") {
            filterBudaya("semua");
        }
    };

    applyFilter();
    window.addEventListener("hashchange", applyFilter);
}

function generateArtefakList() {
    const dataBudaya = [
        { nama: "Didgeridoo (Yidaki)", deskripsi: "Alat musik tiup tiang kayu kuno peradaban Aborigin utara, pembuat resonansi suara spiritual bumi.", img: "photo/didgeridoo.jpg" },
        { nama: "Boomerang", deskripsi: "Senjata aerodinamis berburu tradisional yang bertransformasi menjadi simbol ritus kultural adat.", img: "photo/boomerang.png" },
        { nama: "Dot Painting", deskripsi: "Seni rupa visual berbasis simbol titik-titik rahasia untuk memetakan rute sakral nenek moyang.", img: "photo/dotpainting.jpg" },
        { nama: "The First Fleet Relics", deskripsi: "Sisa peninggalan 11 kapal Inggris pertama tahun 1788 yang menandai titik awal era kolonisasi narapidana.", img: "photo/captain-cook2.jpg" },
        { nama: "Sovereign Hill Gold", deskripsi: "Artefak dan replika era Eureka Rebellion (1854), tonggak pergerakan demokrasi pekerja tambang emas Australia.", img: "photo/sovereign.jpg" }
    ];

    const listContainer = document.getElementById("dynamic-list");
    if (!listContainer) return;

    listContainer.innerHTML = "";

    for (let i = 0; i < dataBudaya.length; i++) {
        const item = dataBudaya[i];
        const listItem = document.createElement("li");
        listItem.className = "artefak-item";

        // Logika Pengecekan: Gunakan Gambar jika ada, atau gunakan SVG jika kosong
        let mediaKonten = "";
        if (item.img) {
            mediaKonten = `<img src="${item.img}" alt="${item.nama}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 4px;">`;
        } else {
            mediaKonten = `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            `;
        }

        listItem.innerHTML = `
            <div class="artefak-content-wrapper">
                <div class="artefak-img-placeholder" title="${item.img ? item.nama : 'Tidak ada foto barang'}">
                    ${mediaKonten}
                </div>
                <div class="artefak-text">
                    <span class="artefak-title">${item.nama}</span>
                    <p class="artefak-desc">${item.deskripsi}</p>
                </div>
            </div>
            <span class="artefak-koleksi-tag">Koleksi Digital</span>
        `;
        listContainer.appendChild(listItem);
    }
}

function validasiForm(event) {
    event.preventDefault();

    const nama = document.getElementById("username").value;
    const minat = document.getElementById("user-interest").value;
    const pesan = document.getElementById("user-message").value;

    alert(`Terima kasih atas kunjungannya, ${nama}!\n\nData Minat: Sektor ${minat}\nPesan Anda: "${pesan}"\n\nData berhasil disimpan ke memori lokal web server.`);
    
    document.getElementById("guestbook-form").reset();
}

function loadDestinasiDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (typeof destinasiData === "undefined" || !id || !destinasiData[id]) {
        const contentArea = document.getElementById("detail-content-area");
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="back-btn-container">
                    <a href="destinasi.html" class="btn-back">← Kembali ke Destinasi</a>
                </div>
                <h2>Destinasi Tidak Ditemukan</h2>
                <p>Maaf, detail destinasi yang Anda cari tidak tersedia dalam basis data kami.</p>
            `;
        }
        return;
    }

    const data = destinasiData[id];

    document.title = `${data.nama} — AussieCulture`;

    const heroBg = document.getElementById("detail-hero-bg");
    const tag = document.getElementById("detail-tag");
    const title = document.getElementById("detail-title");
    const desc = document.getElementById("detail-desc");
    const factLoc = document.getElementById("fact-location");
    const factTime = document.getElementById("fact-time");
    const factAct = document.getElementById("fact-activity");

    if (heroBg) heroBg.style.backgroundImage = `url('${data.img}')`;
    if (tag) tag.innerText = data.tag;
    if (title) title.innerText = data.nama;
    if (factLoc) factLoc.innerText = data.lokasi;
    if (factTime) factTime.innerText = data.waktuTerbaik;
    if (factAct) factAct.innerText = data.aktivitas;

    if (desc) {

        desc.innerHTML = data.deskripsiDetail
            .split("\n\n")
            .map(para => `<p>${para}</p>`)
            .join("");
    }
}

function loadFloraFaunaDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (typeof floraFaunaData === "undefined" || !id || !floraFaunaData[id]) {
        const contentArea = document.getElementById("detail-content-area");
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="back-btn-container">
                    <a href="flora-fauna.html" class="btn-back">← Kembali ke Flora & Fauna</a>
                </div>
                <h2>Spesies Tidak Ditemukan</h2>
                <p>Maaf, detail spesies flora/fauna yang Anda cari tidak tersedia dalam basis data kami.</p>
            `;
        }
        return;
    }

    const data = floraFaunaData[id];

    document.title = `${data.nama} — AussieCulture`;

    const heroBg = document.getElementById("detail-hero-bg");
    const tag = document.getElementById("detail-tag");
    const title = document.getElementById("detail-title");
    const desc = document.getElementById("detail-desc");
    const factHab = document.getElementById("fact-habitat");
    const factStat = document.getElementById("fact-status");
    const factFun = document.getElementById("fact-fun");

    if (heroBg) heroBg.style.backgroundImage = `url('${data.img}')`;
    if (tag) tag.innerText = data.tag;
    if (title) title.innerText = data.nama;
    if (factHab) factHab.innerText = data.habitat;
    if (factStat) factStat.innerText = data.status;
    if (factFun) factFun.innerText = data.faktaMenarik;

    if (desc) {
        desc.innerHTML = data.deskripsiDetail
            .split("\n\n")
            .map(para => `<p>${para}</p>`)
            .join("");
    }
}

function bacaEksplorasi(kategori) {
    if (kategori === "aborigin") {
        alert("Eksplorasi Kebudayaan Purba:\n\nSuku Aborigin menggunakan medium seni lukis titik (dot painting) untuk mentransmisikan rahasia teritorial sejarah air dan batuan sakral Uluru kepada generasi penerus.");
    } else if (kategori === "kolonial") {
        alert("Eksplorasi Garis Waktu Kolonial:\n\nArsitektur bergaya Georgian dan Victorian di kota-kota tua seperti Sydney (The Rocks) merupakan relik fisik langsung masa pembentukan awal koloni narapidana Inggris.");
    } else {
        alert("Modul materi sedang dimuat.");
    }
}

function initHeroCarousel() {
    const track = document.getElementById("carousel-track");
    if (!track) return;
    
    const slides = track.querySelectorAll(".carousel-slide");
    if (slides.length === 0) return;
    
    const slideCount = 3; 
    let index = 0;
    
    setInterval(() => {
        index++;
        track.style.transition = "transform 1s cubic-bezier(0.16, 1, 0.3, 1)";
        track.style.transform = `translateX(-${index * 25}%)`;
        
        if (index === slideCount) {

            setTimeout(() => {
                track.style.transition = "none";
                index = 0;
                track.style.transform = "translateX(0%)";
            }, 1000); 
        }
    }, 5000); 
}

function loadBudayaDetail() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    
    if (typeof budayaData === "undefined" || !id || !budayaData[id]) {
        const contentArea = document.getElementById("detail-content-area");
        if (contentArea) {
            contentArea.innerHTML = `
                <div class="back-btn-container">
                    <a href="index.html" class="btn-back">← Kembali ke Beranda</a>
                </div>
                <h2>Informasi Budaya Tidak Ditemukan</h2>
                <p>Maaf, informasi detail kebudayaan yang Anda cari tidak tersedia.</p>
            `;
        }
        return;
    }

    const data = budayaData[id];
    document.title = `${data.nama} — AussieCulture`;

    const heroBg = document.getElementById("detail-hero-bg");
    const tag = document.getElementById("detail-tag");
    const title = document.getElementById("detail-title");
    const desc = document.getElementById("detail-desc");
    const elements = document.getElementById("fact-elements");

    if (heroBg) heroBg.style.backgroundImage = `url('${data.img}')`;
    if (tag) tag.innerText = data.tag;
    if (title) title.innerText = data.nama;
    if (elements) elements.innerText = data.elemenKunci;

    if (desc) {
        desc.innerHTML = data.deskripsiDetail
            .split("\n\n")
            .map(para => `<p>${para}</p>`)
            .join("");
    }
}

function spawnPokemon(areaId, pokemonName) {
    const area = document.getElementById(areaId);
    if (!area) return;

    const pokemon = document.createElement('div');
    pokemon.classList.add('walking-breloom'); 

    const isShiny = Math.random() < 0.2; 
    let displayName = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
    if (isShiny) displayName = "Shiny " + displayName;
    
    // SAKTI: Deklarasikan img di sini agar bisa diakses oleh event listener klik di bawah
    const img = document.createElement('img');
    
    if (isShiny) {
        pokemon.classList.add('is-shiny');
        img.src = `photo/${pokemonName}-shiny.webp`;
        img.alt = `Wild Shiny ${pokemonName}`;
    } else {
        img.src = `photo/${pokemonName}-normal.webp`;
        img.alt = `Wild ${pokemonName}`;
    }

    pokemon.appendChild(img);
    area.appendChild(pokemon);
    pokemon.classList.add('animate-walk');

    // LOGIKA KLIK (DITANGKAP)
    // LOGIKA KLIK (DITANGKAP) - VERSI FIX TERKUNCI
    pokemon.addEventListener('click', (e) => {
        e.preventDefault(); 
        e.stopPropagation();
        
        // SAKTI: Ambil posisi koordinat X persis saat Pokémon di-klik sebelum animasinya dimatikan
        const currentLeft = pokemon.getBoundingClientRect().left - area.getBoundingClientRect().left;
        
        // Matikan animasi jalan
        pokemon.style.animation = 'none';
        pokemon.classList.remove('animate-walk');
        
        // Kunci posisi Pokémon di koordinat terakhirnya agar tidak mental kembali ke luar layar (-40px)
        pokemon.style.left = `${currentLeft}px`;
        
        // Langsung ganti gambar ke pokeball-catch yang bercahaya
        img.src = 'photo/pokeball-catch.png';
        img.style.transform = 'none'; // Reset arah balik gambar
        
        // Munculkan Notifikasi Sukses
        showCatchNotification(displayName);
        
        // Beri jeda 1 detik, lalu hilangkan secara halus (fade out)
        setTimeout(() => {
            pokemon.style.transition = 'opacity 0.5s ease';
            pokemon.style.opacity = '0';
            
            // Hapus elemen dari HTML setelah fade out selesai
            setTimeout(() => pokemon.remove(), 500);
        }, 1000);
    });

    const runTimeout = setTimeout(() => {
        pokemon.remove();
    }, 6000); 

    pokemon.addEventListener('click', () => {
        clearTimeout(runTimeout);
    });

    const nextSpawnTime = Math.random() * (25000 - 15000) + 15000;
    setTimeout(() => spawnPokemon(areaId, pokemonName), nextSpawnTime);
}

// FUNGSI UNTUK MEMUNCULKAN NOTIFIKASI TOAST DI POJOK LAYAR
function showCatchNotification(pokemonName) {
    // Buat elemen toast secara dinamis lewat JS agar tidak perlu mengotori HTML utama
    const toast = document.createElement('div');
    toast.classList.add('pokemon-toast');
    toast.innerHTML = `<img src="photo/pokeball.png" alt="ball"> Gotcha! Maverick caught a Wild ${pokemonName}!`;
    
    document.body.appendChild(toast);
    
    // Picu animasi muncul dari kanan
    setTimeout(() => toast.classList.add('show'), 100);
    
    // Sembunyikan dan hapus notifikasi setelah 4 detik
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// Jalankan sistem spawn otomatis saat web dimuat
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => spawnPokemon('breloom-walking-area', 'breloom'), 2000); 
    setTimeout(() => spawnPokemon('koala-walking-area', 'komala'), 5000);   
    setTimeout(() => spawnPokemon('wombat-walking-area', 'bidoof'), 8000);  
});

// ====== IMPLEMENTASI ANIMASI TOMBOL DI INDEX.JS ======
const darkModeToggle = document.getElementById('dark-mode-toggle');

if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
        // 1. Logika ganti tema kamu yang sudah ada (jangan dihapus)
        document.body.classList.toggle('dark-mode'); 
        
        // 2. TAMBAHKAN INI: Picu rotasi emojinya
        darkModeToggle.classList.toggle('rotate-active');
    });
}