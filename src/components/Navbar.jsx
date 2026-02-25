import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const links = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Products", path: "#products" },
  { name: "Certificates", path: "#certificates" },
  { name: "Contact", path: "#contact" },
];

const menuVariants = {
  hidden: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 30 },
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);


  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/50 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 relative">

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/photos/02.png"
                alt="Logo"
                className="h-10 w-auto filter invert opacity-90 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => window.location.href = "#home"}
              />
            </motion.div>

            {/* Desktop Menu - CENTERED */}
            <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="font-medium font-heading text-slate-300 text-lg transition-all duration-300 hover:text-white hover:shadow-[0_2px_10px_rgba(99,102,241,0.5)] active:scale-95 px-3 py-1 rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            {/* Mobile Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white text-2xl hover:text-primary transition p-2 relative z-50"
              aria-label="Toggle menu"
            >

              {/* Theme Toggle */}

              {isOpen ? <FaTimes /> : <FaBars />}
            </motion.button>

          </div>
        </div>
      </nav >

      {/* FULLSCREEN MOBILE MENU */}
      < AnimatePresence >
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-slate-950/98 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <div className="flex flex-col items-center gap-8 w-full max-w-sm px-6 text-center">
              {links.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  variants={linkVariants}
                  onClick={() => setIsOpen(false)}
                  className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400 hover:from-primary hover:to-secondary transition-all duration-300 w-full py-2 border-b border-white/5 hover:border-white/20"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>

            <motion.div
              variants={linkVariants}
              className="mt-12 text-slate-500 text-sm"
            >
              © 2024 Meiakash B
            </motion.div>
          </motion.div>
        )
        }
      </AnimatePresence >
    </>
  );
}
