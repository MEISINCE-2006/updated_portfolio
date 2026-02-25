import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiVite } from "react-icons/si";
import { FaSun, FaMoon } from "react-icons/fa";
import { useEffect } from "react";

const skills = [
  { name: "Figma", icon: <FaFigma />, color: "text-purple-400" },
  { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500" },
  { name: "JavaScript", icon: <FaJs />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-400" },
  { name: "Python", icon: <FaPython />, color: "text-yellow-600" },
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-orange-600" },
  { name: "Vite", icon: <SiVite />, color: "text-purple-500" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

export default function Skills() {
  return (
    <section id="skills" className="page flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="title">Technical Skills</h2>
        <p className="text-slate-400">technologies I work with</p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 w-full max-w-5xl px-4"
      >
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            className="card group flex flex-col items-center justify-center p-8 hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden"
          >
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 bg-gradient-to-br from-white/5 to-transparent`}></div>

            <div className={`text-6xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${skill.color}`}>
              {skill.icon}
            </div>

            <span className="text-lg font-medium text-slate-300 group-hover:text-white transition-colors">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
