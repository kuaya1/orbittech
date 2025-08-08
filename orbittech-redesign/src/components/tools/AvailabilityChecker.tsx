import React, { useState } from 'react';
import Button from '../shared/Button';

interface AvailabilityResult {
  available: boolean;
  estimatedWaitTime?: string;
  cellCapacity: 'high' | 'medium' | 'low';
  message: string;
}

const AvailabilityChecker: React.FC = () => {
  const [address, setAddress] = useState('');
  const [result, setResult] = useState<AvailabilityResult | null>(null);
  const [isChecking, setIsChecking] = useState(false);
  const [error, setError] = useState('');

  const checkAvailability = async () => {
    if (!address.trim()) {
      setError('Please enter your address');
      return;
    }

    setIsChecking(true);
    setError('');
    setResult(null);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Simulate availability check results
    const scenarios = [
      {
        available: true,
        cellCapacity: 'high' as const,
        message: 'Starlink is available at your location! Orders typically ship within 2-4 weeks.'
      },
      {
        available: true,
        cellCapacity: 'medium' as const,
        message: 'Starlink is available! Due to high demand, expect 4-6 weeks for delivery.'
      },
      {
        available: false,
        cellCapacity: 'low' as const,
        estimatedWaitTime: '6-12 months',
        message: 'Starlink is at capacity in your area. You can join the waitlist for priority notification.'
      }
    ];

    const randomResult = scenarios[Math.floor(Math.random() * scenarios.length)];
    setResult(randomResult);
    setIsChecking(false);

    // Track availability check
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'availability_check',
        address_entered: address.trim(),
        result_available: randomResult.available,
        cell_capacity: randomResult.cellCapacity
      });
    }
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
    setError('');
  };

  const resetCheck = () => {
    setResult(null);
    setAddress('');
    setError('');
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Check Starlink Availability</h3>
        <p className="text-gray-600">Enter your address to see if Starlink is available</p>
      </div>

      {!result && (
        <div className="space-y-4">
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Your Address
            </label>
            <input
              type="text"
              id="address"
              value={address}
              onChange={handleAddressChange}
              placeholder="123 Main St, City, State"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              disabled={isChecking}
            />
            {error && (
              <p className="text-red-600 text-sm mt-1">{error}</p>
            )}
          </div>

          <Button 
            onClick={checkAvailability} 
            disabled={isChecking}
            className="w-full"
          >
            {isChecking ? (
              <span className="flex items-center justify-center">
                <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                Checking Availability...
              </span>
            ) : (
              'Check Availability'
            )}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            We'll check Starlink's coverage map and cell capacity in your area
          </p>
        </div>
      )}

      {result && (
        <div className="space-y-4">
          <div className="text-center">
            <div className={`text-6xl mb-4 ${result.available ? 'text-green-500' : 'text-yellow-500'}`}>
              {result.available ? '✅' : '⏳'}
            </div>
            
            <h4 className={`text-xl font-bold mb-2 ${result.available ? 'text-green-800' : 'text-yellow-800'}`}>
              {result.available ? 'Great News!' : 'Almost There!'}
            </h4>
            
            <p className="text-gray-700 mb-4">{result.message}</p>
            
            {result.estimatedWaitTime && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                <p className="text-yellow-800 font-semibold">Estimated Wait Time</p>
                <p className="text-yellow-700">{result.estimatedWaitTime}</p>
              </div>
            )}
            
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-gray-600">Cell Capacity:</span>
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-2 ${
                    result.cellCapacity === 'high' ? 'bg-green-500' : 
                    result.cellCapacity === 'medium' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></div>
                  <span className={`font-semibold capitalize ${
                    result.cellCapacity === 'high' ? 'text-green-700' : 
                    result.cellCapacity === 'medium' ? 'text-yellow-700' : 'text-red-700'
                  }`}>
                    {result.cellCapacity}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            {result.available ? (
              <>
                <Button className="w-full" onClick={() => window.location.href = '/quote'}>
                  Get Installation Quote
                </Button>
                <Button variant="secondary" className="w-full" onClick={() => window.location.href = '/starlink-order'}>
                  Order Starlink Kit
                </Button>
              </>
            ) : (
              <>
                <Button className="w-full" onClick={() => window.location.href = '/waitlist'}>
                  Join Priority Waitlist
                </Button>
                <Button variant="secondary" className="w-full" onClick={() => window.location.href = '/alternatives'}>
                  View Alternatives
                </Button>
              </>
            )}
            
            <Button variant="secondary" className="w-full" onClick={resetCheck}>
              Check Another Address
            </Button>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
            <p className="text-blue-800 text-sm text-center">
              <strong>Need help?</strong> Our team can assist with availability questions and pre-installation planning.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AvailabilityChecker;
