import SectionCard from '../components/SectionCard';
import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Nutri Cloud — Student Startup (Co-Founder)',
    stack: ['Figma', 'React', 'Node.js', 'Firebase'],
    description:
      'Built a food-tech platform connecting home chefs and consumers with healthy meals. Supports women entrepreneurs, community kitchens, and organic meals.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Feedback Management System — DevOps + Full Stack',
    stack: ['Docker', 'Kubernetes', 'Ansible', 'GitHub Actions', 'Jenkins'],
    description:
      'Built full CI/CD pipeline with automated testing, deployment, and zero-downtime rollouts.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Language Detection App — Machine Learning',
    stack: ['Python', 'sklearn', 'pandas', 'NumPy', 'Flask'],
    description:
      'ML-based text language identifier with real-time API and optimized model.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Inventory Management System — Full Stack',
    stack: ['React', 'HTML', 'CSS', 'Java', 'Spring Boot', 'MySQL'],
    description:
      'Built role-based inventory system with analytics dashboard, reducing processing delays by 30%.',
    gradient: 'from-orange-500 to-red-500',
  },
];

const Projects = () => {
  return (
    <SectionCard title="Projects" kicker="">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all border border-gray-100 hover:-translate-y-1"
          >
            <div
              className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`}
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 mt-2">
              {project.name}
            </h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Projects;
