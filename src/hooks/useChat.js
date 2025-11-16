'use client';

import { useState, useEffect } from 'react';
import { chatApi } from '@/lib/api';

export const useChat = (refreshTrigger) => {
  const [chatHistory, setChatHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadChatHistory = async () => {
    try {
      setLoading(true);
      const response = await chatApi.getHistory(); 
      setChatHistory(response.data);
    } catch (err) {
      console.error('Failed to load chat history:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadChatHistory();
  }, [refreshTrigger]);

  return { chatHistory, loading, refetch: loadChatHistory };
};