import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/navBar/Nav'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'UtilityXpress',
  description: 'Your shortcut to seamless living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Nav /> */}
        <div style={{minHeight: "80vh"}}>
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
