import React, { useState, useEffect, useRef } from 'react';

function Counter({ end, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const t0 = performance.now();
          const step = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setCount(Math.floor(eased * end));
            if (p < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString('en-IN')}{suffix}
    </span>
  );
}

const stats = [
  { prefix: '₹', end: 11233, suffix: ' Cr+', label: 'Lost to Cybercrime in India' },
  { prefix: '', end: 7, suffix: ' Lakh+', label: 'Complaints Filed / Year' },
  { prefix: '', end: 50, suffix: '+', label: 'Cyber Crimes / Hour' },
  { prefix: '', end: 100, suffix: '+', label: 'Free Resources on Cybelator' },
];

function TrustBar() {
  return (
    <div className="bg-brand-navy border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-2xl sm:text-3xl font-extrabold text-brand-teal-light mb-1 tracking-tight">
                <Counter prefix={s.prefix} end={s.end} suffix={s.suffix} />
              </div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustBar;
