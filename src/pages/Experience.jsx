import SectionCard from '../components/SectionCard';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    role: 'Software Engineer Intern',
    company: 'Yuga Yatra Retail (OPC) Pvt. Ltd',
    period: '12/2025 – Present',
    bullets: [
      'Developing websites and apps using Cursor AI and Firebase Studio.',
      'Designing creative UI using Canva.',
      'Handling freelance projects on Upwork.',
      'Managing seller portals (Amazon, Flipkart).',
      'Using Google Workspace for team collaboration.',
    ],
  },
  {
    role: 'Software Developer Intern',
    company: 'Skill-Dzire',
    period: '05/2025 – 06/2025',
    bullets: [
      'Developed and deployed ML models.',
      'Ensured data quality and improved model performance.',
      'Created Android UI in Java/XML improving usability by 15%.',
      'Built CI/CD workflows using GitHub + Jenkins reducing release time by 20%.',
    ],
  },
];

const Experience = () => {
  return (
    <SectionCard title="Experience" kicker="">
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.role}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative pl-8 pb-8 border-l-2 border-primary-200 last:border-l-0 last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-gradient-primary border-4 border-white" />
            <div className="bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="text-primary-600" size={20} />
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-gray-600 font-medium">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">
                  <Calendar size={16} />
                  <span className="font-medium">{exp.period}</span>
                </div>
              </div>
              <ul className="space-y-2 mt-4">
                {exp.bullets.map((point, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + idx * 0.05 }}
                    className="flex gap-3 text-gray-700"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary-500 flex-shrink-0" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Experience;
