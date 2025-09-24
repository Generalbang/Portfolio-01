import { useState } from "react";
import { motion } from "framer-motion";
import { FiExternalLink, FiGithub, FiCode } from "react-icons/fi";
import LazyImage from "./LazyImage";
import ProjectModal from "./ProjectModal";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const projects = [
    {
      title: "NewsLet - Full-Stack News App",
      description:
        "A comprehensive news application with JWT authentication, role-based access, and REST APIs. Built with Node.js, Express, MongoDB backend and React/Tailwind frontend.",
      longDescription:
        "NewsLet is a full-featured news platform that allows users to read, create, and manage news articles. The application features secure user authentication, role-based access control, and a comprehensive admin dashboard for content management.",
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "JWT",
        "Tailwind",
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Full-Stack",
      featured: false,
      date: "2025",
      challenges: [
        "Implementing secure JWT authentication with refresh tokens",
        "Building a scalable REST API architecture",
        "Managing real-time content updates",
        "Optimizing database queries for better performance",
      ],
      features: [
        "User registration and authentication",
        "Role-based access control (User/Admin)",
        "Article creation and management",
        "Real-time notifications",
        "Search and filtering capabilities",
        "Responsive design for all devices",
      ],
    },
    {
      title: "Visibuy - eCommerce Platform",
      description:
        "Responsive eCommerce platform with React, TypeScript, and TailwindCSS. Features Redux Toolkit for state management and cart persistence.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind", "Redux", "REST APIs"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Frontend",
      featured: true,
    },
    {
      title: "1791 Technology",
      description:
        "Node.js + Express backend with OTP login, JWT authentication, and RBAC. Integrated Kill Bill for multi-tenant billing and automated provisioning.",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
      technologies: ["Node.js", "Express", "JWT", "OTP", "Kill Bill", "RBAC"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Backend",
      featured: true,
    },
    {
      title: "BookIt Event System",
      description:
        "Django backend with JWT authentication and event booking workflows. PostgreSQL schemas with payment processing integration.",
      image:
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop",
      technologies: ["Django", "PostgreSQL", "JWT", "Payment API", "REST APIs"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Backend",
      featured: true,
    },
    {
      title: "VarryHealth UI/UX Optimization",
      description:
        "Boosted user engagement by 30% through UI/UX optimization with React. Reduced load time by 40% through performance tuning.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "Performance",
        "UI/UX",
        "Optimization",
        "Analytics",
      ],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
      category: "Frontend",
      featured: true,
    },
    {
      title: "Personal Portfolio",
      description:
        "Modern, sophisticated portfolio website with glass morphism design system and pastel gradient aesthetic. Built with React, TypeScript, and Tailwind CSS.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind",
        "Framer Motion",
        "Glass Morphism",
      ],
      githubUrl: "https://github.com",
      // liveUrl: "https://example.com",
      category: "Frontend",
      featured: false,
    },
  ];

  const categories = ["All", "Full-Stack", "Frontend", "Backend"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id='projects' className='py-20 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-20'
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className='inline-block mb-6'
          >
            <h2 className='text-5xl md:text-6xl font-bold'>
              <span className='text-gradient'>Featured</span>{" "}
              <span className='text-gray-800 dark:text-white'>Projects</span>
            </h2>
            <div className='w-32 h-1 bg-gradient-primary rounded-full mx-auto mt-4' />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className='text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed'
          >
            A showcase of my recent work and personal projects
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='flex flex-wrap justify-center gap-4 mb-12'
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 glass rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-primary text-white shadow-lg"
                  : "text-gray-700 dark:text-white hover:bg-white/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-500 group hover:shadow-2xl cursor-pointer ${
                project.featured ? "ring-2 ring-blue-500/50 shadow-2xl" : ""
              }`}
              onClick={() => openModal(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openModal(project);
                }
              }}
              role='button'
              tabIndex={0}
              aria-label={`View details for ${project.title} project`}
            >
              {/* Project Image */}
              <div className='relative overflow-hidden h-48'>
                <LazyImage
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className='group-hover:scale-110 transition-transform duration-300'
                />
                {project.featured && (
                  <div className='absolute top-4 left-4'>
                    <span className='px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full'>
                      Featured
                    </span>
                  </div>
                )}
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300' />
              </div>

              {/* Project Content */}
              <div className='p-8'>
                <div className='flex items-center justify-between mb-4'>
                  <span className='px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold rounded-full'>
                    {project.category}
                  </span>
                  <div className='flex space-x-3'>
                    <motion.a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 glass rounded-xl text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-all duration-300 hover:scale-110'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiGithub className='w-5 h-5' />
                    </motion.a>
                    <motion.a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-3 glass rounded-xl text-gray-600 dark:text-gray-400 hover:text-green-500 transition-all duration-300 hover:scale-110'
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink className='w-5 h-5' />
                    </motion.a>
                  </div>
                </div>

                <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-4 group-hover:text-gradient transition-all duration-300 leading-tight'>
                  {project.title}
                </h3>

                <p className='text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6'>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className='flex flex-wrap gap-3'>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className='px-3 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg hover:scale-105 transition-transform duration-200'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mt-16'
        >
          <div className='glass p-8 rounded-xl max-w-2xl mx-auto'>
            <FiCode className='w-12 h-12 text-blue-500 mx-auto mb-4' />
            <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-4'>
              Interested in working together?
            </h3>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className='px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300'
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default Projects;
