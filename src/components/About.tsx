import { motion } from "framer-motion";
import { FiUser, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import ScrollReveal from "./ScrollReveal";
import FloatingElements from "./FloatingElements";

const About = () => {
  const personalInfo = [
    {
      icon: FiUser,
      label: "Full Name",
      value: "Ojo Johnson Dare",
    },
    {
      icon: FiMapPin,
      label: "Location",
      // value: "Surulere Quarters, Ile-Ife, Osun State, Nigeria",
      value: "Nigeria",
    },
    {
      icon: FiMail,
      label: "Email",
      value: "js.dev.ojodare@gmail.com",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: "+234 810 030 7953",
    },
  ];

  const highlights = [
    {
      title: "Full-Stack Expertise",
      description:
        "Proficient in both frontend and backend development with modern technologies",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Performance Focused",
      description:
        "Optimized applications with 40% faster load times and improved user engagement",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Security Conscious",
      description:
        "Implemented secure authentication, RBAC, and audit logging systems",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Team Player",
      description:
        "Collaborative approach with excellent communication and problem-solving skills",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const stats = [
    { number: "3+", label: "Years Experience" },
    { number: "10+", label: "Projects Completed" },
    { number: "30%", label: "Performance Boost" },
    { number: "92%", label: "Client Satisfaction" },
  ];

  return (
    <section id='about' className='py-20 relative overflow-hidden'>
      {/* Floating Background Elements */}
      <FloatingElements
        count={3}
        size='lg'
        colors={["bg-blue-400/10", "bg-purple-400/10", "bg-cyan-400/10"]}
        className='absolute inset-0'
      />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
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
              <span className='text-gradient'>About</span>{" "}
              <span className='text-gray-800 dark:text-white'>Me</span>
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
            Passionate about creating digital solutions that make a difference
          </motion.p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className='space-y-6'>
              <h3 className='text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-6'>
                Get to know me better
              </h3>

              <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-8'>
                I'm a passionate Full-Stack Engineer with expertise in building
                scalable web applications. With experience across startups,
                e-commerce platforms, and personal projects, I bring creativity
                and technical excellence to every challenge.
              </p>

              <p className='text-gray-600 dark:text-gray-400 leading-relaxed mb-8'>
                My journey in software development has equipped me with a
                diverse skill set, from crafting intuitive user interfaces to
                architecting robust backend systems. I thrive on turning complex
                problems into elegant, user-friendly solutions.
              </p>

              {/* Personal Info Cards */}
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {personalInfo.map((info, index) => (
                  <ScrollReveal
                    key={info.label}
                    direction='up'
                    delay={index * 0.1}
                    className='group glass py-6 px-2 rounded-2xl hover:bg-white/25 dark:hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-xl'
                  >
                    <div className='flex items-start space-x-3'>
                      <div className='p-3 bg-gradient-primary rounded-xl group-hover:scale-110 transition-transform duration-300'>
                        <info.icon className='w-6 h-6 text-white' />
                      </div>
                      <div className='flex-1'>
                        <p className='text-sm text-gray-500 dark:text-gray-400 font-medium mb-1'>
                          {info.label}
                        </p>
                        <p className='font-semibold text-gray-800 dark:text-white text-base leading-relaxed'>
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='space-y-6'
          >
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className='text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-8'
            >
              What I bring to the table
            </motion.h3>

            <div className='grid gap-8'>
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className='glass p-8 rounded-2xl hover:scale-105 transition-all duration-500 group hover:shadow-2xl border border-white/20'
                >
                  <div className='flex items-start space-x-6'>
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      <div className='w-8 h-8 bg-white rounded-lg opacity-90 shadow-inner'></div>
                    </div>
                    <div className='flex-1'>
                      <h4 className='text-2xl font-bold text-gray-800 dark:text-white mb-3 group-hover:text-gradient transition-all duration-300'>
                        {highlight.title}
                      </h4>
                      <p className='text-gray-600 dark:text-gray-400 leading-relaxed text-lg'>
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className='mt-20'
        >
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className='text-center'
              >
                <div className='glass p-6 rounded-xl hover:bg-white/20 transition-all duration-300'>
                  <div className='text-3xl md:text-4xl font-bold gradient-text mb-2'>
                    {stat.number}
                  </div>
                  <div className='text-gray-600 dark:text-gray-400'>
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
