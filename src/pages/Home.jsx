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
              <span className="bg-gradient-primary bg-clip-text text-transparent">
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
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-primary text-white rounded-xl text-sm sm:text-base font-medium shadow-soft hover:shadow-soft-lg transition-shadow w-full sm:w-auto"
              >
                Get in Touch
                <ArrowRight size={18} />
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl text-sm sm:text-base font-medium hover:border-primary-300 transition-colors w-full sm:w-auto"
              >
                View Projects
              </motion.a>
              <motion.a
                href="/assets/resume.pdf.pdf"
                download="Battula_Sai_Anushka_Resume.pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl text-sm sm:text-base font-medium hover:border-primary-300 transition-colors w-full sm:w-auto"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-2"
            >
              <motion.a
                href="https://github.com/2300030077"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/anushka-battula"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gray-100 rounded-xl text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-2xl opacity-20 -z-10" />
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative h-64 w-64 xs:h-72 xs:w-72 sm:h-80 sm:w-80 md:h-96 md:w-96 overflow-hidden rounded-2xl border-4 border-gray-200 shadow-[0_20px_60px_rgba(0,0,0,0.15)] mx-auto lg:mx-0"
              >
          <img
            src="/assets/myphoto.jpg.jpg"
                  alt="Battula Sai Anushka"
            className="h-full w-full object-cover"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src =
                      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop stop-color='%236366F1' offset='0%'/><stop stop-color='%23EC4899' offset='100%'/></linearGradient></defs><rect width='100%' height='100%' fill='url(%23g)'/><text x='50%' y='52%' dominant-baseline='middle' text-anchor='middle' fill='white' font-family='DM Sans, Arial' font-size='32' font-weight='600'>Your Photo</text></svg>";
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
);
};

export default Home;
