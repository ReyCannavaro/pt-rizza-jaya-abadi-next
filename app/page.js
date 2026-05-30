import Link from 'next/link';
import Image from 'next/image';
import { layanan } from '@/data/layanan';
import { profil } from '@/data/profil';

const keunggulan = [
  {
    judul: 'Pengalaman Lebih dari 10 Tahun',
    deskripsi: 'Kami telah melayani ribuan pelanggan sejak 2014 dengan rekam jejak yang terbukti dan dapat dipercaya.',
  },
  {
    judul: 'Armada Lengkap & Terawat',
    deskripsi: 'Lebih dari 20 unit armada yang selalu dalam kondisi prima, bersih, dan siap melayani perjalanan Anda.',
  },
  {
    judul: 'Harga Transparan',
    deskripsi: 'Tidak ada biaya tersembunyi. Setiap paket sudah mencakup semua komponen yang kami janjikan sejak awal.',
  },
  {
    judul: 'Layanan 7 Hari Seminggu',
    deskripsi: 'Tim kami siap membantu Anda setiap hari, termasuk akhir pekan, untuk memastikan perjalanan berjalan lancar.',
  },
];

export default function Home() {
  return (
    <div>

      <section style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <Image
          src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80"
          alt="Perjalanan wisata"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          priority
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(105deg, rgba(15,52,96,0.82) 0%, rgba(15,52,96,0.45) 60%, rgba(0,0,0,0.1) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '140px 80px 80px' }}>
          <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#e8a020', marginBottom: 20 }}>
            Tour & Travel Terpercaya — Surabaya
          </p>
          <h1 style={{
            fontSize: 'clamp(36px, 5vw, 64px)',
            fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-1.5px', color: '#ffffff',
            maxWidth: 700, marginBottom: 24,
          }}>
            Setiap Perjalanan<br />
            <span style={{ color: '#e8a020' }}>Layak Dikenang</span>
          </h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.8)', maxWidth: 500, marginBottom: 44, lineHeight: 1.7 }}>
            Kami merancang perjalanan wisata, umroh, dan corporate travel dengan standar pelayanan yang konsisten, dari keberangkatan hingga kepulangan.
          </p>
          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link href="/layanan-kami" style={{
              background: '#e8a020', color: '#1a1a1a',
              padding: '14px 32px', borderRadius: 10,
              fontWeight: 600, fontSize: 15, textDecoration: 'none',
            }}>Lihat Paket Kami</Link>
            <Link href="/profil-kami" style={{
              background: 'rgba(255,255,255,0.12)',
              border: '1.5px solid rgba(255,255,255,0.4)',
              color: '#ffffff', padding: '14px 32px', borderRadius: 10,
              fontWeight: 500, fontSize: 15, textDecoration: 'none',
            }}>Tentang Kami</Link>
          </div>
        </div>
      </section>

      <section style={{ background: '#0f3460', padding: '40px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
          {profil.stats.map((stat, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <p style={{ fontSize: 38, fontWeight: 700, color: '#e8a020', margin: 0, lineHeight: 1 }}>{stat.nilai}</p>
              <p style={{ fontSize: 13, color: '#a0c4e8', margin: '8px 0 0' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '100px 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' }}>
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Tim PT. Rizza Jaya Abadi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
            <div style={{
              position: 'absolute', bottom: 24, left: 24,
              background: '#0f3460', borderRadius: 12, padding: '14px 20px',
            }}>
              <p style={{ fontSize: 26, fontWeight: 700, color: '#e8a020', margin: 0, lineHeight: 1 }}>10+</p>
              <p style={{ fontSize: 12, color: '#a0c4e8', margin: '4px 0 0' }}>Tahun Melayani</p>
            </div>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6baa', marginBottom: 16 }}>Siapa Kami</p>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: '#0f3460', lineHeight: 1.2, marginBottom: 20 }}>
              Lebih dari Sekadar Jasa Perjalanan
            </h2>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, marginBottom: 16 }}>
              PT. Rizza Jaya Abadi berdiri atas keyakinan bahwa setiap perjalanan adalah pengalaman yang membentuk kenangan. Sejak berdiri, kami telah melayani ribuan pelanggan dengan dedikasi penuh, mulai dari wisata keluarga, rombongan perusahaan, hingga perjalanan ibadah.
            </p>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, marginBottom: 36 }}>
              Kami tidak hanya menyediakan transportasi. Kami merancang pengalaman perjalanan yang terencana, nyaman, dan berkesan, dengan standar pelayanan yang selalu kami jaga.
            </p>
            <Link href="/profil-kami" style={{
              background: '#0f3460', color: '#ffffff',
              padding: '13px 28px', borderRadius: 10,
              fontWeight: 500, fontSize: 14, textDecoration: 'none', display: 'inline-block',
            }}>Selengkapnya tentang Kami</Link>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6baa', marginBottom: 14 }}>Mengapa Memilih Kami</p>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: '#0f3460', maxWidth: 420 }}>
              Standar yang Tidak Pernah Kami Kompromikan
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 40 }}>
            {keunggulan.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 20 }}>
                <div style={{
                  width: 40, height: 40, flexShrink: 0,
                  background: '#eef4fb', borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#0f3460' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1e293b', marginBottom: 8 }}>{item.judul}</h3>
                  <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, margin: 0 }}>{item.deskripsi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{
        padding: '100px 80px',
        background: 'linear-gradient(135deg, #0f3460 0%, #1a5080 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', top: -60, right: -60,
          width: 400, height: 400, borderRadius: '50%',
          background: 'rgba(232,160,32,0.06)',
        }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e8a020', marginBottom: 16 }}>
            Mulai Perjalanan Anda
          </p>
          <h2 style={{ fontSize: 40, fontWeight: 700, color: '#ffffff', marginBottom: 18, lineHeight: 1.2 }}>
            Rencanakan Perjalanan Impian Anda<br />Bersama Kami
          </h2>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.7)', maxWidth: 480, margin: '0 auto 40px', lineHeight: 1.7 }}>
            Konsultasikan kebutuhan perjalanan Anda secara gratis. Tim kami siap membantu merancang itinerary terbaik sesuai anggaran dan keinginan Anda.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/hubungi-kami" style={{
              background: '#e8a020', color: '#1a1a1a',
              padding: '14px 36px', borderRadius: 10,
              fontWeight: 600, fontSize: 15, textDecoration: 'none',
            }}>Konsultasi Gratis</Link>
            <Link href="/layanan-kami" style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1.5px solid rgba(255,255,255,0.3)',
              color: '#ffffff', padding: '14px 36px', borderRadius: 10,
              fontWeight: 500, fontSize: 15, textDecoration: 'none',
            }}>Lihat Paket</Link>
          </div>
        </div>
      </section>

    </div>
  );
}