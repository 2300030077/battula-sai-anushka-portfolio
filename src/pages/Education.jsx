import SectionCard from '../components/SectionCard';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const education = [
  {
    title: 'B.Tech in Computer Science & Engineering',
    place: 'KL University',
    period: '2023–2027',
    detail: 'CGPA: 9.2/10',
    icon: GraduationCap,
  },
  {
    title: 'Intermediate',
    place: 'Bhashyam Junior College',
    period: '2021–2023',
    detail: 'CGPA: 8.6/10',
    icon: Award,
  },
];

const Education = () => {
  return (
    <SectionCard title="Education" kicker="">
      <div className="grid gap-6 md:grid-cols-2">
        {education.map((edu, index) => {
          const Icon = edu.icon;
          return (
            <motion.div
              key={edu.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-4 sm:p-6 bg-gradient-to-br from-primary-50 to-pink-50 rounded-2xl border border-primary-100 shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 bg-white rounded-xl shadow-soft">
                  <Icon className="text-primary-600" size={24} />
                </div>
                <span className="px-3 py-1 text-xs font-semibold bg-gradient-primary text-white rounded-full">
                  {edu.detail}
                </span>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-2">
                {edu.period}
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {edu.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">{edu.place}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionCard>
  );
};

export default Education;

