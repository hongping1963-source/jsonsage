import React, { useState } from 'react';
import { NucleiService } from '../../services/nucleiService';
import { nucleiConfig } from '../../config/nuclei';
import styles from './styles.module.css';

interface ScanResult {
  template: string;
  severity: string;
  info: {
    name: string;
    description: string;
  };
  matched: string;
  timestamp: string;
}

const NucleiScanner: React.FC = () => {
  const [target, setTarget] = useState('');
  const [results, setResults] = useState<ScanResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const nucleiService = new NucleiService(
    nucleiConfig.binaryPath,
    nucleiConfig.templatesPath
  );

  const handleScan = async () => {
    if (!target) {
      setError('Please enter a target URL or file path');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const scanResults = await nucleiService.runScan({
        target,
        ...nucleiConfig.defaultScanOptions,
      });

      const parsedResults = nucleiService.parseScanResults(scanResults);
      setResults(parsedResults);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during the scan');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2>Nuclei JSON Scanner</h2>
      
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={target}
          onChange={(e) => setTarget(e.target.value)}
          placeholder="Enter target URL or file path"
          className={styles.input}
        />
        <button
          onClick={handleScan}
          disabled={loading}
          className={styles.button}
        >
          {loading ? 'Scanning...' : 'Start Scan'}
        </button>
      </div>

      {error && <div className={styles.error}>{error}</div>}

      {results.length > 0 && (
        <div className={styles.results}>
          <h3>Scan Results</h3>
          {results.map((result, index) => (
            <div key={index} className={styles.resultItem}>
              <h4>{result.info.name}</h4>
              <p className={styles.description}>{result.info.description}</p>
              <div className={styles.metadata}>
                <span className={styles.severity}>Severity: {result.severity}</span>
                <span className={styles.template}>Template: {result.template}</span>
                <span className={styles.timestamp}>Found: {result.timestamp}</span>
              </div>
              <div className={styles.matched}>
                <pre>{result.matched}</pre>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NucleiScanner;
