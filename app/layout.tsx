import './globals.css';
import { ClerkProvider } from '@clerk/nextjs/app-beta';

import Navbar from '../components/navbar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <body>
          <Navbar />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}
