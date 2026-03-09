"use client"

import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { socialLinks } from "@/data/site-data"

export default function Contact() {
  return (
    <>
      {/* About Me Section */}
      <section id="about" className="relative overflow-hidden bg-black py-20">
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="mb-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl">About me</h2>

            {/* Profile Photo */}
            <div className="mb-8 flex justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-600">
                <img
                  src="/ap_brazil.jpeg"
                  alt="Alvaro Palero"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-4 text-gray-400 leading-relaxed text-center max-w-3xl mx-auto">
              <p>
                My full name is Álvaro Palero Ramírez. I'm Peruvian, but I also lived in Florence, Italy, for seven
                years during my childhood. It was there that I developed a deep passion for art and history -
                experiences that shaped me into a perceptive and inquisitive person, always eager to explore and
                understand the world around me.
              </p>
              <p>
                Here in Peru, I studied Mechatronics Engineering and lived many unforgettable experiences as a student.
                During the final years of my degree, I was finally able to dive into robotics and fulfill a long-held
                passion.
              </p>
              <p>
                Every day, I'm working toward building a future in the robotics field, hoping to connect with people
                who, like me, dream big and are driven to make an impact.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-hidden bg-zinc-900 py-20">
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="mb-8 text-3xl font-bold tracking-tighter sm:text-4xl">Contact</h2>

            <div className="flex items-center justify-center gap-4 text-xl text-gray-300">
              <Mail className="w-6 h-6" />
              <a
                href={`mailto:${socialLinks.email}`}
                className="hover:text-white transition-colors underline decoration-gray-600 hover:decoration-white"
              >
                {socialLinks.email}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
