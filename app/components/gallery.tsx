"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"
import { Calendar, MapPin } from "lucide-react"
import { experiences } from "@/data/site-data"

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" className="relative py-20 bg-zinc-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.15 }}
            >
              <div className="bg-black border border-gray-800 rounded-lg p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">{exp.title}</h3>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {exp.dateRange}
                  </div>
                </div>

                <div className="flex items-center text-gray-400 mb-6">
                  <MapPin className="w-4 h-4 mr-2" />
                  {exp.company}
                </div>

                <ul className="space-y-3 text-gray-300">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
