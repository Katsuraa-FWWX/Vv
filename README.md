# Kiietsuu — Portfolio

Website portofolio pribadi Kiietsuu. Dibangun statis (HTML/CSS/JS vanilla), tanpa build step, ringan, dan mudah di-host di mana saja (GitHub Pages, Vercel, Netlify, Cloudflare Pages, dll).

## Struktur

```
.
├── index.html     # Markup halaman
├── styles.css     # Tema gelap + layout responsif
├── script.js      # Menu mobile, typing rotator, scroll reveal
└── README.md
```

## Menjalankan secara lokal

Cukup buka `index.html` di browser, atau jalankan server statis:

```bash
# Python 3
python3 -m http.server 8000

# atau Node
npx serve .
```

Lalu buka http://localhost:8000.

## Deploy

Project ini murni statis, jadi kamu bisa:

- **GitHub Pages** — push ke `main`, aktifkan Pages lewat Settings → Pages.
- **Vercel / Netlify / Cloudflare Pages** — import repo, tidak ada build command, output directory `.`.

## Kustomisasi

Area yang biasanya diganti:

- **`index.html`** — ganti teks hero, list skills, kartu proyek, link sosial, email.
- **`styles.css`** — variabel warna ada di `:root` (cari `--accent`, `--accent-2`, `--accent-3`).
- **`script.js`** — kata-kata di typing rotator ada di array `words`.

## Lisensi

Bebas dipakai dan dimodifikasi oleh Kiietsuu.
