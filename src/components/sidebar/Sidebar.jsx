'use client';

import React from 'react';
import { BookOpen, X, Plus, Upload } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ChatHistoryList } from './ChatHistoryList';
import { UserProfile } from './UserProfile';

export const Sidebar = ({
  isOpen,
  onClose,
  currentChat,
  onChatSelect,
  onNewChat,
  onUploadClick,
  chatHistoryRefresh,
}) => {
  return (
    <div
      className={`${
        isOpen ? 'w-80' : 'w-0'
      } transition-all duration-300 bg-white border-r border-gray-200 flex flex-col overflow-hidden`}
    >
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            <span className="font-semibold text-gray-900">Study Abroad</span>
          </div>
          <Button variant="ghost" onClick={onClose} className="p-2 lg:hidden">
            <X className="w-5 h-5" />
          </Button>
        </div>

        <div className="space-y-2">
          <Button onClick={onNewChat} className="w-full">
            <Plus className="w-4 h-4" />
            New Chat
          </Button>
          <Button onClick={onUploadClick} variant="outline" className="w-full">
            <Upload className="w-4 h-4" />
            Upload Document
          </Button>
        </div>
      </div>

      <ChatHistoryList
        currentChat={currentChat}
        onChatSelect={onChatSelect}
        refreshTrigger={chatHistoryRefresh}
      />

      <UserProfile />
    </div>
  );
};