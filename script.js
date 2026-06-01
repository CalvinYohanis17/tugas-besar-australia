// Memastikan halaman telah termuat sepenuhnya (FITUR: JS Events)
document.addEventListener("DOMContentLoaded", () => {
    initDropdownEngine();
    generateArtefakList();
});

// 1. FITUR: JS Function & Events (Dropdown Handler)
function initDropdownEngine() {
    const dropBtn = document.getElementById("dropdown-btn");
    const dropContent = document.querySelector(".dropdown-content");

    if (dropBtn && dropContent) {
        dropBtn.addEventListener("click", (e) => {
            e.preventDefault();
            dropContent.classList.toggle("show-dropdown");
        });

        // Menutup dropdown otomatis jika mengklik di luar area menu
        window.addEventListener("click", (e) => {
            if (!dropBtn.contains(e.target)) {
                dropContent.classList.remove("show-dropdown");
            }
        });
    }
}

// 2. FITUR: JS Function & Conditional Logic (Filter / Action Card)
function bacaEksplorasi(kategori) {
    // FITUR: JS Conditional
    if (kategori === "aborigin") {
        alert("Eksplorasi Kebudayaan Purba:\n\nSuku Aborigin menggunakan medium seni lukis titik (dot painting) untuk mentransmisikan rahasia teritorial sejarah air dan batuan sakral Uluru kepada generasi penerus.");
    } else if (kategori === "kolonial") {
        alert("Eksplorasi Garis Waktu Kolonial:\n\nArsitektur bergaya Georgian dan Victorian di kota-kota tua seperti Sydney (The Rocks) merupakan relik fisik langsung masa pembentukan awal koloni narapidana Inggris.");
    } else {
        alert("Modul materi sedang dimuat.");
    }
}

// 3. FITUR: JS Conditional (Filter Menu Dropdown)
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

// 4. FITUR: JS Looping untuk Membuat List Data secara Dinamis
function generateArtefakList() {
    // Array Objek Data Kebudayaan Australia asli
    const dataBudaya = [
        { nama: "Didgeridoo", deskripsi: "Alat musik tiup tiang kayu kuno milik peradaban Aborigin utara." },
        { nama: "Boomerang", deskripsi: "Senjata aerodinamis tradisional untuk berburu sekaligus simbol ritus adat." },
        { nama: "Dot Painting", deskripsi: "Teknik seni rupa visual berbasis simbol titik-titik untuk menceritakan peta bumi puitis." },
        { nama: "Vegemite Toast", deskripsi: "Warisan fusi kuliner selai ragi ikonik yang melekat pada sarapan modern Australia." }
    ];

    const listContainer = document.getElementById("dynamic-list");
    if (!listContainer) return;

    // Proses Loop Array (FITUR: JS Looping)
    for (let i = 0; i < dataBudaya.length; i++) {
        const item = dataBudaya[i];

        // Membuat elemen HTML list secara dinamis
        const listItem = document.createElement("li");
        listItem.className = "artefak-item";

        listItem.innerHTML = `
            <div>
                <span class="artefak-title">${item.nama}</span>
                <p class="artefak-desc">${item.deskripsi}</p>
            </div>
            <span style="font-size: 0.8rem; color: #C5A880; font-weight: 600;">Koleksi Digital</span>
        `;

        // Memasukkan item ke dalam struktur induk UL (FITUR: List)
        listContainer.appendChild(listItem);
    }
}

// 5. FITUR: JS Function & Form Handling Event
function validasiForm(event) {
    event.preventDefault(); // Menghentikan submit bawaan browser agar tidak reload otomatis

    const nama = document.getElementById("username").value;
    const minat = document.getElementById("user-interest").value;
    const pesan = document.getElementById("user-message").value;

    // Menampilkan feedback data interaktif
    alert(`Terima kasih atas kunjungannya, ${nama}!\n\nData Minat: Sektor ${minat}\nPesan Anda: "${pesan}"\n\nData berhasil disimpan ke memori lokal web server.`);
    
    // Mengosongkan form kembali setelah dikirim
    document.getElementById("guestbook-form").reset();
}