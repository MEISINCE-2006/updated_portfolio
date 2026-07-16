import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="page flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="title">About Me</h2>

        <div className="card backdrop-blur-3xl bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl relative overflow-hidden group">

          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-colors duration-500"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl group-hover:bg-secondary/30 transition-colors duration-500"></div>

          <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-justify md:text-center relative z-10">
            I am a passionate programmer currently pursuing my studies in{" "}
            <span className="text-white font-semibold">Computer Science and Engineering</span>.
            With a strong interest in technology and problem-solving, I enjoy exploring various areas of
            software development, particularly in building <span className="text-primary font-medium">dynamic and interactive
              web applications</span>. I am always eager to take on creative projects that
            challenge my skills and allow me to learn new technologies. Whether it’s
            designing intuitive user interfaces or developing efficient back-end
            systems, I find great satisfaction in <span className="text-secondary font-medium">bringing ideas to life through
              code</span>. My goal is to continuously grow as a developer and contribute to
            meaningful, innovative solutions in the field of technology.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
