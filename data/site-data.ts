export interface Project {
  id: number
  title: string
  category: string
  image: string
  description: string
  technologies: string[]
  url: string
}

export interface Tool {
  name: string
  icon: string
}

export interface ToolCategory {
  title: string
  tools: Tool[]
}

export interface ExperienceEntry {
  title: string
  company: string
  dateRange: string
  responsibilities: string[]
}

export interface NavItem {
  name: string
  href: string
}

export interface SocialLinks {
  linkedin: string
  github: string
  email: string
}

export const socialLinks: SocialLinks = {
  linkedin: "https://www.linkedin.com/in/alvaropaleroramirez/",
  github: "https://github.com/Alvaro2304",
  email: "apalero.ramirez@gmail.com",
}

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Tools", href: "#tools" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export const categories = ["all", "design", "computer-vision", "navigation"]

export const projects: Project[] = [
  {
    id: 1,
    title: "Crack Segmentation with U-Net (ResNet-101 Encoder)",
    category: "computer-vision",
    image: "/crack_seg.jpeg",
    description:
      "I developed a deep learning model for crack detection and segmentation in road images using a U-Net architecture with a ResNet-101 encoder pretrained on ImageNet. The model was trained on a dataset of 11,000+ images (448×448 resolution) specifically collected for crack detection. The model was tested on a 1920x1080 video, using a sliding window approach. This decreased the inference speed, so this method should be used for offline implementations.",
    technologies: ["Pytorch", "Python", "Cuda", "Computer Vision", "Deep Learning"],
    url: "https://github.com/Alvaro2304/crack_segmentation_unet",
  },
  {
    id: 2,
    title: "Pointcloud of my neighborhood (Colmap)",
    category: "computer-vision",
    image: "/colmap.jpeg",
    description:
      "A 3D pointcloud of my neighborhood from a video using COLMAP. Generated through a Structure from Motion (SfM) method, it recovered 500,603 sparse points. Additionally, I've runned a PatchMatch step for getting a dense reconstruction. The images were extracted from a 4K qualit video using ffmpeg, recordered from a friend's phone.",
    technologies: ["Colmap", "Photogrammetry", "Computer Vision"],
    url: "https://www.youtube.com/watch?v=BQ4dtvkjw0U",
  },
  {
    id: 3,
    title: "Stereo Visual Odometry",
    category: "computer-vision",
    image: "/stereo.png",
    description:
      "Implemented stereo visual odometry on the KITTI dataset using two approaches: ORB descriptor matching and Lucas–Kanade (KLT) optical flow. By leveraging stereo depth, the system reconstructs 3D points and estimates motion with PnP. The ORB pipeline is more robust to appearance changes, while KLT provides a lighter, faster solution that achieves reliable results with well-tuned parameters.",
    technologies: ["OpenCV", "C++", "Computer Vision"],
    url: "https://github.com/Alvaro2304/stereo_vo",
  },
  {
    id: 4,
    title: "Monocular Visual Odometry",
    category: "computer-vision",
    image: "/monocular.png",
    description:
      "Visual odometry was performed using a single camera view for each sequence in the KITTI dataset. The FAST feature detector was used, and since it is a corner-based method, the odometry results were more accurate in sequences where the car drives through streets with many houses, compared to clearer, less structured areas.",
    technologies: ["OpenCV", "C++", "Computer Vision"],
    url: "https://github.com/Alvaro2304/monocular",
  },
  {
    id: 5,
    title: "Navigation Sandbox TurtleBot 4",
    category: "navigation",
    image: "/turtle4.png",
    description:
      "I developed a TurtleBot4 package in ROS 2 Humble for localization, SLAM, and navigation. Since the simulation package lacked an IMU plugin for Gazebo, I implemented one and integrated IMU measurements with odometry using an Extended Kalman Filter (EKF). I then mapped the environment with SLAM Toolbox, and finally, using Nav2, I created a YAML configuration file for the global planner, controller, and both the global and local costmaps.",
    technologies: ["ROS 2", "Nav2", "Gazebo", "EKF"],
    url: "https://github.com/Alvaro2304/turtlebot4_path_planning",
  },
  {
    id: 6,
    title: "Capstone Project UTEC × Purdue",
    category: "design",
    image: "/capstone.jpeg",
    description:
      "In collaboration with four students from Purdue University, my three teammates from UTEC and I built a beach waste collection robot equipped with tracked wheels. We successfully tested it on a Peruvian beach, where it was able to collect various types of waste. I contributed primarily to the mechanical design of the robot.",
    technologies: ["Mechanical Design", "Tracked wheels", "Collaboration"],
    url: "https://polytechnic.purdue.edu/capstone-project/utec-x-purdue-beach-cleaning-robot",
  },
  {
    id: 7,
    title: "Beach Waste Collector Prototype",
    category: "design",
    image: "/thesis_1.png",
    description:
      "For my Bachelor's thesis, my friend Marko and I built a prototype of a beach waste-collecting robot. This was the most challenging project I've worked on, as it was my first time designing a robot entirely from scratch. It made me realize just how demanding mechanical design can be. I implemented an Extended Kalman Filter (EKF) that fused GPS and IMU data, and for path following, we used two PD controllers to manage linear and angular velocities.",
    technologies: ["EKF", "GPS", "IMU", "Path Planning"],
    url: "https://drive.google.com/file/d/1kQcgincoPMevui0MTPidfnoNxSX_zIJr/view?usp=sharing",
  },
]

export const toolCategories: ToolCategory[] = [
  {
    title: "Programming",
    tools: [
      { name: "C++", icon: "/c.svg" },
      { name: "Python", icon: "/python-5.svg" },
      { name: "Java", icon: "/jee-3.svg" },
      { name: "C", icon: "/c-1.svg" },
    ],
  },
  {
    title: "Robotics",
    tools: [
      { name: "ROS 2", icon: "/ros_logo.svg" },
      { name: "Nav2", icon: "/nav2_1.png" },
      { name: "Gazebo", icon: "/Gazebo.svg" },
    ],
  },
  {
    title: "Others",
    tools: [
      { name: "HTML", icon: "/html-1.svg" },
      { name: "CSS", icon: "/css-3.svg" },
      { name: "SQL", icon: "/sql-database-generic-svgrepo-com.svg" },
      { name: "Git", icon: "/git.svg" },
      { name: "OpenCV", icon: "/opencv-svgrepo-com.svg" },
      { name: "Keras", icon: "/Keras.svg" },
      { name: "Pytorch", icon: "/pytorch.svg" },
      { name: "Raspberry Pi", icon: "/raspberry-pi-svgrepo-com.svg" },
      { name: "NVIDIA Jetson", icon: "/nvidia-logo-svgrepo-com.svg" },
      { name: "Docker", icon: "/Docker.svg" },
      { name: "PostgreSQL", icon: "/postgres.svg" },
      { name: "SQLite", icon: "/sqlite-icon.svg" },
    ],
  },
]

export const experiences: ExperienceEntry[] = [
  {
    title: "Computer Vision Engineer",
    company: "Robotic Air Systems",
    dateRange: "January 12, 2026 - Present",
    responsibilities: [
      "Designed an end-to-end vision system for UAV-based detection and segmentation, benchmarking YOLO and RT-DETR models.",
      "Built a multi-threaded Python pipeline for real-time image acquisition, inference, and async data transmission.",
      "Deployed the vision service on NVIDIA Jetson Orin Nano via Docker Compose with TensorRT-optimized edge inference.",
      "Managed dataset labeling QA through Label Studio, coordinating the labeling team and auditing quality across iterations.",
    ],
  },
  {
    title: "Project Engineer Trainee",
    company: "PROCETRADI",
    dateRange: "September 12, 2024 - March 31, 2025",
    responsibilities: [
      "Support in the mechanical and electrical CAD designs.",
      "Developed PLC programs for automation panels controlling a butterfly valve in a hydroelectric power plant.",
      "Programmed fault detection and isolation logic for electric power distribution systems.",
    ],
  },
]
