import SectionCard from '../components/SectionCard';
import { motion } from 'framer-motion';
import { Trophy, Users, Award, Lightbulb } from 'lucide-react';

const achievements = [
  {
    title: 'Club Lead – FOCUS Club',
    period: '2024–Present',
    detail: 'Leading initiatives, workshops, and community engagement.',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Smart India Hackathon 2024 — Round 2 qualifier',
    period: '2024',
    detail: 'Advanced to the second round with a rapid, solution-focused prototype.',
    icon: Trophy,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Finalist in 3 business plan competitions',
    period: '2024',
    detail: 'Presented scalable product strategies with strong market fit.',
    icon: Award,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Multiple hackathon special mentions',
    period: 'Various',
    detail: 'Recognized for building 24-hour prototypes with functional demos.',
    icon: Lightbulb,
    gradient: 'from-green-500 to-emerald-500',
  },
];

const Achievements = () => {
  return (
    <SectionCard title="Leadership & Achievements" kicker="">
      <div className="grid gap-6 md:grid-cols-2">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-white rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-soft-lg transition-all border border-gray-100 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div
                  className={`p-3 rounded-xl bg-gradient-to-br ${achievement.gradient} shadow-soft`}
                >
                  <Icon className="text-white" size={24} />
                </div>
                <span className="px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full">
                  {achievement.period}
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {achievement.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{achievement.detail}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionCard>
  );
};

export default Achievements;
