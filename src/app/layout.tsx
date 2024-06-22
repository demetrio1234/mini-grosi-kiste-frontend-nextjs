import { Metadata } from 'next'

import Header from './_components/Header/Header'
import Footer from './_components/Footer/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Mini Grosi Kiste',
    default: 'Mini Grosi Kiste', // a default is required when creating a template
  },
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
