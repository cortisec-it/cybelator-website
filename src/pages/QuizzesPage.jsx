import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Brain, Award, RefreshCw } from 'lucide-react';
import QuizCard from '@/components/QuizCard';
import { quizzesData } from '@/data/quizzesData';
import { Button } from '@/components/ui/button';

function QuizzesPage() {
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleStartQuiz = (quizId) => {
    const quiz = quizzesData.find(q => q.id === quizId);
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < selectedQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    return answers.filter(answer => answer.isCorrect).length;
  };

  const getRecommendations = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) {
      return {
        title: "Excellent! You're security-savvy!",
        message: "You have strong cybersecurity awareness. Keep staying vigilant and continue educating others.",
        suggestions: ["Share your knowledge with friends and family", "Stay updated with latest security trends"]
      };
    } else if (percentage >= 60) {
      return {
        title: "Good job! Room for improvement",
        message: "You have a solid foundation but could benefit from reviewing some security practices.",
        suggestions: ["Review our Password Safety guide", "Practice identifying phishing attempts"]
      };
    } else {
      return {
        title: "Time to level up your security!",
        message: "Your digital security needs attention. Don't worry, we'll help you improve!",
        suggestions: ["Start with our Essential Protection Guides", "Enable two-factor authentication on all accounts", "Review Email & Phishing Awareness guide"]
      };
    }
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
  };

  return (
    <>
      <Helmet>
        <title>Interactive Security Quizzes - Cybelator</title>
        <meta name="description" content="Test your cybersecurity knowledge with Cybelator's interactive quizzes. Learn to spot phishing attempts and improve your digital security habits." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 via-brand-dark to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-500/30 px-4 py-2 rounded-full mb-6">
              <Brain className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Interactive learning</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Test Your Security Knowledge
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Challenge yourself with interactive quizzes designed to improve your cybersecurity awareness
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {!selectedQuiz ? (
            // Quiz Selection
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-brand-dark mb-4">Choose Your Quiz</h2>
                <p className="text-xl text-gray-600">
                  Select a quiz to test your knowledge and get personalized recommendations
                </p>
              </motion.div>

              {quizzesData.map((quiz, index) => (
                <motion.div
                  key={quiz.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:shadow-2xl transition-all hover:border-brand-accent cursor-pointer"
                  onClick={() => handleStartQuiz(quiz.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="bg-gradient-to-br from-brand-accent to-cyan-600 p-3 rounded-lg">
                        <quiz.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-brand-dark">{quiz.title}</h3>
                        <p className="text-gray-600">{quiz.questions.length} questions • {quiz.estimatedTime}</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{quiz.description}</p>
                  <Button className="bg-brand-accent hover:bg-cyan-600 text-white">
                    Start Quiz
                  </Button>
                </motion.div>
              ))}
            </div>
          ) : !showResults ? (
            // Quiz Questions
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <QuizCard
                quiz={selectedQuiz}
                currentQuestion={currentQuestion}
                onAnswer={handleAnswer}
                totalQuestions={selectedQuiz.questions.length}
              />
            </motion.div>
          ) : (
            // Results
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="bg-white border-2 border-gray-200 rounded-xl p-8"
            >
              <div className="text-center mb-8">
                <div className="bg-gradient-to-br from-brand-accent to-cyan-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-brand-dark mb-2">Quiz Complete!</h2>
                <div className="text-6xl font-bold text-brand-accent my-4">
                  {calculateScore()}/{selectedQuiz.questions.length}
                </div>
                <p className="text-xl text-gray-600">
                  {Math.round((calculateScore() / selectedQuiz.questions.length) * 100)}% Correct
                </p>
              </div>

              {(() => {
                const recommendations = getRecommendations(calculateScore(), selectedQuiz.questions.length);
                return (
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-2xl font-bold text-brand-dark mb-3">{recommendations.title}</h3>
                    <p className="text-gray-700 mb-4">{recommendations.message}</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-brand-dark">Recommended next steps:</p>
                      <ul className="space-y-2">
                        {recommendations.suggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-700">
                            <span className="text-brand-accent font-bold">→</span>
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })()}

              <div className="flex gap-4 justify-center">
                <Button 
                  onClick={resetQuiz}
                  className="bg-brand-accent hover:bg-cyan-600 text-white flex items-center gap-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  Try Another Quiz
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

export default QuizzesPage;