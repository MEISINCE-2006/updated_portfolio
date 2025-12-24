import { useState } from "react";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Products", path: "#products" },
  { name: "Certificates", path: "#certificates" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 relative">
            
            {/* Logo */}
            <img
              src="/photos/02.png"
              alt="Logo"
              className="h-8 w-auto filter invert"
            />

            {/* Desktop Menu - CENTERED */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  className="font-medium  text-white  text-xl transition hover:text-purple-400"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white hover:text-purple-400 transition"
              aria-label="Open menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

          </div>
        </div>
      </nav>

      {/* FULLSCREEN MOBILE MENU */}
      <div
        className={`fixed inset-0 z-40 bg-black flex items-center justify-center transition-all duration-500
        ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-6 right-6 text-white hover:text-purple-400"
          aria-label="Close menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Mobile Menu Items */}
        <div className="flex flex-col items-center gap-8">
          {links.map((link, index) => (
            <a
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold text-white tracking-wide transition transform hover:scale-110 hover:text-purple-400"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
