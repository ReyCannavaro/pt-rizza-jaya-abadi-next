import Link from 'next/link';
import { kontak, navLinks } from '@/data/kontak';

export default function Footer() {
  return (
    <footer style={{ background: '#0f3460', color: '#ffffff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '60px 80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 48, marginBottom: 48 }}>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 40, height: 40, background: '#000', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: '#cc2222' }}>JA</span>
              </div>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, margin: 0, color: '#fff' }}>PT. RIZZA JAYA ABADI</p>
                <p style={{ fontSize: 11, margin: 0, color: '#a0c4e8' }}>Tour & Travel</p>
              </div>
            </div>
            <p style={{ fontSize: 14, color: '#94b8d4', lineHeight: 1.7, maxWidth: 280 }}>
              Mewujudkan setiap perjalanan impian Anda dengan layanan profesional, nyaman, dan terpercaya.
            </p>
          </div>

          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Navigasi</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} style={{ fontSize: 14, color: '#a0c4e8', textDecoration: 'none' }}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 16, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Kontak</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <p style={{ fontSize: 14, color: '#a0c4e8', margin: 0 }}>{kontak.telepon}</p>
              <p style={{ fontSize: 14, color: '#a0c4e8', margin: 0 }}>{kontak.email}</p>
              <p style={{ fontSize: 14, color: '#a0c4e8', margin: 0 }}>{kontak.jamOperasional}</p>
            </div>
          </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 13, color: '#64849e', margin: 0 }}>
            © {new Date().getFullYear()} PT. Rizza Jaya Abadi. Seluruh hak cipta dilindungi.
          </p>
          <p style={{ fontSize: 13, color: '#64849e', margin: 0 }}>Surabaya, Jawa Timur</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div { padding: 40px 24px 24px !important; }
          footer > div > div:first-child { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}