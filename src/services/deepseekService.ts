import { useDeepseekConfig } from '../config/deepseek';

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface ChatResponse {
  message: ChatMessage;
  error?: string;
}

export function useDeepseekService() {
  const config = useDeepseekConfig();

  const handleResponse = async (response: Response): Promise<any> => {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error?.message || `API error: ${response.status}`);
    }
    return response.json();
  };

  const sendMessage = async (
    messages: ChatMessage[],
    options: {
      temperature?: number;
      maxTokens?: number;
    } = {}
  ): Promise<ChatResponse> => {
    try {
      if (!config.API_KEY) {
        throw new Error('DeepSeek API key is not configured');
      }

      const response = await fetch(`${config.API_BASE_URL}/chat/completions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`,
        },
        body: JSON.stringify({
          model: config.DEFAULT_MODEL,
          messages,
          temperature: options.temperature || config.TEMPERATURE,
          max_tokens: options.maxTokens || config.MAX_TOKENS,
        }),
      });

      const data = await handleResponse(response);
      return {
        message: data.choices[0].message,
      };
    } catch (error) {
      console.error('DeepSeek API Error:', error);
      return {
        message: {
          role: 'assistant',
          content: '抱歉，我遇到了一些问题。请稍后再试。',
        },
        error: error instanceof Error ? error.message : '未知错误',
      };
    }
  };

  return {
    sendMessage,
  };
}
