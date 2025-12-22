import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaDownload } from "react-icons/fa";

export default function Home() {
  return (
    <section id="home" className="page pt-24 text-center">
      
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
        src="/01.jpg"
        alt="Profile Photo"
        className="w-32 h-32 rounded-full mb-6 shadow-2xl object-cover"
      />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold mb-4"
      >
        MEIAKASH B
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="max-w-xl opacity-80 mb-6 mx-auto"
      >
        Pre-final-year student aspiring to become a MERN Stack Engineer with a focus on
        Full Stack Web Development and Innovative Solution Development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mb-8 flex justify-center"
      >
        <a
          href="/MEIAKASH_CV.pdf"
          download="MEIAKASH.pdf"
          className="btn flex items-center gap-2"
        >
          <FaDownload /> Download CV
        </a>
      </motion.div>

      {/* SOCIAL ICONS */}
      <div className="flex gap-4 flex-wrap justify-center">
        
        <motion.a
          whileHover={{ scale: 1.2 }}
          className="btn text-2xl hover:text-green-400"
          href="https://wa.me/919342943337"
          target="_blank"
          rel="noopener noreferrer"
          title="WhatsApp"
        >
          <FaWhatsapp />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          className="btn text-2xl hover:text-pink-400"
          href="https://www.instagram.com/mei_akash_2006?igsh=bXZ4ZGk1MzA5bWlt"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          className="btn text-2xl hover:text-blue-400"
          href="https://www.linkedin.com/in/mei-akash-b-4b7b7a294/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin />
        </motion.a>

        <motion.a
          whileHover={{ scale: 1.2 }}
          className="btn text-2xl hover:text-gray-300"
          href="https://github.com/MEISINCE-2006"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <FaGithub />
        </motion.a>

      </div>
    </section>
  );
}
