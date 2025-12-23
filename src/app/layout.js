import { Vidaloka, Open_Sans } from 'next/font/google'
import "./globals.css";

const vidaloka = Vidaloka({
  weight: ["400"],
  display: 'swap',
  subsets: ["latin"],
  variable: '--font-vidaloka'
})

const openSans = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
  subsets: ["latin"],
  variable: '--font-open-sans'
})

export const metadata = {
  title: "Franklin Publishers",
  description: "Professional publishing services for authors worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${vidaloka.variable} ${openSans.variable}`}>
      <body
        className={`${openSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
