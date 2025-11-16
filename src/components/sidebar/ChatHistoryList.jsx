'use client';

import React from 'react';
import { MessageSquare } from 'lucide-react';
import { useChat } from '@/hooks/useChat';
import { formatDate } from '@/lib/utils';

export const ChatHistoryList = ({ currentChat, onChatSelect, refreshTrigger }) => {
  const { chatHistory, loading } = useChat(refreshTrigger);
  
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <h3 className="font-semibold text-gray-900 text-sm mb-3">Chat History</h3>
      <div className="space-y-2">
        {loading ? (
          <p className="text-sm text-gray-500">Loading chats...</p>
        ) : chatHistory.length === 0 ? (
          <p className="text-sm text-gray-500">No chat history yet</p>
        ) : (
          chatHistory.map((chat) => (
            <button
              key={chat.id}
              onClick={() => onChatSelect(chat)}
              className={`w-full text-left p-3 rounded-lg transition-all hover:cursor-pointer ${
                currentChat?.id === chat.id
                  ? 'bg-blue-50 border border-blue-200'
                  : 'bg-gray-50 hover:bg-gray-100'
              }`}
            >
              <div className="flex items-start gap-2">
                <MessageSquare className="w-4 h-4 text-gray-600 mt-1" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {chat.title || 'Untitled Chat'}
                  </p>
                  <p className="text-xs text-gray-500">{formatDate(chat.created_at)}</p>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};