"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import { useInView } from "framer-motion"

export default function Tools() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const toolCategories = [
    {
      title: "Programming",
      tools: [
        { name: "C++", icon: "/c.svg?height=60&width=60" },
        { name: "Python", icon: "/python-5.svg?height=60&width=60" },
        { name: "Java", icon: "/jee-3.svg?height=60&width=60" },
        { name: "C", icon: "/c-1.svg?height=60&width=60" },
      ],
    },
    {
      title: "Robotics",
      tools: [
        { name: "ROS 2", icon: "/ros_logo.svg?height=60&width=60" },
        { name: "Nav2", icon: "/nav2_1.png?height=60&width=60" },
        { name: "Gazebo", icon: "/Gazebo.svg?height=60&width=60" },
      ],
    },
    {
      title: "Others",
      tools: [
        { name: "HTML", icon: "/html-1.svg?height=60&width=60" },
        { name: "CSS", icon: "/css-3.svg?height=60&width=60" },
        { name: "SQL", icon: "/sql-database-generic-svgrepo-com.svg?height=60&width=60" },
        { name: "Git", icon: "/git.svg?height=60&width=60" },
        { name: "OpenCV", icon: "/opencv-svgrepo-com.svg?height=60&width=60" },
        { name: "Keras", icon: "/Keras.svg?height=60&width=60" },
        { name: "Pytorch", icon: "/pytorch.svg?height=60&width=60" },
        { name: "Raspberry Pi", icon: "/raspberry-pi-svgrepo-com.svg?height=60&width=60" },
        { name: "NVIDIA Jetson", icon: "/nvidia-logo-svgrepo-com.svg?height=60&width=60" },
      ],
    },
  ]

  return (
    <section id="tools" className="relative py-20 bg-zinc-900">
      <div ref={ref} className="container mx-auto px-4">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Tools
        </motion.h2>

        <div className="space-y-12">
          {toolCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">{category.title}</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
                {category.tools.map((tool, toolIndex) => (
                  <motion.div
                    key={tool.name}
                    className="flex flex-col items-center p-4 bg-black rounded-lg border border-gray-800 hover:border-gray-600 transition-colors"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.2 + toolIndex * 0.1 }}
                  >
                    <img
                      src={tool.icon || "/placeholder.svg"}
                      alt={`${tool.name} logo`}
                      className={
                        tool.name === "Nav2" && !tool.icon.endsWith(".svg?height=60&width=60")
                          ? "w-8 h-12 mb-3"
                          : "w-12 h-12 mb-3"
                      }
                    />
                    <span className="text-sm text-gray-300 text-center">{tool.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
