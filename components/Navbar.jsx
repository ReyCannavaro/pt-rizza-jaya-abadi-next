'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/kontak';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap');

        .navbar-pill {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          width: calc(100% - 48px);
          max-width: 900px;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px 10px 14px;
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: rgba(255, 255, 255, 0.62);
          backdrop-filter: blur(24px) saturate(180%);
          -webkit-backdrop-filter: blur(24px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.7);
          box-shadow:
            0 2px 8px rgba(15, 52, 96, 0.06),
            0 1px 2px rgba(15, 52, 96, 0.04),
            inset 0 1px 0 rgba(255,255,255,0.9);
        }

        .navbar-inner.scrolled {
          background: rgba(255, 255, 255, 0.78);
          border: 1px solid rgba(255, 255, 255, 0.6);
          box-shadow:
            0 8px 32px rgba(15, 52, 96, 0.12),
            0 2px 8px rgba(15, 52, 96, 0.06),
            inset 0 1px 0 rgba(255,255,255,0.95);
          padding: 8px 14px;
        }

        .logo-wrap {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .logo-img {
          width: 38px;
          height: 38px;
          border-radius: 10px;
          overflow: hidden;
          flex-shrink: 0;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 2px 6px rgba(15,52,96,0.15));
        }

        .logo-wrap:hover .logo-img {
          transform: scale(1.05) rotate(-2deg);
        }

        .logo-text-name {
          font-size: 12px;
          font-weight: 700;
          margin: 0;
          line-height: 1.2;
          color: #0f3460;
          letter-spacing: 0.04em;
        }

        .logo-text-sub {
          font-size: 10px;
          margin: 0;
          color: #1a6baa;
          letter-spacing: 0.02em;
          font-weight: 400;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .nav-link {
          position: relative;
          font-size: 13.5px;
          font-weight: 450;
          color: #334155;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 12px;
          transition: all 0.2s ease;
          letter-spacing: -0.01em;
        }

        .nav-link:hover {
          color: #0f3460;
          background: rgba(15, 52, 96, 0.06);
        }

        .nav-link.active {
          color: #0f3460;
          font-weight: 600;
          background: rgba(15, 52, 96, 0.08);
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: #e8a020;
        }

        .nav-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          background: #0f3460;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 9px 18px;
          border-radius: 12px;
          letter-spacing: -0.01em;
          transition: all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          box-shadow: 0 2px 8px rgba(15,52,96,0.25), inset 0 1px 0 rgba(255,255,255,0.1);
          white-space: nowrap;
        }

        .nav-cta:hover {
          background: #0a2547;
          transform: translateY(-1px);
          box-shadow: 0 4px 16px rgba(15,52,96,0.35), inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .nav-cta:active {
          transform: translateY(0px);
        }

        .cta-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #e8a020;
          flex-shrink: 0;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 4.5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 10px;
          transition: background 0.2s;
        }
        .hamburger:hover {
          background: rgba(15,52,96,0.07);
        }
        .hamburger-line {
          display: block;
          height: 1.5px;
          background: #0f3460;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          transform-origin: center;
        }
        .hamburger-line:nth-child(1) { width: 20px; }
        .hamburger-line:nth-child(2) { width: 14px; background: #e8a020; }
        .hamburger-line:nth-child(3) { width: 20px; }
        .hamburger.open .hamburger-line:nth-child(1) {
          transform: translateY(6px) rotate(45deg);
          width: 20px;
        }
        .hamburger.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .hamburger.open .hamburger-line:nth-child(3) {
          transform: translateY(-6px) rotate(-45deg);
          width: 20px;
          background: #0f3460;
        }

        .mobile-sheet-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.15);
          backdrop-filter: blur(4px);
          z-index: 998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .mobile-sheet-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-sheet {
          position: fixed;
          top: 82px;
          left: 24px;
          right: 24px;
          z-index: 999;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(32px) saturate(200%);
          -webkit-backdrop-filter: blur(32px) saturate(200%);
          border: 1px solid rgba(255,255,255,0.8);
          border-radius: 20px;
          padding: 16px;
          box-shadow:
            0 20px 60px rgba(15,52,96,0.15),
            0 4px 16px rgba(15,52,96,0.08),
            inset 0 1px 0 rgba(255,255,255,0.95);
          transform: translateY(-8px) scale(0.97);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .mobile-sheet.open {
          transform: translateY(0) scale(1);
          opacity: 1;
          pointer-events: all;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 16px;
          border-radius: 12px;
          text-decoration: none;
          color: #334155;
          font-size: 15px;
          font-weight: 500;
          transition: all 0.18s ease;
          letter-spacing: -0.01em;
        }

        .mobile-link:hover, .mobile-link.active {
          background: rgba(15, 52, 96, 0.07);
          color: #0f3460;
        }

        .mobile-link.active {
          font-weight: 600;
        }

        .mobile-link-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #e8a020;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .mobile-link.active .mobile-link-dot {
          opacity: 1;
        }

        .mobile-divider {
          height: 1px;
          background: rgba(15,52,96,0.08);
          margin: 8px 0;
        }

        .mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 4px;
          padding: 14px;
          background: #0f3460;
          color: #fff;
          font-size: 15px;
          font-weight: 600;
          border-radius: 13px;
          text-decoration: none;
          letter-spacing: -0.01em;
          box-shadow: 0 4px 16px rgba(15,52,96,0.3);
          transition: all 0.2s ease;
        }

        .mobile-cta:hover {
          background: #0a2547;
        }

        @media (max-width: 768px) {
          .nav-links { display: none !important; }
          .hamburger { display: flex !important; }
          .navbar-pill {
            top: 12px;
            width: calc(100% - 32px);
          }
        }
      `}</style>

      <div className="navbar-pill">
        <div className={`navbar-inner${scrolled ? ' scrolled' : ''}`}>

          <Link href="/" className="logo-wrap">
            <div className="logo-img">
              <Image
                src="/images/logo.png"
                alt="PT. Rizza Jaya Abadi"
                width={38}
                height={38}
                style={{ objectFit: 'contain', width: '100%', height: '100%', display: 'block' }}
              />
            </div>
            <div>
              <p className="logo-text-name">PT. RIZZA JAYA ABADI</p>
              <p className="logo-text-sub">Tour &amp; Travel</p>
            </div>
          </Link>

          <nav className="nav-links" aria-label="Main navigation">
            {navLinks.filter(l => l.href !== '/hubungi-kami').map(link => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link${isActive ? ' active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link href="/hubungi-kami" className="nav-cta" style={{ marginLeft: 8 }}>
              <span className="cta-dot" />
              Hubungi Kami
            </Link>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`hamburger${menuOpen ? ' open' : ''}`}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </div>

      <div
        className={`mobile-sheet-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <div className={`mobile-sheet${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Navigation menu">
        {navLinks.map(link => {
          const isActive = pathname === link.href;
          if (link.href === '/hubungi-kami') return null;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`mobile-link${isActive ? ' active' : ''}`}
              onClick={() => setMenuOpen(false)}
            >
              <span className="mobile-link-dot" />
              {link.label}
            </Link>
          );
        })}
        <div className="mobile-divider" />
        <Link href="/hubungi-kami" className="mobile-cta" onClick={() => setMenuOpen(false)}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#e8a020', flexShrink: 0 }} />
          Hubungi Kami
        </Link>
      </div>
    </>
  );
}