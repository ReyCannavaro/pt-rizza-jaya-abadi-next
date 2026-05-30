'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <header style={{ position: 'fixed', top: 20, left: 24, right: 24, zIndex: 50 }}>
      <nav style={{
        borderRadius: 16,
        padding: '10px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease',
        background: scrolled ? '#0f3460' : 'rgba(255,255,255,0.72)',
        border: scrolled ? '1px solid transparent' : '1px solid rgba(15,52,96,0.1)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 4px 24px rgba(15,52,96,0.18)' : '0 2px 12px rgba(15,52,96,0.06)',
      }}>

        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 40, height: 40,
            borderRadius: 10,
            overflow: 'hidden',
            flexShrink: 0,
            background: '#000',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Image
              src="/images/logo.png"
              alt="PT. Rizza Jaya Abadi"
              width={40}
              height={40}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div>
            <p style={{
              fontSize: 12, fontWeight: 700, margin: 0, lineHeight: 1.2,
              color: scrolled ? '#ffffff' : '#0f3460',
              letterSpacing: '0.02em',
            }}>
              PT. RIZZA JAYA ABADI
            </p>
            <p style={{ fontSize: 10, margin: 0, color: scrolled ? '#a0c4e8' : '#1a6baa' }}>
              Tour & Travel
            </p>
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }} className="desktop-nav">
          {navLinks.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} style={{
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: scrolled
                  ? (isActive ? '#ffffff' : '#a0c4e8')
                  : (isActive ? '#0f3460' : '#475569'),
                textDecoration: 'none',
                paddingBottom: 3,
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
            padding: '8px 20px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            transition: 'background 0.2s ease',
          }}>
            Hubungi Kami
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'none', flexDirection: 'column', gap: 5, padding: 4 }}
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
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 18,
          boxShadow: '0 8px 32px rgba(15,52,96,0.2)',
        }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: 15, color: '#a0c4e8', textDecoration: 'none', fontWeight: 500 }}>
              {link.label}
            </Link>
          ))}
          <Link href="/hubungi-kami"
            onClick={() => setMenuOpen(false)}
            style={{
              background: '#e8a020', color: '#1a1a1a',
              padding: '12px 0', borderRadius: 8,
              textAlign: 'center', fontWeight: 600, fontSize: 14,
              textDecoration: 'none', marginTop: 4,
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