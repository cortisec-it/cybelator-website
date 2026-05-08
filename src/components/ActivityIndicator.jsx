import React from 'react';
import { motion } from 'framer-motion';

const activityConfig = {
  high: { width: '90%', color: 'bg-red-500', label: 'High Activity' },
  medium: { width: '60%', color: 'bg-yellow-500', label: 'Moderate Activity' },
  low: { width: '30%', color: 'bg-green-500', label: 'Low Activity' }
};

function ActivityIndicator({ level }) {
  const config = activityConfig[level] || activityConfig.medium;

  return (
    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
      <motion.div
        className={`h-full rounded-full ${config.color}`}
        initial={{ width: 0 }}
        animate={{ width: config.width }}
        transition={{ duration: 1, ease: 'easeOut' }}
      />
    </div>
  );
}

export default ActivityIndicator;