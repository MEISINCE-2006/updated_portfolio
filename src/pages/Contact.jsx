import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_252u6ws",
        "template_hagvz22",
        formRef.current,
        "-2Ccle-4p-6Mf1kuK"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          formRef.current.reset();
        },
        () => {
          alert("Failed to send message. Try again later.");
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
        className="flex flex-col gap-4 w-full max-w-md mx-auto"
      >
        <input
          className="card"
          name="name"
          placeholder="Name"
          type="text"
          required
        />

        <input
          className="card"
          name="email"
          placeholder="Email"
          type="email"
          required
        />

        <textarea
          className="card"
          name="message"
          placeholder="Message"
          rows={4}
          required
        />

        <button className="btn" type="submit">
          Send Message
        </button>
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
