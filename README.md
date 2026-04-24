# Kiietsuu — Portfolio (Full-Stack Edition)

Website portofolio resmi Kiietsuu, full-stack developer. Dibangun statis (HTML/CSS/JS vanilla), tanpa build step, mudah di-host di mana pun (GitHub Pages, Vercel, Netlify, Cloudflare Pages, Fly.io static, dll).

## Fitur

- **Hero** dengan terminal mockup + floating metric cards.
- **About** dengan quick facts (location, focus, availability).
- **Services** — 4 kartu (Frontend, Full-Stack, Backend/API, DevOps) dengan card "Most requested".
- **Tech Stack** dikelompokkan per domain (Frontend / Backend / Database / DevOps / Testing / Tools).
- **Experience timeline** — perjalanan karir dengan metadata dan chip stack per entry.
- **Projects** — kartu proyek dengan thumbnail bergradien, termasuk 1 kartu wide featured + mock UI.
- **Testimonials** — 3 quote dari client.
- **Contact** — info + socials + formulir kontak client-side (fallback ke `mailto:`).
- Scroll-reveal animation, marquee stack strip, active-nav highlight, menu mobile.
- Dark theme profesional (violet / cyan / pink accents), responsive 1440 → 320px, dukungan `prefers-reduced-motion`.

## Struktur

```
.
├── index.html     # Markup halaman
├── styles.css     # Theme + layout + animasi
├── script.js      # Reveal, nav mobile, form handler, active link
└── README.md
```

## Menjalankan Lokal

```bash
# Python 3
python3 -m http.server 8000

# atau Node
npx serve .
```

Buka http://localhost:8000.

## Deploy

Project ini murni statis, tidak ada build step:

- **GitHub Pages** — Settings → Pages → Source: branch `main`.
- **Vercel / Netlify / Cloudflare Pages** — import repo, output directory `.`.
- **Devinapps (static)** — `deploy frontend` command.

## Kustomisasi Cepat

Edit `index.html`:

- **Email** — ganti `mailto:hello@kiietsuu.dev` di nav dan contact.
- **Sosmed** — ganti `href="#"` di `.contact__socials` dengan URL aktual.
- **Services / Stack / Projects** — edit teks dan chip sesuai portofolio asli.
- **Timeline** — ubah tahun, role, perusahaan, deskripsi.
- **Testimonials** — ganti dengan testimoni asli client.

Edit `styles.css` → `:root`:

- `--accent`, `--accent-2`, `--accent-3` → skema warna.
- `--maxw` → lebar maksimum konten.

Edit `script.js`:

- Contact form saat ini fallback ke `mailto:`. Untuk submit via backend / Formspree, ganti handler di `form.addEventListener('submit', …)`.

## Lisensi

Bebas dipakai dan dimodifikasi oleh Kiietsuu.
