import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_252u6ws",
        "template_hagvz22",
        formRef.current,
        "-2Ccle-4p-6Mf1kuK"
      )
      .then(
        () => {
          setStatus("success");
          formRef.current.reset();
          setTimeout(() => setStatus("idle"), 4000);
        },
        () => {
          setStatus("error");
          setTimeout(() => setStatus("idle"), 4000);
        }
      );
  };

  return (
    <section id="contact" className="page pt-24">
      <h2 className="title text-center text-4xl font-bold mb-10">
        Contact
      </h2>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="flex flex-col gap-4 w-full max-w-md mx-auto relative"
      >
        <input className="card" name="name" placeholder="Name" required />
        <input className="card" name="email" placeholder="Email" required />
        <textarea className="card" name="message" placeholder="Message" rows={4} required />

        <motion.button
          className="btn"
          type="submit"
          disabled={status === "sending"}
          whileTap={{ scale: 0.95 }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>

        {/* Status Message */}
        <AnimatePresence>
          {status === "success" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm shadow-lg"
            >
              ✅ Message sent successfully!
            </motion.div>
          )}

          {status === "error" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="absolute -bottom-14 left-1/2 -translate-x-1/2 bg-red-600 text-white px-4 py-2 rounded-lg text-sm shadow-lg"
            >
              ❌ Failed to send message. Try again.
            </motion.div>
          )}
        </AnimatePresence>
      </form>

      <div className="mt-10 opacity-90 text-center space-y-3 text-lg">
        <a href="tel:+919342943337" className="flex items-center justify-center gap-3 cursor-pointer">
          <FaPhoneAlt className="text-green-400 text-xl" />
          <span>+91 93429 43337</span>
        </a>

        <a href="mailto:b.meiakashcse0106@gmail.com" className="flex items-center justify-center gap-3 cursor-pointer">
          <MdEmail className="text-red-400 text-2xl" />
          <span>b.meiakashcse0106@gmail.com</span>
        </a>

        <a href="https://maps.app.goo.gl/dH4teGoJKrMHLndP6" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 cursor-pointer">
          <FaMapMarkerAlt className="text-blue-400 text-xl" />
          <span>Tiruppur, India</span>
        </a>
      </div>
    </section>
  );
}
