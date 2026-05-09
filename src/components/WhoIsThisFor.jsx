import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, RefreshCw, Network, Monitor } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    title: 'Students',
    body: 'Curious about cybersecurity? Start learning the basics, explore career paths, and discover if this field is right for you.',
    cta: 'Start Learning Free →',
    to: '/guides',
  },
  {
    icon: Briefcase,
    title: 'Freshers & Job Seekers',
    body: 'Break into cybersecurity with structured training and real enterprise lab experience at CortiSec Academy (by CortiSec Technologies).',
    cta: 'Explore Academy →',
    to: 'https://cortisec.com/academy',
    external: true,
  },
  {
    icon: RefreshCw,
    title: 'Career Switchers',
    body: 'Coming from IT, networking, or support? Your existing skills are a head start in cybersecurity.',
    cta: 'See How →',
    to: 'https://cortisec.com/academy',
    external: true,
  },
  {
    icon: Network,
    title: 'Networking Engineers',
    body: 'Firewall, network security, and SASE skills are in high demand. Transition naturally into security.',
    cta: 'Learn More →',
    to: '/guides',
  },
  {
    icon: Monitor,
    title: 'IT Support Professionals',
    body: 'Your helpdesk experience is valuable. Pivot into SOC analyst and endpoint security roles.',
    cta: 'Explore Path →',
    to: 'https://cortisec.com/academy',
    external: true,
  },
];

function WhoIsThisFor() {
  return (
    <section id="who-for" className="bg-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Who Is Cybelator For?</h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mt-3 rounded-full mb-6" />
          <p className="text-base text-slate-500 max-w-2xl mx-auto text-center leading-relaxed">
            Whether you want to stay safe online or build a career — you belong here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="h-full"
            >
              <div className="bg-white border-t-4 border-t-brand-accent rounded-2xl shadow-sm hover:shadow-card p-8 flex flex-col justify-between min-h-[260px] border border-slate-100 transition-all duration-200 gap-4">
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                    <card.icon className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-bold text-brand-dark">{card.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{card.body}</p>
                  </div>
                </div>
                {card.external ? (
                  <a
                    href={card.to}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-accent text-sm font-semibold hover:underline"
                  >
                    {card.cta}
                  </a>
                ) : (
                  <Link
                    to={card.to}
                    className="text-brand-accent text-sm font-semibold hover:underline"
                  >
                    {card.cta}
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Academy transition CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-center mt-10"
        >
          <a href="https://cortisec.com/academy" target="_blank" rel="noopener noreferrer" className="text-brand-accent font-semibold text-sm hover:underline">
            Want hands-on enterprise training? Explore CortiSec Academy (by CortiSec Technologies) →
          </a>
        </motion.div>

      </div>
    </section>
  );
}

export default WhoIsThisFor;
