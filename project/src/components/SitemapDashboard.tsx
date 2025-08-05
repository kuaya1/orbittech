import React, { useState, useEffect } from 'react';
import { generateAdvancedSitemap, validateSitemap, getSitemapAnalytics, generateSitemapXML } from '../utils/advancedSitemapGenerator';

/**
 * SITEMAP VALIDATION DASHBOARD 🔍
 * Real-time sitemap monitoring, duplicate detection, and SEO optimization
 */

interface SitemapDashboardProps {
  showXML?: boolean;
}

const SitemapDashboard: React.FC<SitemapDashboardProps> = ({ showXML = false }) => {
  const [analytics, setAnalytics] = useState<ReturnType<typeof getSitemapAnalytics> | null>(null);
  const [xmlContent, setXmlContent] = useState<string>('');
  const [showFullXML, setShowFullXML] = useState(false);

  useEffect(() => {
    // Generate analytics on component mount
    const data = getSitemapAnalytics();
    setAnalytics(data);
    
    if (showXML) {
      const xml = generateSitemapXML();
      setXmlContent(xml);
    }
  }, [showXML]);

  if (!analytics) {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="animate-pulse">Loading sitemap analysis...</div>
      </div>
    );
  }

  const { validation, priorityGroups, changefreqGroups, totalPages, submissionUrls } = analytics;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            🔍 Sitemap Validation Dashboard
          </h2>
          <p className="text-gray-600">Advanced sitemap analysis and optimization</p>
        </div>
        <div className={`px-4 py-2 rounded-full text-sm font-medium ${
          validation.isValid 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {validation.isValid ? '✅ VALID' : '❌ ISSUES FOUND'}
        </div>
      </div>

      {/* Critical Issues Alert */}
      {!validation.isValid && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-red-900 mb-2">🚨 Critical Issues Detected</h3>
          <ul className="text-red-800 space-y-1">
            {validation.issues.map((issue, index) => (
              <li key={index}>• {issue}</li>
            ))}
          </ul>
          {validation.duplicates.length > 0 && (
            <div className="mt-3">
              <strong>Duplicate URLs:</strong>
              <ul className="mt-1 text-sm">
                {validation.duplicates.map((url, index) => (
                  <li key={index} className="font-mono">• {url}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Success Status */}
      {validation.isValid && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-semibold text-green-900 mb-2">🎉 Sitemap Optimization Complete!</h3>
          <div className="text-green-800 space-y-1">
            <div>✅ Zero duplicate URLs detected</div>
            <div>✅ All {validation.stats.locationPages} DMV location pages included</div>
            <div>✅ Proper priority hierarchy implemented</div>
            <div>✅ Dynamic timestamps for all entries</div>
          </div>
        </div>
      )}

      {/* Statistics Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">{totalPages}</div>
          <div className="text-sm text-blue-800">Total URLs</div>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">{validation.stats.locationPages}</div>
          <div className="text-sm text-green-800">Location Pages</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">{validation.stats.uniqueUrls}</div>
          <div className="text-sm text-purple-800">Unique URLs</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">{validation.stats.averagePriority}</div>
          <div className="text-sm text-orange-800">Avg Priority</div>
        </div>
      </div>

      {/* Priority Distribution */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Priority Distribution</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-red-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-red-600">{priorityGroups.critical}</div>
            <div className="text-sm text-red-800">Critical (0.9+)</div>
            <div className="text-xs text-red-600">Homepage + Locations</div>
          </div>
          <div className="bg-orange-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-orange-600">{priorityGroups.high}</div>
            <div className="text-sm text-orange-800">High (0.7-0.9)</div>
            <div className="text-xs text-orange-600">Service Pages</div>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-yellow-600">{priorityGroups.medium}</div>
            <div className="text-sm text-yellow-800">Medium (0.5-0.7)</div>
            <div className="text-xs text-yellow-600">Content Pages</div>
          </div>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="text-lg font-bold text-gray-600">{priorityGroups.low}</div>
            <div className="text-sm text-gray-800">Low (0.5-)</div>
            <div className="text-xs text-gray-600">Legal Pages</div>
          </div>
        </div>
      </div>

      {/* Change Frequency Analysis */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Update Frequency</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {Object.entries(changefreqGroups).map(([freq, count]) => (
            <div key={freq} className="bg-gray-50 p-3 rounded-lg text-center">
              <div className="text-lg font-bold text-gray-900">{count}</div>
              <div className="text-xs text-gray-600 capitalize">{freq}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Submission URLs */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">🚀 Search Engine Submission</h3>
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-blue-800 mb-3">Submit your sitemap to search engines:</p>
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium">Google Search Console:</span>
              <a 
                href={submissionUrls.searchConsole}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Submit Here
              </a>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Bing Webmaster Tools:</span>
              <a 
                href={submissionUrls.bingWebmaster}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                Submit Here
              </a>
            </div>
            <div className="mt-3 p-2 bg-blue-100 rounded text-xs">
              <strong>Sitemap URL:</strong> https://theorbittech.com/sitemap.xml
            </div>
          </div>
        </div>
      </div>

      {/* XML Preview */}
      {showXML && xmlContent && (
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold text-gray-900">XML Sitemap Preview</h3>
            <button
              onClick={() => setShowFullXML(!showFullXML)}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded text-sm hover:bg-gray-200"
            >
              {showFullXML ? 'Hide' : 'Show'} Full XML
            </button>
          </div>
          {showFullXML && (
            <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
              <pre className="text-xs font-mono whitespace-pre-wrap">
                {xmlContent}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Action Items */}
      <div className="bg-yellow-50 p-4 rounded-lg">
        <h4 className="font-semibold text-yellow-900 mb-2">📋 Next Steps</h4>
        <div className="text-yellow-800 space-y-1 text-sm">
          <div>1. Build and deploy your site to generate the sitemap.xml file</div>
          <div>2. Submit sitemap to Google Search Console and Bing Webmaster Tools</div>
          <div>3. Monitor crawl stats and indexing status</div>
          <div>4. Update sitemap when adding new location pages</div>
          <div>5. Verify all 14 location pages are being crawled successfully</div>
        </div>
      </div>
    </div>
  );
};

export default SitemapDashboard;
