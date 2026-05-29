---
version: 1.0
name: PT-RizzaJayaAbadi-design-system
description: >
  Sistem desain profesional untuk PT. Rizza Jaya Abadi — perusahaan jasa travel & transportasi.
  Menggunakan kanvas putih bersih dengan Deep Blue sebagai warna otoritas dan Gold sebagai aksen
  kepercayaan. Identitas visual berpusat pada logo "JA" merah di atas globe biru dengan latar hitam.
  Navbar melayang (floating sticky) menjadi elemen signature UI — transparan di atas hero,
  solid deep blue saat scroll. Dibangun dengan Next.js (JavaScript) dan Tailwind CSS.

colors:
  # Primary — Navy & Blue
  primary: "#0f3460"
  primary-hover: "#0a2547"
  primary-light: "#1a6baa"
  primary-surface: "#eef4fb"

  # Accent — Gold (CTA utama)
  accent: "#e8a020"
  accent-hover: "#d09018"
  accent-text: "#1a1a1a"

  # Neutral
  ink: "#1e293b"
  body: "#475569"
  muted: "#94a3b8"
  hairline: "#e2e8f0"

  # Canvas
  canvas: "#ffffff"
  surface-soft: "#f8fafc"
  surface-blue: "#eef4fb"

  # Logo colors (jangan diubah — identitas brand)
  logo-bg: "#000000"
  logo-red: "#cc2222"
  logo-globe: "#4a90c4"

  # Semantic
  success: "#16a34a"
  warning: "#d97706"
  error: "#dc2626"

typography:
  font-primary: "Inter, system-ui, sans-serif"
  font-heading: "Inter, system-ui, sans-serif"

  display-xl:
    fontSize: 56px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: -1.5px
    color: "#0f3460"

  display-lg:
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: -1px
    color: "#0f3460"

  display-md:
    fontSize: 32px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
    color: "#0f3460"

  heading-lg:
    fontSize: 24px
    fontWeight: 600
    lineHeight: 1.3
    color: "#1e293b"

  heading-md:
    fontSize: 20px
    fontWeight: 600
    lineHeight: 1.4
    color: "#1e293b"

  body-lg:
    fontSize: 18px
    fontWeight: 400
    lineHeight: 1.7
    color: "#475569"

  body-md:
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.7
    color: "#475569"

  body-sm:
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.6
    color: "#94a3b8"

  label:
    fontSize: 12px
    fontWeight: 500
    letterSpacing: 0.06em
    textTransform: uppercase
    color: "#1a6baa"

---

# PT. Rizza Jaya Abadi — Design System

## 1. Visual Theme & Atmosphere

**Mood**: Profesional, terpercaya, dan berorientasi global. Bersih tanpa kesan dingin.

**Filosofi desain**:
- Putih sebagai kanvas utama — memberikan ruang napas dan kesan bersih
- Deep Blue (`#0f3460`) sebagai warna otoritas — dipakai di navbar, footer, heading
- Gold (`#e8a020`) sebagai satu-satunya aksen CTA — tidak digunakan dekoratif, hanya untuk tombol dan highlight aktif
- Logo tidak pernah dimodifikasi warnanya — hitam, merah JA, dan biru globe adalah identitas fixed

**Densitas**: Medium — cukup whitespace agar konten bernapas, tidak terlalu sparse agar terasa profesional dan berisi.

---

## 2. Color Palette & Roles

| Token               | Hex       | Peran                                           |
|---------------------|-----------|-------------------------------------------------|
| `primary`           | `#0f3460` | Navbar (scrolled), footer, heading utama, badge |
| `primary-hover`     | `#0a2547` | Hover state tombol primary                      |
| `primary-light`     | `#1a6baa` | Link, ikon, sub-heading, label section          |
| `primary-surface`   | `#eef4fb` | Section background alternatif, card surface     |
| `accent`            | `#e8a020` | Tombol CTA utama, active nav indicator          |
| `accent-hover`      | `#d09018` | Hover state tombol CTA                          |
| `accent-text`       | `#1a1a1a` | Teks di atas background accent                  |
| `ink`               | `#1e293b` | Heading konten                                  |
| `body`              | `#475569` | Body text paragraf                              |
| `muted`             | `#94a3b8` | Placeholder, teks sekunder, caption             |
| `hairline`          | `#e2e8f0` | Border, divider, garis pemisah                  |
| `canvas`            | `#ffffff` | Background halaman utama                        |
| `surface-soft`      | `#f8fafc` | Background section alternate (off-white)        |
| `surface-blue`      | `#eef4fb` | Background section bertema biru                 |

**Aturan warna yang tidak boleh dilanggar**:
- Gold HANYA untuk tombol CTA dan indikator aktif — jangan pakai sebagai warna dekoratif atau teks biasa
- Logo (hitam, merah, biru globe) tidak boleh diganti warnanya dalam konteks apapun
- Jangan menambah warna baru di luar palette ini tanpa alasan kuat

---

## 3. Floating Navbar (Elemen Signature)

Navbar adalah elemen paling khas dari desain ini. Ia **melayang** di atas konten, tidak menempel ke tepi layar.

### Struktur
```
[margin kiri 24px] [NAVBAR PILL] [margin kanan 24px]
```

Navbar memiliki `margin: 0 24px` dari tepi viewport, dengan `border-radius: 16px` sehingga tampak seperti pil/kapsul melayang.

### State 1 — Default (di atas hero, transparan)
```css
position: fixed;
top: 20px;
left: 24px;
right: 24px;
border-radius: 16px;
background: rgba(15, 52, 96, 0.08);
border: 1px solid rgba(15, 52, 96, 0.12);
backdrop-filter: blur(8px);
padding: 12px 24px;
z-index: 50;
transition: all 0.3s ease;
```

### State 2 — Scrolled (solid, sticky)
Aktif saat `scrollY > 60px`:
```css
background: #0f3460;
border: 1px solid transparent;
box-shadow: 0 4px 24px rgba(15, 52, 96, 0.18);
```

### Isi navbar
- **Kiri**: Logo JA (kotak hitam rounded) + nama perusahaan dalam 2 baris
  - Baris 1: `PT. RIZZA JAYA ABADI` — weight 600, 13px
  - Baris 2: `Global Logistics` — weight 400, 11px, warna `primary-light` (atau `#a0c4e8` saat scrolled)
- **Kanan**: Link navigasi + tombol CTA
  - Link aktif: warna putih + `border-bottom: 2px solid accent`
  - Link non-aktif: `#a0c4e8` (state scrolled) atau `primary-light` (state transparan)
  - Tombol CTA: background `accent` (`#e8a020`), teks `accent-text`, `border-radius: 8px`, `padding: 7px 16px`

### Mobile (< 768px)
Navbar tetap melayang, link navigasi disembunyikan, tampilkan hamburger icon (3 garis, aksen gold pada baris tengah). Menu dropdown muncul ke bawah dengan background `primary` solid.

### Implementasi Next.js
```jsx
// components/Navbar.jsx
'use client';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 20,
        left: 24,
        right: 24,
        borderRadius: 16,
        zIndex: 50,
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: scrolled ? '#0f3460' : 'rgba(15,52,96,0.08)',
        border: scrolled ? '1px solid transparent' : '1px solid rgba(15,52,96,0.12)',
        boxShadow: scrolled ? '0 4px 24px rgba(15,52,96,0.18)' : 'none',
      }}
    >
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 36, height: 36, background: '#000', borderRadius: 8,
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: '#cc2222' }}>JA</span>
        </div>
        <div>
          <p style={{ fontSize: 12, fontWeight: 600, margin: 0,
            color: scrolled ? '#ffffff' : '#0f3460' }}>PT. RIZZA JAYA ABADI</p>
          <p style={{ fontSize: 10, margin: 0,
            color: scrolled ? '#a0c4e8' : '#1a6baa' }}>Global Logistics</p>
        </div>
      </div>
      {/* Nav Links */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
        {['Home', 'Profil Kami', 'Layanan', 'Kontak'].map(link => (
          <a key={link} href="#" style={{ fontSize: 13,
            color: scrolled ? '#a0c4e8' : '#1a6baa', textDecoration: 'none' }}>
            {link}
          </a>
        ))}
        <a href="/hubungi-kami" style={{
          background: '#e8a020', color: '#1a1a1a',
          padding: '7px 16px', borderRadius: 8, fontSize: 13, fontWeight: 600,
          textDecoration: 'none'
        }}>
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
}
```

---

## 4. Component Stylings

### Tombol

**CTA Utama (Gold)**
```css
background: #e8a020;
color: #1a1a1a;
padding: 12px 28px;
border-radius: 10px;
font-weight: 600;
font-size: 15px;
border: none;
cursor: pointer;
transition: background 0.2s ease;
/* hover */ background: #d09018;
```

**CTA Sekunder (Navy outline)**
```css
background: transparent;
color: #0f3460;
border: 2px solid #0f3460;
padding: 10px 26px;
border-radius: 10px;
font-weight: 600;
font-size: 15px;
/* hover */ background: #0f3460; color: #ffffff;
```

**CTA Navy Solid**
```css
background: #0f3460;
color: #ffffff;
padding: 12px 28px;
border-radius: 10px;
font-weight: 500;
/* hover */ background: #0a2547;
```

### Cards Layanan
```css
background: #ffffff;
border: 1px solid #e2e8f0;
border-radius: 16px;
padding: 28px 24px;
/* hover */ border-color: #1a6baa; box-shadow: 0 4px 20px rgba(15,52,96,0.08);
/* transition */ all 0.25s ease;
```

Icon di kartu: lingkaran `#eef4fb`, ikon warna `#1a6baa`, ukuran 48px.

### Hero Section
- Tinggi minimal `100vh` — konten navbar yang melayang di atasnya tidak memotong hero
- `padding-top: 100px` pada konten hero agar tidak tertutup navbar
- Background: bisa gambar penuh dengan overlay `rgba(15,52,96,0.5)` atau background putih murni dengan teks navy

### Form Input (halaman Hubungi Kami)
```css
width: 100%;
padding: 12px 16px;
border: 1.5px solid #e2e8f0;
border-radius: 10px;
font-size: 15px;
color: #1e293b;
background: #ffffff;
outline: none;
/* focus */ border-color: #0f3460; box-shadow: 0 0 0 3px rgba(15,52,96,0.1);
```

### Footer
```css
background: #0f3460;
color: #ffffff;
padding: 60px 80px 32px;
```
- Heading kolom: weight 600, 16px, putih
- Link: `#a0c4e8`, hover putih
- Divider bottom: `rgba(255,255,255,0.1)`
- Copyright bar: `rgba(0,0,0,0.2)` di atas footer

---

## 5. Layout Principles

**Grid utama**: 12 kolom, max-width `1280px`, centered, padding horizontal `80px` desktop / `24px` mobile.

**Spacing scale**:
| Token | Value | Contoh penggunaan               |
|-------|-------|---------------------------------|
| `xs`  | 8px   | Gap antar ikon-label            |
| `sm`  | 16px  | Padding internal card kecil     |
| `md`  | 24px  | Gap antar elemen dalam section  |
| `lg`  | 48px  | Padding vertical section kecil  |
| `xl`  | 80px  | Padding vertical section utama  |
| `2xl` | 120px | Section hero                    |

**Section rhythm**: Setiap section besar memiliki `padding-top: 80px` dan `padding-bottom: 80px`. Section hero `min-height: 100vh`.

**Card grid**: `grid-template-columns: repeat(3, 1fr)` pada layanan, fallback ke `repeat(2, 1fr)` di tablet, `1fr` di mobile.

---

## 6. Depth & Elevation

Desain ini menggunakan shadow seminimal mungkin — hanya pada elemen yang perlu diangkat.

| Level | CSS                                | Dipakai di                  |
|-------|------------------------------------|-----------------------------|
| 0     | none                               | Teks, divider, background   |
| 1     | `0 1px 4px rgba(15,52,96,0.06)`  | Card default                |
| 2     | `0 4px 20px rgba(15,52,96,0.08)` | Card hover                  |
| 3     | `0 4px 24px rgba(15,52,96,0.18)` | Navbar scrolled             |

Tidak ada shadow gelap atau dramatic — semua shadow bernada biru sesuai brand.

---

## 7. Do's and Don'ts

### ✅ Do
- Pakai gold HANYA untuk tombol CTA dan indikator aktif — efeknya jadi kuat karena jarang
- Beri `padding-top: 100px` pada konten pertama di setiap halaman agar tidak tertutup navbar melayang
- Gunakan `surface-blue` (`#eef4fb`) untuk section alternate — jauh lebih harmonis dari putih polos
- Pertahankan logo JA apa adanya — kotak hitam, inisial merah, tidak perlu dimodifikasi
- Gunakan Inter sebagai satu-satunya typeface — konsistensi lebih penting dari variasi
- Animasi transisi navbar wajib smooth (`transition: all 0.3s ease`)

### ❌ Don't
- Jangan pakai kuning `#FFD000` dari versi lama — sudah diganti gold `#e8a020` yang lebih elegan
- Jangan pakai warna hijau dari versi lama (`#5C7D2E`, `#76944C`) — sudah tidak ada dalam sistem ini
- Jangan pakai `position: absolute` untuk navbar — harus `position: fixed` agar tetap melayang saat scroll
- Jangan buat navbar full-width mepet tepi — selalu ada `margin: 0 24px`
- Jangan gunakan lebih dari 2 tombol CTA dalam satu viewport
- Jangan tambahkan warna baru tanpa alasan — palette ini sudah cukup

---

## 8. Responsive Behavior

| Breakpoint | Lebar      | Perubahan utama                                            |
|------------|------------|------------------------------------------------------------|
| Desktop    | ≥ 1280px   | Layout penuh, navbar pill dengan semua link                |
| Tablet     | 768–1279px | Grid 2 kolom, navbar masih pill tapi link lebih kompak     |
| Mobile     | < 768px    | Grid 1 kolom, navbar pill + hamburger menu, CTA full-width |

**Touch targets**: Minimum 44×44px untuk semua elemen interaktif di mobile.

**Navbar mobile**: Tetap melayang, margin `0 16px` (lebih kecil dari desktop), hamburger icon menggantikan link. Dropdown menu muncul sebagai layer solid `#0f3460` di bawah navbar.

---

## 9. Struktur Project Next.js

```
pt-rizza-jaya-abadi/
├── app/
│   ├── layout.jsx          ← Root layout + Navbar + Footer
│   ├── page.jsx            ← Home / Landing page
│   ├── profil-kami/
│   │   └── page.jsx
│   ├── layanan-kami/
│   │   └── page.jsx
│   └── hubungi-kami/
│       └── page.jsx
├── components/
│   ├── Navbar.jsx          ← Floating navbar (sticky scroll logic di sini)
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── ServiceCard.jsx
│   └── ContactForm.jsx
├── data/
│   ├── layanan.js          ← Data layanan (statis, ganti DB)
│   ├── profil.js           ← Data profil perusahaan
│   └── kontak.js           ← Data kontak & rute
├── public/
│   ├── logo.png
│   └── images/
│       ├── hero-home.jpg
│       ├── hero-profil.jpg
│       └── hero-layanan.jpg
└── styles/
    └── globals.css         ← CSS variable tokens dari palette ini
```

**Data layanan (contoh `data/layanan.js`)**:
```js
export const layanan = [
  {
    id: 1,
    judul: "Paket Wisata",
    deskripsi: "Perjalanan wisata dalam dan luar negeri...",
    icon: "map-pin",
  },
  // ...
];
```

---

## 10. Agent Prompt Guide

**Palette cepat untuk prompt AI**:
```
primary navy:   #0f3460
primary light:  #1a6baa  
accent gold:    #e8a020
canvas white:   #ffffff
surface blue:   #eef4fb
body text:      #475569
```

**Prompt siap pakai**:
```
Buat halaman Next.js untuk PT. Rizza Jaya Abadi menggunakan DESIGN.md ini.
Navbar harus floating pill: transparan di atas hero, solid #0f3460 saat scroll.
Tombol CTA utama pakai #e8a020 (gold). Background putih #ffffff, section alternate #eef4fb.
Font: Inter. Data diambil dari file /data/*.js (statis, tidak ada database).
```