import "./globals.css";
import "@/public/sass/style.scss";

import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'My App',
  description: '...',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
       <html lang="en">
        <body>

          <main className="bg-white">{children}</main>
        </body>
      </html>
   );
}
