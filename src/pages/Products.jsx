import ageImg from "../assets/photos/age.png";
import letterImg from "../assets/photos/letter.png";
import bmiImg from "../assets/photos/bmi.png";

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
  }
];

export default function Products() {
  return (
    <section id="products" className="page pt-24">
      <h2 className="text-center text-4xl font-bold mb-14 text-white">
        Products
      </h2>

      <div className="grid md:grid-cols-3 gap-12">
        {products.map((p) => (
          <div
            key={p.name}
            className="
              bg-gradient-to-br from-[#0a0f1c] via-[#0f1b2e] to-[#060b16]
              rounded-3xl p-8 shadow-[0_0_60px_rgba(0,140,255,0.15)]
              flex flex-col text-white
            "
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-contain mb-6"
            />

            <h3 className="text-2xl font-semibold mb-4 text-center">
              {p.name}
            </h3>

            <p className="text-base leading-relaxed text-gray-200 text-justify mb-6">
              {p.description}
            </p>

            <div className="flex gap-6 justify-center">
              <a href={p.liveDemo} target="_blank" rel="noreferrer">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition">
                  Live Demo
                </button>
              </a>

              <a href={p.github} target="_blank" rel="noreferrer">
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 font-semibold hover:scale-105 transition">
                  GitHub
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
