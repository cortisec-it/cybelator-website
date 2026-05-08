import React from 'react';

function CybelatorLogo({ className = "w-8 h-8", color = "text-brand-accent" }) {
  return (
    <svg 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={className}
    >
      <path 
        d="M16 2L4 7V14C4 21.5 9.5 28.5 16 30C22.5 28.5 28 21.5 28 14V7L16 2Z" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={color}
      />
      <path 
        d="M16 8V16L22 20" 
        stroke="currentColor" 
        strokeWidth="2.5" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className={color}
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" className={color} />
    </svg>
  );
}

export default CybelatorLogo;