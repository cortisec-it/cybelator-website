import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

function QuizCard({ quiz, currentQuestion, onAnswer, totalQuestions }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const question = quiz.questions[currentQuestion];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowFeedback(true);
  };

  const handleNext = () => {
    onAnswer({
      question: question.question,
      selected: selectedOption,
      isCorrect: selectedOption === question.correctAnswer
    });
    setSelectedOption(null);
    setShowFeedback(false);
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-600">
            Question {currentQuestion + 1} of {totalQuestions}
          </span>
          <span className="text-sm font-medium text-[#06B6D4]">
            {Math.round(((currentQuestion + 1) / totalQuestions) * 100)}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div 
            className="bg-[#06B6D4] h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <h3 className="text-2xl font-bold text-[#0F172A] mb-6">{question.question}</h3>

      {/* Example (if exists) */}
      {question.example && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700 italic">{question.example}</p>
        </div>
      )}

      {/* Options */}
      <div className="space-y-3 mb-6">
        {question.options.map((option, index) => {
          const isSelected = selectedOption === option;
          const isCorrect = option === question.correctAnswer;
          const showCorrect = showFeedback && isCorrect;
          const showIncorrect = showFeedback && isSelected && !isCorrect;

          return (
            <button
              key={index}
              onClick={() => !showFeedback && handleOptionClick(option)}
              disabled={showFeedback}
              className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                showCorrect
                  ? 'border-green-500 bg-green-50'
                  : showIncorrect
                  ? 'border-red-500 bg-red-50'
                  : isSelected
                  ? 'border-[#06B6D4] bg-cyan-50'
                  : 'border-gray-200 hover:border-gray-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`font-medium ${
                  showCorrect ? 'text-green-900' : showIncorrect ? 'text-red-900' : 'text-[#0F172A]'
                }`}>
                  {option}
                </span>
                {showCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                {showIncorrect && <XCircle className="w-5 h-5 text-red-600" />}
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {showFeedback && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`rounded-lg p-4 mb-6 ${
            selectedOption === question.correctAnswer
              ? 'bg-green-50 border border-green-200'
              : 'bg-red-50 border border-red-200'
          }`}
        >
          <p className={`font-semibold mb-2 ${
            selectedOption === question.correctAnswer ? 'text-green-900' : 'text-red-900'
          }`}>
            {selectedOption === question.correctAnswer ? '✓ Correct!' : '✗ Incorrect'}
          </p>
          <p className={`text-sm ${
            selectedOption === question.correctAnswer ? 'text-green-800' : 'text-red-800'
          }`}>
            {question.explanation}
          </p>
        </motion.div>
      )}

      {/* Next Button */}
      {showFeedback && (
        <Button 
          onClick={handleNext}
          className="w-full bg-[#06B6D4] hover:bg-cyan-600 text-white"
        >
          {currentQuestion < totalQuestions - 1 ? 'Next Question' : 'View Results'}
        </Button>
      )}
    </div>
  );
}

export default QuizCard;