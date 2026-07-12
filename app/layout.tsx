import Link from "next/link";
import Image from "next/image";
import { Fraunces, Public_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display-next",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body-next",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-next",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={cn(
        fraunces.variable,
        publicSans.variable,
        jetbrainsMono.variable
      )}
    >
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>
          <div className="wrap footer-grid">
            <div>
              <div className="brand" style={{ marginBottom: "12px" }}>
                <Image src="/wonogiri.webp" alt="Wonogiri" width={40} height={80} className="brand-mark" />
                <span className="brand-text text-[color:var(--card)]">Desa Sukoharjo</span>
              </div>
              <p style={{ color: "#b9bda3", fontSize: "14px", maxWidth: "320px" }}>
                Website resmi Desa Sukoharjo, Kecamatan Tirtomoyo, Kabupaten Wonogiri — media informasi desa dan etalase digital UMKM warga.
              </p>
            </div>
            <div>
              <h4>Navigasi</h4>
              <ul>
                <li>
                  <Link href="/profil">Profil Desa</Link>
                </li>
                <li>
                  <Link href="/umkm">Database UMKM</Link>
                </li>
                <li>
                  <Link href="/galeri">Galeri</Link>
                </li>
              </ul>
            </div>
            <div>
              <h4>Kantor Desa</h4>
              <ul>
                <li>Jl. Raya Tirtomoyo–Baturetno KM 5</li>
                <li>Kec. Tirtomoyo, Kab. Wonogiri</li>
                <li>(0273) 741-xxx</li>
              </ul>
            </div>
          </div>
          <div className="wrap foot-bottom">
            <span>© 2026 Pemerintah Desa Sukoharjo. Prototipe tampilan.</span>
            <span>Dibangun untuk mendukung digitalisasi desa</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
