# PT Shinrai Vision Engineering — Website (React + Vite)

Website company profile PT Shinrai Vision Engineering, dikonversi dari HTML/CSS/JS statis
menjadi aplikasi **React (Vite)** dengan komponen yang dipecah per menu/section, plus
optimasi SEO.

## Struktur Proyek

```
shinrai-react/
├── public/
│   ├── bahan/img/        # semua gambar (logo, hero, galeri, dst)
│   ├── bahan/pdf/        # company profile PDF
│   ├── robots.txt        # instruksi crawler
│   └── sitemap.xml       # peta situs untuk SEO
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Navbar + scrollspy + efek scroll
│   │   ├── Hero.jsx          # Section Home / Hero
│   │   ├── About.jsx         # Section Tentang Kami (Visi/Misi)
│   │   ├── Services.jsx      # Section Layanan Kami
│   │   ├── Gallery.jsx       # Section Gallery (GLightbox)
│   │   ├── Articles.jsx      # Section Artikel
│   │   ├── Testimonials.jsx  # Section Our Customer (Swiper)
│   │   ├── Contact.jsx       # Section Contact + Form
│   │   └── Footer.jsx        # Footer
│   ├── data/              # Konten dipisah dari markup (mudah di-update)
│   │   ├── services.js
│   │   ├── gallery.js
│   │   ├── articles.js
│   │   └── testimonials.js
│   ├── hooks/
│   │   └── useScrollEffects.js  # custom hook: header scroll + scrollspy
│   ├── App.jsx             # Menyusun semua section + SEO <Helmet>
│   ├── main.jsx            # Entry point React (+ HelmetProvider)
│   └── index.css           # Stylesheet asli (dipindah apa adanya)
├── index.html               # Meta SEO statis (fallback) + preconnect font
└── package.json
```

Setiap "menu" pada website asli (Home, About, Service, Gallery, Article, Our Customer,
Contact) kini menjadi komponen React sendiri-sendiri di `src/components/`, sehingga
lebih mudah dipelihara, di-reuse, dan di-test terpisah.

## Teknologi

| Sebelumnya (HTML statis)      | Sekarang (React)                          |
|--------------------------------|--------------------------------------------|
| Bootstrap 5 via CDN            | `bootstrap` npm package (CSS + JS bundle)  |
| AOS via CDN + `<script>`       | `aos` npm package, di-init lewat `useEffect` |
| GLightbox via CDN              | `glightbox` npm package, di-init di `Gallery.jsx` |
| Swiper via CDN                 | `swiper/react` (komponen `<Swiper>` & `<SwiperSlide>`) |
| Vanilla JS (`main.js`)         | Custom hook `useScrollEffects.js` (React state) |
| Meta tag statis di `<head>`   | `react-helmet-async` (dinamis) + fallback statis di `index.html` |

## SEO yang diterapkan

1. Meta tag lengkap (title, description, keywords, canonical, Open Graph, Twitter
   Card) — didefinisikan dua kali secara sengaja:
   - Statis di `index.html` -> dibaca crawler/bot yang tidak menjalankan JavaScript.
   - Dinamis via `react-helmet-async` di `App.jsx` -> mudah diubah per halaman jika nanti
     ditambah routing multi-halaman.
2. JSON-LD `LocalBusiness` schema.org untuk membantu Google memahami identitas bisnis
   (alamat, telepon, dsb) — tetap dipertahankan dari versi asli.
3. `robots.txt` dan `sitemap.xml` di folder `public/` agar mudah di-crawl dan di-index.
4. Semantic HTML tetap dipertahankan (`<header>`, `<main>`, `<footer>`, heading
   `h1`-`h4` sesuai hierarki asli, `alt` text deskriptif di setiap gambar).
5. `loading="lazy"` pada iframe Google Maps agar tidak memperlambat First Contentful
   Paint.

> Catatan penting: Vite + React murni menghasilkan Client-Side Rendered (CSR) app.
> Google umumnya bisa meng-crawl konten CSR, tapi jika Anda ingin SEO paling optimal
> (konten langsung ada di HTML awal, cepat ter-index, bagus juga untuk share link
> WhatsApp/Facebook), pertimbangkan migrasi ke Next.js (SSR/SSG) di kemudian hari.
> Struktur komponen di atas sudah kompatibel untuk dipindahkan ke Next.js dengan
> perubahan minimal.

## Catatan konten

Beberapa gambar yang direferensikan di kode asli (`gallery-1.jpg` s/d `gallery-6.jpg`,
`article-1.jpg` s/d `article-3.jpg`, `logo-klien-1.png` s/d `logo-klien-3.png`,
`hero-silhouette.jpg`) tidak ada di dalam file ZIP yang diupload — hanya `Logo.png`,
`hero-bg.jpg`, dan `tentangkami.jpg` yang tersedia. Referensinya tetap saya pertahankan
persis seperti kode asli (path sama), silakan tambahkan file-file gambar tersebut ke
`public/bahan/img/` agar gambar tidak broken.

## Menjalankan proyek

```bash
npm install
npm run dev       # mode development, buka http://localhost:5173
npm run build     # build production ke folder dist/
npm run preview   # preview hasil build production
```

## Form Contact

Form contact saat ini masih dummy (menampilkan pesan sukses tanpa mengirim data
sungguhan), sama seperti versi HTML asli. Untuk produksi, sambungkan `handleSubmit` di
`src/components/Contact.jsx` ke backend/API atau layanan pihak ketiga (Formspree,
EmailJS, dll).
