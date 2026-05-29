import Link from 'next/link';
import { layanan } from '@/data/layanan';
import { profil } from '@/data/profil';

export default function Home() {
  return (
    <div className="page-content">

      <section style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #eef4fb 0%, #ffffff 60%)',
        display: 'flex', alignItems: 'center',
        padding: '0 80px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', width: '100%' }}>
          <p className="label-section" style={{ marginBottom: 16 }}>Tour & Travel Terpercaya</p>
          <h1 className="heading-display" style={{ maxWidth: 680, marginBottom: 24 }}>
            Wujudkan Perjalanan <span style={{ color: '#e8a020' }}>Impian Anda</span> Bersama Kami
          </h1>
          <p style={{ fontSize: 18, color: '#475569', maxWidth: 520, marginBottom: 40, lineHeight: 1.7 }}>
            {profil.tagline} — Melayani paket wisata domestik, internasional, umroh, dan corporate travel dengan standar profesional tertinggi.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="/layanan-kami" className="btn-gold">Lihat Layanan</Link>
            <Link href="/hubungi-kami" className="btn-outline">Hubungi Kami</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#0f3460', padding: '48px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {profil.stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 36, fontWeight: 700, color: '#e8a020', margin: 0 }}>{stat.nilai}</p>
              <p style={{ fontSize: 14, color: '#a0c4e8', margin: '4px 0 0' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '80px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <p className="label-section" style={{ marginBottom: 12 }}>Apa yang kami tawarkan</p>
          <h2 className="heading-lg" style={{ marginBottom: 48, fontSize: 32 }}>Layanan Kami</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {layanan.map(item => (
              <div key={item.id} className="card-layanan">
                <div style={{
                  width: 52, height: 52,
                  background: '#eef4fb',
                  borderRadius: 12,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 24, marginBottom: 16,
                }}>
                  {item.icon}
                </div>
                <h3 className="heading-md" style={{ fontSize: 18, marginBottom: 10 }}>{item.judul}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, margin: 0 }}>{item.deskripsi}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <Link href="/layanan-kami" className="btn-navy">Semua Layanan</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#eef4fb', padding: '80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>
          <p className="label-section" style={{ marginBottom: 12 }}>Siap memulai perjalanan?</p>
          <h2 style={{ fontSize: 36, fontWeight: 700, color: '#0f3460', marginBottom: 16 }}>
            Konsultasikan Rencana Perjalanan Anda
          </h2>
          <p style={{ fontSize: 16, color: '#475569', maxWidth: 480, margin: '0 auto 32px' }}>
            Tim kami siap membantu Anda merancang perjalanan yang sempurna sesuai kebutuhan dan anggaran.
          </p>
          <Link href="/hubungi-kami" className="btn-gold">Hubungi Kami Sekarang</Link>
        </div>
      </section>

    </div>
  );
}