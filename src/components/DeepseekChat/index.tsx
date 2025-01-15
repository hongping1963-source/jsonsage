import React, { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';
import { useDeepseekChat } from '../../hooks/useDeepseekChat';
import MessageContent from './MessageContent';
import styles from './styles.module.css';

export default function DeepseekChat(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { messages, isLoading, error, sendMessage, clearMessages } = useDeepseekChat();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const message = inputValue;
    setInputValue('');
    await sendMessage(message);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <div className={clsx(styles.chatContainer, !isExpanded && styles.minimized)}>
      <div className={styles.chatHeader}>
        <div className={styles.chatTitle}>DeepSeek AI 助手</div>
        <div className={styles.chatControls}>
          <button
            className={styles.clearButton}
            onClick={clearMessages}
            title="清除对话"
          >
            ♻️
          </button>
          <button
            className={styles.minimizeButton}
            onClick={() => setIsExpanded(!isExpanded)}
            title={isExpanded ? '最小化' : '展开'}
          >
            {isExpanded ? '−' : '+'}
          </button>
        </div>
      </div>

      {isExpanded && (
        <>
          <div className={styles.messagesContainer}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={clsx(
                  styles.message,
                  msg.isUser ? styles.userMessage : styles.assistantMessage
                )}
              >
                <div className={styles.messageContent}>
                  <MessageContent content={msg.content} />
                </div>
              </div>
            ))}
            {isLoading && (
              <div className={clsx(styles.message, styles.assistantMessage)}>
                <div className={styles.messageContent}>
                  <div className={styles.typingIndicator}>
                    <span>•</span>
                    <span>•</span>
                    <span>•</span>
                  </div>
                </div>
              </div>
            )}
            {error && (
              <div className={styles.errorMessage}>
                ⚠️ {error}
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form className={styles.inputContainer} onSubmit={handleSubmit}>
            <textarea
              className={styles.input}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="输入消息..."
              disabled={isLoading}
              rows={1}
            />
            <button
              type="submit"
              className={styles.sendButton}
              disabled={isLoading || !inputValue.trim()}
            >
              发送
            </button>
          </form>
        </>
      )}
    </div>
  );
}
