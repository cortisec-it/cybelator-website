import React from 'react';
import { Clock } from 'lucide-react';
import { useLastUpdated } from '@/hooks/useLastUpdated';

function LastUpdatedBadge({ date, className = "" }) {
  const timeAgo = useLastUpdated(date);

  return (
    <div className={`flex items-center gap-1 text-xs text-gray-500 font-medium ${className}`}>
      <Clock className="w-3 h-3" />
      <span>Updated {timeAgo}</span>
    </div>
  );
}

export default LastUpdatedBadge;