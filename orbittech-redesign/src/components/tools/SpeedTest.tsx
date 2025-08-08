import React, { useState } from 'react';
import Button from '../shared/Button';

interface SpeedTestProps {
  variant?: 'embedded' | 'modal' | 'page';
}

const SpeedTest: React.FC<SpeedTestProps> = ({ variant = 'embedded' }) => {
  const [testResults, setTestResults] = useState<{
    download: number;
    upload: number;
    ping: number;
    provider: string;
  } | null>(null);
  const [isTestingDownload, setIsTestingDownload] = useState(false);
  const [isTestingUpload, setIsTestingUpload] = useState(false);
  const [isTestingPing, setIsTestingPing] = useState(false);

  // Simulated speed test (in real implementation, this would use a proper speed test API)
  const runSpeedTest = async () => {
    setTestResults(null);
    
    // Test ping first
    setIsTestingPing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const ping = Math.floor(Math.random() * (100 - 20) + 20);
    setIsTestingPing(false);
    
    // Test download speed
    setIsTestingDownload(true);
    await new Promise(resolve => setTimeout(resolve, 3000));
    const download = Math.floor(Math.random() * (50 - 5) + 5);
    setIsTestingDownload(false);
    
    // Test upload speed
    setIsTestingUpload(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    const upload = Math.floor(Math.random() * (20 - 2) + 2);
    setIsTestingUpload(false);
    
    // Detect provider (simplified simulation)
    const providers = ['Verizon', 'Comcast', 'AT&T', 'CenturyLink', 'Hughes Net'];
    const provider = providers[Math.floor(Math.random() * providers.length)];
    
    setTestResults({ download, upload, ping, provider });
  };

  const isSlowInternet = testResults && testResults.download < 25;

  return (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${variant === 'modal' ? 'max-w-md mx-auto' : ''}`}>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Test Your Current Speed</h3>
        <p className="text-gray-600">See how your current internet compares to Starlink</p>
      </div>

      {!testResults && !isTestingPing && !isTestingDownload && !isTestingUpload && (
        <div className="text-center mb-6">
          <Button onClick={runSpeedTest} size="lg" className="px-8">
            Start Speed Test
          </Button>
          <p className="text-xs text-gray-500 mt-2">Test takes about 10 seconds</p>
        </div>
      )}

      {/* Testing States */}
      {(isTestingPing || isTestingDownload || isTestingUpload) && (
        <div className="space-y-4 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Ping</span>
            <div className="flex items-center">
              {isTestingPing ? (
                <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
              ) : (
                <span className="text-green-600 font-semibold">✓</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Download Speed</span>
            <div className="flex items-center">
              {isTestingDownload ? (
                <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
              ) : isTestingPing ? (
                <span className="text-gray-400">⏳</span>
              ) : (
                <span className="text-green-600 font-semibold">✓</span>
              )}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Upload Speed</span>
            <div className="flex items-center">
              {isTestingUpload ? (
                <div className="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div>
              ) : (isTestingDownload || isTestingPing) ? (
                <span className="text-gray-400">⏳</span>
              ) : (
                <span className="text-green-600 font-semibold">✓</span>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Results */}
      {testResults && (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-gray-800">{testResults.ping}ms</div>
              <div className="text-xs text-gray-600">Ping</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-gray-800">{testResults.download}</div>
              <div className="text-xs text-gray-600">Mbps Down</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="text-2xl font-bold text-gray-800">{testResults.upload}</div>
              <div className="text-xs text-gray-600">Mbps Up</div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">Current Provider: {testResults.provider}</p>
            
            {isSlowInternet ? (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-red-500 text-xl mr-2">⚠️</span>
                  <span className="font-semibold text-red-800">Slow Internet Detected</span>
                </div>
                <p className="text-red-700 text-sm mb-3">
                  Your speeds are below the FCC broadband standard of 25 Mbps
                </p>
              </div>
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center mb-2">
                  <span className="text-yellow-500 text-xl mr-2">📊</span>
                  <span className="font-semibold text-yellow-800">Could Be Better</span>
                </div>
                <p className="text-yellow-700 text-sm mb-3">
                  Starlink delivers consistent 100-200+ Mbps speeds
                </p>
              </div>
            )}

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">With Starlink You'd Get:</h4>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-700">20-40ms</div>
                  <div className="text-xs text-blue-600">Low Latency</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-700">100-200+</div>
                  <div className="text-xs text-blue-600">Mbps Down</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-blue-700">20-40</div>
                  <div className="text-xs text-blue-600">Mbps Up</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Button className="w-full" onClick={() => window.location.href = '/quote'}>
                Get Starlink Quote
              </Button>
              <Button variant="secondary" className="w-full" onClick={runSpeedTest}>
                Test Again
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeedTest;
