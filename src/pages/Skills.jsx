import SectionCard from '../components/SectionCard';
import { motion } from 'framer-motion';
import {
  Code,
  Globe,
  Database,
  Smartphone,
  Wrench,
  Brain,
} from 'lucide-react';

const skillGroups = [
  {
    title: 'Programming',
    icon: Code,
    items: ['Python', 'C', 'AI'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Frontend',
    icon: Globe,
    items: ['React', 'HTML', 'CSS'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Backend',
    icon: Database,
    items: ['Spring Boot', 'Node.js', 'MySQL'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    items: ['Android Studio', 'XML'],
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Tools',
    icon: Wrench,
    items: ['GitHub', 'Figma', 'Docker', 'Jenkins'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: 'AI/ML',
    icon: Brain,
    items: ['Machine Learning', 'NLP'],
    color: 'from-pink-500 to-rose-500',
  },
];

const Skills = () => {
  return (
    <SectionCard title="Skills" kicker="">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-6 bg-white rounded-2xl border border-gray-200 shadow-soft hover:shadow-soft-lg transition-all hover:-translate-y-1"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${group.color} mb-4`}>
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </SectionCard>
  );
};

export default Skills;
