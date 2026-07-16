import { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaDownload, FaEye } from "react-icons/fa";

export default function Home() {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="home" className="page flex flex-col items-center justify-center pt-32 min-h-screen">

      <div className="relative mb-8">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-40 animate-pulse"></div>
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          src="/photos/01.jpg"
          alt="Profile Photo"
          className="relative w-40 h-40 md:w-52 md:h-52 rounded-full shadow-2xl object-cover border-4 border-white/10"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <span className="text-secondary font-semibold tracking-wider uppercase mb-2 block">Hello, I'm</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-300 to-secondary drop-shadow-sm">
          MEIAKASH B
        </h1>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-2xl text-slate-400 mb-10 text-center text-lg md:text-xl leading-relaxed"
      >
        A Final Year student who aspires to become a <span className="text-primary font-semibold">Java Developer</span> with an interest in web development and creative software solutions. Strong foundation in Java, OOP concepts, web development. To develop scalable applications and to be a part of meaningful development projects.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-12 flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <button
          onClick={() => setShowResume(true)}
          className="btn flex items-center gap-3 text-lg group cursor-pointer"
        >
          <FaEye className="group-hover:scale-110 transition-transform" /> View Resume
        </button>
        <a
          href="/MEIAKASH.pdf"
          download="MEIAKASH.pdf"
          className="flex items-center gap-3 text-lg px-6 py-2.5 rounded-full border border-white/20 hover:bg-white/10 text-white font-heading font-semibold tracking-wide transition-all duration-300 group"
        >
          <FaDownload className="group-hover:animate-bounce" /> Download Resume
        </a>
      </motion.div>

      {/* SOCIAL ICONS */}
      <div className="flex gap-6 flex-wrap justify-center">
        {[
          { icon: FaWhatsapp, href: "https://wa.me/919342943337", color: "hover:text-green-400" },
          { icon: FaInstagram, href: "https://www.instagram.com/mei_akash_2006?igsh=bXZ4ZGk1MzA5bWlt", color: "hover:text-pink-400" },
          { icon: FaLinkedin, href: "https://www.linkedin.com/in/mei-akash-b-4b7b7a294/", color: "hover:text-blue-400" },
          { icon: FaGithub, href: "https://github.com/MEISINCE-2006", color: "hover:text-gray-300" }
        ].map((social, index) => (
          <motion.a
            key={index}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            className={`p-4 bg-white/5 rounded-full backdrop-blur-md border border-white/10 text-2xl transition-colors duration-300 ${social.color}`}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon />
          </motion.a>
        ))}
      </div>

      {/* RESUME IN-PORTFOLIO MODAL */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 animate-fade-in">
          <div className="relative w-full max-w-4xl h-[85vh] bg-slate-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl">
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-4 border-b border-white/10 bg-slate-950">
              <h3 className="text-xl font-semibold text-white font-heading">Resume Viewer</h3>
              <button
                onClick={() => setShowResume(false)}
                className="text-slate-400 hover:text-white transition-colors px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 font-sans text-sm font-semibold border border-white/5"
              >
                ✕ Close
              </button>
            </div>
            {/* PDF View */}
            <div className="flex-1 bg-slate-800">
              <iframe
                src="/MEIAKASH.pdf"
                className="w-full h-full border-none"
                title="Resume"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
