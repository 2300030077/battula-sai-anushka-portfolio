import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Download } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center pt-24 sm:pt-20 pb-12 sm:pb-16">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          {/* Left: Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 font-medium mt-8"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
            >
              Battula{' '}
              <span
                className="bg-clip-text text-transparent font-bold"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #7b2ff7, #f107a3)",
                }}
              >
                Sai Anushka
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-xl lg:text-2xl text-gray-700 font-medium"
            >
              <span className="block sm:inline">AI-Driven Software Developer</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">Full Stack Engineer</span>
              <span className="hidden sm:inline"> • </span>
              <span className="block sm:inline">Co-Founder of NutriCloud</span>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl"
            >
              I build modern web apps, intelligent systems, and scalable platforms using
              React, Node.js, Python, Android, and cloud technologies. Passionate about
              clean UI, automation, and real-world problem-solving.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 
              text-white rounded-xl text-sm sm:text-base font-medium shadow-soft hover:shadow-soft-lg 
              transition-shadow w-full sm:w-auto"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7b2ff7, #f107a3)",
                }}
              >
                Get in Touch
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 
              bg-white border-2 border-gray-200 text-gray-700 rounded-xl 
              text-sm sm:text-base font-medium hover:border-purple-400 
              transition-colors w-full sm:w-auto"
              >
                View Projects
              </motion.a>

              <motion.a
                href="/assets/resume.pdf"
                download="Battula_Sai_Anushka_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 
              bg-white border-2 border-gray-200 text-gray-700 rounded-xl
              text-sm sm:text-base font-medium hover:border-purple-400 
              transition-colors w-full sm:w-auto"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            {/* Social Icons */}
            <motion.div variants={itemVariants} className="flex gap-4 pt-2">
              <SocialIcon href="https://github.com/2300030077" aria="GitHub">
                <Github size={20} />
              </SocialIcon>
              <SocialIcon href="https://linkedin.com/in/anushka-battula" aria="LinkedIn">
                <Linkedin size={20} />
              </SocialIcon>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div variants={itemVariants} className="flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div
                className="absolute inset-0 rounded-2xl blur-2xl opacity-30 -z-10"
                style={{
                  backgroundImage: "linear-gradient(90deg, #7b2ff7, #f107a3)",
                }}
              />

              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative h-64 w-64 xs:h-72 xs:w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 
              overflow-hidden rounded-2xl border-4 border-gray-200 
              shadow-[0_20px_60px_rgba(0,0,0,0.15)] mx-auto lg:mx-0"
              >
                <img
                  src="/assets/myphoto.jpg.jpg"
                  alt="Battula Sai Anushka"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Reusable Social Button Component
const SocialIcon = ({ href, aria, children }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="p-3 bg-gray-100 rounded-xl text-gray-700 
      hover:bg-purple-50 hover:text-purple-600 transition-colors"
    aria-label={aria}
  >
    {children}
  </motion.a>
);

export default Home;
