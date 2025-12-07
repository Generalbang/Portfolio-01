import { motion } from "framer-motion";
import { FiDownload, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  // const handleDownloadCV = () => {
  //   // Create a simple CV download - in a real app, this would be a PDF file
  //   // const cvContent = `
  //   //   OJO JOHNSON DARE
  //   //   Full-Stack Engineer

  //   //   Contact Information:
  //   //   📍 Surulere Quarters, Ile-Ife, Osun State, Nigeria
  //   //   📞 +234 810 030 7953 | +234 915 784 4849
  //   //   ✉️ js.dev.ojodare@gmail.com

  //   //   Professional Summary:
  //   //   Full-Stack Engineer skilled in building scalable backends and high-performance UIs. Experienced in React, TypeScript, Tailwind, Node.js, and Django for secure authentication, REST APIs, billing integrations, and responsive UI/UX.

  //   //   Skills:
  //   //   Frontend: React, TypeScript, Tailwind, Redux Toolkit, Context API
  //   //   Backend: Node.js, Express, Django, PostgreSQL, MongoDB, Sequelize, Mongoose
  //   //   APIs: REST, Postman (testing)
  //   //   Auth & Security: JWT, OTP, RBAC, Audit Logging
  //   //   Other: Git/GitHub, Vercel, Netlify, Postmark/SMTP

  //   //   Experience:
  //   //   - Backend Engineer – 1791 Technology (Contract) | 2025
  //   //   - Frontend Engineer – Visibuy (eCommerce Platform) | 2025
  //   //   - Full-Stack Project – NewsLet (Personal Project) | 2025
  //   //   - Backend Engineer – Techwitclan (BookIt Event System) | 2024
  //   //   - Frontend Developer Intern – VarryHealth | 2023–2024

  //   //   Certifications:
  //   //   - Python & Django (Techwitclan, 2024)
  //   //   - MERN Stack Development & Deployment (2022–Present)
  //   //   - IT Support & Troubleshooting (Rosebud, 2022)
  //   // `.trim();

  //   const cvContent = `
  //   OJO JOHNSON DARE
  //   Full-Stack Developer (MERN + Next.js) | Nigeria (Open to International Remote)
  //   +234 810 030 7953 | Gmail
  //   LinkedIn| Github| Portfolio

  //   PROFESSIONAL SUMMARY
  //   Full-Stack Developer with 2+ years of experience building scalable web applications using React, Next.js, TypeScript, Node.js, Express, PostgreSQL, and MongoDB. Proven track record of shipping production apps with secure authentication (JWT + RBAC), payment integrations (KillBill, Stripe), and performance optimizations (20-40% faster load times). Strong at end-to-end development and remote collaboration.

  //   TECHNICAL SKILLS
  //   Frontend: React, Next.js (App Router), TypeScript, Tailwind CSS, Redux Toolkit, React Query / TanStack Query, Zod
  //   Backend: Node.js, Express.js, Django, Python, REST APIs
  //   Databases: PostgreSQL, MongoDB, Prisma/Sequelize/Mongoose
  //   Auth & Security: JWT, OAuth, RBAC, OTP
  //   Payments & Tools: KillBill, Stripe, Postmark, Vercel, Railway, Git, GitHub

  //   PROFESSIONAL EXPERIENCE
  //   Frontend Developer — African Genius Academy (Contract)                	Remote           Sep 2025 
  //   • Built responsive school website with React + TypeScript + Tailwind
  //   • Implemented Formspree-powered forms and optimized performance
  //   • Created dynamic UI components, gallery, news sections, and navigation

  //   Full-Stack Developer (Backend Focus) — 1791 Technology                     Remote     May 2025 – Aug 2025
  //   • Built multi-tenant platform with OTP + JWT authentication and RBAC
  //   • Integrated KillBill for subscription billing + automated workflows
  //   • Implemented audit logging and transactional emails via Postmark
  //   • Designed and shipped secure, validated REST APIs using Express.js and AI

  //   Frontend Developer — Visibuy (E-Commerce)                                  Remote     Feb 2025 – May 2025
  //   • Built responsive eCommerce frontend with React, TailwindCSS + Redux Toolkit + Persist
  //   • Integrated product catalog, cart, inventory, and checkout APIs

  //   Full-Stack Developer — NewsLet (Personal Project → Production App)                2025
  //   • Full MERN stack app with Next.js-style architecture (React + Node.js + MongoDB)
  //   • Implemented JWT + RBAC, content creation tools, and analytics dashboard

  //   Frontend Developer — VarryHealth				Remote	May 2023 – May 2024
  //   • Improved UI/UX and reduced load time by 40%.
  //   • Integrated APIs for scheduling, notifications, and patient data.

  //   PROJECTS 
  //   Job Tracker → Live Link
  //   • Full-stack job application tracker built with Next.js 16 (App Router), TypeScript, Tailwind + Prisma + PostgreSQL + Neon DB
  //   • Features: NextAuth, CRUD operations, drag-and-drop Kanban(in progress), statistics dashboard

  //   NewsLet → Live Link
  //   • Community-driven news platform (MERN) with authentication, creator tools, article metrics, lazy loading

  //   EDUCATION & CERTIFICATIONS
  //   Self-Taught MERN + Next.js Developer                                      2022 – Present
  //   Python & Django Backend Development — Techwitclan                        2024

  //   ADDITIONAL INFORMATION
  //   • Available immediately for remote full-time or contract roles
  //   • Fluent English | Open to relocation (with sponsorship)
  //   • Open to contract & full-time roles
  //   • Experienced in remote async work across time zones (WAT).`.trim()

  //   const blob = new Blob([cvContent], { type: "text/plain" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "OJO_Johnson_Dare_CV.txt";
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // };

  return (
    <section
      id='hero'
      className='min-h-screen flex items-center justify-center relative overflow-hidden'
    >
      {/* Enhanced Background Elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div
          className='absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl'
          animate={{
            x: [0, 120, 0],
            y: [0, -60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute bottom-20 right-10 w-[28rem] h-[28rem] bg-gradient-to-r from-cyan-400/25 to-blue-500/25 rounded-full blur-3xl'
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl'
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10'>
        <div className='text-center'>
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='mb-8'
          >
            <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight'>
              <span className='text-gradient font-poppins bg-clip-text'>
                OJO
              </span>
              <br />
              <span className='text-gray-800 dark:text-white font-inter'>
                JOHNSON DARE
              </span>
            </h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className='w-24 h-1 bg-gradient-primary rounded-full mx-auto mb-8'
            />
          </motion.div>

          {/* Animated Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='mb-8'
          >
            <div className='text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300 mb-4'>
              I'm a{" "}
              <TypeAnimation
                sequence={[
                  "Full-Stack Developer",
                  2000,
                  "Frontend Engineer",
                  2000,
                  "Backend Developer",
                  2000,
                  "React Specialist",
                  2000,
                  "Node.js Expert",
                  2000,
                ]}
                wrapper='span'
                cursor={true}
                repeat={Infinity}
                className='gradient-text'
              />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed'
          >
            I’ve shipped production dashboards, e-commerce platforms, schools/academy platforms, and multi-tenant SaaS apps that load 40% faster and convert better.
            <br/>
            <br/>
            I build scalable web applications with React, TypeScript, Node.js,
            and Django. Focused on clean code, security, and great user
            experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className='flex flex-col sm:flex-row gap-6 justify-center items-center mb-16'
          >
            <motion.button
              // onClick={handleDownloadCV}
              onClick={() => window.open("https://drive.google.com/file/d/1xIrAR-HXgNBii9E9x3mMw2eloKRDbmCE/view?usp=drive_link", "_blank")}
              className='group relative px-10 py-5 bg-gradient-primary text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-500 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 overflow-hidden'
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label='Download CV as text file'
              role='button'
              tabIndex={0}
            >
              <div className='absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              <FiDownload
                className='w-5 h-5 relative z-10 group-hover:animate-bounce'
                aria-hidden='true'
              />
              <span className='relative z-10'>View CV</span>
            </motion.button>

            <motion.button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className='group relative px-10 py-5 glass text-gray-700 dark:text-white font-semibold rounded-full hover:bg-white/30 dark:hover:bg-white/10 transition-all duration-500 flex items-center gap-3 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 border border-white/20'
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label='Scroll to contact section'
            >
              <FiMail
                className='w-5 h-5 group-hover:animate-bounce'
                aria-hidden='true'
              />
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className='flex justify-center space-x-8'
          >
            {[
              {
                icon: FiGithub,
                href: "https://github.com/generalbang",
                label: "GitHub",
                color: "hover:text-gray-900 dark:hover:text-gray-100",
              },
              {
                icon: FiLinkedin,
                href: "https://www.linkedin.com/in/dare-ojo-7016b2319/",
                label: "LinkedIn",
                color: "hover:text-blue-600",
              },
              {
                icon: FiMail,
                href: "mailto:js.dev.ojodare@gmail.com",
                label: "Email",
                color: "hover:text-red-500",
              },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                className={`relative p-4 glass rounded-full text-gray-700 dark:text-white ${social.color} transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-blue-500/50 focus:ring-offset-2 group`}
                whileHover={{ scale: 1.15, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
                aria-label={`Visit ${social.label} profile (opens in new tab)`}
              >
                <social.icon
                  className='w-6 h-6 relative z-10'
                  aria-hidden='true'
                />
                <div className='absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500' />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2'
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className='w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center'>
          <motion.div
            className='w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2'
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
