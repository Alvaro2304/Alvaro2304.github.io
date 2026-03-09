"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { projects, categories } from "@/data/site-data"

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = projects.filter((project) =>
    selectedCategory === "all" ? true : project.category === selectedCategory,
  )

  return (
    <section id="projects" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm capitalize"
            >
              {category.replace("-", " ")}
            </Button>
          ))}
        </div>

        <motion.div layout className="grid gap-8 grid-cols-1 sm:grid-cols-2 auto-rows-fr">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block h-full"
                >
                  <Card className="overflow-hidden bg-zinc-900 h-full cursor-pointer hover:ring-2 hover:ring-primary transition">
                    <CardContent className="p-0">
                      <div className="group relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                          <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, index) => (
                              <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
