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
        {/* Critical Asset Preloading for Instant Door & Mandapam Display */}
        <link rel="preload" as="image" href="/images/temple_entrance_full.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/temple_door_left.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/temple_door_right.jpg" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hero_mandap.jpg" />
        <link rel="preload" as="image" href="/images/couple_full.png" />
        <link rel="preload" as="image" href="/images/cartoon_groom_clean.png" />
        <link rel="preload" as="image" href="/images/cartoon_bride_clean.png" />
      </head>
      <body>{children}</body>
    </html>
  );
}
