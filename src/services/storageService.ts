import { Message } from '../hooks/useDeepseekChat';

const STORAGE_KEY = 'deepseek_chat_messages';

export const storageService = {
  saveMessages(messages: Message[]): void {
    try {
      const serializedMessages = messages.map(msg => ({
        ...msg,
        timestamp: msg.timestamp.toISOString(),
      }));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(serializedMessages));
    } catch (error) {
      console.error('Failed to save messages:', error);
    }
  },

  loadMessages(): Message[] {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (!data) return [];

      const messages = JSON.parse(data);
      return messages.map(msg => ({
        ...msg,
        timestamp: new Date(msg.timestamp),
      }));
    } catch (error) {
      console.error('Failed to load messages:', error);
      return [];
    }
  },

  clearMessages(): void {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      console.error('Failed to clear messages:', error);
    }
  },
};
