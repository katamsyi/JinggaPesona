const WA_NUMBER = "6287838907335";

// syarat ketentuan general (bullet)
const SYARAT_GENERAL = [
  "Penjemputan & pengantaran di area kota Jogja (titik jemput dikonfirmasi via CS).",
  "Private trip (tidak digabung rombongan lain), kecuali paket tertentu sesuai kesepakatan.",
  "Harga dapat berubah mengikuti musim/libur nasional/ketersediaan (konfirmasi sebelum pembayaran).",
  "Usia 0–3 tahun free (tanpa seat), usia 3 tahun ke atas dihitung 1 peserta.",
  "Perubahan itinerary menyesuaikan kondisi cuaca, lalu lintas, atau force majeure.",
  "Peserta wajib mengikuti arahan driver/guide selama tour.",
];

const packages = {
  "oneday-1": {
    title: "One Day: HeHa & City Highlights",
    images: [
      "aset/Indah.jpeg",
      "aset/Tugu Jogja, Kec_ Jetis - Kota Yogyakarta.jpeg",
      "aset/tamansari.jpeg",
    ],
    durasi: "1 Hari",
    lokasi: "Yogyakarta",
    harga: "Rp 265.000 per Pax",
    waText:
      "Halo%20Jingga%20Pesona,%20saya%20ingin%20tanya%20paket%20One%20Day%20HeHa%20%26%20City%20Highlights.",
    highlights: [
      "HeHa Ocean View sebagai destinasi instagramable dengan view laut.",
      "Waktu bebas menikmati spot foto dan suasana sunset.",
      "City tour santai dengan itinerary fleksibel.",
    ],
    destinasi: [
      "HeHa Ocean View",
      "Rumah Hobbit",
      "Puncak Becici",
      "Obelix Hills",
    ],
    fasilitas: [
      "Transport AC",
      "Driver ramah",
      "BBM & parkir",
      "Air mineral",
      "Dokumentasi (opsional)",
    ],
  },

  "oneday-2": {
    title: "One Day: Heritage & Culture",
    images: [
      "aset/tamansari.jpeg",
      "aset/Prambanan Temple.jpeg",
      "aset/Tugu Jogja, Kec_ Jetis - Kota Yogyakarta.jpeg",
    ],
    durasi: "1 Hari",
    lokasi: "Yogyakarta",
    harga: "Rp 299.000 per Pax",
    waText:
      "Halo%20Jingga%20Pesona,%20saya%20ingin%20tanya%20paket%20One%20Day%20Heritage%20%26%20Culture.",
    highlights: [
      "Wisata budaya & sejarah Jogja yang ikonik.",
      "Spot foto klasik dan arsitektur khas.",
      "Cocok untuk keluarga & first time ke Jogja.",
    ],
    destinasi: ["Keraton Yogyakarta", "Taman Sari", "Malioboro", "Titik Nol"],
    fasilitas: ["Transport AC", "Driver", "BBM & parkir", "Air mineral"],
  },

  "2h1m-1": {
    title: "2H1M: Pantai & Sunset",
    images: [
      "aset/pantai gunung kidul.jpeg",
      "aset/Indah.jpeg",
      "aset/Hutan pinus jogja.jpeg",
    ],
    durasi: "2 Hari 1 Malam",
    lokasi: "Gunungkidul",
    harga: "Rp 799.000 per Pax",
    waText:
      "Halo%20Jingga%20Pesona,%20saya%20ingin%20tanya%20paket%202H1M%20Pantai%20%26%20Sunset.",
    highlights: [
      "Eksplor pantai pasir putih & tebing ikonik.",
      "Sunset time di spot terbaik (menyesuaikan cuaca).",
      "Tempo trip tidak terburu-buru.",
    ],
    destinasi: [
      "Pantai Indrayanti",
      "Pantai Drini",
      "HeHa Ocean View",
      "Kuliner lokal",
    ],
    fasilitas: [
      "Transport AC",
      "Driver",
      "BBM & parkir",
      "Air mineral",
      "Penginapan 1 malam (opsional)",
    ],
  },

  "2h1m-2": {
    title: "2H1M: Nature & Healing",
    images: [
      "aset/Hutan pinus jogja.jpeg",
      "aset/tamansari.jpeg",
      "aset/Tugu Jogja, Kec_ Jetis - Kota Yogyakarta.jpeg",
    ],
    durasi: "2 Hari 1 Malam",
    lokasi: "Yogyakarta",
    harga: "Rp 749.000 per Pax",
    waText:
      "Halo%20Jingga%20Pesona,%20saya%20ingin%20tanya%20paket%202H1M%20Nature%20%26%20Healing.",
    highlights: [
      "Rute santai untuk healing dan foto-foto.",
      "Spot alam sejuk & city night singkat.",
      "Cocok untuk keluarga dan pasangan.",
    ],
    destinasi: [
      "Hutan Pinus Mangunan",
      "Puncak Becici",
      "Titik Nol",
      "Malioboro",
    ],
    fasilitas: ["Transport AC", "Driver", "BBM & parkir", "Air mineral"],
  },

  "3h2m-1": {
    title: "3H2M: Jogja Komplit",
    images: [
      "aset/Prambanan Temple.jpeg",
      "aset/tamansari.jpeg",
      "aset/Indah.jpeg",
    ],
    durasi: "3 Hari 2 Malam",
    lokasi: "Yogyakarta",
    harga: "Rp 1.199.000 per Pax",
    waText:
      "Halo%20Jingga%20Pesona,%20saya%20ingin%20tanya%20paket%203H2M%20Jogja%20Komplit.",
    highlights: [
      "Kombinasi wisata budaya, alam, dan city tour.",
      "Itinerary lebih lengkap & fleksibel.",
      "Cocok untuk liburan bareng keluarga/teman.",
    ],
    destinasi: ["Candi Prambanan", "Taman Sari", "HeHa", "Malioboro"],
    fasilitas: [
      "Transport AC",
      "Driver",
      "BBM & parkir",
      "Air mineral",
      "Dokumentasi (opsional)",
    ],
  },

  "3h2m-2": {
    title: "3H2M: Adventure Merapi",
    images: [
      "aset/download (2).jpeg",
      "aset/Hutan pinus jogja.jpeg",
      "aset/Tugu Jogja, Kec_ Jetis - Kota Yogyakarta.jpeg",
    ],
    durasi: "3 Hari 2 Malam",
    lokasi: "Sleman",
    harga: "Rp 1.299.000 per Pax",
    waText:
      "Halo%20Jingga%20Pesona,%20saya%20ingin%20tanya%20paket%203H2M%20Adventure%20Merapi.",
    highlights: [
      "Lava tour Merapi yang seru dan memorable.",
      "Gabungan spot alam + city tour.",
      "Bisa request tambahan spot foto.",
    ],
    destinasi: [
      "Lava Tour Merapi",
      "Bunker Kaliadem",
      "Spot View",
      "Malioboro",
    ],
    fasilitas: ["Transport AC", "Driver", "BBM & parkir", "Air mineral"],
  },

  "honeymoon-1": {
    title: "Honeymoon: Romantic Jogja",
    images: [
      "aset/Indah.jpeg",
      "aset/Prambanan Temple.jpeg",
      "aset/Tugu Jogja, Kec_ Jetis - Kota Yogyakarta.jpeg",
    ],
    durasi: "2 Hari 1 Malam (Custom)",
    lokasi: "Yogyakarta",
    harga: "Rp 1.650.000 / couple",
    waText:
      "Halo%20Jingga%20Pesona,%20saya%20ingin%20tanya%20paket%20Honeymoon%20Romantic%20Jogja.",
    highlights: [
      "Itinerary romantis, tempo santai & nyaman.",
      "Rekomendasi spot sunset & dinner (opsional).",
      "Bisa request dekor & dokumentasi (opsional).",
    ],
    destinasi: [
      "Tebing Breksi",
      "HeHa",
      "City night tour",
      "Spot dinner (opsional)",
    ],
    fasilitas: [
      "Transport AC",
      "Driver",
      "BBM & parkir",
      "Air mineral",
      "Request itinerary (custom)",
    ],
  },

  "honeymoon-2": {
    title: "Honeymoon: City Night & Dinner",
    images: [
      "aset/Tugu Jogja, Kec_ Jetis - Kota Yogyakarta.jpeg",
      "aset/tamansari.jpeg",
      "aset/Indah.jpeg",
    ],
    durasi: "2 Hari 1 Malam (Custom)",
    lokasi: "Yogyakarta",
    harga: "Rp 1.850.000 / couple",
    waText:
      "Halo%20Jingga%20Pesona,%20saya%20ingin%20tanya%20paket%20Honeymoon%20City%20Night%20%26%20Dinner.",
    highlights: [
      "City night tour: spot ikonik malam hari.",
      "Dinner romantis (opsional) dan suasana santai.",
      "Cocok untuk pasangan yang suka vibes kota.",
    ],
    destinasi: [
      "Tugu Jogja",
      "Malioboro",
      "Titik Nol",
      "Dinner spot (opsional)",
    ],
    fasilitas: ["Transport AC", "Driver", "BBM & parkir", "Air mineral"],
  },
};

// ====== ELEMENTS ======
const modal = document.getElementById("paketModal");
const modalTitle = document.getElementById("modalTitle");
const modalDurasi = document.getElementById("modalDurasi");
const modalLokasi = document.getElementById("modalLokasi");
const modalHarga = document.getElementById("modalHarga");
const modalChat = document.getElementById("modalChat");
const modalHighlights = document.getElementById("modalHighlights");
const modalDestinasi = document.getElementById("modalDestinasi");
const modalFasilitas = document.getElementById("modalFasilitas");
const modalSyarat = document.getElementById("modalSyarat");

// slider
const sliderTrack = document.getElementById("sliderTrack");
const sliderDots = document.getElementById("sliderDots");
const sliderPrev = document.getElementById("sliderPrev");
const sliderNext = document.getElementById("sliderNext");

let currentSlides = [];
let currentIndex = 0;

function setList(el, items) {
  el.innerHTML = "";
  (items || []).forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    el.appendChild(li);
  });
}

function renderSlider(images) {
  currentSlides = images || [];
  currentIndex = 0;

  sliderTrack.innerHTML = "";
  sliderDots.innerHTML = "";

  currentSlides.forEach((src, idx) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `slide-${idx + 1}`;
    sliderTrack.appendChild(img);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "dot" + (idx === 0 ? " active" : "");
    dot.addEventListener("click", () => goToSlide(idx));
    sliderDots.appendChild(dot);
  });

  goToSlide(0, true);
}

function updateDots() {
  const dots = sliderDots.querySelectorAll(".dot");
  dots.forEach((d, i) => d.classList.toggle("active", i === currentIndex));
}

function goToSlide(idx, instant = false) {
  if (!currentSlides.length) return;

  currentIndex = (idx + currentSlides.length) % currentSlides.length;

  if (instant) sliderTrack.style.transition = "none";
  else sliderTrack.style.transition = "transform .35s ease";

  sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
  updateDots();

  if (instant) {
    requestAnimationFrame(() => {
      sliderTrack.style.transition = "transform .35s ease";
    });
  }
}

sliderPrev.addEventListener("click", () => goToSlide(currentIndex - 1));
sliderNext.addEventListener("click", () => goToSlide(currentIndex + 1));

// ====== OPEN/CLOSE MODAL ======
function openModal(pkgId) {
  const data = packages[pkgId];
  if (!data) return;

  modalTitle.textContent = data.title;
  modalDurasi.textContent = data.durasi;
  modalLokasi.textContent = data.lokasi;
  modalHarga.textContent = data.harga;

  modalChat.href = `https://wa.me/${WA_NUMBER}?text=${data.waText}`;

  setList(modalHighlights, data.highlights);
  setList(modalDestinasi, data.destinasi);
  setList(modalFasilitas, data.fasilitas);
  setList(modalSyarat, SYARAT_GENERAL);

  renderSlider(data.images);

  // reset tab
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".tab-panel")
    .forEach((p) => p.classList.remove("active"));
  document
    .querySelector('.tab-btn[data-tab="destinasi"]')
    .classList.add("active");
  document.getElementById("tab-destinasi").classList.add("active");

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// card click
document.querySelectorAll(".paket-card").forEach((card) => {
  card.addEventListener("click", () => openModal(card.dataset.package));
});

// close click overlay/close btn
modal.addEventListener("click", (e) => {
  if (e.target?.dataset?.close === "true") closeModal();
});

// esc close
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("is-open")) closeModal();
});

// tabs
document.querySelectorAll(".tab-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-btn")
      .forEach((b) => b.classList.remove("active"));
    document
      .querySelectorAll(".tab-panel")
      .forEach((p) => p.classList.remove("active"));

    btn.classList.add("active");
    document.getElementById("tab-" + btn.dataset.tab).classList.add("active");
  });
});
