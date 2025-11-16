'use client';

import React, { useState } from 'react';
import { Sidebar } from '@/components/sidebar/Sidebar';
import { Header } from './Header';
import { ChatInterface } from '@/components/chat/ChatInterface';
import { UploadModal } from '@/components/documents/UploadModal';

export const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentDocument, setCurrentDocument] = useState(null);
  const [currentChat, setCurrentChat] = useState(null);
  const [uploadModalOpen, setUploadModalOpen] = useState(false);
  const [chatHistoryRefresh, setChatHistoryRefresh] = useState(0);

  const handleNewChat = () => {
    setCurrentChat(null);
    setCurrentDocument(null);
    setChatHistoryRefresh(0);
  };

  const handleChatSelect = (chat) => {
    setCurrentChat(chat);
    setCurrentDocument(chat.document.id);
  };

  const handleChatCreated = (chat) => {
    setCurrentChat(chat);
    if (chat.document) {
      setCurrentDocument(chat.document);
    }
  };

  const handleChatHistoryUpdate = () => {
    setChatHistoryRefresh(prev => prev + 1);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        currentChat={currentChat}
        onChatSelect={handleChatSelect}
        onNewChat={handleNewChat}
        onUploadClick={() => setUploadModalOpen(true)}
        chatHistoryRefresh={chatHistoryRefresh}
      />

      <div className="flex-1 flex flex-col">
        <Header
          sidebarOpen={sidebarOpen}
          onMenuClick={() => setSidebarOpen(true)}
          currentDocument={currentDocument}
        />

        <ChatInterface
          onChatHistoryUpdate={handleChatHistoryUpdate}
          currentChat={currentChat}
          onChatCreated={handleChatCreated}
        />
      </div>

      <UploadModal isOpen={uploadModalOpen} onClose={() => setUploadModalOpen(false)}/>
    </div>
  );
};