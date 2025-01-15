import { useState, useCallback, useRef, useEffect } from 'react';
import { useDeepseekService, ChatMessage } from '../services/deepseekService';
import { useDeepseekConfig } from '../config/deepseek';
import { storageService } from '../services/storageService';

export interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

interface UseDeepseekChatResult {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<void>;
  clearMessages: () => void;
}

export function useDeepseekChat(): UseDeepseekChatResult {
  const [messages, setMessages] = useState<Message[]>(() => {
    const savedMessages = storageService.loadMessages();
    return savedMessages.length > 0 ? savedMessages : [
      {
        id: '1',
        content: '你好！我是 DeepSeek AI 助手，有什么我可以帮你的吗？',
        isUser: false,
        timestamp: new Date(),
      },
    ];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const conversationHistoryRef = useRef<ChatMessage[]>([]);
  const config = useDeepseekConfig();
  const deepseekService = useDeepseekService();

  useEffect(() => {
    storageService.saveMessages(messages);
  }, [messages]);

  const updateConversationHistory = useCallback((newMessage: ChatMessage) => {
    conversationHistoryRef.current = [
      ...conversationHistoryRef.current,
      newMessage,
    ].slice(-config.MAX_HISTORY_LENGTH);
  }, [config.MAX_HISTORY_LENGTH]);

  const sendMessage = useCallback(async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: content.trim(),
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setError(null);

    const userChatMessage: ChatMessage = {
      role: 'user',
      content: content.trim(),
    };
    updateConversationHistory(userChatMessage);

    try {
      const response = await deepseekService.sendMessage(
        conversationHistoryRef.current
      );

      if (response.error) {
        setError(response.error);
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.message.content,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      updateConversationHistory(response.message);
    } catch (err) {
      setError(err instanceof Error ? err.message : '发送消息时出错');
    } finally {
      setIsLoading(false);
    }
  }, [isLoading, updateConversationHistory, deepseekService]);

  const clearMessages = useCallback(() => {
    const initialMessage = {
      id: Date.now().toString(),
      content: '你好！我是 DeepSeek AI 助手，有什么我可以帮你的吗？',
      isUser: false,
      timestamp: new Date(),
    };
    setMessages([initialMessage]);
    conversationHistoryRef.current = [];
    setError(null);
    storageService.clearMessages();
  }, []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearMessages,
  };
}
