import './globals.css';

export const metadata = {
  title: 'Sunil Kumar & Santhiya – Wedding Invitation',
  description: 'Wedding Invitation of Sunil Kumar & Santhiya at Guruvayur Sri Krishna Temple, Keralam',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        {/* High-Performance Font Preconnect */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Critical Asset Preloading for Instant Arch Doors & Mandapam Display */}
        <link rel="preload" as="image" href="/images/arch_door_poster.webp" fetchPriority="high" type="image/webp" />
        <link rel="preload" as="image" href="/images/hero_mandap.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/couple_full.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/cartoon_groom_clean.webp" type="image/webp" />
        <link rel="preload" as="image" href="/images/cartoon_bride_clean.webp" type="image/webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
