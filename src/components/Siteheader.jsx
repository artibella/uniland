import Link from "next/link"
import NavBar from "./Navbar"

export default function Siteheader({ children }) {

  return (
    <div className="site-header relative bg-white py-8 px-4 sm:px-8">
      <div className="container mx-auto flex">
        <div className="site-branding">
          <Link href="/">
            <a><span className="text-5xl font-bold text-left font-serif">Uniland</span></a>
          </Link>
        </div>
        <NavBar />
      </div>
    </div>
  )
}