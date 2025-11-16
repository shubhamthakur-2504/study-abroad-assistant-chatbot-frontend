import React from 'react';
import { BookOpen } from 'lucide-react';
import { SUGGESTED_QUESTIONS } from '@/constants';


export const WelcomeScreen = ({ onQuestionClick, onSelectDocument }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4">
      <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-4">
        <BookOpen className="w-10 h-10 text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">
        Welcome to Study Abroad Assistant
      </h2>
      <p className="text-gray-600 mb-6 max-w-md">
        Select a study guide to get started, or ask me anything about studying abroad.
      </p>

      <button
        onClick={onSelectDocument}
        className="mb-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium"
      >
        Select Study Guide
      </button>

      <div className="w-full max-w-2xl">
        <p className="text-sm text-gray-500 mb-3">Or try these questions:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SUGGESTED_QUESTIONS.map((question) => (
            <button
              key={question}
              onClick={() => onQuestionClick(question)}
              className="p-4 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-left text-sm text-gray-700"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};