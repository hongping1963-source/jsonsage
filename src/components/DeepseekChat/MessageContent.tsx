import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneLight, oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useColorMode } from '@docusaurus/theme-common';
import styles from './styles.module.css';

interface MessageContentProps {
  content: string;
}

export default function MessageContent({ content }: MessageContentProps): JSX.Element {
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === 'dark';

  return (
    <ReactMarkdown
      className={styles.markdownContent}
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          const language = match ? match[1] : '';
          
          if (!inline && language) {
            return (
              <SyntaxHighlighter
                style={isDarkTheme ? oneDark : oneLight}
                language={language}
                PreTag="div"
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            );
          }

          return inline ? (
            <code className={className} {...props}>
              {children}
            </code>
          ) : (
            <SyntaxHighlighter
              style={isDarkTheme ? oneDark : oneLight}
              language="text"
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          );
        },
        // 自定义其他 Markdown 元素的渲染
        p: ({ children }) => <p className={styles.paragraph}>{children}</p>,
        a: ({ href, children }) => (
          <a href={href} target="_blank" rel="noopener noreferrer" className={styles.link}>
            {children}
          </a>
        ),
        ul: ({ children }) => <ul className={styles.list}>{children}</ul>,
        ol: ({ children }) => <ol className={styles.list}>{children}</ol>,
        li: ({ children }) => <li className={styles.listItem}>{children}</li>,
        blockquote: ({ children }) => (
          <blockquote className={styles.blockquote}>{children}</blockquote>
        ),
        table: ({ children }) => (
          <div className={styles.tableWrapper}>
            <table className={styles.table}>{children}</table>
          </div>
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
