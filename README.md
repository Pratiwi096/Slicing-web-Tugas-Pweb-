# Portfolio Nuzul — Tugas Slicing Website (Pemrograman Web)

Portfolio satu halaman untuk tugas slicing website bebas.

**Demo:** _tempel link deployment (GitHub Pages / Netlify / Vercel) di sini_

## Screenshot

| Desktop | Tablet | Mobile |
|---|---|---|
| ![Desktop](screenshots/desktop.png) | ![Tablet](screenshots/tablet.png) | ![Mobile](screenshots/mobile.png) |

## Penjelasan singkat

- **HTML**: struktur semantik (`header`, `nav`, `main`, `section`, `footer`), label form terhubung ke input.
- **CSS (plain, tanpa Tailwind/Bootstrap)**: CSS variables untuk tema, Grid dan Flexbox untuk layout, media query di 900px (tablet) dan 640px (mobile).
- **JavaScript (DOM)**:
  - render daftar skill dan kartu proyek dari array data,
  - filter proyek per kategori,
  - toggle mode gelap/terang (disimpan di `localStorage`),
  - menu hamburger di mobile,
  - validasi form kontak dengan pesan error per kolom.

## Struktur

```
index.html
style.css
script.js
```

## Menjalankan

Buka `index.html` di browser, atau pakai Live Server di VS Code.

## Deploy ke GitHub Pages

Settings → Pages → Source: `main` / root → Save.
