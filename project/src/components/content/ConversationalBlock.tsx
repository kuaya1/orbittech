import { FC } from 'react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ConversationalBlockProps {
  question: string;
  answer: string;
  metadata?: {
    readTime?: string;
    lastUpdated?: string;
    authorName?: string;
    authorTitle?: string;
  };
  statistics?: {
    label: string;
    value: string;
  }[];
  localInsights?: string[];
}

interface StepProps {
  title: string;
  duration: string;
  description: string;
  localContext?: string;
}

export const InstallationStep: FC<StepProps> = ({
  title,
  duration,
  description,
  localContext
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-6 last:mb-0"
  >
    <h3 className="text-lg font-semibold mb-2">{title} <span className="text-gray-500 text-sm">({duration})</span></h3>
    <p className="text-gray-700 mb-2">{description}</p>
    {localContext && (
      <div className="bg-blue-50 p-3 rounded-lg">
        <p className="text-sm text-blue-800">{localContext}</p>
      </div>
    )}
  </motion.div>
);

export const InstallationProcess: FC = () => (
  <div className="space-y-8">
    <InstallationStep
      title="Site Survey"
      duration="15 min"
      description="Using the Starlink app and professional equipment, we identify the ideal mounting location for optimal satellite coverage."
      localContext="We account for Northern Virginia's dense tree canopy, which affects 65% of installations."
    />
    <InstallationStep
      title="Professional Mounting"
      duration="45 min"
      description="We install using appropriate hardware selected specifically for your property type and location."
      localContext="Custom solutions for colonial homes, townhouses, and properties with extensive tree coverage."
    />
    <InstallationStep
      title="Cable Routing"
      duration="30 min"
      description="Professional-grade weatherproof cable installation that ensures reliability and aesthetics."
      localContext="All installations meet Virginia and Maryland building codes and HOA requirements."
    />
    <InstallationStep
      title="Network Optimization"
      duration="30 min"
      description="Configure your Starlink for maximum performance and integrate with existing networks."
      localContext="Optimized for DMV weather patterns and typical usage patterns in your area."
    />
    <InstallationStep
      title="Speed Verification"
      duration="15 min"
      description="Comprehensive testing and documentation of performance metrics."
      localContext="We ensure speeds meet or exceed local averages (150+ Mbps in most DMV locations)."
    />
  </div>
);

export const ConversationalBlock: FC<ConversationalBlockProps> = ({
  question,
  answer,
  metadata,
  statistics,
  localInsights
}) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.article 
      className="max-w-3xl mx-auto py-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div variants={fadeInUp}>
        <h2 className="text-2xl font-bold mb-4">{question}</h2>
        
        {metadata && (
          <div className="flex items-center space-x-4 text-sm text-gray-500 mb-6">
            {metadata.readTime && (
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="10" strokeWidth="2"/>
                  <path d="M12 6v6l4 2" strokeWidth="2"/>
                </svg>
                {metadata.readTime} read
              </span>
            )}
            {metadata.lastUpdated && (
              <span>Updated: {metadata.lastUpdated}</span>
            )}
            {metadata.authorName && (
              <span>By {metadata.authorName}{metadata.authorTitle && `, ${metadata.authorTitle}`}</span>
            )}
          </div>
        )}
      </motion.div>

      <motion.div 
        variants={fadeInUp}
        className="prose prose-lg prose-blue max-w-none mb-8"
      >
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {answer}
        </ReactMarkdown>
      </motion.div>

      {statistics && statistics.length > 0 && (
        <motion.div 
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
        >
          {statistics.map((stat, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-4 rounded-lg text-center"
            >
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      )}

      {localInsights && localInsights.length > 0 && (
        <motion.div variants={fadeInUp} className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold mb-3">Local Insights</h3>
          <ul className="space-y-2">
            {localInsights.map((insight, index) => (
              <li key={index} className="flex items-start">
                <svg 
                  className="w-5 h-5 text-blue-500 mr-2 mt-1 flex-shrink-0" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
                  />
                </svg>
                <span className="text-gray-700">{insight}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.article>
  );
};

// Example usage
export const InstallationGuide: FC = () => (
  <ConversationalBlock
    question="How does professional Starlink installation work in the DMV?"
    answer={`
Our certified technicians follow a proven 5-step process that ensures optimal performance for DMV properties:

## Professional Installation Process

1. **Site Survey** (15 min): Using the Starlink app, we identify the ideal mounting location, checking for obstructions common in Northern Virginia's tree canopy (affects 65% of properties).

2. **Professional Mounting** (45 min): We install using appropriate hardware - ridge mounts for colonial homes, pole mounts for wooded lots, achieving 98% first-time success rate.

3. **Cable Routing** (30 min): Professional-grade weatherproof cable routing that meets Virginia building codes, protecting against DMV's varied weather conditions.

4. **Network Optimization** (30 min): Configure for maximum speeds (average 165 Mbps in Fairfax County based on our testing), integrate with existing networks.

5. **Speed Verification** (15 min): Conduct speed tests, document results, ensure minimum 100 Mbps before completion.

**Local Insight:** DMV installations typically require 10-20 feet pole mounts due to mature tree coverage, unlike installations in Western states.
    `}
    metadata={{
      readTime: "4 min",
      lastUpdated: "August 2025",
      authorName: "Technical Team",
      authorTitle: "The Orbit Tech"
    }}
    statistics={[
      { label: "Average Installation Time", value: "2.5 hrs" },
      { label: "First-Time Success Rate", value: "98%" },
      { label: "Customer Satisfaction", value: "4.9/5" }
    ]}
    localInsights={[
      "DMV homes often require taller mounting solutions due to mature tree coverage",
      "We're familiar with local HOA requirements and historic district guidelines",
      "Our installations are optimized for Mid-Atlantic weather patterns",
      "We maintain relationships with local permitting offices for expedited approvals"
    ]}
  />
);

export default ConversationalBlock;
