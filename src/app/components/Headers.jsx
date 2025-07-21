import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      {/* Top Black Bar */}
      <div className="bg-black text-white text-sm px-6 py-2 flex justify-between items-center">
        <div>
          <span className="mr-4">(001) 88451234</span>
          <span>88455438</span>
        </div>
        <div className="flex gap-3">
          <a href="#" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="Twitter">
            <FaTwitter />
          </a>
          <a href="#" aria-label="Pinterest">
            <FaPinterestP />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white px-6 py-4 flex justify-between items-center shadow-md">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/op-logo.jpg"
            alt="Logo"
            className="h-14 text-[24px] w-[80px]"
          />
        </div>

        {/* Navigation */}
        <nav className="space-x-6 text-sm text-gray-700 font-medium">
          <a href="#" className="hover:text-green-500">
            HOME
          </a>
          <a href="/about" className="hover:text-green-500">
            ABOUT
          </a>
          <a href="#" className="hover:text-green-500">
            SERVICES
          </a>
          <a href="#" className="hover:text-green-500">
            SHOWCASE
          </a>
          <a href="#" className="hover:text-green-500">
            BLOG
          </a>
          <a href="#" className="hover:text-green-500">
            CONTACT
          </a>
        </nav>

        {/* Purchase Button */}
        <button className="bg-gradient-to-r from-green-400 to-teal-400 text-white px-5 py-2 rounded-full text-sm shadow hover:opacity-90">
          PURCHASE
        </button>
      </div>
    </header>
  );
}
