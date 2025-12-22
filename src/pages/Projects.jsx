const projects = [
  {
    name: "Age Calculator",
    description:
      "A real-time age calculator that updates every second from a user’s entered date of birth. The interface allows input of DOB and instantly displays years, months, days, hours, minutes, and seconds, along with a countdown to the next birthday. Built using HTML, CSS, and JavaScript, it provides a responsive and engaging way to calculate and visualize age details.",
    liveDemo: "https://meiagecalculator.netlify.app/",
    github: "https://github.com/MEISINCE-2006/agecalculator.git"
  },
  {
    name: "Letter & Word Counter",
    description:
      "A simple web application designed with HTML, CSS, and JavaScript that takes user input from a text area and quickly counts words, letters, and spaces. The tool also highlights live statistics, such as reading time, and allows users to copy or clear results with a single click. It is useful for students, writers, and professionals who need fast and reliable text evaluation.",
    liveDemo: "https://letterwordcounter.netlify.app/",
    github: "https://github.com/MEISINCE-2006/letter_and_word_Counter.git"
  },
  {
    name: "BMI Calculator",
    description:
      "A lightweight and interactive tool created using HTML, CSS, and JavaScript that allows users to enter their height and weight to calculate Body Mass Index. The app instantly evaluates results, informing whether the user is underweight, normal, overweight, or obese. Designed with a simple interface, it delivers quick, reliable, and accurate health insights in a clear, user-friendly format.",
    liveDemo: "https://meibmicalculator.netlify.app/",
    github: "https://github.com/MEISINCE-2006/bmicalculator.git"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="page pt-24">
      <h2 className="title text-center text-4xl font-bold mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((p) => (
          <div key={p.name} className="card">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              {p.name}
            </h3>

            <p className="mb-6 text-lg text-justify leading-relaxed">
              {p.description}
            </p>

            <div className="flex gap-4 justify-center">
              <a
                href={p.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">Live Demo</button>
              </a>

              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn">GitHub</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
