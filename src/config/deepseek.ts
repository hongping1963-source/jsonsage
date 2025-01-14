import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export function useDeepseekConfig() {
  const {siteConfig} = useDocusaurusContext();
  return {
    API_KEY: (siteConfig.customFields?.deepseekApiKey as string) || '',
    API_BASE_URL: 'https://api.deepseek.com/v1',
    DEFAULT_MODEL: 'deepseek-chat',
    MAX_HISTORY_LENGTH: 10, // 保存最近的10条对话记录
    MAX_TOKENS: 2000,
    TEMPERATURE: 0.7,
  };
}
