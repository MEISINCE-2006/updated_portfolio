import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <section id="contact" className="page pt-24">
      <h2 className="title text-center text-4xl font-bold mb-10">
        Contact
      </h2>

      <form className="flex flex-col gap-4 w-full max-w-md mx-auto">
        <input
          className="card"
          placeholder="Name"
          type="text"
          required
          minLength={2}
          maxLength={50}
        />
        <input
          className="card"
          placeholder="Email"
          type="email"
          required
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
        />
        <textarea
          className="card"
          placeholder="Message"
          rows={4}
          required
          minLength={10}
          maxLength={500}
        />
        <button className="btn" type="submit">Send Message</button>
      </form>

      <div className="mt-8 opacity-90 text-center space-y-3 text-lg">
        <p className="flex items-center justify-center gap-3">
          <FaPhoneAlt className="text-green-400 text-xl" />
          <span>+91 93429 43337</span>
        </p>

        <p className="flex items-center justify-center gap-3">
          <MdEmail className="text-red-400 text-2xl" />
          <span>b.meiakashcse0106@gmail.com</span>
        </p>

        <p className="flex items-center justify-center gap-3">
          <FaMapMarkerAlt className="text-blue-400 text-xl" />
          <span>Tiruppur, India</span>
        </p>
      </div>
    </section>
  );
}
