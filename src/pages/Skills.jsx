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
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";

const skills = [
  { name: "Figma", icon: <FaFigma /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <FaJs /> },
  { name: "React", icon: <FaReact /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Express", icon: <SiExpress /> },
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "Git", icon: <FaGitAlt /> },
];

export default function Skills() {
  return (
    <section id="skills" className="page pt-24">
      <h2 className="title text-center mb-14">Skills</h2>

      {/* Increased GAP */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-14 place-items-center">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group flex flex-col items-center justify-center cursor-pointer"
          >
            <div className="text-6xl transition-transform duration-300 group-hover:scale-125 group-hover:text-sky-400">
              {skill.icon}
            </div>

            {/* Increased space below icon */}
            <span className="mt-5 text-base opacity-0 transform translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
