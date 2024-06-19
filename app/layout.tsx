import "./globals.css";
import "@/public/sass/style.scss";

import type { Metadata } from 'next'



export const metadata: Metadata = {
  title: 'Glory Pest Control',
  description: 'Professional pest control services for a pest-free environment Atlanta, Fulton, Clayton, Decatur Counties...',
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
