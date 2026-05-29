'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/kontak';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: 20,
      left: 24,
      right: 24,
      zIndex: 50,
    }}>
      <nav style={{
        borderRadius: 16,
        padding: '12px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: scrolled ? '#0f3460' : 'rgba(15, 52, 96, 0.08)',
        border: scrolled ? '1px solid transparent' : '1px solid rgba(15, 52, 96, 0.12)',
        backdropFilter: scrolled ? 'none' : 'blur(8px)',
        boxShadow: scrolled ? '0 4px 24px rgba(15, 52, 96, 0.18)' : 'none',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 36, height: 36,
            background: '#000',
            borderRadius: 8,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0,
          }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: '#cc2222', letterSpacing: '-0.5px' }}>JA</span>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, margin: 0, lineHeight: 1.2, color: scrolled ? '#ffffff' : '#0f3460' }}>
              PT. RIZZA JAYA ABADI
            </p>
            <p style={{ fontSize: 10, margin: 0, color: scrolled ? '#a0c4e8' : '#1a6baa' }}>
              Tour & Travel
            </p>
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-nav">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: scrolled
                  ? (isActive ? '#ffffff' : '#a0c4e8')
                  : (isActive ? '#0f3460' : '#1a6baa'),
                textDecoration: 'none',
                paddingBottom: isActive ? 2 : 0,
                borderBottom: isActive ? '2px solid #e8a020' : '2px solid transparent',
                transition: 'all 0.2s ease',
              }}>
                {link.label}
              </Link>
            );
          })}
          <Link href="/hubungi-kami" style={{
            background: '#e8a020',
            color: '#1a1a1a',
            padding: '7px 18px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'background 0.2s ease',
            whiteSpace: 'nowrap',
          }}>
            Hubungi Kami
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5 }}
          className="hamburger"
          aria-label="Toggle menu"
        >
          <span style={{ width: 22, height: 2, background: scrolled ? '#fff' : '#0f3460', borderRadius: 2, display: 'block' }} />
          <span style={{ width: 15, height: 2, background: '#e8a020', borderRadius: 2, display: 'block' }} />
          <span style={{ width: 22, height: 2, background: scrolled ? '#fff' : '#0f3460', borderRadius: 2, display: 'block' }} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{
          marginTop: 8,
          background: '#0f3460',
          borderRadius: 14,
          padding: '16px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 16,
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 14, color: '#a0c4e8', textDecoration: 'none', fontWeight: 500 }}>
              {link.label}
            </Link>
          ))}
          <Link href="/hubungi-kami"
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#e8a020', color: '#1a1a1a',
              padding: '10px 0', borderRadius: 8,
              textAlign: 'center', fontWeight: 600, fontSize: 14,
              textDecoration: 'none',
            }}>
            Hubungi Kami
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}