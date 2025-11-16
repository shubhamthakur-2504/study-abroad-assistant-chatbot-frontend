'use client';

import React, { useState, useEffect } from 'react';
import { Modal } from '@/components/ui/Modal';
import { DocumentSelector } from './DocumentSelector';
import { WelcomeScreen } from './WelcomeScreen';
import { MessageList } from './MessageList';
import { ChatInput } from './ChatInput';
import { chatApi } from '@/lib/api';

export const ChatInterface = ({ currentChat, onChatCreated, onChatHistoryUpdate }) => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [showDocumentSelector, setShowDocumentSelector] = useState(false);

  useEffect(() => {
    if (currentChat) {
      setMessages(currentChat.messages || []);
      setSelectedDocument(currentChat.document);
    } else {
      setMessages([]);
      setSelectedDocument(null);
    }
  }, [currentChat]);

  const handleDocumentSelect = (doc) => {
    setSelectedDocument(doc);
    setShowDocumentSelector(false);
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !selectedDocument) return;

    const userMessage = { role: 'user', content: inputMessage };
    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setLoading(true);

    try {
      const response = currentChat
        ? await chatApi.continueChat(currentChat.id, inputMessage, selectedDocument.id)
        : await chatApi.startChat(inputMessage, selectedDocument.id);

      const assistantMessage = {
        role: 'assistant',
        content: response.data.answer,
        sources: response.data.sources || [],
      };
      
      setMessages((prev) => [...prev, assistantMessage]);

      if (!currentChat && response.data.chat_id) {
        const newChatMessages = [userMessage, assistantMessage];
        onChatCreated({ 
          id: response.data.id,
          document: selectedDocument,
          messages: newChatMessages,
          doc_id: selectedDocument.id 
        });
        onChatHistoryUpdate();
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      setMessages((prev) => [
        ...prev,
        { 
          role: 'assistant', 
          content: 'Sorry, there was an error processing your request. Please try again.' 
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleQuestionClick = (question) => {
    if (!selectedDocument) {
      setShowDocumentSelector(true);
      return;
    }
    setInputMessage(question);
  };

  return (
    <>
      <div className="flex flex-col h-full">
        {messages.length === 0 ? (
          <WelcomeScreen 
            onQuestionClick={handleQuestionClick}
            onSelectDocument={() => setShowDocumentSelector(true)}
          />
        ) : (
          <MessageList messages={messages} loading={loading} />
        )}
        <ChatInput
          value={inputMessage}
          onChange={setInputMessage}
          onSend={handleSendMessage}
          disabled={loading}
          selectedDocument={selectedDocument}
        />
      </div>

      <Modal
        isOpen={showDocumentSelector}
        onClose={() => setShowDocumentSelector(false)}
        title="Select Study Guide"
        size="2xl"
      >
        <DocumentSelector
          onDocumentSelect={handleDocumentSelect}
          selectedDocument={selectedDocument}
        />
      </Modal>
    </>
  );
};