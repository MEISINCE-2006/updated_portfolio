import React from "react";
import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "Paper presentation",
    date: "October 2023",
    image: "/certificates/1.jpg",
    description: "Presented a paper in the Sree ramakrishna engineering college",
  },
  {
    id: 2,
    title: "CodeWar",
    date: "December 2023",
    image: "/certificates/2.jpg",
    description: "Participated a coding competition for the freshers organized by Park engineering college",
  },
  {
    id: 3,
    title: "CPS-BMA",
    date: "March 2024",
    image: "/certificates/3.jpg",
    description: "Attended a two days workshop in the topic of the Security informatics and privacy research Challanges in the deployment of cyber physical systems in Bio-Medical applications in the KPR College",
  },
  {
    id: 4,
    title: "Flutter App development",
    date: "August 2024",
    image: "/certificates/4.jpg",
    description: "Learned flutter in the app development in a workshop organized by the Kongu engineering college",
  },
  {
    id: 5,
    title: "Code a Thon",
    date: "October 2024",
    image: "/certificates/5.jpg",
    description: "participated in the coding competition in the Sree ramakrishna college",
  },
  {
    id: 6,
    title: "Paper presentation",
    date: "October 2024",
    image: "/certificates/6.jpg",
    description: "Presented a paper in the topic of AI in Constructions in the KPR engineering college",
  },
  {
    id: 7,
    title: "Cyber security",
    date: "November 2024",
    image: "/certificates/7.jpg",
    description: "Learned some basics in the cyber security in the workshop organized by the Bannari Amman institute of technology",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="page flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h2 className="title">My Certification Journey</h2>
        <p className="text-slate-400 mb-16 text-center max-w-2xl text-lg">
          A timeline of my professional growth and technical achievements.
        </p>
      </motion.div>

      <div className="relative w-full max-w-5xl">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-primary opacity-30"></div>

        <div className="flex flex-col gap-12 md:gap-24 relative">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center w-full group ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
            >
              {/* Content Card */}
              <div className="w-full md:w-[calc(50%-40px)] pl-12 md:pl-0">
                <div
                  className={`card relative hover:-translate-y-2 transition-transform duration-300 ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                >
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-indigo-300 mb-3 border border-primary/30">
                    {cert.date}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                    {cert.title}
                  </h3>
                  <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Image in card */}
                  <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10 group-hover:border-primary/50 transition-colors">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Center Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-secondary shadow-[0_0_15px_rgba(236,72,153,0.8)] z-10 -translate-x-1.5 md:-translate-x-1/2 ring-4 ring-slate-950 mt-1 md:mt-0"
              ></motion.div>

              {/* Empty Space for alternate side */}
              <div className="hidden md:block w-[calc(50%-40px)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
