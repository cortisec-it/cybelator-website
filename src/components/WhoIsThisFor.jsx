import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, RefreshCw, Network, Monitor } from 'lucide-react';

const audiences = [
  {
    icon: GraduationCap,
    iconColor: 'text-brand-accent',
    title: 'Students',
    body: 'Curious about cybersecurity? Start learning the basics, explore career paths, and discover if this field is right for you.',
    cta: 'Start Learning Free →',
    to: '/guides',
  },
  {
    icon: Briefcase,
    iconColor: 'text-blue-600',
    title: 'Freshers & Job Seekers',
    body: 'Break into cybersecurity with structured training and real enterprise lab experience at CortiSec Academy.',
    cta: 'Explore Academy →',
    to: '/academy',
  },
  {
    icon: RefreshCw,
    iconColor: 'text-purple-600',
    title: 'Career Switchers',
    body: 'Coming from IT, networking, or support? Your existing skills are a head start in cybersecurity.',
    cta: 'See How →',
    to: '/academy',
  },
  {
    icon: Network,
    iconColor: 'text-orange-500',
    title: 'Networking Engineers',
    body: 'Firewall, network security, and SASE skills are in high demand. Transition naturally into security.',
    cta: 'Learn More →',
    to: '/guides',
  },
  {
    icon: Monitor,
    iconColor: 'text-green-600',
    title: 'IT Support Professionals',
    body: 'Your helpdesk experience is valuable. Pivot into SOC analyst and endpoint security roles.',
    cta: 'Explore Path →',
    to: '/academy',
  },
];

function WhoIsThisFor() {
  return (
    <section id="who-for" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-brand-dark">Who Is Cybelator For?</h2>
          <div className="w-12 h-0.5 bg-brand-accent mx-auto mt-3 rounded-full mb-4" />
          <p className="text-slate-500 text-base max-w-xl mx-auto leading-relaxed">
            Whether you want to stay safe online or build a career — you belong here.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
              <div className="bg-white border-t-4 border-t-brand-accent rounded-2xl shadow-sm hover:shadow-card p-6 flex flex-col gap-4 h-full border border-slate-100 transition-all duration-200">
                <card.icon className={`w-8 h-8 ${card.iconColor}`} />
                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="text-base font-bold text-brand-dark">{card.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{card.body}</p>
                </div>
                <Link
                  to={card.to}
                  className="text-brand-accent text-sm font-semibold hover:underline"
                >
                  {card.cta}
                </Link>
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
          <Link to="/academy" className="text-brand-accent font-semibold text-sm hover:underline">
            Want hands-on enterprise training? Explore CortiSec Academy →
          </Link>
        </motion.div>

      </div>
    </section>
  );
}

export default WhoIsThisFor;
