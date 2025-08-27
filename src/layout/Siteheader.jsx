import Link from 'next/link';
import NavBar from '../components/Navbar';

export default function Siteheader({ children }) {
  return (
    <div className="site-header relative bg-white py-8 px-4 sm:px-8">
      <div className="container mx-auto flex">
        <div className="site-branding">
          <Link href="/">
            <span className="text-5xl font-bold text-left font-serif">
              Uniland
            </span>
          </Link>
        </div>
        <NavBar>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Navigation links */}
              <div className="flex items-baseline space-x-8">
                <a
                  href="/en-US"
                  className="font-serif text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors duration-200"
                >
                  Home
                </a>
                <a
                  href="/en-US/blog"
                  className="font-serif text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors duration-200"
                >
                  Blog
                </a>
                <a
                  href="/en-US/shop"
                  className="font-serif text-gray-700 hover:text-gray-900 px-3 py-2 text-lg font-medium transition-colors duration-200"
                >
                  Shop
                </a>
              </div>
            </div>
          </div>
        </NavBar>
      </div>
    </div>
  );
}
