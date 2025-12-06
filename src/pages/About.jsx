import SectionCard from '../components/SectionCard';
import { motion } from 'framer-motion';

const About = () => {
  const highlights = [
    {
      icon: '🚀',
      title: 'Startup Co-Founder',
      description: 'Led NutriCloud from concept to launch',
    },
    {
      icon: '💻',
      title: 'Full Stack Developer',
      description: 'End-to-end development expertise',
    },
    {
      icon: '🤖',
      title: 'AI Enthusiast',
      description: 'Passionate about ML and intelligent systems',
    },
  ];

  return (
    <SectionCard title="About Me" kicker="">
      <div className="space-y-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg leading-relaxed"
        >
          I'm a passionate Computer Science undergraduate specializing in AI-driven
          technologies, with strong interest in scalable digital products. As the
          Co-Founder of NutriCloud, I led teams, built end-to-end tech solutions, and
          designed user-focused experiences. I have software development experience as
          an intern at Skill-Dzire and Yuga Yatra Retail, working in Android, ML models,
          CI/CD, UI/UX and cloud technologies. I combine creativity, engineering, and
          product thinking to deliver practical, impactful results.
        </motion.p>

        <div className="grid gap-4 sm:grid-cols-3 pt-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-4 sm:p-6 bg-gradient-to-br from-primary-50 to-pink-50 rounded-2xl border border-primary-100"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
};

export default About;
