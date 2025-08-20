import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react';

interface SEOAuditProps {
  url?: string;
  showDetailedReport?: boolean;
}

interface AuditResult {
  category: string;
  items: AuditItem[];
  score: number;
}

interface AuditItem {
  name: string;
  status: 'pass' | 'fail' | 'warning';
  message: string;
  impact: 'high' | 'medium' | 'low';
  recommendation?: string;
}

const SEOAudit: React.FC<SEOAuditProps> = ({ 
  url = window.location.href, 
  showDetailedReport = false 
}) => {
  const [auditResults, setAuditResults] = useState<AuditResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [overallScore, setOverallScore] = useState(0);

  const runSEOAudit = async () => {
    setIsLoading(true);
    
    try {
      // Simulate audit delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const results = performClientSideAudit();
      setAuditResults(results);
      
      // Calculate overall score
      const totalScore = results.reduce((sum, result) => sum + result.score, 0);
      setOverallScore(Math.round(totalScore / results.length));
      
    } catch (error) {
      console.error('SEO Audit failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const performClientSideAudit = (): AuditResult[] => {
    const results: AuditResult[] = [];

    // Technical SEO Audit
    const technicalItems: AuditItem[] = [];
    
    // Check title tag
    const titleElement = document.querySelector('title');
    if (titleElement) {
      const titleLength = titleElement.textContent?.length || 0;
      if (titleLength >= 30 && titleLength <= 60) {
        technicalItems.push({
          name: 'Title Tag Length',
          status: 'pass',
          message: `Title tag is ${titleLength} characters (optimal)`,
          impact: 'high'
        });
      } else {
        technicalItems.push({
          name: 'Title Tag Length',
          status: titleLength < 30 ? 'warning' : 'fail',
          message: `Title tag is ${titleLength} characters (${titleLength < 30 ? 'too short' : 'too long'})`,
          impact: 'high',
          recommendation: 'Keep title tags between 30-60 characters for optimal display in search results'
        });
      }
    } else {
      technicalItems.push({
        name: 'Title Tag',
        status: 'fail',
        message: 'Missing title tag',
        impact: 'high',
        recommendation: 'Add a descriptive title tag to every page'
      });
    }

    // Check meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      const descLength = metaDescription.getAttribute('content')?.length || 0;
      if (descLength >= 120 && descLength <= 160) {
        technicalItems.push({
          name: 'Meta Description',
          status: 'pass',
          message: `Meta description is ${descLength} characters (optimal)`,
          impact: 'high'
        });
      } else {
        technicalItems.push({
          name: 'Meta Description',
          status: 'warning',
          message: `Meta description is ${descLength} characters`,
          impact: 'medium',
          recommendation: 'Keep meta descriptions between 120-160 characters'
        });
      }
    } else {
      technicalItems.push({
        name: 'Meta Description',
        status: 'fail',
        message: 'Missing meta description',
        impact: 'high',
        recommendation: 'Add unique meta descriptions to all pages'
      });
    }

    // Check canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    technicalItems.push({
      name: 'Canonical URL',
      status: canonicalLink ? 'pass' : 'warning',
      message: canonicalLink ? 'Canonical URL is present' : 'Missing canonical URL',
      impact: 'medium',
      recommendation: canonicalLink ? undefined : 'Add canonical URLs to prevent duplicate content issues'
    });

    // Check structured data
    const structuredData = document.querySelector('script[type="application/ld+json"]');
    technicalItems.push({
      name: 'Structured Data',
      status: structuredData ? 'pass' : 'fail',
      message: structuredData ? 'Structured data found' : 'No structured data detected',
      impact: 'high',
      recommendation: structuredData ? undefined : 'Implement JSON-LD structured data for better search visibility'
    });

    // Check Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogImage = document.querySelector('meta[property="og:image"]');
    
    const ogScore = [ogTitle, ogDescription, ogImage].filter(Boolean).length;
    technicalItems.push({
      name: 'Open Graph Tags',
      status: ogScore >= 3 ? 'pass' : ogScore >= 1 ? 'warning' : 'fail',
      message: `${ogScore}/3 essential OG tags present`,
      impact: 'medium',
      recommendation: ogScore < 3 ? 'Add missing Open Graph tags for better social media sharing' : undefined
    });

    // Check mobile-friendliness
    const viewport = document.querySelector('meta[name="viewport"]');
    technicalItems.push({
      name: 'Mobile Viewport',
      status: viewport ? 'pass' : 'fail',
      message: viewport ? 'Viewport meta tag present' : 'Missing viewport meta tag',
      impact: 'high',
      recommendation: viewport ? undefined : 'Add viewport meta tag for mobile responsiveness'
    });

    // Calculate technical score
    const technicalScore = Math.round(
      (technicalItems.filter(item => item.status === 'pass').length / technicalItems.length) * 100
    );

    results.push({
      category: 'Technical SEO',
      items: technicalItems,
      score: technicalScore
    });

    // Content SEO Audit
    const contentItems: AuditItem[] = [];

    // Check heading structure
    const h1Elements = document.querySelectorAll('h1');
    contentItems.push({
      name: 'H1 Tag',
      status: h1Elements.length === 1 ? 'pass' : h1Elements.length > 1 ? 'warning' : 'fail',
      message: `${h1Elements.length} H1 tag(s) found`,
      impact: 'high',
      recommendation: h1Elements.length !== 1 ? 'Use exactly one H1 tag per page' : undefined
    });

    // Check for heading hierarchy
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    contentItems.push({
      name: 'Heading Structure',
      status: headings.length >= 3 ? 'pass' : 'warning',
      message: `${headings.length} heading elements found`,
      impact: 'medium',
      recommendation: headings.length < 3 ? 'Use proper heading hierarchy (H1-H6) to structure content' : undefined
    });

    // Check image alt tags
    const images = document.querySelectorAll('img');
    const imagesWithAlt = document.querySelectorAll('img[alt]');
    const altScore = images.length > 0 ? (imagesWithAlt.length / images.length) * 100 : 100;
    
    contentItems.push({
      name: 'Image Alt Tags',
      status: altScore >= 90 ? 'pass' : altScore >= 70 ? 'warning' : 'fail',
      message: `${imagesWithAlt.length}/${images.length} images have alt text (${Math.round(altScore)}%)`,
      impact: 'medium',
      recommendation: altScore < 90 ? 'Add descriptive alt text to all images for accessibility and SEO' : undefined
    });

    // Check internal links
    const internalLinks = document.querySelectorAll('a[href^="/"], a[href*="theorbittech.com"]');
    contentItems.push({
      name: 'Internal Linking',
      status: internalLinks.length >= 5 ? 'pass' : internalLinks.length >= 2 ? 'warning' : 'fail',
      message: `${internalLinks.length} internal links found`,
      impact: 'medium',
      recommendation: internalLinks.length < 5 ? 'Add more internal links to improve site navigation and SEO' : undefined
    });

    const contentScore = Math.round(
      (contentItems.filter(item => item.status === 'pass').length / contentItems.length) * 100
    );

    results.push({
      category: 'Content SEO',
      items: contentItems,
      score: contentScore
    });

    // Performance SEO Audit
    const performanceItems: AuditItem[] = [];

    // Check for preconnect/dns-prefetch
    const preconnect = document.querySelectorAll('link[rel="preconnect"], link[rel="dns-prefetch"]');
    performanceItems.push({
      name: 'Resource Hints',
      status: preconnect.length >= 2 ? 'pass' : preconnect.length >= 1 ? 'warning' : 'fail',
      message: `${preconnect.length} resource hints found`,
      impact: 'medium',
      recommendation: preconnect.length < 2 ? 'Add preconnect/dns-prefetch for external resources' : undefined
    });

    // Check for inline CSS (performance impact)
    const styleTags = document.querySelectorAll('style');
    const inlineStyles = document.querySelectorAll('[style]');
    const totalInlineCSS = styleTags.length + inlineStyles.length;
    
    performanceItems.push({
      name: 'Inline CSS',
      status: totalInlineCSS <= 5 ? 'pass' : totalInlineCSS <= 10 ? 'warning' : 'fail',
      message: `${totalInlineCSS} inline CSS instances found`,
      impact: 'low',
      recommendation: totalInlineCSS > 5 ? 'Minimize inline CSS for better performance' : undefined
    });

    const performanceScore = Math.round(
      (performanceItems.filter(item => item.status === 'pass').length / performanceItems.length) * 100
    );

    results.push({
      category: 'Performance SEO',
      items: performanceItems,
      score: performanceScore
    });

    return results;
  };

  useEffect(() => {
    if (showDetailedReport) {
      runSEOAudit();
    }
  }, [showDetailedReport]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'fail':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Info className="h-4 w-4 text-gray-500" />;
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  if (!showDetailedReport) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold mb-4">SEO Health Check</h3>
        <button
          onClick={runSEOAudit}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          disabled={isLoading}
        >
          {isLoading ? 'Running Audit...' : 'Run SEO Audit'}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold">SEO Audit Report</h3>
        {!isLoading && (
          <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getScoreColor(overallScore)}`}>
            Overall Score: {overallScore}%
          </div>
        )}
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600">Analyzing SEO performance...</span>
        </div>
      ) : (
        <div className="space-y-6">
          {auditResults.map((result, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-lg font-medium">{result.category}</h4>
                <div className={`px-2 py-1 rounded text-sm font-semibold ${getScoreColor(result.score)}`}>
                  {result.score}%
                </div>
              </div>
              
              <div className="space-y-2">
                {result.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start space-x-3 p-2 rounded bg-gray-50">
                    {getStatusIcon(item.status)}
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.name}</span>
                        <span className={`text-xs px-2 py-1 rounded ${
                          item.impact === 'high' ? 'bg-red-100 text-red-700' :
                          item.impact === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-blue-100 text-blue-700'
                        }`}>
                          {item.impact} impact
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.message}</p>
                      {item.recommendation && (
                        <p className="text-xs text-blue-600 mt-1 font-medium">
                          💡 {item.recommendation}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h5 className="font-semibold text-blue-900 mb-2">SEO Recommendations Summary</h5>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Ensure all pages have unique, descriptive title tags (30-60 characters)</li>
              <li>• Implement comprehensive structured data (JSON-LD) for better search visibility</li>
              <li>• Optimize meta descriptions for all pages (120-160 characters)</li>
              <li>• Add descriptive alt text to all images for accessibility and SEO</li>
              <li>• Use proper heading hierarchy (H1-H6) to structure content</li>
              <li>• Implement internal linking strategy to improve site architecture</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default SEOAudit;
