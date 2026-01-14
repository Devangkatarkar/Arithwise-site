import { motion } from 'framer-motion';

const Placeholder = ({ title = 'Page' }) => {
  return (
    <div className="max-w-4xl mx-auto py-32 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-4xl font-extrabold mb-6" style={{ color: '#7A2E8A' }}>{title}</h2>
        <p className="text-lg text-gray-600">This is a placeholder page for "{title}". Replace with real content as needed.</p>
      </motion.div>
    </div>
  );
};

export default Placeholder;
