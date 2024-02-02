import { Inter, Roboto, Poppins } from 'next/font/google'
import './globals.css'
import Nav from './components/navBar/Nav'
import Footer from './components/footer/Footer'

// const inter = Inter({ subsets: ['latin'] })
// const roboto = Roboto({
//   weight: '400',
//   subsets: ['latin'],
// })
const poppins = Poppins({
  weight: ["100","200", "300", '400', "500", "600", "700", "800","900"],
  style: ["italic", "normal"],
  subsets: ['latin'],
})

export const metadata = {
  title: 'UtilityXpress',
  description: 'Your shortcut to seamless living',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {/* <Nav /> */}
        <div style={{minHeight: "80vh"}}>
          {children}
        </div>
        {/* <Footer /> */}
      </body>
    </html>
  )
}
