import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const questions = [
  {
    q: 'What describes you best?',
    options: [
      'Student / Fresher',
      'Working in IT / Networking',
      'Non-tech professional',
      'Just curious about cybersecurity',
    ],
  },
  {
    q: 'What interests you most?',
    options: [
      'Stopping hackers and protecting systems',
      'Investigating cyber crimes',
      'Cloud and modern tech infrastructure',
      'Teaching and building awareness',
    ],
  },
  {
    q: 'How comfortable are you with computers?',
    options: [
      'Very comfortable — I use them daily',
      'Moderate — basic tasks and internet',
      'Learning — still building skills',
      'Minimal — but eager to learn',
    ],
  },
  {
    q: "What's your goal?",
    options: [
      'Get a well-paying tech job fast',
      'Switch from my current career',
      'Upgrade my existing IT skills',
      'Start my own security business',
    ],
  },
  {
    q: 'How much time can you commit per week?',
    options: [
      'Full time — I\'m ready to go all in',
      'Part time — 15–20 hours/week',
      'Flexible — depends on the program',
      'Just exploring for now',
    ],
  },
];

function getResult(answers) {
  const abCount = answers.filter((a) => a <= 1).length;
  return abCount >= 3 ? 'strong' : 'explorer';
}

function CareerQuiz() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [direction, setDirection] = useState(1);

  const result = done ? getResult(answers) : null;
  const isStrong = result === 'strong';

  function handleSelect(idx) {
    setSelected(idx);
  }

  function handleNext() {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    if (current === questions.length - 1) {
      setAnswers(newAnswers);
      setDone(true);
    } else {
      setDirection(1);
      setAnswers(newAnswers);
      setCurrent(current + 1);
      setSelected(null);
    }
  }

  function handleBack() {
    if (current === 0) return;
    setDirection(-1);
    setAnswers(answers.slice(0, -1));
    setCurrent(current - 1);
    setSelected(answers[current - 1]);
  }

  async function handleEmailSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    try {
      await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, tag: 'career-quiz-lead' }),
      });
    } catch (_) {}
    setSubmitted(true);
    setSubmitting(false);
  }

  function handleRetake() {
    setCurrent(0);
    setAnswers([]);
    setSelected(null);
    setDone(false);
    setSubmitted(false);
    setEmail('');
  }

  return (
    <section className="bg-brand-darker py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Is Cybersecurity the Right Career for You?
          </h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto rounded-full mb-4" />
          <p className="text-slate-400 text-base max-w-xl mx-auto">
            Answer 5 quick questions and find out in 60 seconds.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-card max-w-2xl mx-auto p-8">
          {!done ? (
            <>
              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs text-slate-400 mb-1.5">
                  <span>Question {current + 1} of {questions.length}</span>
                  <span>{Math.round(((current) / questions.length) * 100)}% complete</span>
                </div>
                <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-brand-accent rounded-full"
                    initial={false}
                    animate={{ width: `${((current) / questions.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="text-lg font-bold text-brand-dark mb-5">
                    {questions[current].q}
                  </h3>
                  <div className="space-y-3 mb-8">
                    {questions[current].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all duration-150 ${
                          selected === idx
                            ? 'bg-brand-accent/20 border-brand-accent text-brand-dark'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={current === 0}
                  className="text-slate-400 text-sm flex items-center gap-1 disabled:opacity-30 hover:text-slate-600 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Back
                </button>
                <Button
                  onClick={handleNext}
                  disabled={selected === null}
                  className="bg-brand-accent text-brand-dark font-semibold rounded-full px-6 py-2.5 text-sm flex items-center gap-1.5 disabled:opacity-40"
                >
                  {current === questions.length - 1 ? 'See Result' : 'Next'}
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              {isStrong ? (
                <>
                  <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                    <CheckCircle2 className="w-4 h-4" /> Strong Fit
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">
                    You're a strong fit for CortiSec Academy
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Your profile matches our current batch requirements.
                  </p>
                  <Button asChild className="bg-brand-accent text-brand-dark font-bold rounded-full px-7 py-3 text-sm mb-6">
                    <a href="mailto:careers@cortisec.com?subject=Academy Application — Quiz Result: Strong Fit">
                      Apply for Next Batch →
                    </a>
                  </Button>
                </>
              ) : (
                <>
                  <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 rounded-full px-4 py-1.5 text-sm font-semibold mb-4">
                    <CheckCircle2 className="w-4 h-4" /> Explorer Profile
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-2">
                    Start with Cybelator's Free Learning Hub
                  </h3>
                  <p className="text-slate-500 text-sm mb-6">
                    Build your foundation first — then join the Academy.
                  </p>
                  <Button asChild className="bg-brand-accent text-brand-dark font-bold rounded-full px-7 py-3 text-sm mb-6">
                    <Link to="/guides">Explore Free Guides →</Link>
                  </Button>
                </>
              )}

              <div className="border-t border-slate-100 pt-6 mt-2">
                {!submitted ? (
                  <form onSubmit={handleEmailSubmit}>
                    <p className="text-sm font-semibold text-brand-dark mb-3">
                      Get your personalised cybersecurity career guide →
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="flex-1 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/40"
                      />
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="bg-brand-accent text-brand-dark font-semibold rounded-xl px-4 py-2.5 text-sm flex items-center gap-1.5"
                      >
                        <Send className="w-3.5 h-3.5" />
                        {submitting ? 'Sending…' : 'Send Me the Guide'}
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="bg-green-50 border border-green-200 text-green-700 rounded-xl p-3 text-sm">
                    Guide sent! Check your inbox.
                  </div>
                )}
              </div>

              <button
                onClick={handleRetake}
                className="mt-5 text-xs text-slate-400 hover:text-slate-600 transition-colors"
              >
                Retake quiz
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CareerQuiz;
