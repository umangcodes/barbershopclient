import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/navigation/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Best barber shop',
  description: 'Best Barber in GTA | Hair Care | Men Women Hair cut',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-black/95"}>
        <Header />
        {children}
      </body>
    </html>
  )
}
