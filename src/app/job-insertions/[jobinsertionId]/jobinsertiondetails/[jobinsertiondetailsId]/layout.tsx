import { Metadata } from "next";
import Header from '../../../../_components/Header/JobInsertionDetailHeader/JobInsertionDetailHeader'
import Footer from '../../../../_components/Footer/JobInsertionDetailFooter/JobInsertionDetailFooter'

const metadata: Metadata = {
  title: "Job Insertions",
  description: "Job's insertions",
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <>
      <Header></Header>
      {children}
      <Footer></Footer>
    </>
  )
}
