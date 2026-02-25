import { motion } from "framer-motion";
import ageImg from "../assets/photos/age.png";
import letterImg from "../assets/photos/letter.png";
import bmiImg from "../assets/photos/bmi.png";
import cardvalidImg from "../assets/photos/cardvalid.png";

const products = [
  {
    name: "Age Calculator",
    description:
      "A real-time age calculator that updates every second from a user’s entered date of birth. The interface allows input of DOB and instantly displays years, months, days, hours, minutes, and seconds, along with a countdown to the next birthday. Built using HTML, CSS, and JavaScript, it provides a responsive and engaging way to calculate and visualize age details.",
    image: ageImg,
    liveDemo: "https://meiagecalculator.netlify.app/",
    github: "https://github.com/MEISINCE-2006/agecalculator.git"
  },
  {
    name: "Letter & Word Counter",
    description:
      "A simple web application designed with HTML, CSS, and JavaScript that takes user input from a text area and quickly counts words, letters, and spaces. The tool also highlights live statistics, such as reading time, and allows users to copy or clear results with a single click. It is useful for students, writers, and professionals who need fast and reliable text evaluation.",
    image: letterImg,
    liveDemo: "https://letterwordcounter.netlify.app/",
    github: "https://github.com/MEISINCE-2006/letter_and_word_Counter.git"
  },
  {
    name: "BMI Calculator",
    description:
      "A lightweight and interactive tool created using HTML, CSS, and JavaScript that allows users to enter their height and weight to calculate Body Mass Index. The app instantly evaluates results, informing whether the user is underweight, normal, overweight, or obese. Designed with a simple interface, it delivers quick, reliable, and accurate health insights in a clear, user-friendly format.",
    image: bmiImg,
    liveDemo: "https://meibmicalculator.netlify.app/",
    github: "https://github.com/MEISINCE-2006/bmicalculator.git"
  },
  {
    name: "Card Validator",
    description:
      "A robust tool for validating credit card numbers using the Luhn algorithm. Users can enter card details to verify validity, identify the card type (Visa, MasterCard, etc.), and ensure secure transactions. Built with HTML, CSS, and JavaScript, it provides instant feedback and helps prevent errors in payment processing.",
    image: cardvalidImg,
    liveDemo: "https://cardvalid.netlify.app/",
    github: "https://github.com/MEISINCE-2006/cardvalidation.git"
  },

];

export default function Products() {
  return (
    <section id="products" className="page py-24">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="title">Featured Projects</h2>
        <p className="text-slate-400">Some of my best work</p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {products.map((p, index) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="card flex flex-col group"
          >
            <div className="overflow-hidden rounded-xl mb-6 border border-white/5">
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4 font-heading group-hover:text-primary transition-colors">
              {p.name}
            </h3>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">
              {p.description}
            </p>

            <div className="flex gap-4 mt-auto">
              <a href={p.liveDemo} target="_blank" rel="noreferrer" className="flex-1">
                <button className="w-full py-2.5 rounded-lg bg-primary/20 text-primary border border-primary/20 font-semibold hover:bg-primary hover:text-white transition-all duration-300">
                  Live Demo
                </button>
              </a>

              <a href={p.github} target="_blank" rel="noreferrer" className="flex-1">
                <button className="w-full py-2.5 rounded-lg bg-white/5 text-slate-300 border border-white/10 font-semibold hover:bg-white/10 hover:text-white transition-all duration-300">
                  GitHub
                </button>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
