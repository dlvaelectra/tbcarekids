# TBCareKids — Community Prototype

Website statis multi-halaman menggunakan HTML, CSS, dan JavaScript.

## Menjalankan
Ekstrak ZIP, buka folder `tb-care-kids`, lalu buka `index.html` atau gunakan VS Code + Live Server.

## Halaman
- `index.html`: landing page dengan 4 infografis statistik TB anak (Indonesia dan dunia; perlu verifikasi referensi lengkap sebelum publikasi).
- `komunitas.html`: ruang diskusi orang tua dengan filter topik, pencarian, apresiasi, contoh dukungan, dan form posting demo.
- `artikel.html`: kerangka artikel; isi menunggu materi.
- `skrining.html`: checklist Ya/Tidak 6 pertanyaan dengan bahasa awam tentang tanda TB pada anak. Checklist tidak menghitung skor dan bukan alat diagnosis.
- `css/style.css`: desain responsif, palet ungu-kuning terbaru, kontras teks, dan animasi landing page.
- `js/main.js`: navigasi mobile dan animasi landing page.
- `js/community.js`: interaksi demo komunitas di browser.

## Catatan penting
Halaman komunitas saat ini hanya prototype front-end. Postingan baru hanya muncul di browser/perangkat yang digunakan dan tidak dikirim ke server atau terlihat oleh orang lain. Belum ada akun, moderasi, penyimpanan permanen, atau sistem pelaporan. Sebelum dipublikasikan, komunitas perlu backend yang aman, kebijakan privasi, moderasi, serta mekanisme pelaporan. Jangan membagikan identitas atau data kesehatan pribadi anak.

Checklist skrining masih berupa kerangka edukasi, belum merupakan instrumen skrining klinis tervalidasi. Jangan gunakan untuk diagnosis atau menentukan pengobatan; materi dan alur tindak lanjut perlu ditinjau tenaga kesehatan.

## Statistik dan perubahan terbaru
- Indonesia 2024: 135.000 anak usia 0–14 tahun tercatat mengalami TBC (Kemenkes RI, 2025).
- Proporsi kasus TB anak Indonesia: 12%.
- Global 2024: 1,2 juta anak usia 0–14 tahun jatuh sakit akibat TBC.
- Global: perkiraan 42% kasus TB anak tidak terdiagnosis, tidak diobati, atau tidak terlapor.
- Untuk tiga angka terakhir, rujukan dokumen belum diberikan; verifikasi sebelum publikasi.
- Checklist 6 pertanyaan adalah alat bantu edukasi, bukan diagnosis atau alat penentu risiko klinis.


## Update visual
- Font display/logo: BorisBlackBloxx
- Font isi: Poppins
- Hero photos diberi treatment sinematik dengan overlay dan animasi pelan.

## UI/UX v5 (disetujui)
- Logo TBCareKids: TB ungu-outline kuning, CareKids kuning-outline ungu.
- Foto hero statis diperbesar mendekati separuh lebar desktop; dekorasi dibatasi blob dan satu lingkaran outline.
- Bagian statistik animasi angka dari 0 hingga nilai final satu kali saat terlihat; pengguna dengan reduced motion melihat angka final langsung.
- Sumber data statistik ditampilkan satu kali di bawah semua kartu. Angka selain 135.000 masih memerlukan pemeriksaan sumber resmi sebelum peluncuran.
- Judul section fitur: "Kenali dan Waspadai TBC pada Anak."
- Konten diskusi, artikel, dan skrining dipertahankan.
