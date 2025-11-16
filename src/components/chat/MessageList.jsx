import React, { useRef, useEffect } from 'react';
import { MessageBubble } from './MessageBubble';
import { Loader2 } from 'lucide-react';

export const MessageList = ({ messages, loading }) => {
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {messages.map((msg, idx) => (
        <MessageBubble key={idx} message={msg} />
      ))}
      {loading && (
        <div className="flex justify-start">
          <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm">
            <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
          </div>
        </div>
      )}
      <div ref={messagesEndRef} />
    </div>
  );
};