import './globals.css';
import { ClerkProvider } from '@clerk/nextjs/app-beta';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/Navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <Navbar />
          <Analytics />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
