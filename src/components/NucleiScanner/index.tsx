import React, { useState, useEffect } from 'react';
import { ValidationResult } from '../../services/types';
import { NucleiService } from '../../services/nucleiService';
import styles from './styles.module.css';

interface ScannerProps {
  onScanComplete?: (results: ValidationResult[]) => void;
}

const nucleiService = new NucleiService();

const NucleiScanner: React.FC<ScannerProps> = ({ onScanComplete }) => {
  const [target, setTarget] = useState('');
  const [results, setResults] = useState<ValidationResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [selectedTemplates, setSelectedTemplates] = useState<string[]>([]);
  const [availableTemplates, setAvailableTemplates] = useState<string[]>([]);
  const [customSchema, setCustomSchema] = useState('');

  useEffect(() => {
    loadTemplates();
  }, []);

  const loadTemplates = async () => {
    try {
      const templates = await nucleiService.getValidationTemplates();
      setAvailableTemplates(templates);
    } catch (err) {
      console.error('Error loading templates:', err);
    }
  };

  const handleScan = async () => {
    if (!target) {
      setError('请输入目标 URL 或文件路径');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const scanResults = await nucleiService.runScan({
        target,
        templates: selectedTemplates,
        severity: ['low', 'medium', 'high', 'critical'],
        outputFormat: 'json',
        customSchema: customSchema || undefined,
      });

      setResults(scanResults);
      onScanComplete?.(scanResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : '扫描过程中发生错误');
    } finally {
      setLoading(false);
    }
  };

  const handleTemplateSelect = (template: string) => {
    setSelectedTemplates(prev => 
      prev.includes(template)
        ? prev.filter(t => t !== template)
        : [...prev, template]
    );
  };

  const getSeverityClass = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'critical': return styles.critical;
      case 'high': return styles.high;
      case 'medium': return styles.medium;
      case 'low': return styles.low;
      default: return styles.info;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="输入目标 URL 或 JSON 文件路径"
          className={styles.input}
        />
        <button
          onClick={handleScan}
          disabled={loading}
          className={styles.button}
        >
          {loading ? '扫描中...' : '开始扫描'}
        </button>
      </div>

      <div className={styles.templatesContainer}>
        <h3>验证模板</h3>
        <div className={styles.templatesList}>
          {availableTemplates.map(template => (
            <label key={template} className={styles.templateItem}>
              <input
                type="checkbox"
                checked={selectedTemplates.includes(template)}
                onChange={() => handleTemplateSelect(template)}
              />
              {template.replace('.yaml', '')}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.schemaContainer}>
        <h3>自定义 Schema（可选）</h3>
        <textarea
          value={customSchema}
          onChange={(e) => setCustomSchema(e.target.value)}
          placeholder="输入自定义 JSON schema"
          className={styles.schemaInput}
        />
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {results.length > 0 && (
        <div className={styles.results}>
          <h3>扫描结果</h3>
          {results.map((result, index) => (
            <div key={index} className={`${styles.resultItem} ${getSeverityClass(result.info.severity)}`}>
              <h4>{result.info.name}</h4>
              <p className={styles.description}>{result.info.description}</p>
              <div className={styles.metadata}>
                <span className={styles.severity}>
                  严重程度: {result.info.severity}
                </span>
                <span className={styles.template}>
                  模板: {result.template}
                </span>
                <span className={styles.timestamp}>
                  发现时间: {result.timestamp}
                </span>
              </div>
              {result.extracted_results && (
                <div className={styles.extractedResults}>
                  <h5>提取的数据:</h5>
                  <pre>{JSON.stringify(result.extracted_results, null, 2)}</pre>
                </div>
              )}
              <div className={styles.matched}>
                <h5>匹配内容:</h5>
                <pre>{result.matched}</pre>
              </div>
              {result.curl_command && (
                <div className={styles.curlCommand}>
                  <h5>Curl 命令:</h5>
                  <pre>{result.curl_command}</pre>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NucleiScanner;
