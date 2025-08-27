import Link from 'next/link';
import NavBar from '../components/Navbar';

export default function Siteheader({ children }) {
  return (
    <div className="site-header relative bg-white py-8 px-4 sm:px-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="site-branding">
          <Link href="/">
            <span className="text-5xl font-bold text-left font-serif">
              Uniland
            </span>
          </Link>
        </div>
        <NavBar>
          {/* Navigation links */}
          <div className="flex items-center space-x-8">
            <a
              href="/en-US"
              className="font-serif text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-bold underline transition-colors duration-200"
            >
              Home
            </a>
            <a
              href="/en-US/blog"
              className="font-serif text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-bold underline transition-colors duration-200"
            >
              Blog
            </a>
            <a
              href="/en-US/shop"
              className="font-serif text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-bold underline transition-colors duration-200"
            >
              Shop
            </a>
          </div>
        </NavBar>
      </div>
    </div>
  );
}
