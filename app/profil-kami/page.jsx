import Image from 'next/image';
import Link from 'next/link';
import { profil } from '@/data/profil';

const nilaiPerusahaan = [
  { judul: 'Kepercayaan', deskripsi: 'Kami membangun setiap hubungan dengan kejujuran. Apa yang kami janjikan adalah apa yang kami berikan.' },
  { judul: 'Profesionalisme', deskripsi: 'Setiap detail perjalanan kami tangani dengan standar kerja yang terstruktur dan tim yang berpengalaman.' },
  { judul: 'Kepedulian', deskripsi: 'Pelanggan bukan sekadar klien. Kami memastikan setiap orang merasa diperhatikan sepanjang perjalanan.' },
  { judul: 'Keandalan', deskripsi: 'Tepat waktu, tanggap, dan selalu siap. Kami hadir ketika Anda membutuhkan kami.' },
];

export default function ProfilKami() {
  return (
    <div>

      <section style={{ position: 'relative', height: 460, display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <Image
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80"
          alt="Profil PT. Rizza Jaya Abadi"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          priority
        />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(15,52,96,0.9) 0%, rgba(15,52,96,0.4) 60%, rgba(0,0,0,0.1) 100%)',
        }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1280, margin: '0 auto', width: '100%', padding: '0 80px 56px' }}>
          <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e8a020', marginBottom: 12 }}>
            Mengenal Kami Lebih Dekat
          </p>
          <h1 style={{ fontSize: 48, fontWeight: 700, color: '#ffffff', margin: 0, letterSpacing: '-1px' }}>
            Profil Perusahaan
          </h1>
        </div>
      </section>

      <section style={{ padding: '100px 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6baa', marginBottom: 16 }}>Tentang Kami</p>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: '#0f3460', lineHeight: 1.2, marginBottom: 24 }}>
              Dibangun di Atas Kepercayaan, Tumbuh Bersama Pelanggan
            </h2>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, marginBottom: 18 }}>{profil.deskripsi}</p>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, marginBottom: 36 }}>
              Berbasis di Surabaya, kami melayani pelanggan dari seluruh Jawa Timur dan sekitarnya. Dengan armada yang terawat dan tim yang berpengalaman, setiap perjalanan yang kami tangani dirancang untuk memberikan ketenangan pikiran bagi setiap pelanggan.
            </p>
            <Link href="/hubungi-kami" style={{
              background: '#e8a020', color: '#1a1a1a',
              padding: '13px 28px', borderRadius: 10,
              fontWeight: 600, fontSize: 14, textDecoration: 'none', display: 'inline-block',
            }}>Hubungi Kami</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', aspectRatio: '16/9' }}>
              <Image
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                alt="Armada PT. Rizza Jaya Abadi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {profil.stats.slice(0, 2).map((stat, i) => (
                <div key={i} style={{ background: '#eef4fb', borderRadius: 14, padding: '24px 20px', textAlign: 'center' }}>
                  <p style={{ fontSize: 34, fontWeight: 700, color: '#0f3460', margin: 0 }}>{stat.nilai}</p>
                  <p style={{ fontSize: 13, color: '#1a6baa', margin: '6px 0 0' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 80px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6baa', marginBottom: 14 }}>Arah & Tujuan</p>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: '#0f3460' }}>Visi & Misi Kami</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
            <div style={{ background: '#0f3460', borderRadius: 20, padding: '44px 40px' }}>
              <div style={{
                display: 'inline-block', background: 'rgba(232,160,32,0.15)',
                border: '1px solid rgba(232,160,32,0.3)', borderRadius: 8, padding: '6px 14px', marginBottom: 24,
              }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#e8a020', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Visi</span>
              </div>
              <p style={{ fontSize: 18, color: '#ffffff', lineHeight: 1.7, margin: 0 }}>{profil.visi}</p>
            </div>
            <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: 20, padding: '44px 40px' }}>
              <div style={{ display: 'inline-block', background: '#eef4fb', borderRadius: 8, padding: '6px 14px', marginBottom: 24 }}>
                <span style={{ fontSize: 12, fontWeight: 600, color: '#1a6baa', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Misi</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                {profil.misi.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{
                      width: 24, height: 24, flexShrink: 0, marginTop: 1,
                      background: '#eef4fb', borderRadius: 6,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontSize: 11, fontWeight: 700, color: '#0f3460' }}>{i + 1}</span>
                    </div>
                    <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, margin: 0 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ marginBottom: 56 }}>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6baa', marginBottom: 14 }}>Prinsip Kami</p>
            <h2 style={{ fontSize: 36, fontWeight: 700, color: '#0f3460', maxWidth: 380 }}>
              Nilai yang Memandu Setiap Langkah Kami
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {nilaiPerusahaan.map((nilai, i) => (
              <div key={i} style={{ border: '1px solid #e2e8f0', borderRadius: 16, padding: '32px 24px', background: '#ffffff', transition: 'all 0.25s ease' }}>
                <div style={{
                  width: 36, height: 36, background: '#0f3460', borderRadius: 10,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: '#e8a020' }}>{i + 1}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: '#1e293b', marginBottom: 10 }}>{nilai.judul}</h3>
                <p style={{ fontSize: 14, color: '#475569', lineHeight: 1.7, margin: 0 }}>{nilai.deskripsi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px', background: '#0f3460' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#e8a020', marginBottom: 14 }}>Dalam Angka</p>
            <h2 style={{ fontSize: 32, fontWeight: 700, color: '#ffffff' }}>Perjalanan Panjang yang Kami Banggakan</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {profil.stats.map((stat, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '32px 20px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16 }}>
                <p style={{ fontSize: 44, fontWeight: 700, color: '#e8a020', margin: 0, lineHeight: 1 }}>{stat.nilai}</p>
                <p style={{ fontSize: 14, color: '#a0c4e8', margin: '12px 0 0' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '100px 80px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
          <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', aspectRatio: '4/3' }}>
            <Image
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
              alt="Perjalanan bersama kami"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a6baa', marginBottom: 16 }}>Siap Memulai?</p>
            <h2 style={{ fontSize: 34, fontWeight: 700, color: '#0f3460', lineHeight: 1.2, marginBottom: 20 }}>
              Mari Wujudkan Perjalanan yang Anda Impikan
            </h2>
            <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, marginBottom: 36 }}>
              Ceritakan kebutuhan perjalanan Anda kepada kami. Tim kami siap menyusun rencana terbaik yang sesuai dengan jadwal dan anggaran Anda.
            </p>
            <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link href="/hubungi-kami" style={{
                background: '#e8a020', color: '#1a1a1a',
                padding: '13px 28px', borderRadius: 10,
                fontWeight: 600, fontSize: 14, textDecoration: 'none',
              }}>Hubungi Kami</Link>
              <Link href="/layanan-kami" style={{
                background: 'transparent', color: '#0f3460',
                border: '2px solid #0f3460', padding: '11px 26px', borderRadius: 10,
                fontWeight: 600, fontSize: 14, textDecoration: 'none',
              }}>Lihat Layanan</Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}