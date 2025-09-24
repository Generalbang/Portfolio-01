import { motion } from "framer-motion";
import { FiCode, FiServer, FiTool } from "react-icons/fi";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiNetlify,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FiCode,
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", level: 95, icon: SiReact },
        { name: "TypeScript", level: 90, icon: SiTypescript },
        { name: "Tailwind CSS", level: 95, icon: SiTailwindcss },
        { name: "Redux Toolkit", level: 75, icon: SiRedux },
      ],
    },
    {
      title: "Backend Development",
      icon: FiServer,
      gradient: "from-green-500 to-teal-500",
      skills: [
        { name: "Node.js", level: 90, icon: SiNodedotjs },
        { name: "Express.js", level: 85, icon: SiExpress },
        { name: "Django", level: 80, icon: SiDjango },
        { name: "PostgreSQL", level: 75, icon: SiPostgresql },
        { name: "MongoDB", level: 80, icon: SiMongodb },
      ],
    },
    {
      title: "Tools & Technologies",
      icon: FiTool,
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", level: 90, icon: SiGit },
        { name: "GitHub", level: 90, icon: SiGithub },
        { name: "Vercel", level: 85, icon: SiVercel },
        { name: "Netlify", level: 80, icon: SiNetlify },
      ],
    },
  ];

  const technologies = [
    { icon: SiReact, name: "React", color: "text-blue-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-500" },
    { icon: SiRedux, name: "Redux", color: "text-purple-500" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiExpress, name: "Express", color: "text-gray-600" },
    { icon: SiDjango, name: "Django", color: "text-green-600" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "text-blue-700" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-700" },
    { icon: SiGit, name: "Git", color: "text-orange-500" },
    { icon: SiGithub, name: "GitHub", color: "text-gray-800" },
    { icon: SiVercel, name: "Vercel", color: "text-black" },
    { icon: SiNetlify, name: "Netlify", color: "text-green-400" },
  ];

  return (
    <section id='skills' className='py-20 relative'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            <span className='gradient-text'>Skills</span>{" "}
            <span className='text-gray-800 dark:text-white'>& Expertise</span>
          </h2>
          <p className='text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto'>
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Categories */}
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className='glass p-6 rounded-xl hover:scale-105 transition-all duration-300'
            >
              <div className='flex items-center mb-6'>
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center mr-4`}
                >
                  <category.icon className='w-6 h-6 text-white' />
                </div>
                <h3 className='text-xl font-bold text-gray-800 dark:text-white'>
                  {category.title}
                </h3>
              </div>

              <div className='space-y-4'>
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className='flex items-center justify-between mb-2'>
                      <div className='flex items-center'>
                        <skill.icon className='w-5 h-5 mr-3 text-gray-600 dark:text-gray-400' />
                        <span className='font-medium text-gray-800 dark:text-white'>
                          {skill.name}
                        </span>
                      </div>
                      <span className='text-sm text-gray-500 dark:text-gray-400'>
                        {skill.level}%
                      </span>
                    </div>
                    <div className='w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2'>
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.gradient}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5,
                        }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Technology Icons Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='text-center'
        >
          <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-8'>
            Technologies I Work With
          </h3>

          <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-6'>
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='glass p-4 rounded-xl hover:scale-110 transition-all duration-300 group'
              >
                <div className='flex flex-col items-center'>
                  <tech.icon
                    className={`w-8 h-8 ${tech.color} mb-2 group-hover:scale-110 transition-transform duration-300`}
                  />
                  <span className='text-xs font-medium text-gray-600 dark:text-gray-400'>
                    {tech.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-16'
        >
          <div className='glass p-8 rounded-xl'>
            <h3 className='text-2xl font-bold text-gray-800 dark:text-white mb-6 text-center'>
              Other Skills & Competencies
            </h3>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6'>
              {[
                {
                  title: "API Development",
                  items: [
                    "REST APIs",
                    /* "GraphQL", */ "Postman",
                    "API Testing",
                  ],
                },
                {
                  title: "Authentication",
                  items: ["JWT", "OTP", "RBAC", "OAuth"],
                },
                {
                  title: "Database Design",
                  items: [
                    "Schema Design",
                    "Migrations",
                    "Optimization",
                    "Indexing",
                  ],
                },
                /* {
                  title: "DevOps",
                  items: ["CI/CD", "Docker", "AWS", "Deployment"],
                }, */
              ].map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className='text-center'
                >
                  <h4 className='font-semibold text-gray-800 dark:text-white mb-3'>
                    {skillGroup.title}
                  </h4>
                  <ul className='space-y-2'>
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className='text-sm text-gray-600 dark:text-gray-400'
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
