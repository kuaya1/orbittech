// Performance Monitoring Script for The Orbit Tech
// Real-time performance tracking and Core Web Vitals monitoring

interface PerformanceMetrics {
  fcp: number;
  lcp: number;
  fid: number;
  cls: number;
  ttfb: number;
  loadTime: number;
  timestamp: string;
}

interface PerformanceThresholds {
  fcp: { good: 1800, poor: 3000 };
  lcp: { good: 2500, poor: 4000 };
  fid: { good: 100, poor: 300 };
  cls: { good: 0.1, poor: 0.25 };
  ttfb: { good: 800, poor: 1800 };
  loadTime: { good: 3000, poor: 5000 };
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics[] = [];
  private thresholds: PerformanceThresholds = {
    fcp: { good: 1800, poor: 3000 },
    lcp: { good: 2500, poor: 4000 },
    fid: { good: 100, poor: 300 },
    cls: { good: 0.1, poor: 0.25 },
    ttfb: { good: 800, poor: 1800 },
    loadTime: { good: 3000, poor: 5000 }
  };

  constructor() {
    this.init();
  }

  private init() {
    if (typeof window === 'undefined') return;

    // Wait for page load
    if (document.readyState === 'loading') {
      window.addEventListener('load', () => this.measurePerformance());
    } else {
      this.measurePerformance();
    }

    // Set up continuous monitoring
    this.setupContinuousMonitoring();
  }

  private async measurePerformance() {
    try {
      const metrics = await this.collectMetrics();
      this.metrics.push(metrics);
      this.analyzeMetrics(metrics);
      this.reportToAnalytics(metrics);
    } catch (error) {
      console.error('Performance measurement failed:', error);
    }
  }

  private async collectMetrics(): Promise<PerformanceMetrics> {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    
    // Basic timing metrics
    const ttfb = navigation.responseStart - navigation.requestStart;
    const loadTime = navigation.loadEventEnd - navigation.fetchStart;
    
    // Web Vitals (using Performance Observer when available)
    const fcp = await this.getFCP();
    const lcp = await this.getLCP();
    const fid = await this.getFID();
    const cls = await this.getCLS();

    return {
      fcp,
      lcp,
      fid,
      cls,
      ttfb,
      loadTime,
      timestamp: new Date().toISOString()
    };
  }

  private async getFCP(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntriesByName('first-contentful-paint');
          if (entries.length > 0) {
            resolve(entries[0].startTime);
            observer.disconnect();
          }
        });
        observer.observe({ entryTypes: ['paint'] });
        
        // Fallback timeout
        setTimeout(() => {
          observer.disconnect();
          resolve(this.getFallbackFCP());
        }, 5000);
      } else {
        resolve(this.getFallbackFCP());
      }
    });
  }

  private getFallbackFCP(): number {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation.responseEnd - navigation.fetchStart;
  }

  private async getLCP(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        let lcp = 0;
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry) => {
            lcp = entry.startTime;
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
        
        // Finalize LCP after page interaction or timeout
        setTimeout(() => {
          observer.disconnect();
          resolve(lcp || this.getFallbackLCP());
        }, 5000);
      } else {
        resolve(this.getFallbackLCP());
      }
    });
  }

  private getFallbackLCP(): number {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return navigation.loadEventEnd - navigation.fetchStart;
  }

  private async getFID(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          if (entries.length > 0) {
            resolve(entries[0].processingStart - entries[0].startTime);
            observer.disconnect();
          }
        });
        observer.observe({ entryTypes: ['first-input'] });
        
        // Fallback timeout
        setTimeout(() => {
          observer.disconnect();
          resolve(50); // Estimated good FID
        }, 10000);
      } else {
        resolve(50); // Estimated good FID
      }
    });
  }

  private async getCLS(): Promise<number> {
    return new Promise((resolve) => {
      if ('PerformanceObserver' in window) {
        let cls = 0;
        const observer = new PerformanceObserver((entryList) => {
          const entries = entryList.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              cls += entry.value;
            }
          });
        });
        observer.observe({ entryTypes: ['layout-shift'] });
        
        // Finalize CLS after timeout
        setTimeout(() => {
          observer.disconnect();
          resolve(cls);
        }, 5000);
      } else {
        resolve(0.05); // Estimated good CLS
      }
    });
  }

  private analyzeMetrics(metrics: PerformanceMetrics) {
    console.log('📊 Performance Analysis Results:');
    console.log('================================');

    Object.entries(metrics).forEach(([key, value]) => {
      if (key === 'timestamp') return;
      
      const threshold = this.thresholds[key as keyof PerformanceThresholds];
      if (!threshold) return;

      const score = this.getScore(value, threshold);
      const emoji = score === 'good' ? '🟢' : score === 'needs-improvement' ? '🟡' : '🔴';
      
      console.log(`${emoji} ${key.toUpperCase()}: ${Math.round(value)}${key === 'cls' ? '' : 'ms'} (${score})`);
    });

    // Overall performance score
    const overallScore = this.calculateOverallScore(metrics);
    console.log(`\n🎯 Overall Performance: ${overallScore.score}% (${overallScore.grade})`);

    // Performance recommendations
    this.generateRecommendations(metrics);
  }

  private getScore(value: number, threshold: { good: number; poor: number }): 'good' | 'needs-improvement' | 'poor' {
    if (value <= threshold.good) return 'good';
    if (value <= threshold.poor) return 'needs-improvement';
    return 'poor';
  }

  private calculateOverallScore(metrics: PerformanceMetrics): { score: number; grade: string } {
    const scores = [
      this.getScore(metrics.fcp, this.thresholds.fcp),
      this.getScore(metrics.lcp, this.thresholds.lcp),
      this.getScore(metrics.fid, this.thresholds.fid),
      this.getScore(metrics.cls, this.thresholds.cls),
      this.getScore(metrics.ttfb, this.thresholds.ttfb),
      this.getScore(metrics.loadTime, this.thresholds.loadTime)
    ];

    const goodCount = scores.filter(s => s === 'good').length;
    const needsImprovementCount = scores.filter(s => s === 'needs-improvement').length;
    
    const score = Math.round(((goodCount * 100) + (needsImprovementCount * 50)) / scores.length);
    
    let grade = 'Poor';
    if (score >= 90) grade = 'Excellent';
    else if (score >= 75) grade = 'Good';
    else if (score >= 50) grade = 'Fair';

    return { score, grade };
  }

  private generateRecommendations(metrics: PerformanceMetrics) {
    console.log('\n💡 Performance Optimization Recommendations:');
    console.log('=============================================');

    const recommendations: string[] = [];

    if (metrics.fcp > this.thresholds.fcp.good) {
      recommendations.push('• Optimize critical CSS and reduce render-blocking resources');
      recommendations.push('• Implement resource preloading for above-the-fold content');
    }

    if (metrics.lcp > this.thresholds.lcp.good) {
      recommendations.push('• Optimize largest content element (images, videos, text blocks)');
      recommendations.push('• Use responsive images with proper sizing');
      recommendations.push('• Implement lazy loading for below-the-fold content');
    }

    if (metrics.fid > this.thresholds.fid.good) {
      recommendations.push('• Reduce JavaScript execution time');
      recommendations.push('• Use code splitting and defer non-critical JavaScript');
      recommendations.push('• Optimize event handlers and reduce main thread blocking');
    }

    if (metrics.cls > this.thresholds.cls.good) {
      recommendations.push('• Set explicit dimensions for images and videos');
      recommendations.push('• Reserve space for dynamic content and ads');
      recommendations.push('• Use CSS contain property for layout stability');
    }

    if (metrics.ttfb > this.thresholds.ttfb.good) {
      recommendations.push('• Optimize server response time');
      recommendations.push('• Implement CDN for static assets');
      recommendations.push('• Use server-side caching');
    }

    if (metrics.loadTime > this.thresholds.loadTime.good) {
      recommendations.push('• Minimize HTTP requests');
      recommendations.push('• Compress and optimize assets');
      recommendations.push('• Implement progressive loading strategies');
    }

    if (recommendations.length === 0) {
      console.log('🎉 Excellent! No major optimizations needed.');
    } else {
      recommendations.forEach(rec => console.log(rec));
    }
  }

  private reportToAnalytics(metrics: PerformanceMetrics) {
    // Report to Google Analytics/GTM
    if (typeof window !== 'undefined' && (window as any).dataLayer) {
      (window as any).dataLayer.push({
        event: 'performance_metrics',
        performance_fcp: Math.round(metrics.fcp),
        performance_lcp: Math.round(metrics.lcp),
        performance_fid: Math.round(metrics.fid),
        performance_cls: Math.round(metrics.cls * 1000) / 1000,
        performance_ttfb: Math.round(metrics.ttfb),
        performance_load_time: Math.round(metrics.loadTime),
        performance_timestamp: metrics.timestamp,
        page_url: window.location.href
      });
    }
  }

  private setupContinuousMonitoring() {
    if (typeof window === 'undefined') return;

    // Monitor performance every 30 seconds
    setInterval(() => {
      this.measurePerformance();
    }, 30000);

    // Monitor on visibility change
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        setTimeout(() => this.measurePerformance(), 1000);
      }
    });
  }

  // Public methods for manual testing
  public getCurrentMetrics(): PerformanceMetrics[] {
    return this.metrics;
  }

  public async runPerformanceTest(): Promise<PerformanceMetrics> {
    console.log('🚀 Running Manual Performance Test...');
    const metrics = await this.collectMetrics();
    this.analyzeMetrics(metrics);
    return metrics;
  }

  public generatePerformanceReport(): void {
    if (this.metrics.length === 0) {
      console.log('❌ No performance data available');
      return;
    }

    console.log('📈 Performance Report Summary:');
    console.log('==============================');

    const latest = this.metrics[this.metrics.length - 1];
    const average = this.calculateAverageMetrics();

    console.log('\nLatest Metrics:');
    this.analyzeMetrics(latest);

    if (this.metrics.length > 1) {
      console.log('\nAverage Metrics (Session):');
      this.analyzeMetrics(average);
    }

    console.log(`\nTotal Measurements: ${this.metrics.length}`);
    console.log(`Monitoring Since: ${this.metrics[0]?.timestamp}`);
  }

  private calculateAverageMetrics(): PerformanceMetrics {
    const sum = this.metrics.reduce((acc, curr) => ({
      fcp: acc.fcp + curr.fcp,
      lcp: acc.lcp + curr.lcp,
      fid: acc.fid + curr.fid,
      cls: acc.cls + curr.cls,
      ttfb: acc.ttfb + curr.ttfb,
      loadTime: acc.loadTime + curr.loadTime,
      timestamp: curr.timestamp
    }), {
      fcp: 0, lcp: 0, fid: 0, cls: 0, ttfb: 0, loadTime: 0, timestamp: ''
    });

    const count = this.metrics.length;
    return {
      fcp: sum.fcp / count,
      lcp: sum.lcp / count,
      fid: sum.fid / count,
      cls: sum.cls / count,
      ttfb: sum.ttfb / count,
      loadTime: sum.loadTime / count,
      timestamp: 'average'
    };
  }
}

// Auto-initialize performance monitoring
let performanceMonitor: PerformanceMonitor;

if (typeof window !== 'undefined') {
  performanceMonitor = new PerformanceMonitor();
  (window as any).PerformanceMonitor = performanceMonitor;
  
  console.log('⚡ Performance monitoring initialized');
  console.log('💡 Access via window.PerformanceMonitor');
  console.log('💡 Run performanceMonitor.runPerformanceTest() for manual test');
  console.log('💡 Run performanceMonitor.generatePerformanceReport() for full report');
}

export default PerformanceMonitor;
