import React from 'react';

export const MessageBubble = ({ message }) => {
  const isUser = message.role === 'user';

  const notFoundMessage = "I didn't find the answer in provided pdf.";

  const showSources = 
    message.sources && 
    message.sources.length > 0 && 
    message.content !== notFoundMessage;

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-3xl ${
          isUser ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'
        } rounded-2xl p-4 shadow-sm`}
      >
        <p className={isUser ? 'text-white' : 'text-gray-900'}>{message.content}</p>
        {showSources && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="text-xs font-semibold text-gray-600 mb-2">Sources:</p>
            <div className="space-y-1 flex gap-3 flex-wrap">
              {message.sources.map((source, i) => (
                <p key={i} className="text-xs text-gray-500">
                  📄 {source.name} - Page {source.page}
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};