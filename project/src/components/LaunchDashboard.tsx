import React, { useState } from 'react';
import { LocationConfig, PHASE_1_LOCATIONS, getLocationsByPhase, getLocationPricing, getReviewVelocityData, generateLocationMeta } from '../utils/locationPageGenerator';

/**
 * DMV Market Launch Dashboard
 * Strategic implementation and monitoring system for Phase 1 rollout
 */

interface LaunchTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'High' | 'Medium' | 'Low';
  phase: number;
  category: 'SEO' | 'Content' | 'Technical' | 'Marketing' | 'Analytics';
}

interface LaunchDashboardProps {
  currentPhase?: number;
  showAllPhases?: boolean;
}

/**
 * Pre-Launch Checklist for each location
 */
const LAUNCH_CHECKLIST: LaunchTask[] = [
  // Phase 1 - Critical Foundation
  { id: 'meta-1', title: 'Generate Dynamic Meta Tags', description: 'Create unique metadata for each location page', completed: false, priority: 'High', phase: 1, category: 'SEO' },
  { id: 'images-1', title: 'Create Location-Specific Images', description: 'Generate unique hero images for each location', completed: false, priority: 'High', phase: 1, category: 'Content' },
  { id: 'gmb-1', title: 'Set up Google My Business Posts', description: 'Create GMB posts linking to location pages', completed: false, priority: 'High', phase: 1, category: 'Marketing' },
  { id: 'sitemap-1', title: 'Submit Location Sitemap', description: 'Submit sitemap to Google Search Console', completed: false, priority: 'High', phase: 1, category: 'SEO' },
  { id: 'breadcrumbs-1', title: 'Implement Breadcrumbs', description: 'Add structured breadcrumb navigation', completed: false, priority: 'High', phase: 1, category: 'Technical' },
  { id: 'internal-1', title: 'Add Internal Linking', description: 'Link nearby locations for SEO power', completed: false, priority: 'Medium', phase: 1, category: 'SEO' },

  // Phase 2 - Performance Optimization
  { id: 'vitals-2', title: 'Monitor Core Web Vitals', description: 'Track performance metrics per location', completed: false, priority: 'High', phase: 2, category: 'Technical' },
  { id: 'rankings-2', title: 'Track Keyword Rankings', description: 'Monitor "[city] starlink installation" rankings', completed: false, priority: 'High', phase: 2, category: 'Analytics' },
  { id: 'cta-2', title: 'A/B Test CTA Placement', description: 'Optimize call-to-action positioning', completed: false, priority: 'Medium', phase: 2, category: 'Marketing' },
  { id: 'reviews-2', title: 'Gather Location Reviews', description: 'Collect location-specific customer reviews', completed: false, priority: 'High', phase: 2, category: 'Marketing' },
  { id: 'blog-2', title: 'Create Location Blog Content', description: 'Write location-specific blog posts', completed: false, priority: 'Medium', phase: 2, category: 'Content' },

  // Phase 3 - Advanced Optimization
  { id: 'schema-3', title: 'Enhanced Schema Markup', description: 'Implement advanced structured data', completed: false, priority: 'Medium', phase: 3, category: 'SEO' },
  { id: 'local-3', title: 'Local Citation Building', description: 'Build local business citations', completed: false, priority: 'Medium', phase: 3, category: 'SEO' },
  { id: 'social-3', title: 'Social Media Integration', description: 'Link social profiles to location pages', completed: false, priority: 'Low', phase: 3, category: 'Marketing' }
];

/**
 * Launch Dashboard Component
 */
const LaunchDashboard: React.FC<LaunchDashboardProps> = ({ 
  currentPhase = 1, 
  showAllPhases = false 
}) => {
  const [completedTasks, setCompletedTasks] = useState<Set<string>>(new Set());
  const [selectedLocation, setSelectedLocation] = useState<string>('McLean');

  // Toggle task completion
  const toggleTask = (taskId: string) => {
    const newCompleted = new Set(completedTasks);
    if (newCompleted.has(taskId)) {
      newCompleted.delete(taskId);
    } else {
      newCompleted.add(taskId);
    }
    setCompletedTasks(newCompleted);
  };

  // Get tasks for current phase
  const getCurrentPhaseTasks = () => {
    if (showAllPhases) {
      return LAUNCH_CHECKLIST;
    }
    return LAUNCH_CHECKLIST.filter(task => task.phase <= currentPhase);
  };

  // Calculate completion percentage
  const currentTasks = getCurrentPhaseTasks();
  const completionRate = Math.round((completedTasks.size / currentTasks.length) * 100);

  // Get phase 1 locations for demo
  const phase1Locations = getLocationsByPhase(1);

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            🚀 DMV Market Launch Dashboard
          </h2>
          <p className="text-gray-600">Strategic Phase {currentPhase} Implementation</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-blue-600">{completionRate}%</div>
          <div className="text-sm text-gray-500">Complete</div>
        </div>
      </div>

      {/* Phase Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {[1, 2, 3].map(phase => {
          const phaseLocations = getLocationsByPhase(phase);
          const phaseTasks = LAUNCH_CHECKLIST.filter(t => t.phase === phase);
          const phaseCompleted = phaseTasks.filter(t => completedTasks.has(t.id)).length;
          
          return (
            <div 
              key={phase}
              className={`p-4 rounded-lg border-2 ${
                phase === currentPhase 
                  ? 'border-blue-500 bg-blue-50' 
                  : phase < currentPhase
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-300 bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Phase {phase}</h3>
                <span className="text-sm font-medium">
                  {phaseCompleted}/{phaseTasks.length} tasks
                </span>
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {phaseLocations.length} locations
              </div>
              <div className="text-xs space-y-1">
                {phaseLocations.slice(0, 3).map(loc => (
                  <div key={loc.city}>{loc.city}, {loc.state}</div>
                ))}
                {phaseLocations.length > 3 && (
                  <div className="text-gray-500">+{phaseLocations.length - 3} more</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Location Selector */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Preview Location Data:
        </label>
        <select 
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-2 bg-white"
        >
          {PHASE_1_LOCATIONS.map(loc => (
            <option key={`${loc.city}-${loc.state}`} value={loc.city}>
              {loc.city}, {loc.state} (Priority {loc.priority})
            </option>
          ))}
        </select>
      </div>

      {/* Location Preview */}
      {selectedLocation && (
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h4 className="font-semibold mb-3">Location Preview: {selectedLocation}</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <strong>Pricing Strategy:</strong>
              <div className="mt-1">
                {Object.entries(getLocationPricing(selectedLocation)).map(([type, price]) => (
                  <div key={type} className="flex justify-between">
                    <span className="capitalize">{type}:</span>
                    <span>${price}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <strong>Review Velocity:</strong>
              <div className="mt-1">
                {(() => {
                  const velocity = getReviewVelocityData(selectedLocation);
                  return (
                    <div>
                      <div>Monthly: {velocity.monthlyAverage} reviews</div>
                      <div>Recent: {velocity.recentCount} reviews</div>
                      <div className="text-green-600 font-medium">{velocity.message}</div>
                    </div>
                  );
                })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Task Checklist */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Implementation Checklist
        </h3>
        <div className="space-y-3">
          {getCurrentPhaseTasks().map(task => (
            <div 
              key={task.id}
              className={`flex items-center space-x-3 p-3 rounded-lg border ${
                completedTasks.has(task.id) 
                  ? 'border-green-200 bg-green-50' 
                  : 'border-gray-200 bg-white'
              }`}
            >
              <input
                type="checkbox"
                checked={completedTasks.has(task.id)}
                onChange={() => toggleTask(task.id)}
                className="h-4 w-4 text-blue-600 rounded"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <span className={`font-medium ${
                    completedTasks.has(task.id) 
                      ? 'line-through text-gray-500' 
                      : 'text-gray-900'
                  }`}>
                    {task.title}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    task.priority === 'High' ? 'bg-red-100 text-red-800' :
                    task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {task.priority}
                  </span>
                  <span className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                    {task.category}
                  </span>
                </div>
                <p className={`text-sm mt-1 ${
                  completedTasks.has(task.id) ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {task.description}
                </p>
              </div>
              <div className="text-xs text-gray-500">
                Phase {task.phase}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-blue-900 mb-2">🎯 Success Metrics to Track</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-blue-800">
          <div>
            <div className="font-medium">Rankings</div>
            <div>Top 3 for "[city] starlink"</div>
          </div>
          <div>
            <div className="font-medium">Traffic</div>
            <div>1000+ monthly visitors</div>
          </div>
          <div>
            <div className="font-medium">Conversions</div>
            <div>5%+ conversion rate</div>
          </div>
          <div>
            <div className="font-medium">Reviews</div>
            <div>4.8+ star average</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchDashboard;
