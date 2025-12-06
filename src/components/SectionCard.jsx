import { motion } from 'framer-motion';

const SectionCard = ({ title, kicker, children, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.5 }}
    className={`bg-white rounded-2xl p-6 sm:p-8 shadow-soft ${className}`}
  >
    {(title || kicker) && (
      <div className="mb-6">
        {kicker && (
          <p className="text-xs font-semibold uppercase tracking-wider text-primary-600 mb-2">
            {kicker}
          </p>
        )}
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{title}</h2>
        )}
      </div>
    )}
    <div className="text-gray-700 leading-relaxed">{children}</div>
  </motion.div>
);

export default SectionCard;
